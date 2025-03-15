import { NextResponse } from "next/server";

const rateLimitMap = new Map<string, { count: number; lastRequest: number }>();
const RATE_LIMIT = 15; 
const TIME_WINDOW = 60 * 1000; 

export function middleware(req: Request) {
    const ip = req.headers.get("x-forwarded-for") || "127.0.0.1"; 

    const now = Date.now();
    const userData = rateLimitMap.get(ip) || { count: 0, lastRequest: now };

    if (now - userData.lastRequest > TIME_WINDOW) {
        rateLimitMap.set(ip, { count: 1, lastRequest: now });
    } else {
        if (userData.count >= RATE_LIMIT) {
            return NextResponse.json({ error: "Too many requests" }, { status: 429 });
        }

        rateLimitMap.set(ip, { count: userData.count + 1, lastRequest: now });
    }

    return NextResponse.next();
}

export const config = {
    matcher: "/api/:path*",
};
