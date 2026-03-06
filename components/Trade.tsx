"use client"

type TradeProps = {
  pair: string
  image: string
  text: string
}

export default function Trade({ pair, image, text }: TradeProps) {

  return (

    <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">

      {/* IMAGE */}
      <div className="overflow-hidden">

        <img
          src={image}
          alt={pair}
          className="w-full h-72 object-cover transition-all duration-700 hover:scale-150"
        />

      </div>

      {/* TEXT */}
      <div className="p-6">

        <h3 className="text-lg font-semibold text-white mb-2">
          {pair}
        </h3>

        <p className="text-sm text-neutral-400 leading-relaxed">
          {text}
        </p>

      </div>

    </div>

  )
}