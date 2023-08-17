import { cookies } from "next/headers";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";

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
      className="flex flex-row p-3 border-b border-neutral-600 w-full"
    >
      <img
        className="rounded-full w-10 h-10 object-contain mr-4"
        src={userAvatarUrl}
        alt="foto de perfil de GitHub"
      />
      <div className="flex flex-1 flex-col gap-y-4">
        <textarea
          name="content"
          rows={3}
          className="w-full text-xl text-white bg-transparent resize-none outline-none border-b border-neutral-600 placeholder-gray-400"
          placeholder="¿Qué estas pensando?..."
        ></textarea>
        <button
          type="submit"
          className="bg-neutral-900 text-white text-sm disabled:opacity-40 disabled:pointer-events-none font-bold rounded-full px-5 py-2 self-end"
        >
          Postear
        </button>
      </div>
    </form>
  );
}
