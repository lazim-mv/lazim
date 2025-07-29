"use client";
import React, { useRef } from 'react';
import { projectProcessSection, projectSequenceData } from '../../data';
import SectionName from '@/app/components/common/SectionName';
import SectionTitleAndDesc from '@/app/components/common/SectionTitleAndDesc';
import FadeInOnScroll from '@/app/components/common/FadeInOnScroll';
import { useGSAP } from '@gsap/react';
import gsap, { ScrollTrigger } from '@/app/utils/gsapInit';

const ProjectProcess = () => {
    const containerRef = useRef(null);
    const projectCardsRef = useRef(null);
    const contentRef = useRef(null);

    useGSAP(() => {
        const setupAnimation = () => {
            // Only animate on desktop and tablet
            if (window.innerWidth <= 768) return;

            const container = containerRef.current;
            const cards = projectCardsRef.current;
            const content = contentRef.current;

            if (!container || !cards || !content) return;

            const cardElements = cards.children;
            if (!cardElements.length) return;

            // Clean up existing spacer
            const existingSpacer = container.querySelector('[data-spacer="true"]');
            if (existingSpacer) {
                existingSpacer.remove();
            }

            // Calculate scroll distance based on screen width
            const cardWidth = cardElements[0].offsetWidth;
            const gap = 32; // gap-8 = 32px
            const screenWidth = window.innerWidth;

            let scrollDistance;
            if (screenWidth >= 1280) {
                // XL screens and above
                scrollDistance = cardWidth * 2 + gap;
            } else if (screenWidth >= 1024) {
                // Large screens (1024px - 1279px)
                scrollDistance = cardWidth * 2 + gap + 200;
            } else {
                // Medium screens (769px - 1023px)
                scrollDistance = cardWidth * 2 + gap + 450;
            }

            // Create spacer element for scroll height
            const spacer = document.createElement('div');
            spacer.style.height = `${scrollDistance}px`;
            spacer.setAttribute('data-spacer', 'true');
            container.appendChild(spacer);

            // Set sticky positioning
            gsap.set(content, {
                position: "sticky",
                top: "20%",
                zIndex: 10
            });

            // Horizontal scroll animation
            gsap.to(cards, {
                x: -scrollDistance,
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: `+=${scrollDistance}`,
                    scrub: 1,
                    onRefresh: () => {
                        // Ensure content visibility
                        gsap.set(content, {
                            visibility: "visible",
                            opacity: 1
                        });
                    }
                },
            });
        };

        // Initial setup
        setupAnimation();

        // Handle window resize
        const handleResize = () => {
            // Kill existing ScrollTriggers
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.trigger === containerRef.current) {
                    trigger.kill();
                }
            });
            
            // Reset card position
            if (projectCardsRef.current) {
                gsap.set(projectCardsRef.current, { x: 0 });
            }
            
            // Recreate animation with new dimensions
            setupAnimation();
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
            const spacer = containerRef.current?.querySelector('[data-spacer="true"]');
            if (spacer) {
                spacer.remove();
            }
        };

    }, { scope: containerRef });

    return (
        <div id='ProjectProcess' ref={containerRef} className="relative">
            <div ref={contentRef} className="max-screen py-20 overflow-hidden">
                <div className="w-full mb-8">
                    <SectionName title={projectProcessSection.sectionName} extraClass="mb-4" />
                    <SectionTitleAndDesc text={projectProcessSection.title} heading />
                    <FadeInOnScroll>
                        <p className="mt-4">{projectProcessSection.description}</p>
                    </FadeInOnScroll>
                </div>

                <div className="flex flex-col md:flex-row gap-8 mt-8" ref={projectCardsRef}>
                    {projectSequenceData.map((item, index) => (
                        <div 
                            className="w-full md:min-w-[350px] md:w-[350px] rounded-3xl border border-bg-600 p-6 flex-shrink-0" 
                            key={index}
                        >
                            <div className="mb-4 w-fit rounded-full border border-bg-600 bg-bg-700 p-4 text-highlight-primary">
                                <item.icon size={18} strokeWidth={2} />
                            </div>
                            <h5 className="mb-2 font-satoshi">{item.step}.{item.title}</h5>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectProcess;