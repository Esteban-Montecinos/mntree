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
  const { data } = await supabase
    .from("posts")
    .select("*, user:users(name,avatar_url,user_name), likes(*)")
    .order("created_at", { ascending: false });
  const posts = data.map(post => ({
    ...post,
    user_has_liked_post: post?.likes.find(like => like.user_id === session.user.id),
    likes: post.likes.length,
  
  })) ?? []
  return (
    <main className="flex flex-col items-center min-h-screen px-2 bg-neutral-950">
      <section className="flex flex-col items-center w-full max-w-2xl min-h-screen mx-auto border-l border-r border-neutral-600">
        <header className="sticky top-0 z-10 flex flex-row items-center justify-between w-full h-24 p-3 mb-4 border-b bg-neutral-950/80 backdrop-blur-sm border-neutral-600">
          <h2 className="text-3xl font-semibold text-white">*MNT<span className="hidden sm:inline-flex">ree</span></h2>
          <AuthButtonServer />
        </header>
        <ComposePost userAvatarUrl={session.user?.user_metadata?.avatar_url} />
        <footer className="flex flex-col w-full mb-24">

        <PostsList posts={posts}/>
        </footer>
      </section>
    </main>
  );
}
