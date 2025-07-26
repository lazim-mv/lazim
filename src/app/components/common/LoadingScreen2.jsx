"use client";

import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "../../utils/gsapInit";

const LoadingScreen2 = ({ isReady, loadingProgress = 0, onRevealComplete }) => {
    const containerRef = useRef(null);
    const progressBarRef = useRef(null);
    const revealRef = useRef(null);

    useGSAP(() => {
        if (!containerRef.current || !progressBarRef.current || !revealRef.current) return;



        // Always animate the progress bar width when loadingProgress changes
        gsap.to(progressBarRef.current, {
            width: `${loadingProgress}%`,
            duration: 0.8,
            ease: "power2.out",

        });

        // Only start the reveal animation when isReady becomes true
        if (isReady) {
            const tl = gsap.timeline();
         

            tl.to(progressBarRef.current, {
                x: loadingProgress === 100 && "100%",
            }, 0)

                .to(revealRef.current, {
                    clipPath: "circle(10% at 100% 100%)",
                    // opacity: 0,
                    duration: .8,
                    ease: "power2.inOut",
                })

                .set(containerRef.current, {
                    display: "none",
                })
                // Call the callback when animation is complete
                .call(() => {
                    if (onRevealComplete) {
                        onRevealComplete();
                    }
                });
        }
    }, [isReady, loadingProgress]);

    return (
        <div
            ref={containerRef}
            className="fixed top-0 left-0 w-full h-screen z-50 overflow-hidden"
        >
            {/* Progress Bar */}
            <div
                ref={progressBarRef}
                className="fixed top-0 left-0 bg-[var(--highlight)] z-50 h-1"
                style={{ width: "0%" }}
            />

            {/* Reveal Overlay */}
            <div
                ref={revealRef}
                className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center"
                style={{
                    backgroundColor: "var(--bg-900)",
                    clipPath: "circle(75% at 50% 50%)",
                }}
            >

            </div>
        </div>
    );
};

export default LoadingScreen2;