const MIDTRANS_BASE_URL = "https://app.sandbox.midtrans.com/api/v1";
const MERCHANT_ID = process.env.MIDTRANS_MERCHANT_ID;
const SERVER_KEY = process.env.MIDTRANS_SERVER_KEY;

export async function POST(request) {
  try {
    const body = await request.json();
    const { orderId } = body;

    if (!orderId) {
      return new Response(
        JSON.stringify({ error: "Order ID tidak ditemukan" }),
        { status: 400 }
      );
    }

    const basicAuth = Buffer.from(SERVER_KEY + ":" + "").toString("base64");

    const response = await fetch(
      `${MIDTRANS_BASE_URL}/${orderId}/status`,
      {
        method: "GET",
        headers: {
          Authorization: `Basic ${basicAuth}`,
          Accept: "application/json",
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("[v0] Midtrans status check error:", data);
      return new Response(
        JSON.stringify({ error: "Gagal mengecek status transaksi", details: data }),
        { status: response.status }
      );
    }

    return new Response(
      JSON.stringify({
        status: data.transaction_status,
        fraud_status: data.fraud_status,
        orderId: orderId,
        payment_type: data.payment_type,
        gross_amount: data.gross_amount,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("[v0] API error:", error);
    return new Response(
      JSON.stringify({ error: "Terjadi kesalahan server", message: error.message }),
      { status: 500 }
    );
  }
}
