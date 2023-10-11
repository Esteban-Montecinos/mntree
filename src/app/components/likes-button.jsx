"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { IconHeart } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function Likes({ post, addOptimisticPost }) {
  const router = useRouter();
  const handleLikes = async () => {
    const supabase = createClientComponentClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      if (post.user_has_liked_post) {
        // dislike
        addOptimisticPost({
          ...post,
          likes: post.likes - 1,
          user_has_liked_post: !post.user_has_liked_post,
        })
        await supabase.from("likes").delete().match({ user_id: user.id, post_id: post.id });
      } else {
        // like
        addOptimisticPost({
          ...post,
          likes: post.likes + 1,
          user_has_liked_post: !post.user_has_liked_post,
        })
        await supabase
          .from("likes")
          .insert({ user_id: user.id, post_id: post.id });
      }
      router.refresh();
    }
  };
  return (
    <button
      onClick={handleLikes}
      className={`flex items-center group ${ post.user_has_liked_post ? 'text-pink-500' : 'text-neutral-400'}  hover:text-pink-500`}
    >
      <span className="p-2 rounded-full group-hover:bg-pink-500/30">
        <IconHeart className="w-5 h-5" />
      </span>
      {post.likes}
    </button>
  );
}
