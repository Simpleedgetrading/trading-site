import Stripe from "stripe"
import { NextResponse } from "next/server"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST() {

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "subscription",

    line_items: [
      {
        price: "price_1T7Yq92fCu5W6YrUcqwrpOrb",
        quantity: 1
      }
    ],

    success_url: "https://trading-site-nine.vercel.app/success?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: "https://trading-site-nine.vercel.app"
  })

  return NextResponse.json({ url: session.url })
}