import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, source, name } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    // Customer.io Track API
    const siteId = process.env.CUSTOMERIO_SITE_ID;
    const apiKey = process.env.CUSTOMERIO_API_KEY;

    if (siteId && apiKey) {
      const customerId = email.toLowerCase().trim();

      await fetch(
        `https://track.customer.io/api/v1/customers/${encodeURIComponent(customerId)}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Basic ${Buffer.from(`${siteId}:${apiKey}`).toString("base64")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: customerId,
            name: name || undefined,
            source: source || "waitlist",
            created_at: Math.floor(Date.now() / 1000),
            signed_up_at: new Date().toISOString(),
            _update: true,
          }),
        }
      );

      // Track the subscription event
      await fetch(
        `https://track.customer.io/api/v1/customers/${encodeURIComponent(customerId)}/events`,
        {
          method: "POST",
          headers: {
            Authorization: `Basic ${Buffer.from(`${siteId}:${apiKey}`).toString("base64")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: "waitlist_joined",
            data: { source, timestamp: new Date().toISOString() },
          }),
        }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
