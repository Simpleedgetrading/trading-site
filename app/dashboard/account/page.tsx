"use client"

export default function SettingsPage() {
  return (
    <div className="max-w-xl">

      <h1 className="text-3xl font-bold mb-6">
        Account
      </h1>

      <p className="text-neutral-400 mb-8">
        Manage your subscription.
      </p>

     <form
action="/api/stripe_portal"
method="POST"
onSubmit={(e)=>{

const customerId = localStorage.getItem("stripeCustomerId")

e.target.customer.value = customerId

}}
>

<input type="hidden" name="customer"/>

<button
type="submit"
className="bg-white text-black px-6 py-3 rounded-lg"
>
Manage Subscription
</button>

</form>

    </div>
  )
}