"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { GitHubIcon } from "./icons";
import { useRouter } from "next/navigation";

export function AuthButtonClient({ session }) {
  const supabase = createClientComponentClient();
  const router = useRouter();
  /*const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "https://mntree.vercel.app/auth/callback",
      },
    });
  };*/
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return session === null ? (
    <button
      type="button"
      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-white hover:text-neutral-900 h-9 px-4 py-2"
    >
      <GitHubIcon />
      Continuar con GitHub
    </button>
  ) : (
    <button
      onClick={handleSignOut}
      type="button"
      className="font-light text-neutral-400  text-xs rounded-full p-4 hover:bg-neutral-800 transition-colors"
    >
      Cerrar sesión @{session?.user?.user_metadata?.user_name}
    </button>
  );
}
