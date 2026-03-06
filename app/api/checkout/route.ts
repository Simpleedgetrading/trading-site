import Stripe from "stripe"
import { NextResponse } from "next/server"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export async function POST() {

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "subscription",

    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Simple Edge Mentorship",
          },
          unit_amount: 1200,
          recurring: {
            interval: "month",
          },
        },
        quantity: 1,
      },
    ],

    success_url: "http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}",
cancel_url: "http://localhost:3000",
  })

  return NextResponse.json({ url: session.url })
}