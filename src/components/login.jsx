"use client";

import { useSession } from "@/app/store/session";
import { AuthState, loginWithGoogle } from "@/service/firebaseClient";
import { useEffect } from "react";

export default function Login() {
  const { setSession } = useSession();

  useEffect(() => {
    AuthState(setSession);
  }, []);

  const handleClick = () => {
    loginWithGoogle()
      .then(({ user }) => {
        const { accessToken, displayName, email, photoURL, uid } = user;
        setSession({ accessToken, displayName, email, photoURL, uid });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="mx-auto flex flex-col items-center justify-center h-screen w-full">
      <div className="flex flex-col gap-y-10 max-w-lg text-center bg-neutral-900 text-white p-4 rounded-lg w-full">
        <h1 className="text-4xl font-semibold tracking-tight mb-4">
          *MNTree Admin
        </h1>
        <p className="text-sm text-muted-foreground">
          Inicia sesión con tu cuenta de Google para acceder a esta página.
        </p>
        <button
          onClick={handleClick}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-white hover:text-neutral-900 h-9 px-4 py-2"
        >
          Inicia sesión con Google
        </button>
      </div>
    </section>
  );
}
