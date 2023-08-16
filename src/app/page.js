import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { AuthButtonServer } from "./components/auth-buttton-server";
import { redirect } from "next/navigation";
import PostCard from "./components/post-card";
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
    .select("*, user:users(name,avatar_url,user_name,created_at)");
  return (
    <main className="flex min-h-screen flex-col items-center bg-emerald-950">
      <section className="flex flex-col items-center w-full max-w-2xl mx-auto border-l border-r border-white/20 min-h-screen">
        <header className="flex flex-row justify-between items-center w-full mb-4 p-2 border-b border-white/20">
          <h2 className="text-3xl font-semibold text-white">Inicio</h2>
          <AuthButtonServer />
        </header>
        {
        posts?.map(post => {
          const {
            id,
            user,
            content
          } = post

          const {
            user_name: userName,
            name: userFullName,
            avatar_url: avatarUrl,
            created_at: createdAt
          } = user

          return (
            <PostCard
              avatarUrl={avatarUrl}
              content={content}
              key={id}
              userFullName={userFullName}
              userName={userName}
              createdAt={createdAt}
            />
          )
        })
      }
      </section>
    </main>
  );
}
