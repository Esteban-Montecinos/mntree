import { create } from 'zustand'

export const useSession = create((set) => ({
  session: undefined
    
  ,
  setSession: (newSession) => set(() => ({ session: newSession })),
  logOut: () => set(() => ({ session: null })),

}))