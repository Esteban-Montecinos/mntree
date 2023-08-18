import Link from "next/link";
import { IconHeart, IconMessageCircle, IconRepeat } from "@tabler/icons-react";
import Image from "next/image";
import Likes from "./likes-button";

export default function PostCard({
  userFullName,
  userName,
  avatarUrl,
  createdAt,
  content,
  post
}) {
  const datePost = new Date(createdAt);
  const options = { month: "short", day: "numeric" };
  const shortTime = new Intl.DateTimeFormat("en", {
    timeStyle: "short",
  });
  return (
    <article className="flex flex-row w-full p-2 transition bg-transparent border-b rounded-none shadow-none cursor-pointer hover:bg-neutral-800 border-neutral-600">
      <aside className="flex flex-col w-10 mr-3">
        <Link href={`/${userName}`}>
          <Image
            className="rounded-full"
            width={48}
            height={48}
            src={avatarUrl}
            alt={`Foto de perfil de ${userName}`}
          />
        </Link>
      </aside>
      <main className="flex-1">
        <header className="justify-between">
          <div className="flex flex-row items-start gap-x-2">
            <span className="text-base font-bold text-neutral-100">
              {userFullName}
            </span>
            <span className="text-base font-light tracking-tight text-neutral-400">
              @{userName} · {datePost.toLocaleDateString("es-CL", options)} ·{" "}
              {shortTime.format(datePost)}
            </span>
          </div>
        </header>
        <div className="py-2 text-base bg-transparent text-neutral-50">
          <p>{content}</p>
        </div>
        <footer className="flex flex-row items-center justify-between">
          <button className="p-2 -ml-2 rounded-full hover:bg-cyan-500/30 hover:text-cyan-500 text-neutral-400">
            <IconMessageCircle className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-emerald-500/30 hover:text-emerald-500 text-neutral-400">
            <IconRepeat className="w-5 h-5" />
          </button>
          <Likes post={post}/>
        </footer>
      </main>
    </article>
  );
}
