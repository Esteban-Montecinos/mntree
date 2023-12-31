"use server";

import { cookies } from "next/headers";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";

export async function addPost(content) {

  if (content === "") return;

  const supabase = createServerActionClient({ cookies });
  // revisar si el usuario realmene está autentificado
  const {
    data: { user },
  } = await supabase.auth.getUser();
  
  if (user === null) return;

  await supabase.from("posts").insert({ content, user_id: user.id });
}
