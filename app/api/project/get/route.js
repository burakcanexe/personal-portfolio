import Blog from "@/models/blogModel";
import Project from "@/models/projectModel";
import DBConnect from "@/utils/DBConnect";
import { NextResponse } from "next/server";

export async function POST() {
    await DBConnect()
    const projects = await Project.find({}).sort({ createdAt: -1 })
    if (projects) {
        return NextResponse.json({ data: projects })
    } else {
        return NextResponse.json({ error: 'Proje getirilemediF.' })
    }
}
