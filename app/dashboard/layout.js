import Sidebar from "@/components/ui/Sidebar"

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-black text-white">

      <Sidebar />

      <main className="flex-1 p-10">
        {children}
      </main>

    </div>
  )
}