"use client"

export default function BillingPage() {

  async function openPortal() {
    const res = await fetch("/api/stripe/portal", {
      method: "POST",
    })

    const data = await res.json()

    if (data.url) {
      window.location.href = data.url
    }
  }

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-6">
        Billing / Account
      </h1>

      <p className="text-neutral-400 mb-6">
        Manage your subscription and payment details.
      </p>

      <button
        onClick={openPortal}
        className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-neutral-200"
      >
        Manage Subscription
      </button>
    </div>
  )
}