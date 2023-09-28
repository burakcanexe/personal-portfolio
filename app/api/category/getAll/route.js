import Blog from '@/models/blogModel';
import Category from '@/models/categoryModel';
import DBConnect from '@/utils/DBConnect';
import { headers } from 'next/headers'
import { NextResponse } from 'next/server';

export async function POST() {
    await DBConnect()
    let categories;
    await Category.find({}).sort({ blogs: 1 })
        .then(async (result) => {
            result = await Blog.populate(result, {
                path: 'blogs'
            })
            result = await Category.populate(result, {
                path: 'blogs.categories',
                select: 'name slug'
            })
            categories = result
        })
    if (categories) {
        return NextResponse.json({ data: categories })
    } else {
        return NextResponse.json({ error: 'categories Getirilemedi.' })
    }
}