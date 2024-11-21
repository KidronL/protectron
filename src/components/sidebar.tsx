import { FileLock2, Home, RectangleEllipsis, ShieldEllipsis, } from 'lucide-react'
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarGroupLabel,
    SidebarGroupContent,
} from "@/components/ui/sidebar";

import React from "react";

const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "Vaults",
        url: "/vault",
        icon: FileLock2,
    },
    {
        title: "Password Generator",
        url: "#",
        icon: RectangleEllipsis,
    },
    {
        title: "Password Checker",
        url: "#",
        icon: ShieldEllipsis,
    },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Protectron</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}