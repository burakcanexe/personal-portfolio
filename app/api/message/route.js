import Message from "@/models/messageModule";
import DBConnect from "@/utils/DBConnect";
import { NextResponse } from "next/server";

export async function POST(request) {
    const res = await request.json()

    res.description = res.description.replace(/\n/g, '<br>')
    await DBConnect()
    const message = await Message.create(res)
    if (message) {
        return NextResponse.json({ data: 'Mesajınız başarıyla iletildi. Benimle iletişime geçtiğiniz için teşekkür ederim.' })
    } else {
        return NextResponse.json({ error: 'Mesajınız iletilemedi, lütfen benimle iletişime geçmek için başka bir yol deneyin.' })
    }
}