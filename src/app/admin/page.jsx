import SignOut from "@/components/signOut"
import { useSession } from "../store/session"
import ClientAdmin from "./client"

export default function HomeAdmin() {
  
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header><SignOut/></header>
        <ClientAdmin/>
      </main>
    )
  }