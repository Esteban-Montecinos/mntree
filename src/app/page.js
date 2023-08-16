import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { AuthButtonServer } from "./components/auth-buttton-server";
import { redirect } from "next/navigation";
import { ComposePost } from "./components/compose-post";
import PostsList from "./components/posts-list";
export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session === null) {
    redirect("/login");
  }
  const { data: posts } = await supabase
    .from("posts")
    .select("*, user:users(name,avatar_url,user_name)")
    .order("created_at", { ascending: false });
  return (
    <main className="flex min-h-screen flex-col items-center bg-neutral-950">
      <section className="flex flex-col items-center w-full max-w-2xl mx-auto border-l border-r border-neutral-600 min-h-screen">
        <header className="flex flex-row justify-between items-center w-full mb-4 p-3 border-b border-neutral-600">
          <h2 className="text-3xl font-semibold text-white">Inicio</h2>
          <AuthButtonServer />
        </header>
        <ComposePost userAvatarUrl={session.user?.user_metadata?.avatar_url} />
        <PostsList posts={posts} />
      </section>
    </main>
  );
}
