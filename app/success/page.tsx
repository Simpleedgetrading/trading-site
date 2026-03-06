"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SuccessContent() {
  const searchParams = useSearchParams();
  const session_id = searchParams.get("session_id");

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Payment Successful</h1>
        <p className="text-neutral-400">
          Welcome to the mentorship. Check your email for access instructions.
        </p>

        {session_id && (
          <p className="text-sm text-neutral-500 mt-4">
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