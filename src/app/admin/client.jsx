'use client'
import React from 'react'
import { useSession } from '../store/session'
import Login from '@/components/login'

export default function ClientAdmin() {
    const { session } = useSession()
    console.log(session)
  return (<>
    {session == null && <Login/>}
    {session?.displayName && <div>mntree admin {session.displayName}</div>}
    </>)
}
