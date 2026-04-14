import { NextRequest, NextResponse } from "next/server";

export async function POST (request: NextRequest) {
    const response = NextResponse.json({ message: "post exam route working properly" })
    return response
}


export async function GET (request: NextRequest) {
    const response = NextResponse.json({ message: "GET exam route working properly" })
    return response
}
