import { getCoreApiInstance } from '@/lib/midtrans';

export async function POST(request) {
  try {
    const body = await request.json();
    const { order_id } = body;

    if (!order_id) {
      return Response.json(
        { error: 'Order ID is required' },
        { status: 400 }
      );
    }

    const coreApi = getCoreApiInstance();
    const transactionStatus = await coreApi.transaction.status(order_id);

    return Response.json({
      success: true,
      transaction_status: transactionStatus.transaction_status,
      order_id: transactionStatus.order_id,
      payment_type: transactionStatus.payment_type,
      fraud_status: transactionStatus.fraud_status,
      gross_amount: transactionStatus.gross_amount,
    });
  } catch (error) {
    console.error('[v0] Verify Transaction Error:', error);
    return Response.json(
      {
        error: error.message || 'Failed to verify transaction',
        details: process.env.NODE_ENV === 'development' ? error.toString() : undefined
      },
      { status: 500 }
    );
  }
}
