import Blog from '@/models/blogModel';
import Category from '@/models/categoryModel';
import DBConnect from '@/utils/DBConnect';
import { headers } from 'next/headers'
import { NextResponse } from 'next/server';

export async function POST(request) {
    const res = await request.json()

    await DBConnect()
    let blog;
    await Blog.findOne({ slug: res.slug })
        .then(async (result) => {
            result = await Category.populate(result, {
                path: 'categories',
                select: 'name slug'
            })
            blog = result
        })
    if (blog) {
        return NextResponse.json({ data: blog })
    } else {
        return NextResponse.json({ error: 'Blog Getirilemedi.' })
    }
}