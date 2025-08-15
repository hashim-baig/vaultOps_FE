'use client';

import { usePathname } from 'next/navigation';

export function usePageName() {
    const pathname = usePathname();
    const segments = pathname?.split('/').filter(Boolean) || [];
    return segments.length > 0 ? segments[segments.length - 1] : 'Home';
}
