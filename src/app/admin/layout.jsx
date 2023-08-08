"use client";
import Login from "@/components/login";
import { useSession } from "../store/session";

export const metadata = {
  title: "Mntree Admin",
  description: "*MNTree Admin",
};

export default function AdminLayout({ children }) {
  
  const { session } = useSession();
  return session ? (
    children
  ) : (
    <Login/>
  );
}
