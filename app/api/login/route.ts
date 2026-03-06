import { cookies } from "next/headers"

export async function POST(req: Request) {

  const { email, password } = await req.json()

  if (email === "admin@test.com" && password === "1234") {

    cookies().set("session", "loggedin")

    return Response.json({ success: true })
  }

  return Response.json({ success: false })
}