"use client";
import React, { useRef } from 'react'
import SectionName from '../common/SectionName'
import { useGSAP } from '@gsap/react';
import gsap from '@/app/utils/gsapInit';
import { projectData } from './data';
import Image from 'next/image';
import TextReveal from '../common/gsapAnimations/TextReveal';
import FadeInOnScroll from '../common/FadeInOnScroll';
import SectionTitleAndDesc from '../common/SectionTitleAndDesc';

const Projects = () => {
    const containerRef = useRef(null);



    return (
        <section className='max-screen' ref={containerRef}>

            <SectionName title='My Work' extraClass="mb-4" />


            <div className='md:w-[70%] w-[100%] '>
                <SectionTitleAndDesc text="Work Showcase" heading />
            </div>
            <SectionTitleAndDesc
                text="Here's a curated selection showcasing my expertise and the achieved results."
                desc="true"
            />

            <FadeInOnScroll>
                <div className='opacity-container py-16 grid grid-cols-1 grid-rows-[masonry] gap-y-10 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-0' >
                    {projectData
                        .filter((data) => data.fav)
                        .map((data, index) => (
                            <div className="opacity-container-child group h-fit w-full cursor-pointer sm:even:mt-14" key={index}>
                                <a className="h-fit w-full" href="projects/aora">
                                    <span
                                        className="aos-init aos-animate"
                                    >
                                        <div
                                            style={{ backgroundColor: data.color }}
                                            className="aspect-3/2 w-full overflow-hidden rounded-3xl"
                                        >
                                            <Image
                                                alt="Aora"
                                                width={600}
                                                height={300}
                                                decoding="async"
                                                className="aspect-3/2 w-full object-cover transition duration-300 group-hover:scale-[1.015]"
                                                style={{ color: "transparent" }}
                                                src={data.webImage}
                                            />
                                        </div>
                                    </span>
                                    <span
                                        className="aos-init aos-animate"
                                    >
                                        <div className="mt-4 space-y-2">
                                            <h5>{data.name}</h5>
                                            <div className="flex justify-between">
                                                <div className="flex flex-wrap gap-2">
                                                    <p className="text-sm text-text-secondary">{data.workDone}</p>
                                                </div>
                                                <p className="text-sm text-text-secondary">{data.year}</p>
                                            </div>
                                        </div>
                                    </span>
                                </a>
                            </div>
                        ))}
                </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
                <div className='w-[100%] flex justify-center items-center'>
                    <a href="/projects">
                        <button
                            className="btn ring-offset-background focus-visible:ring-highlight-primary whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 btn__outline"
                            type="button"
                            aria-disabled="false"
                        >
                            <span className="btn__ripple" />
                            <span className="block overflow-hidden">
                                <span className="btn__text" data-attr="View All Projects">
                                    View All Projects
                                </span>
                            </span>
                        </button>
                    </a>
                </div>
            </FadeInOnScroll>

        </section>
    )
}

export default Projects