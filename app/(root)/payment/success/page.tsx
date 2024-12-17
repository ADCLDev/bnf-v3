// app/(root)/payment/success/page.tsx
import PaymentSuccess from '@/components/reuseable/PaymentSuccess'
import React from 'react'

const page = () => {
  const paymentDetails = {
    orderId: 'ORD-2024031501',
    purchaseDate: 'March 15, 2024 - 14:30 PM',
    totalAmount: 149.99,
    purchasedFonts: [
      {
        id: 'font-001',
        name: 'Elegance Sans',
        style: 'Regular',
        downloadUrl: '/api/download/font-001',
        downloadCount: 0,
        maxDownloads: 3,
        format: 'OpenType (OTF)',
        size: '245 KB',
        license: 'Commercial License'
        
      },
      {
        id: 'font-002',
        name: 'Elegance Sans',
        style: 'Bold',
        downloadUrl: '/api/download/font-002',
        downloadCount: 0,
        maxDownloads: 3,
        format: 'OpenType (OTF)',
        size: '268 KB',
        license: 'Commercial License'
        
      },
      {
        id: 'font-003',
        name: 'Elegance Sans',
        style: 'Italic',
        downloadUrl: '/api/download/font-003',
        downloadCount: 0,
        maxDownloads: 3,
        format: 'OpenType (OTF)',
        size: '252 KB',
        license: 'Commercial License'
        
      }
    ]
  }

  return (
    <div className='container mx-auto px-4 pt-4 pb-8'>
      <PaymentSuccess {...paymentDetails} />
    </div>
  )
}

export default page