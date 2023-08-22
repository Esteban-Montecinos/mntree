"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { IconBrandGithub } from "@tabler/icons-react";

export function GitHubButton({  }) {
  const supabase = createClientComponentClient();
 
  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  return <button
    onClick={handleSignIn}
      type="button"
      className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors bg-transparent border rounded-md shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-input hover:bg-white hover:text-neutral-900 h-9"
    >
      <IconBrandGithub className="w-4 h-4 mr-2"/>
      Continuar con GitHub
    </button>
}