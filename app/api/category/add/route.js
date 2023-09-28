import Category from '@/models/categoryModel';
import DBConnect from '@/utils/DBConnect';
import { headers } from 'next/headers'
import { NextResponse } from 'next/server';

export async function POST(request) {
    const res = await request.json()

    await DBConnect()
    const category = await Category.create(res)
    if (category) {
        return NextResponse.json({ data: category })
    } else {
        return NextResponse.json({ error: 'category Getirilemedi.' })
    }
}