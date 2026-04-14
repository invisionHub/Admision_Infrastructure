import { NextRequest, NextResponse } from "next/server"

export async function GET (request: NextRequest, { params }: { params: Promise<{ id: string }> }) {

    const { id } = await params
    const response = NextResponse.json({ message: `GET ${ id }  exam route working properly` })
    return response
}


export async function PATCH (request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const response = NextResponse.json({ message: `Patch ${ id } exam route working properly` })
    return response
}