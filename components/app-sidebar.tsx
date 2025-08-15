'use client';

import * as React from 'react';
import { IconInnerShadowTop, IconLockPassword, IconWorld } from '@tabler/icons-react';

import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import ThemeToggle from '@/components/ThemeToggle';

const data = {
    user: {
        name: 'Hashim Baig',
        email: 'hashim@gmail.com',
        avatar: '/avatars/shadcn.jpg',
    },
    navMain: [
        {
            title: 'Domains',
            url: '/domains',
            icon: IconWorld,
        },
        {
            title: 'Passwords',
            url: '/passwords',
            icon: IconLockPassword,
        },
        {
            title: 'Subscriptions',
            url: '/passwords',
            icon: IconLockPassword,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem className="flex items-center">
                        <SidebarMenuButton
                            asChild
                            className="data-[slot=sidebar-menu-button]:!p-1.5"
                        >
                            <a href="#">
                                <IconInnerShadowTop className="!size-5" />
                                <span className="text-base font-semibold">Hashim Baig</span>
                            </a>
                        </SidebarMenuButton>
                        <SidebarMenuButton asChild>
                            <ThemeToggle />
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    );
}
