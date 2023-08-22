"use client";

import { addPost } from "../actions";
import { useRef, useState } from "react";
import { ComposePostButton } from "./compose-post-button";
import { Avatar } from "@nextui-org/react";

export const dynamic = "force-dynamic";

export function ComposePost({ userAvatarUrl }) {
  const formRef = useRef();
  const [isDisabled, setIsDisabled] = useState("");
  
  return (
    <form
      action={async (formData) => {
        const content = formData.get("content");
        await addPost(content);
        formRef.current?.reset();
      }}
      ref={formRef}
      className="flex flex-row w-full p-3 border-b border-neutral-600"
    >
      <Avatar
        className="object-contain w-10 h-10 mr-4 rounded-full"
        src={userAvatarUrl}
        width={48}
        height={48}
        alt="foto de perfil de Google"
      />
      <div className="flex flex-col flex-1 gap-y-4">
        <textarea
          name="content"
          rows={3}
          onChange={(event) => setIsDisabled(event.target.value)}
          className="w-full text-lg text-white bg-transparent border-b outline-none resize-none placeholder-neutral-400 border-neutral-600"
          placeholder="¿Qué estás pensando?..."
        ></textarea>
        <ComposePostButton isDisabled={isDisabled} setIsDisabled={setIsDisabled}/>
      </div>
    </form>
  );
}
