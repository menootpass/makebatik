export async function GET(request) {
  try {
    const MIDTRANS_BASE_URL = "https://app.sandbox.midtrans.com/api/v1";
    const MERCHANT_ID = process.env.MIDTRANS_MERCHANT_ID;
    const SERVER_KEY = process.env.MIDTRANS_SERVER_KEY;

    console.log("[v0] Testing Midtrans credentials...");
    console.log("[v0] Merchant ID:", MERCHANT_ID ? "✓ Set" : "✗ Missing");
    console.log("[v0] Server Key:", SERVER_KEY ? "✓ Set (length: " + SERVER_KEY.length + ")" : "✗ Missing");

    if (!MERCHANT_ID || !SERVER_KEY) {
      return new Response(
        JSON.stringify({
          error: "Missing Midtrans credentials",
          merchant_id: !!MERCHANT_ID,
          server_key: !!SERVER_KEY,
        }),
        { status: 400 }
      );
    }

    const basicAuth = Buffer.from(SERVER_KEY + ":" + "").toString("base64");

    // Try to get merchant info
    const response = await fetch(`${MIDTRANS_BASE_URL}/merchants/sandbox`, {
      method: "GET",
      headers: {
        Authorization: `Basic ${basicAuth}`,
        Accept: "application/json",
      },
    });

    const data = await response.json();

    return new Response(
      JSON.stringify({
        status: "ok",
        credentials: {
          merchant_id: MERCHANT_ID,
          server_key_length: SERVER_KEY.length,
        },
        midtrans_response: data,
        http_status: response.status,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("[v0] Test endpoint error:", error);
    return new Response(
      JSON.stringify({
        error: error.message,
        stack: error.stack,
      }),
      { status: 500 }
    );
  }
}
