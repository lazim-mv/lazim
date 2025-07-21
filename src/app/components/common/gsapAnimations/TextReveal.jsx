"use client";

import gsap from '@/app/utils/gsapInit';
import { useGSAP } from '@gsap/react';
import React, { useRef, useEffect } from 'react';



const TextReveal = ({ text, containerRef: externalRef, animationStart = 'top 100%', desc = false, heading = false }) => {
    const textRef = useRef(null);

    const scrollRef = externalRef;

    // useGSAP(() => {
    //     const el = textRef.current;
    //     if (!el) return;

    //     const chars = text.split('').map((char, idx) =>
    //         char === ' '
    //             ? `<span class="space" data-idx="${idx}">&nbsp;</span>`
    //             : `<span class="char" data-idx="${idx}">${char}</span>`
    //     ).join('');
    //     el.innerHTML = chars;

    //     const scopedChars = el.querySelectorAll('.char');

    //     gsap.set(el, { opacity: 0, y: 20 });
    //     gsap.set(scopedChars, { opacity: 0, y: 20 });

    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: scrollRef.current,
    //             start: animationStart,
    //             once: true,
    //         },
    //     });

    //     tl.to(el, {
    //         opacity: 1,
    //         y: 0,
    //         duration: 0.3,
    //         delay: 0,
    //         ease: "sine.inOut"
    //     });

    //     tl.to(scopedChars, {
    //         opacity: 1,
    //         y: 0,
    //         duration: 0.3,
    //         stagger: 0.05,
    //         ease: "sine.inOut"
    //     }, "-=0.1");

    // }, { scope: scrollRef });

    return (
        <div ref={externalRef}>
            {heading &&
                <h2
                    ref={textRef}
                    className=""
                    role="heading"
                    style={{ opacity: 1 }}
                >
                    {text}
                </h2>}

            {desc &&
                <p

                    className="mt-2"
                >
                    Here's a curated selection showcasing my expertise and the achieved results.
                </p>
            }
        </div>
    );
};

export default TextReveal;
