export default function Testimonial({ name, text }: any) {
  return (
    <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">

      <p className="text-neutral-300 mb-6 italic">
        "{text}"
      </p>

      <p className="font-semibold text-white">
        {name}
      </p>

    </div>
  )
}