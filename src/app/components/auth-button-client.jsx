"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { GitHubIcon } from "./icons";
import { useRouter } from "next/navigation";

export function AuthButtonClient({ session }) {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return session === null ? (
    <button
    onClick={handleSignIn}
      type="button"
      className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors bg-transparent border rounded-md shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-input hover:bg-white hover:text-neutral-900 h-9"
    >
      <GitHubIcon />
      Continuar con GitHub
    </button>
  ) : (
    <button
      onClick={handleSignOut}
      type="button"
      className="p-4 text-xs font-light transition-colors rounded-full text-neutral-400 hover:bg-neutral-800"
    >
      Cerrar sesión @{session?.user?.user_metadata?.user_name}
    </button>
  );
}
