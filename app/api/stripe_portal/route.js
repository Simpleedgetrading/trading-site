import Stripe from "stripe"
import { NextResponse } from "next/server"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST(request) {

  const customerId = request.headers.get("customer")

  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: "http://localhost:3000/dashboard/account"
  })

  return NextResponse.redirect(session.url)
  
}