import SignOut from "@/components/signOut"
import ClientAdmin from "./client"

export default function HomeAdmin() {
  
    return (
      <main className="flex min-h-screen flex-col items-center p-8 bg-emerald-600">
      <header><SignOut/></header>
        <ClientAdmin/>
      </main>
    )
  }