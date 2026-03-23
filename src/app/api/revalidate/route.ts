import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// Sanity webhook handler for on-demand revalidation
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { _type } = body;

    // Revalidate based on content type
    if (_type) {
      revalidateTag(_type);
    }

    // Always revalidate the homepage
    revalidateTag("homepage");

    return NextResponse.json({ revalidated: true, type: _type });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { error: "Revalidation failed" },
      { status: 500 }
    );
  }
}
