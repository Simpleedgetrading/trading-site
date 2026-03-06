"use client"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-800 mt-10">

      <div className="max-w-3xl mx-auto px-6 py-10 flex flex-col items-center text-center">

        {/* Brand */}
        <h3 className="text-xl font-semibold text-white mb-4">
          Simple Edge
        </h3>

        {/* Description */}
        <p className="text-neutral-400 max-w-md mb-6">
          A focused trading community built around patience,
          discipline, and high probability setups.
        </p>

        {/* Bottom row */}
        <div className="flex items-center gap-4 text-sm text-neutral-400">

          <div className="flex flex-col items-start text-left">
            <span>© 2026 Simple Edge. All rights reserved.</span>
            <span className="text-xs text-neutral-500">
              Educational purposes only. Not financial advice.
            </span>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 ml-4">

            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-md bg-neutral-800 hover:bg-neutral-700 transition"
            >
              <img
                src="/instagram.svg"
                alt="Instagram"
                className="w-4 h-4 invert"
              />
            </a>

            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-md bg-neutral-800 hover:bg-neutral-700 transition"
            >
              <img
                src="/x.svg"
                alt="X"
                className="w-4 h-4 invert"
              />
            </a>

          </div>

        </div>

      </div>

    </footer>
  )
}