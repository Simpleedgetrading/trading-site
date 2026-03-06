import "./globals.css"
import { Inter } from "next/font/google"
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Simple Edge Trading",
  description: "Structured trading for beginner traders"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}