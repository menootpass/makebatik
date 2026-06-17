import crypto from "crypto";

const MIDTRANS_BASE_URL = "https://app.sandbox.midtrans.com/api/v1";
const MERCHANT_ID = process.env.MIDTRANS_MERCHANT_ID;
const SERVER_KEY = process.env.MIDTRANS_SERVER_KEY;

export async function POST(request) {
  try {
    const body = await request.json();
    const { orderId, amount, name, email, phone, address, items } = body;

    if (!orderId || !amount || !name || !email || !phone || !address || !items) {
      return new Response(
        JSON.stringify({ error: "Data tidak lengkap" }),
        { status: 400 }
      );
    }

    // Prepare Midtrans transaction data
    const transactionData = {
      transaction_details: {
        order_id: orderId,
        gross_amount: amount,
      },
      customer_details: {
        first_name: name,
        email: email,
        phone: phone,
        billing_address: {
          address: address,
        },
      },
      item_details: items.map((item) => ({
        id: item.id,
        price: item.price,
        quantity: item.quantity,
        name: item.name,
      })),
      callbacks: {
        finish: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/checkout/success`,
        unfinish: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/checkout/unfinish`,
        error: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/checkout/error`,
      },
    };

    // Create Basic Auth header
    const basicAuth = Buffer.from(SERVER_KEY + ":" + "").toString("base64");

    // Call Midtrans API
    const response = await fetch(`${MIDTRANS_BASE_URL}/transactions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${basicAuth}`,
        Accept: "application/json",
      },
      body: JSON.stringify(transactionData),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("[v0] Midtrans error:", data);
      return new Response(
        JSON.stringify({ error: "Gagal membuat transaksi Midtrans", details: data }),
        { status: response.status }
      );
    }

    // Return token untuk payment snap
    return new Response(
      JSON.stringify({
        token: data.token,
        redirect_url: data.redirect_url,
        orderId: orderId,
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
