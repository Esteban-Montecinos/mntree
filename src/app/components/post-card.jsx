import Link from "next/link";
import Image from "next/image";
import Likes from "./likes-button";

export default function PostCard({
  userFullName,
  userName,
  avatarUrl,
  createdAt,
  content,
  post,
  addOptimisticPost,
}) {
  const datePost = new Date(createdAt);
  const options = {
    day: "2-digit",
    dayPeriod: "long",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  };
  const dateFormat = new Intl.DateTimeFormat("es", options);
  return (
    <article className="flex flex-row w-full px-3 py-2 transition bg-transparent border-b rounded-none shadow-none cursor-default hover:bg-neutral-800 border-neutral-600">
      <aside className="flex flex-col w-10 mr-3">
        <Link href={`https://github.com/${userName}`} target="_blank">
          <Image
            className="rounded-full cursor-pointer"
            width={48}
            height={48}
            src={avatarUrl}
            alt={`Foto de perfil de ${userName}`}
          />
        </Link>
      </aside>
      <main className="flex-1">
        <header className="justify-between">
          <div className="flex flex-col items-start sm:items-center sm:flex-row gap-x-2">
            <Link
              href={`https://github.com/${userName}`}
              target="_blank"
              className="text-sm font-bold cursor-pointer text-neutral-100 hover:underline"
            >
              {userFullName}
            </Link>
            <span className="text-xs font-light tracking-tight text-neutral-400">
              @{userName} · {dateFormat.format(datePost)}
            </span>
          </div>
        </header>
        <div className="py-2 text-base bg-transparent text-neutral-50">
          <p>{content}</p>
        </div>
        <footer className="flex flex-row items-center justify-between">
          <Likes post={post} addOptimisticPost={addOptimisticPost} />
        </footer>
      </main>
    </article>
  );
}
