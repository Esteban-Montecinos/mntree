import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from "next/headers";
import { redirect } from 'next/navigation';
import { GitHubButton } from './github-button';

export const dynamic = "force-dynamic";

export default async function LoginPage() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect("/");
  }
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen px-2 mx-auto bg-neutral-950">
      <div className="flex flex-col w-full max-w-lg p-4 text-center text-white rounded-lg gap-y-10 bg-neutral-900">
        <h2 className="mb-4 text-4xl font-semibold tracking-tight">
          Bienvenido a *MNTree
        </h2>
        <p className="text-sm text-muted-foreground">
            Iniciar sesión en tu cuenta
        </p>
        <GitHubButton />
        </div>
    </section>
  )
}
