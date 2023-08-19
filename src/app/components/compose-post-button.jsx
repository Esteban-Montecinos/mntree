'use client'

import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export function ComposePostButton () {
  const { pending } = useFormStatus()

  return (
    <button
      disabled={pending}
      type='submit'
      className='self-end px-5 py-2 text-sm font-bold text-white rounded-full bg-neutral-900 disabled:opacity-40 disabled:pointer-events-none'
    >
    {pending ? 'Posteando...' : 'Postear'}
  </button>
  )
}