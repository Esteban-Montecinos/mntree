import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { AuthButtonServer } from "./components/auth-buttton-server";
import { redirect } from "next/navigation";
import { ComposePost } from "./components/compose-post";
import PostsList from "./components/posts-list";

export const dynamic = 'force-dynamic'

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
    <main className="flex flex-col items-center min-h-screen bg-neutral-950">
      <section className="flex flex-col items-center w-full max-w-2xl min-h-screen mx-auto border-l border-r border-neutral-600">
        <header className="flex flex-row items-center justify-between w-full p-3 mb-4 border-b border-neutral-600">
          <h2 className="text-3xl font-semibold text-white">*MNTree</h2>
          <AuthButtonServer />
        </header>
        <ComposePost userAvatarUrl={session.user?.user_metadata?.avatar_url} />
        <PostsList posts={posts} />
      </section>
    </main>
  );
}
