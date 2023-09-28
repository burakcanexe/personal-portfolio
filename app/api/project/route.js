import Blog from "@/models/blogModel";
import Project from "@/models/projectModel";
import DBConnect from "@/utils/DBConnect";
import { NextResponse } from "next/server";

export async function POST(request) {
    const res = await request.json()
    await DBConnect()
    const project = await Project.create(res)
    if (project) {
        return NextResponse.json({ data: 'Proje başarıyla oluşturuldu' })
    } else {
        return NextResponse.json({ error: 'Proje oluşturulamadı.' })
    }
}
