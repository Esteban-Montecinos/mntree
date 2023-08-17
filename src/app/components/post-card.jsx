import Link from "next/link";
import { IconHeart, IconMessageCircle, IconRepeat } from "@tabler/icons-react";
import Image from "next/image";

export default function PostCard({
  userFullName,
  userName,
  avatarUrl,
  createdAt,
  content,
}) {
  const datePost = new Date(createdAt);
  const options = { month: "short", day: "numeric" };
  const shortTime = new Intl.DateTimeFormat("en", {
    timeStyle: "short",
  });
  return (
    <article className="flex flex-row shadow-none bg-transparent hover:bg-neutral-800 transition border-b rounded-none cursor-pointer border-neutral-600 w-full p-2">
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
        <div className="py-2 text-base text-neutral-50 bg-transparent">
          <p>{content}</p>
        </div>
        <footer className="flex flex-row justify-between items-center">
          <button className="hover:bg-cyan-500/30 rounded-full p-2 -ml-2 hover:text-cyan-500 text-neutral-400">
            <IconMessageCircle className="w-5 h-5" />
          </button>
          <button className="hover:bg-emerald-500/30 rounded-full p-2 hover:text-emerald-500 text-neutral-400">
            <IconRepeat className="w-5 h-5" />
          </button>
          <button className="hover:bg-pink-500/30 rounded-full p-2 hover:text-pink-500 text-neutral-400">
            <IconHeart className="w-5 h-5" />
          </button>
        </footer>
      </main>
    </article>
  );
}
