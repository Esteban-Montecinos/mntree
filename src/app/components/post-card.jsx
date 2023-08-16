import Link from "next/link";
import { IconHeart, IconMessageCircle, IconRepeat } from "@tabler/icons-react";

export default function PostCard({
  userFullName,
  userName,
  avatarUrl,
  createdAt,
  content,
}) {
  const datePost = new Date(createdAt);
  const options = { month: "short", day: "numeric" };
  return (
    <article className="flex flex-row shadow-none bg-transparent hover:bg-emerald-900 transition border-b rounded-none cursor-pointer border-white/20 w-full p-2">
      <aside className="flex flex-col w-10 mr-3">
        <Link href={`/${userName}`}>
          <img className="rounded-full w-10 h-10" src={avatarUrl} />
        </Link>
      </aside>
      <main className="flex-1">
        <header className="justify-between">
          <div className="flex flex-row items-start gap-x-2">
            <span className="text-base font-bold text-white">
              {userFullName}
            </span>
            <span className="text-base font-light tracking-tight text-gray-400">
              @{userName} · {datePost.toLocaleString("es-CL", options)}
            </span>
          </div>
        </header>
        <div className="py-2 text-base text-white bg-transparent">
          <p>{content}</p>
        </div>
        <footer className="flex flex-row justify-between items-center">
          <button className="hover:bg-cyan-500/30 rounded-full p-2 hover:text-cyan-500 text-gray-400">
            <IconMessageCircle className="w-5 h-5" />
          </button>
          <button className="hover:bg-emerald-500/30 rounded-full p-2 hover:text-emerald-500 text-gray-400">
            <IconRepeat className="w-5 h-5" />
          </button>
          <button className="hover:bg-pink-500/30 rounded-full p-2 hover:text-pink-500 text-gray-400">
            <IconHeart className="w-5 h-5" />
          </button>
        </footer>
      </main>
    </article>
  );
}
