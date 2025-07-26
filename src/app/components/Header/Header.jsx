"use client"

import gsap, { ScrollTrigger } from '@/app/utils/gsapInit'
import { toggleTheme } from '@/app/utils/toggleTheme'
import { useGSAP } from '@gsap/react'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef } from 'react'
import './HeaderStyles.css'

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
]

const Header = () => {
    const pathname = usePathname();


    const containerRef = useRef(null);

    useGSAP(() => {
        if (!containerRef.current) return;
        const element = containerRef.current;
        const isMobile = window.innerWidth < 768;


        gsap.set(containerRef.current, {
            y: "-100%",
            filter: "blur(8px)",
            opacity: 0.7,
        });

        gsap.to(containerRef.current, {
            y: 0,
            filter: "blur(0px)",
            opacity: 1,
            duration: .8,
            ease: "back.out(1.2)", 
        });


        const animation = gsap.to(containerRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "350% top",
                scrub: 2,
                onEnter: () => {
                    gsap.set(element, {
                        backgroundColor: "var(--backdrop)",
                        backdropFilter: "blur(12px)",
                    });
                },
                onUpdate: (self) => {
                    // This ensures the backdrop styles are applied based on progress
                    if (self.progress > 0) {
                        gsap.set(element, {
                            backgroundColor: "var(--backdrop)",
                            backdropFilter: "blur(12px)",
                        });
                    } else {
                        gsap.set(element, {
                            backgroundColor: "transparent",
                            backdropFilter: "none",
                        });
                    }
                }
            },
            maxWidth: "600px",
            outline: "1px solid var(--bg-700)",
            opacity: 1,
            width: isMobile ? "98%" : "100%",
            ease: "power1.out",
        });

        // Force refresh and update
        requestAnimationFrame(() => {
            ScrollTrigger.refresh();
        });
    }, { scope: containerRef });







    return (
        <header className="container pointer-events-none sticky flex justify-center items-center left-0 right-0 top-0 z-40 w-full px-0 py-4">
            <nav
                ref={containerRef}
                className="max-screen pointer-events-auto flex w-full
                 items-center justify-between gap-6 rounded-full px-4 py-1 
                 transition-colors sm:px-6 sm:pr-4"
                style={{
                    width: '100%',
                    maxWidth: 1280,
                    backgroundColor: 'transparent',
                    backdropFilter: 'blur(0px)',
                    outline: 'transparent solid 1px',
                    opacity: 1,
                    transform: 'none',
                }}
            >
                <a className="font-clash-display text-2xl font-medium sm:text-xl" href="/">
                    LM
                </a>
                <ul className="text-text-secondary hidden gap-6 text-sm sm:flex">
                    {navLinks.map(({ name, href }) => {
                        const isActive = pathname === href
                        return (
                            <li key={href} className="group relative">
                                <a className={`${isActive ? 'active-link text-text-primary' : ''}`} href={href}>
                                    <span className="relative inline-flex overflow-hidden">
                                        <div className="translate-y-0 skew-y-0 transform-gpu transition-transform duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                                            {name}
                                        </div>
                                        <div className="text-text-primary absolute translate-y-[110%] skew-y-12 transform-gpu transition-transform duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                                            {name}
                                        </div>
                                    </span>
                                    {/* Dot indicator */}
                                    {isActive && (
                                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-text-primary" />
                                    )}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <div className="flex items-center justify-center gap-4" onClick={toggleTheme}>
                    <button className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-highlight-primary inline-flex cursor-pointer items-center justify-center whitespace-nowrap text-sm font-semibold focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-11 w-11 border-bg-700 bg-backdrop text-text-primary relative rounded-full border shadow backdrop-blur-md transition-all active:scale-90 sm:h-10 sm:w-10 sm:border-none sm:bg-transparent sm:shadow-none sm:backdrop-blur-none">
                        <div
                            className="absolute inset-0 flex items-center justify-center"
                            style={{ opacity: 0, transform: 'scale(0.5) rotate(-180deg)' }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-sun"
                                aria-hidden="true"
                            >
                                <circle cx={12} cy={12} r={4} />
                                <path d="M12 2v2" />
                                <path d="M12 20v2" />
                                <path d="m4.93 4.93 1.41 1.41" />
                                <path d="m17.66 17.66 1.41 1.41" />
                                <path d="M2 12h2" />
                                <path d="M20 12h2" />
                                <path d="m6.34 17.66-1.41 1.41" />
                                <path d="m19.07 4.93-1.41 1.41" />
                            </svg>
                        </div>
                        <div
                            className="absolute inset-0 flex items-center justify-center"
                            style={{ opacity: 1, transform: 'none' }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-moon"
                                aria-hidden="true"
                            >
                                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                            </svg>
                        </div>
                        <span className="sr-only">Toggle theme</span>
                    </button>
                </div>
            </nav>
        </header>


    )
}

export default Header