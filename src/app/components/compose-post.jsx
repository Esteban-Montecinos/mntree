import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import Image from "next/image";

export const dynamic = 'force-dynamic'

export function ComposePost({ userAvatarUrl }) {
  const addPost = async (formData) => {
    'use server'

    const content = formData.get("content");

    if (content === null) return;

    const supabase = createServerActionClient({ cookies });
    // revisar si el usuario realmene está autentificado
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user === null) return;

    await supabase.from("posts").insert({ content, user_id: user.id });

    revalidatePath("/");
  };

  return (
    <form
      action={addPost}
      className="flex flex-row w-full p-3 border-b border-neutral-600"
    >
      <Image
        className="object-contain w-10 h-10 mr-4 rounded-full"
        src={userAvatarUrl}
        width={48}
        height={48}
        alt="foto de perfil de GitHub"
      />
      <div className="flex flex-col flex-1 gap-y-4">
        <textarea
          name="content"
          rows={3}
          className="w-full text-xl text-white placeholder-gray-400 bg-transparent border-b outline-none resize-none border-neutral-600"
          placeholder="¿Qué estas pensando?..."
        ></textarea>
        <button
          type="submit"
          className="self-end px-5 py-2 text-sm font-bold text-white rounded-full bg-neutral-900 disabled:opacity-40 disabled:pointer-events-none"
        >
          Postear
        </button>
      </div>
    </form>
  );
}
