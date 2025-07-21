"use client";

import { useEffect, useState } from "react";

const BottomFade = ({
    fadeDirection = "top",
    placement = "bottom",
    height = "8rem",
    threshold = 100, // px from top/bottom to hide
}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const bodyHeight = document.body.scrollHeight;

            const fromTop = scrollY;
            const fromBottom = bodyHeight - (scrollY + windowHeight);

            const shouldShow = fromTop > threshold && fromBottom > threshold;
            setIsVisible(shouldShow);
        };

        handleScroll(); // initialize on mount
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll); // in case of viewport changes
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [threshold]);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed ${placement}-0 left-0 w-full pointer-events-none z-[20]`}
            style={{
                height,
                mixBlendMode: "multiply",
                background: `
          linear-gradient(to ${fadeDirection},
            var(--gradient-start),
            var(--gradient-end)
          )
        `,
            }}
        />
    );
};

export default BottomFade;
