"use client"

import Link from "next/link"

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-neutral-900 border-r border-neutral-800 p-6 flex flex-col">

      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-xl font-bold text-white">
          Simple Edge
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-4 text-neutral-300">

        <Link href="/dashboard" className="hover:text-white">
          Dashboard
        </Link>

        <Link href="/dashboard/daily-breakdown" className="hover:text-white">
          Daily Market Breakdown
        </Link>

        <Link href="/dashboard/trade-setups" className="hover:text-white">
          Trade Setups
        </Link>

        <Link href="/dashboard/education" className="hover:text-white">
          Education
        </Link>

        <Link href="/dashboard/account" className="hover:text-white">
          Account
        </Link>

      </nav>

    </aside>
  )
}