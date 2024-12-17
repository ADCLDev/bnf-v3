// app/(root)/payment/failed/page.tsx
import PaymentFailed from '@/components/reuseable/PaymentFailed'
import React from 'react'

const PaymentFailedPage = () => {
  // This data would typically come from your payment processing service
  const paymentDetails = {
    orderId: 'ORD-2024031502',
    attemptDate: 'March 15, 2024 - 14:35 PM',
    totalAmount: 149.99,
    errorMessage: 'Your card was declined. Please check your payment details and try again.',
    cartItems: [
      {
        id: 'font-001',
        name: 'Elegance Sans',
        style: 'Regular',
        price: 49.99
      },
      {
        id: 'font-002',
        name: 'Elegance Sans',
        style: 'Bold',
        price: 49.99
      },
      {
        id: 'font-003',
        name: 'Elegance Sans',
        style: 'Italic',
        price: 50.01
      }
    ]
  }

  return (
    <div>
      <PaymentFailed {...paymentDetails} />
    </div>
  )
}

export default PaymentFailedPage