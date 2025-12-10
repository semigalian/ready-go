import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('Webhook received:', body)
    
    // Handle webhook events from Base app
    // You can add specific logic here based on your app's needs
    
    return NextResponse.json({ status: 'success' })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ status: 'error' }, { status: 400 })
  }
}
