'use client'
import { useSession } from '@/app/store/session';
import Link from 'next/link'
import SignOut from './signOut';

export default function Navbar() {
    const { session } = useSession();
  return (
    <div className="flex items-center gap-x-2">
          {session ? (
            <>
              <Link
                href="/admin"
                className="bg-neutral-200 p-3 rounded-lg sm:text-base text-sm"
              >
                Admin
              </Link>
              <SignOut/>
            </>
          ) : (
              <Link
                href="/admin"
                className="bg-neutral-900 text-white rounded-full p-4 hover:bg-neutral-800 transition-colors sm:text-base text-sm"
              >
                Iniciar sesión
              </Link>
          )}
        </div>
  )
}
