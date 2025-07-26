"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import SectionName from "@/app/components/common/SectionName";
import SectionTitleAndDesc from "@/app/components/common/SectionTitleAndDesc";
import FadeInOnScroll from "@/app/components/common/FadeInOnScroll";
import { projectProcessSection, projectSequenceData } from "../../data";

gsap.registerPlugin(ScrollTrigger);



const ProjectProcess2 = () => {
    const projectContainerRef = useRef(null);
    const cardsRef = useRef(null);

    useGSAP(
        () => {
            const cardElements = cardsRef.current.children;
            const cardWidth = cardElements[0].offsetWidth;
            const gap = 32; 
            const scrollDistance = cardWidth * 2 + gap;

            gsap.to(".card", {
                x: -400,
                duration: 8,
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: "top 30%",
                    end: "top 0%",
                    scrub: 4,
                    // toggleActions: "play none none none",
                    pin: projectContainerRef.current,
                    pinSpacing: true,
                    markers: {
                        startColor: "purple",
                        endColor: "fuchsia",
                        fontSize: "3rem"
                    }
                }
            });
        },
        { scope: projectContainerRef }
    );

    return (
        <section className='max-screen' ref={projectContainerRef}>
            <div className='w-full'>
                <SectionName title={projectProcessSection.sectionName} extraClass="mb-4" />
                <SectionTitleAndDesc text={projectProcessSection.title} heading />
                <FadeInOnScroll>
                    <p className='mt-4'>{projectProcessSection.description}</p>
                </FadeInOnScroll>
            </div>
            <FadeInOnScroll>
                <div className=' mx-auto mt-8 flex  w-full flex-col items-start justify-center overflow-hidden' ref={cardsRef}>
                    <div className='flex gap-4 flex-col md:flex-row'>
                        {projectSequenceData.map((item, index) => (
                            <div className="card w-full rounded-3xl border border-bg-600 p-6 min-w-[300px]" key={index}>
                                <div className="mb-4 w-fit rounded-full border border-bg-600 bg-bg-700 p-4 text-highlight-primary">
                                    <item.icon size={18} strokeWidth={2} />
                                </div>
                                <h5 className="mb-2 font-satoshi">{item.step}.{item.title}</h5>
                                <p>
                                    {item.description}
                                </p>

                            </div>
                        ))}
                    </div>
                </div>
            </FadeInOnScroll>
        </section>
    );
};

export default ProjectProcess2;
