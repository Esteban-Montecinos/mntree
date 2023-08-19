'use client'
import Image from "next/image";
import { addPost } from "../actions";
import { useRef } from 'react'

export const dynamic = 'force-dynamic'

export function ComposePost({ userAvatarUrl }) {
  const formRef = useRef()

  return (
    <form
       action={async (formData) => {
        const content = formData.get('content')
      await addPost(content)
      formRef.current?.reset()
    }}
    ref={formRef}
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
          placeholder="¿Qué estás pensando?..."
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
