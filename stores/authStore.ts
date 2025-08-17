import { create } from 'zustand';

type AuthState = {
    user: null | { id: string; email: string; name: string };
    setUser: (user: { id: string; email: string; name: string }) => void;
    logout: () => void;
};
export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    logout: () => set({ user: null }),
}));
