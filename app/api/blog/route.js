import Blog from "@/models/blogModel";
import Category from "@/models/categoryModel";
import DBConnect from "@/utils/DBConnect";
import { NextResponse } from "next/server";

export async function POST(request) {
    const res = await request.json()

    await DBConnect()
    const blog = await Blog.create(res)

    if (blog) {
        res.categories.map(async (category) => {
            const newCategory = await Category.findByIdAndUpdate(category, { $push: { blogs: blog._id } })
        })
        return NextResponse.json({ data: 'Blog başarıyla oluşturuldu' })
    } else {
        return NextResponse.json({ error: 'Blog oluşturulamadı.' })
    }
}

export async function GET() {
    const headerList = headers()
    const auth = headerList.get('authorization')
    const slug = headerList.get('slug')

    await DBConnect()
    const blog = await Blog.findOne({ slug })
    if (blog) {
        return NextResponse.json({ data: blog })
    } else {
        return NextResponse.json({ error: 'Blog Getirilemedi.' })
    }
}