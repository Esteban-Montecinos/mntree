"use client";

import { useSession } from "@/app/store/session";
import { logout } from "@/service/firebaseClient";

export default function SignOut() {
    const { setSession } = useSession()
    const handleClick = () => {
        logout().then(() => {
            setSession(null)
        })
    }
  return (
    <button
      onClick={handleClick}
      className="bg-neutral-900 text-white rounded-full p-4 hover:bg-neutral-800 transition-colors sm:text-base text-sm"
    >
      Cerrar sesión
    </button>
  );
}
