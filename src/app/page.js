import Link from "next/link";
import Navbar from "@/components/navbar";

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-emerald-600">
      <header className="bg-white max-w-4xl p-2 rounded-full w-full flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold text-emerald-600 p-3">
          *<span className="sm:inline hidden">MNTree</span>
        </Link>
        <Navbar/>
      </header>
      <section className="flex flex-row items-center justify-between w-full h-[60vh] max-w-4xl mx-auto">
        <div className="flex flex-col items-start justify-center h-full">
          <h1 className="mb-4 text-3xl font-semibold text-white">
            Bienvenido a *MNTree
          </h1>
          <p className="text-lg text-gray-300">
            Una plataforma de gestión de links para tu bio.
          </p>
        </div>
        <div>img</div>
      </section>
    </main>
  );
}
