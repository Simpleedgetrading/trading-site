"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function SuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const session_id = searchParams.get("session_id");

  useEffect(() => {
    async function verifyPayment() {
      if (!session_id) return;

      const res = await fetch("/api/verify-session", {
        method: "POST",
        body: JSON.stringify({ session_id }),
      });

      const data = await res.json();

      if (data.success) {

        document.cookie = "paid=true; path=/;";

        router.push("/dashboard");

      } else {

        router.push("/");

      }
    }

    verifyPayment();
  }, [session_id, router]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">

        <h1 className="text-4xl font-bold mb-4">
          Payment Successful
        </h1>

        <p className="text-neutral-400 mb-4">
          Welcome to the mentorship.
        </p>

        <p className="text-neutral-500">
          Redirecting you to your dashboard...
        </p>

        {session_id && (
          <p className="text-sm text-neutral-600 mt-6">
            Session: {session_id}
          </p>
        )}

      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense>
      <SuccessContent />
    </Suspense>
  );
}