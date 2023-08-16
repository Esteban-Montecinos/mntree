'use client'

import { ComposePostButton } from './compose-post-button'
import { addPost } from '../actions/add-post-action'
import { useRef } from 'react'

export function ComposePost ({
  userAvatarUrl = ''
}) {
  const formRef = useRef(null)

  return (
    <form ref={formRef} action={async (formData) => {
      await addPost(formData)
      formRef.current?.reset()
    }} className='flex flex-row p-3 border-b border-neutral-600 w-full'>
      <img className='rounded-full w-10 h-10 object-contain mr-4' src={userAvatarUrl} alt="foto de perfil de GitHub"/>
      <div className='flex flex-1 flex-col gap-y-4'>
      <textarea
        name='content'
        rows={3}
        className='w-full text-xl text-white bg-transparent resize-none outline-none border-b border-neutral-600 placeholder-gray-400'
        placeholder='¿Qué estas pensando?...'
      ></textarea>
        <ComposePostButton />
      </div>
    </form>
  )
}