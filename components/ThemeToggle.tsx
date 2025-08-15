'use client';

import { useTheme } from 'next-themes';
import { Toggle } from '@/components/ui/toggle';
import { IconMoon, IconSun } from '@tabler/icons-react';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    // Determine if dark mode is active
    const isDark = theme === 'dark';

    return (
        <Toggle
            pressed={isDark}
            onPressedChange={(pressed: boolean) => setTheme(pressed ? 'dark' : 'light')}
            aria-label="Toggle dark mode"
            className="flex items-center justify-center"
        >
            {isDark ? <IconMoon className="h-5 w-5" /> : <IconSun className="h-5 w-5" />}
        </Toggle>
    );
}
