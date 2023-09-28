import Blog from '@/models/blogModel';
import DBConnect from '@/utils/DBConnect';
import { headers } from 'next/headers'
import { NextResponse } from 'next/server';

export async function POST(request) {
    await DBConnect()
    const blog = await Blog.find({}).sort({createdAt: -1}).limit(6)
    if (blog) {
        return NextResponse.json({ data: blog })
    } else {
        return NextResponse.json({ error: 'Bloglar Getirilemedi.' })
    }
}