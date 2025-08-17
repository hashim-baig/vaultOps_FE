import { create } from 'zustand';

type AuthState = {
    user: null | { id: string; email: string };
    setUser: (user: { id: string; email: string }) => void;
    logout: () => void;
    isAuthenticated: boolean;
};

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    setUser: (user) => set({ user, isAuthenticated: true }),
    logout: () => set({ user: null, isAuthenticated: false }),
    isAuthenticated: false,
}));
