import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import * as cheerio from "cheerio";
export async function GET( req: Request) {
   

    try {
        const searchParams = new URL(req.url).searchParams;
        const url = searchParams.get("url");
        

        if (!url) {
            return NextResponse.json({ error: "URL is required" },
                {
                  status: 400,
                })
        }
        // Fetch the webpage content
        const { data } = await axios.get(url, {
            headers: { "User-Agent": "Mozilla/5.0" }
        });

        const $ = cheerio.load(data);

        // Extract metadata
        const metadata = {
            title: $("title").text() || null,
            description: $('meta[name="description"]').attr("content") || null,
            ogTitle: $('meta[property="og:title"]').attr("content") || null,
            ogDescription: $('meta[property="og:description"]').attr("content") || null,
            ogImage: $('meta[property="og:image"]').attr("content") || null,
            ogUrl: $('meta[property="og:url"]').attr("content") || url,
            ogType: $('meta[property="og:type"]').attr("content") || null,

            twitterTitle: $('meta[name="twitter:title"]').attr("content") || null,
            twitterDescription: $('meta[name="twitter:description"]').attr("content") || null,
            twitterImage: $('meta[name="twitter:image"]').attr("content") || null,
            twitterUrl: $('meta[property="twitter:url"]').attr("content") || url,
            twitterDomain: $('meta[name="twitter:domain"]').attr("content") || new URL(url)?.hostname,
            twitterCard: $('meta[name="twitter:card"]').attr("content") || null,
        };

        return NextResponse.json({...metadata,description:metadata.description??metadata?.ogDescription,twitterImage:metadata?.twitterImage ?? metadata?.ogImage,ogImage:metadata?.ogImage ?? metadata?.twitterImage} ,
            {
              status: 200,
            })
    } catch (error: unknown) {
        let errorMessage = "Failed to fetch metadata";
    
        if (error instanceof Error) {
            errorMessage = error.message;
        } else if (typeof error === "string") {
            errorMessage = error;
        } else if (typeof error === "object" && error !== null && "message" in error) {
            errorMessage = String(error.message);
        }
    
    
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
    
}

