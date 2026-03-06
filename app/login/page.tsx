"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()

    if (email === "admin@test.com" && password === "1234") {

      // save login state
      localStorage.setItem("loggedIn", "true")

      router.push("/dashboard")

    } else {
      alert("Invalid login")
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">

      <form onSubmit={handleLogin} className="flex flex-col gap-4 w-80">

        <h1 className="text-2xl font-bold text-center">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="p-3 bg-white text-black rounded"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="p-3 bg-white text-black rounded"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="bg-white text-black p-3 rounded font-semibold"
        >
          Login
        </button>

      </form>

    </main>
  )
}