import { AuthButtonServer } from '../components/auth-buttton-server'

export default function LoginPage() {
  return (
    <section className="mx-auto flex flex-col items-center justify-center h-screen w-full">
      <div className="flex flex-col gap-y-10 max-w-lg text-center bg-neutral-900 text-white p-4 rounded-lg w-full">
        <h2 className="text-4xl font-semibold tracking-tight mb-4">
          Bienvenido a *MNTree
        </h2>
        <p className="text-sm text-muted-foreground">
            Iniciar sesión en tu cuenta
        </p>
        <AuthButtonServer/>
        </div>
    </section>
  )
}
