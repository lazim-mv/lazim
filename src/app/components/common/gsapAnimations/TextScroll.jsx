"use client";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./gsap.module.css";

gsap.registerPlugin(ScrollTrigger);

const TextScroll = ({ hText, pTExt, textAllign }) => {
    useLayoutEffect(() => {
        const ctx1 = gsap.context(() => {
            const textElements = document.querySelectorAll(`.${styles.text}`);
            textElements.forEach((textElement) => {
                ScrollTrigger.create({
                    trigger: textElement,
                    start: "top 95%",
                    // end: "bottom 40%",
                    end: "bottom 60%",
                    markers: false,
                    scrub: true,
                    animation: gsap.to(textElement, {
                        backgroundSize: "100%",
                        ease: "none",
                        delay: 1.5,
                    }),
                });
            });
        });

        return () => {
            ctx1.revert();
        };
    }, []);

    return (
        <div>
            {hText &&
                <h6 className="flex flex-wrap justify-center font-satoshi text-text-primary text-2xl font-medium tracking-wide sm:text-3xl md:text-[2rem]" style={{ textAlign: textAllign }}>
                    <span className={styles.text}>{hText}</span>
                </h6>
            }
            {pTExt &&
                <p
                    className={`reveal-type ${styles.expDecText}`}
                    data-bg-color="rgba(255, 255, 255, 0.6)"
                    data-fg-color="#fff"
                >
                    {pTExt}
                </p>
            }
        </div>
    );
};

export default TextScroll;