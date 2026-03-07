export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">

        <h1 className="text-4xl font-bold mb-6">
          Welcome to the Mentorship Dashboard
        </h1>

        <p className="text-neutral-400 mb-8">
          Join the WhatsApp community to start receiving trade alerts and mentorship updates.
        </p>

        <a
          href="https://chat.whatsapp.com/FYXwWvwCYARCCqY59ixnh8?mode=gi_t"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-400 text-black px-8 py-3 rounded-lg font-semibold"
        >
          Join WhatsApp Community
        </a>

      </div>
    </div>
  );
}