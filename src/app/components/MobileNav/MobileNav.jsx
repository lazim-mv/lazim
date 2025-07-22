"use client";
import { House, LayoutDashboard, Send, Smile } from 'lucide-react'
import { usePathname } from 'next/navigation';
import React from 'react'

const MobileNav = () => {
    const pathName = usePathname();

    const navItems = [
        { href: "/", label: "Home", icon: House },
        { href: "/about", label: "About", icon: Smile },
        { href: "/projects", label: "Projects", icon: LayoutDashboard },
        { href: "/contact", label: "Contact", icon: Send },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 w-full flex md:hidden">
            <ul className="border-bg-700 bg-backdrop text-text-secondary flex w-full justify-evenly rounded-t-3xl border-t shadow backdrop-blur-md">
                {navItems.map(({ href, label, icon: Icon }) => {
                    const isActive = pathName === href;
                    const textColor = isActive ? "text-highlight-primary" : "text-text-primary";

                    return (
                        <li key={href} className="p-4">
                            <a
                                href={href}
                                className={`flex flex-col items-center justify-center gap-1 ${textColor}`}
                            >
                                <Icon size={18} strokeWidth={2} color="currentColor" />
                                <span className="text-xs">{label}</span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default MobileNav;
