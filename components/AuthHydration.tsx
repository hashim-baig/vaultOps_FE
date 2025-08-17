'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchCurrentUser } from '@/lib/api/auth';
import { useAuthStore } from '@/stores/authStore';

export default function AuthHydration() {
    const setUser = useAuthStore((state) => state.setUser);
    const logout = useAuthStore((state) => state.logout);

    const { isLoading } = useQuery({
        queryKey: ['currentUser'],
        queryFn: fetchCurrentUser,
        retry: false,
        staleTime: 300000,
        refetchOnWindowFocus: false,
        onSuccess: (user: User | null) => {
            if (user) setUser(user);
            else logout();
        },
        onError: logout,
    });

    // Optional: show loading spinner while hydrating
    if (isLoading) return null;
    return null;
}

type User = { id: string; email: string; name: string };
