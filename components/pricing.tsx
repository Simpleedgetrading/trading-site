"use client"

export default function Pricing({
  title,
  price,
  subtitle,
  text,
  button,
  highlight,
}: {
  title: string
  price: string
  subtitle?: string
  text: string
  button: string
  highlight?: boolean
}) {

  async function handleCheckout() {
    const res = await fetch("/api/checkout", {
      method: "POST",
    })

    const data = await res.json()

    if (data.url) {
      window.location.href = data.url
    }
  }

  return (
    <div
      className={`p-10 rounded-xl border ${
        highlight
          ? "border-green-500 bg-neutral-900"
          : "border-neutral-800"
      }`}
    >

      <h3 className="text-xl font-semibold mb-4">{title}</h3>

      <div className="text-3xl font-bold mb-2">
        {price}
        <span className="text-sm text-neutral-400 ml-1">
          {subtitle}
        </span>
      </div>

      <p className="text-neutral-400 mb-6">{text}</p>

      <button
        onClick={handleCheckout}
        className={`w-full py-3 rounded-lg font-semibold ${
          highlight
            ? "bg-green-500 text-black hover:bg-green-400"
            : "border border-neutral-600 hover:bg-neutral-800"
        }`}
      >
        {button}
      </button>

    </div>
  )
}