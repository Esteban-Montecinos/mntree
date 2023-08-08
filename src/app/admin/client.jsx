'use client'
import React from 'react'
import { useSession } from '../store/session'

export default function ClientAdmin() {
    const { session } = useSession()
  return (
    <div>mntree admin {session.displayName}</div>
  )
}
