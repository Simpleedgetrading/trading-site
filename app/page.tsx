"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Trade from "../components/Trade";
import Ticker from "../components/Ticker";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import { useState } from "react"


export default function Home() {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Navbar />
      <Ticker />

      <main className="bg-black text-white min-h-screen">

        {/* HERO */}
        <section className="py-20 px-6 text-center max-w-3xl mx-auto">

          <h1 className="text-6xl font-bold mb-8 leading-tight">
            Trade With Ease
          </h1>

          <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
            A structured trading framework learn how to use proper
            risk management and repeatable setups. Simple indicators.
            No prediction. Just execution.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">

            <button
              onClick={async () => {
                try {
                  const res = await fetch("/api/checkout", {
                    method: "POST",
                  });

                  const data = await res.json();

                  if (data.url) {
                    window.location.href = data.url;
                  } else {
                    alert("Stripe checkout failed");
                  }
                } catch (error) {
                  console.error(error);
                  alert("Something went wrong");
                }
              }}
              className="bg-green-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition"
            >
              Join Mentorship — $15/month
            </button>

            <button className="border border-neutral-600 px-8 py-4 rounded-lg hover:bg-neutral-800 transition">
              Beginner Course — $90
            </button>

          </div>

        </section>


        {/* RECENT SETUPS */}
        <section className="py-28 px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Recent Setups
          </h2>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

            <Trade
              pair="EURUSD"
              image="/trades/eurusd-trade.png"
              text="Pump into resistance followed by a 15m rectangle coil. Entry triggered on breakdown."
            />

            <Trade
              pair="GBPUSD"
              image="/trades/gbpusd-trade.png"
              text="Extended upside move leading into First Red Day setup. Range compression before downside expansion."
            />

            <Trade
              pair="NASDAQ"
              image="/trades/nasdaq-trade.png"
              text="New York session volatility expansion after early session pump."
            />

          </div>

        </section>


        {/* INSIDE MENTORSHIP */}
        <section className="py-24 px-6 bg-neutral-900">

          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-16">

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Inside The Mentorship Program
              </h2>

              <p className="text-neutral-400 max-w-2xl mx-auto">
                Members get access to a structured trading process built
                around discipline, risk management and high probability setups.
              </p>

            </div>


            {/* PLATFORM IMAGES */}
<div className="grid md:grid-cols-3 gap-8 mb-20">

  <div 
    className="cursor-pointer"
    onClick={() => setSelectedImage("/dashboard.png")}
  >
    <Image
      src="/dashboard.png"
      alt="Trade Dashboard"
      width={600}
      height={400}
      className="rounded-xl border border-neutral-800 hover:scale-105 transition"
    />
  </div>

  <div 
    className="cursor-pointer"
    onClick={() => setSelectedImage("/performance-review.png")}
  >
    <Image
      src="/performance-review.png"
      alt="Post Session Review"
      width={600}
      height={400}
      className="rounded-xl border border-neutral-800 hover:scale-105 transition"
    />
  </div>

  <div 
    className="cursor-pointer"
    onClick={() => setSelectedImage("/trade-log.png")}
  >
    <Image
      src="/trade-log.png"
      alt="Trade Log"
      width={600}
      height={400}
      className="rounded-xl border border-neutral-800 hover:scale-105 transition"
    />
  </div>

</div>

            <h3 className="text-xl font-semibold text-center mb-10">
              What You Get Inside The Mentorship
            </h3>


            <div className="grid md:grid-cols-2 gap-6">

              <Feature
                title="Trade Dashboard Panel"
                text="Track trades, monitor performance and focus on the highest quality setups."
              />

              <Feature
                title="Best Trade Setup Breakdowns"
                text="Learn the pump, range and dump structures used to identify opportunities."
              />

              <Feature
                title="Post Session Performance Review"
                text="Review trades after each session to improve discipline and execution."
              />

              <Feature
                title="Fail Safe Trading Checklist"
                text="Structured checklist designed to prevent impulsive trades."
              />

              <Feature
                title="Entry Confirmation Checklist"
                text="Clear entry criteria so every trade follows the same process."
              />

              <Feature
                title="Community Discussion"
                text="Connect with disciplined traders focused on patience and consistency."
              />

            </div>

          </div>

        </section>


        {/* PRIVATE TRADING ROOM */}
        <section className="py-20 px-6 bg-black text-white">

          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-4xl font-bold mb-4">
              Inside The Private Trading Room
            </h2>

            <p className="text-neutral-400 mb-16 max-w-2xl mx-auto">
              Trade alongside disciplined traders during the Tokyo,
              London and New York sessions.
            </p>

            <div className="flex justify-center">

              <div className="relative bg-neutral-900 border border-neutral-800 rounded-full w-[380px] h-[520px] flex flex-col items-center justify-center p-10 shadow-xl">

                <img
                  src="/whatsapp.svg"
                  alt="WhatsApp"
                  className="w-16 h-16 mb-6 invert"
                />

                <h3 className="text-xl font-semibold mb-6">
                  Members Access
                </h3>

                <ul className="text-neutral-400 text-sm space-y-3 mb-8">
                  <li>• Live session trade setups</li>
                  <li>• Real-time trade alerts</li>
                  <li>• Risk management reminders</li>
                  <li>• Limited group size</li>
                  <li>• Private live chat group</li>
                </ul>

                <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:scale-105 transition">
                  Join The Private Session Now
                </button>

              </div>

            </div>

          </div>

        </section>


        {/* WHAT YOU LEARN */}
        <section className="py-28 px-6 bg-neutral-950">

          <h2 className="text-4xl font-bold text-center mb-16">
            What You'll Learn
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">

            <Feature
              title="Simple Trading"
              text="No complicated indicators. Learn how to read price structure."
            />

            <Feature
              title="Risk Management"
              text="Treat trading like a business with strict drawdown control."
            />

            <Feature
              title="Session Trading"
              text="Focus on Tokyo, London and New York session opportunities."
            />

            <Feature
              title="15 Minute Setups"
              text="Execute clear setups inside larger market structure."
            />

          </div>

        </section>
<section className="py-24 px-6 bg-black text-white">

  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-3xl font-bold mb-12">
      Frequently Asked Questions
    </h2>

  </div>

  <div className="max-w-3xl mx-auto space-y-10 text-left">

    <div>
      <h3 className="text-lg font-semibold mb-2">
        Do I need a lot of capital to start?
      </h3>
      <p className="text-neutral-400 leading-relaxed">
        No. Anyone can learn the system. Many traders begin by testing the setups with very small position sizes or micro lots while they build confidence and experience. The focus is on learning the process and developing discipline, not starting with large capital.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-2">
        Isn’t trading just gambling?
      </h3>
      <p className="text-neutral-400 leading-relaxed">
        No. Gambling relies on chance, while professional trading is based on a repeatable edge, strict risk management, and disciplined execution. Inside the community you’ll learn how to approach the market with patience and structure, focusing on high-probability setups rather than constant trading.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-2">
        Is the mentorship 1:1 or group based?
      </h3>
      <p className="text-neutral-400 leading-relaxed">
        The mentorship primarily runs as a focused community where members learn together, share ideas, and review market setups. However, individual guidance and 1:1 help is available when needed to ensure members fully understand the concepts and can apply them correctly.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-2">
        I’m a beginner with zero trading knowledge. Is this right for me?
      </h3>
      <p className="text-neutral-400 leading-relaxed">
        Yes. The system is designed to be simple and structured so beginners can clearly understand how the market moves and how to identify high-probability setups. The focus is on building strong foundations: patience, discipline, and proper risk management.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-2">
        I’m already an experienced trader. How will this help me?
      </h3>
      <p className="text-neutral-400 leading-relaxed">
        Experienced traders often benefit from simplifying their approach. The mentorship focuses on refining execution, improving discipline, and identifying high-probability setups consistently. Many traders find that removing unnecessary complexity helps them trade more confidently and effectively.
      </p>
    </div>

  </div>

</section>

        {/* CTA */}
        <section className="py-32 text-center px-6">

          <h2 className="text-4xl font-bold mb-8">
            Stop Overcomplicating Trading
          </h2>

          <p className="text-neutral-400 mb-10 text-lg">
            Learn a simple edge and how to execute it consistently.
          </p>

          <button
            onClick={async () => {
              const res = await fetch("/api/checkout", {
                method: "POST",
              });

              const data = await res.json();

              if (data.url) {
                window.location.href = data.url;
              }
            }}
            className="bg-green-500 text-black px-10 py-5 rounded-lg font-semibold hover:bg-green-400 transition"
          >
            Join Mentorship — $15/month
          </button>

        </section>

      </main>

<Footer />

{selectedImage && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
    onClick={() => setSelectedImage(null)}
  >
    <div className="max-w-6xl w-full px-6">
      <Image
        src={selectedImage}
        alt="Expanded Image"
        width={1400}
        height={900}
        className="rounded-xl"
      />
    </div>
  </div>
)}

</>
);
}


function Feature({ title, text }: any) {
  return (
    <div className="bg-black p-4 rounded-xl border border-neutral-800 hover:border-neutral-600 transition">

      <h3 className="text-xl font-semibold mb-">
        {title}
      </h3>

      <p className="text-neutral-400">
        {text}
      </p>

    </div>
  );
}