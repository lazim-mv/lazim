"use client";
import React, { useRef } from 'react'
import Image from 'next/image';
import { projectData } from '@/app/components/Projects/data';
import SectionName from '@/app/components/common/SectionName';
import TextReveal from '@/app/components/common/gsapAnimations/TextReveal';
import SectionTitleAndDesc from '@/app/components/common/SectionTitleAndDesc';
import FadeInOnScroll from '@/app/components/common/FadeInOnScroll';

const AllProjects = () => {
    const containerRef = useRef(null);

    return (
        <section id='All Projects' className='max-screen' ref={containerRef}>
            <SectionName title='My Work' extraClass="mb-4" />

            <div className='md:w-[50%] w-[100%]'>
                <SectionTitleAndDesc text="Creating next level digital products" heading="true" />
            </div>

            <SectionTitleAndDesc text="Here's a curated selection showcasing my expertise and the achieved results." desc="true" />

            <div className='opacity-container py-16 grid grid-cols-1 grid-rows-[masonry] gap-y-10 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-0' >
                {projectData.map((data, index) => (
                    <div className="opacity-container-child group h-fit w-full cursor-pointer sm:even:mt-14" key={index}>
                        <FadeInOnScroll>
                            <a
                                className="h-fit w-full"
                                href={`/projects/${data.id}`}>
                                <span
                                    className="aos-init aos-animate"
                                >
                                    <div
                                        style={{ backgroundColor: data.color }}
                                        className="aspect-3/2 w-full overflow-hidden rounded-3xl"
                                    >
                                        <Image
                                            alt={data.alt}
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
                        </FadeInOnScroll>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default AllProjects