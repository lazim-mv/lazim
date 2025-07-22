"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

export default function PageTransition({ children }) {
    const containerRef = useRef(null);
    const pathname = usePathname();
    const isInitialLoad = useRef(true);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;

        // Skip animation on initial load
        if (isInitialLoad.current) {
            isInitialLoad.current = false;
            gsap.set(container, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                visibility: "visible"
            });
            return;
        }

        // Page transition animation
        const tl = gsap.timeline();

        // Exit animation: curtain closes from left-top to right-bottom
        tl.to(container, {
            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
            duration: 0.5,
            ease: "power2.inOut"
        })
            // Reset for enter animation - start with curtain closed
            .set(container, {
                clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
            })
            // Enter animation: curtain opens from left-top to right-bottom
            .to(container, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 0.7,
                ease: "power2.out"
            });

        return () => {
            tl.kill();
        };
    }, [pathname]);

    return (
        <div
            ref={containerRef}
            className="w-full min-h-screen"
            style={{
                clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
                visibility: "hidden",
                willChange: "clip-path"
            }}
        >
            {children}
        </div>
    );
}