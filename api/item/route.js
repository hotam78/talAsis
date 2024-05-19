import { NextResponse } from "next/server";

export const GET = async() => {
    return NextResponse.json({seccses: true})
}

export const POST = async(req) => {
    const body = await req.json();
    return NextResponse.json({seccses: true, data: body})
}

export const PUT = async(req, { params }) => {
    const {itemId} = params;
    const body = await req.json();
    const searchParams = req.nextUrl.searchParams;
    const searchParamsObj = Object.fromEntries(searchParams);

    return NextResponse.json({seccses: true, ...body, ...searchParamsObj})
}