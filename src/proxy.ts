import { NextRequest, NextResponse } from "next/server";

export const proxy = (request: NextRequest) => {

    const accessPermited = request.cookies.get('accessPermited');


    if(!accessPermited) {
        return NextResponse.redirect(new URL('/authentication', request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/authenticated/:path*', '/']
}