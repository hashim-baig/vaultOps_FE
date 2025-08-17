'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuthStore } from '@/stores/authStore';
import { fetchCurrentUser } from '@/lib/api/auth';
import { useQuery } from '@tanstack/react-query';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const setUser = useAuthStore((state) => state.setUser);
    const logout = useAuthStore((state) => state.logout);
    const router = useRouter();

    // Here, use isLoading from React Query for hydration
    const { data: user, isLoading } = useQuery({
        queryKey: ['currentUser'],
        queryFn: fetchCurrentUser,
    });

    useEffect(() => {
        if (user) {
            setUser(user); // This sets isAuthenticated=true in your store
        } else if (!isLoading) {
            logout();
        }
    }, [user, isLoading, setUser, logout]);

    useEffect(() => {
        if (!isLoading && !user) {
            router.replace('/login');
        }
    }, [isLoading, user, router]);

    // Prevent page flash while loading
    if (isLoading) return null;
    if (!user) return null;

    return <>{children}</>;
}
