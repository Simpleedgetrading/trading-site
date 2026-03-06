"use client"

import { useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"

export default function Success() {

const router = useRouter()
const params = useSearchParams()

useEffect(() => {

const sessionId = params.get("session_id")

async function fetchCustomer() {

const res = await fetch("/api/session/", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({ sessionId })
})

const data = await res.json()

localStorage.setItem("stripeCustomerId", data.customer)

setTimeout(() => {
router.push("/dashboard")
}, 2000)

}

if(sessionId){
fetchCustomer()
}

}, [params, router])

return (

<div className="min-h-screen flex items-center justify-center bg-black text-white">

<h1 className="text-3xl font-bold">
Payment Successful — Redirecting
</h1>

</div>

)
}