"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Navbar() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const status = localStorage.getItem("loggedIn")
    if (status) setLoggedIn(true)
    setLoaded(true)
  }, [])

  const logout = () => {
    localStorage.removeItem("loggedIn")
    setLoggedIn(false)
    router.push("/")
  }

  if (!loaded) return null

  return (

<header className="w-full border-b border-neutral-800 bg-black text-white sticky top-0 z-50">

<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

{/* LOGO */}
<Link href="/" className="font-bold text-lg">
Simple Edge
</Link>

{/* RIGHT SIDE */}
<div className="flex items-center gap-6">

{loggedIn && (
<Link
href="/dashboard"
className="text-neutral-300 hover:text-white transition"
>
Dashboard
</Link>
)}

{!loggedIn && (
<Link
href="/login"
className="border border-neutral-700 px-4 py-2 rounded hover:bg-neutral-800 transition"
>
Login
</Link>
)}

{loggedIn && (

<div className="relative">

<button
onClick={() => setMenuOpen(!menuOpen)}
className="w-9 h-9 rounded-full bg-neutral-700 flex items-center justify-center font-bold hover:bg-neutral-600"
>
S
</button>

{menuOpen && (

<div className="absolute right-0 mt-3 w-40 bg-neutral-900 border border-neutral-800 rounded-lg shadow-lg">

<Link
href="/profile"
className="block px-4 py-2 text-sm hover:bg-neutral-800"
>
Profile
</Link>

<button
onClick={logout}
className="w-full text-left px-4 py-2 text-sm hover:bg-neutral-800"
>
Logout
</button>

</div>

)}

</div>

)}

</div>

</div>

</header>

  )
}