import { NextRequest, NextResponse } from "next/server"

export async function POST (request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const response = NextResponse.json({ message: `publish exam where exam id = ${ id }` })
    return response
}


