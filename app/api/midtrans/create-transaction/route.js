import { getSnapInstance, generateTransactionId, formatCartItemsForMidtrans } from '@/lib/midtrans';

export async function POST(request) {
  try {
    const body = await request.json();
    const { cartItems, customerData } = body;

    // Validate input
    if (!cartItems || cartItems.length === 0) {
      return Response.json(
        { error: 'Cart items are required' },
        { status: 400 }
      );
    }

    if (!customerData || !customerData.email || !customerData.phone || !customerData.name) {
      return Response.json(
        { error: 'Customer data (email, phone, name) is required' },
        { status: 400 }
      );
    }

    const snap = getSnapInstance();
    const transactionId = generateTransactionId();
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

    // Prepare Midtrans transaction parameters
    const parameter = {
      transaction_details: {
        order_id: transactionId,
        gross_amount: totalPrice,
      },
      credit_card: {
        secure: true,
      },
      customer_details: {
        first_name: customerData.name,
        email: customerData.email,
        phone: customerData.phone,
        billing_address: {
          address: customerData.address || '',
          city: customerData.city || '',
          postal_code: customerData.postalCode || '',
          country_code: 'ID',
        },
      },
      items: formatCartItemsForMidtrans(cartItems),
      callbacks: {
        finish: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/checkout/success`,
        error: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/checkout/error`,
        pending: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/checkout/pending`,
      },
    };

    // Create transaction and get payment token
    const transaction = await snap.createTransaction(parameter);

    return Response.json({
      success: true,
      token: transaction.token,
      redirect_url: transaction.redirect_url,
      order_id: transactionId,
    });
  } catch (error) {
    console.error('[v0] Midtrans Error:', error);
    return Response.json(
      { 
        error: error.message || 'Failed to create transaction',
        details: process.env.NODE_ENV === 'development' ? error.toString() : undefined
      },
      { status: 500 }
    );
  }
}
