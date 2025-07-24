"use client";
import React, { useRef, useLayoutEffect, useState } from 'react'
import gsap from '@/app/utils/gsapInit';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionName from '../common/SectionName';
import FadeInOnScroll from '../common/FadeInOnScroll';



const About = () => {
    const containerRef = useRef(null)
    const [isMobile, setIsMobile] = useState(false)


    const text = "I'm Lazim Latheef. Fullstack developer and creative technologist passionate about turning ideas into clean, scalable digital experiences. I partner with teams of all sizes to build fast, accessible websites, dashboards, and full products that balance design and functionality with purpose and performance."

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const textElement = containerRef.current.querySelector('.description-text')

            setIsMobile(window.innerWidth < 768);

            if (!textElement) return

            // Split text into words first, then characters within each word
            const words = text.split(' ').map((word, wordIndex) => {
                const chars = word.split('').map((char, charIndex) => {
                    return `<span class="char" style="opacity: 0.2; display: inline-block;">${char}</span>`
                }).join('')

                // Wrap each word in a span with inline-block and add space after (except last word)
                const spaceAfter = wordIndex < text.split(' ').length - 1 ?
                    '<span class="char" style="opacity: 0.2; display: inline-block;">&nbsp;</span>' : ''

                return `<span class="word" style="display: inline-block; white-space: nowrap;">${chars}</span>${spaceAfter}`
            }).join('')

            textElement.innerHTML = words

            // Get all character spans (including spaces)
            const charElements = textElement.querySelectorAll('.char')

            // Set initial state
            gsap.set(charElements, { opacity: 0.2 })

            // Create scroll trigger animation
            ScrollTrigger.create({
                trigger: textElement,
                start: "top 95%",
                end: isMobile ? "bottom 90%" : "bottom 50%",
                markers: false,
                scrub: true,
                animation: gsap.to(charElements, {
                    opacity: 1,
                    duration: 0.01,
                    stagger: {
                        each: 0.02,
                        from: "start"
                    },
                    ease: "none",
                    delay: 1.5,
                }),
            })

        }, containerRef)

        return () => {
            ctx.revert()
        }
    }, [])

    return (
        <section ref={containerRef} className='max-screen flex-center flex-col'>

            <SectionName title="About Me" extraClass="mb-4" />

            <FadeInOnScroll animation={!isMobile}>
                <p className='description-text font-satoshi text-center 
            text-text-primary text-2xl font-medium tracking-wide sm:text-3xl md:text-[2rem]'
                    style={{
                        color: 'var(--text-primary)',
                        lineHeight: '1.4',
                        maxWidth: '90%', // Limit width for better centering
                        margin: '0 auto', // Center the paragraph block
                        display: 'block' // Ensure block-level centering
                    }}
                >
                    {text}
                </p>
            </FadeInOnScroll>
        </section>
    )
}
export default About