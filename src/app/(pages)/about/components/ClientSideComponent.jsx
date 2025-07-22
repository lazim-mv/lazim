"use client";
import SectionTitleAndDesc from '@/app/components/common/SectionTitleAndDesc'
import Image from 'next/image'
import React, { useState } from 'react'
import RotatingWheel from './RotatingWheel'
import MarqueeLogos from '@/app/components/common/marquee/MarqueeLogos'
import SectionName from '@/app/components/common/SectionName'
import { experienceData, projectProcessSection, projectSequenceData, workPhilosophies } from '../data';
import FadeInOnScroll from '@/app/components/common/FadeInOnScroll';

const ClientSideComponent = () => {

    const [openIndex, setOpenIndex] = useState(null);
    const [showAll, setShowAll] = useState(false);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const toggleShowAll = () => {
        setShowAll((prev) => !prev);
    };


    const visibleExperience = showAll ? experienceData : experienceData.slice(0, 4);

    return (
        <>
            <section
                className='max-screen md:py-lg md:pt-sm flex flex-col 
            items-center gap-8 overflow-x-hidden pt-0 sm:flex-row md:gap-16 md:pt-8'
                style={{ paddingTop: "2rem", }}
            >
                <div className='relative w-full sm:w-1/2'>
                    <div className='h-full w-full overflow-hidden rounded-b-full'>
                        <Image
                            alt="Hero Image"
                            loading="lazy"
                            width={400}
                            height={600}
                            decoding="async"
                            data-nimg={1}
                            className="aspect-3/4 h-full w-full object-cover transition duration-300 hover:scale-[1.015]"
                            style={{ color: "transparent" }}
                            src="/aboutpage/me.jpg"
                        />

                    </div>
                    <a href='/contact' className='absolute bottom-0 right-0'>
                        <RotatingWheel
                            size={160}
                            hoverRotation="rotate-180"
                            className="cursor-pointer"
                        />
                    </a>
                </div>
                <div className='w-full space-y-6'>
                    <h1
                        className="text-balance 
                        text-[3rem] leading-none md:text-6xl lg:w-3/4 lg:text-7xl
                        "
                        style={{ width: "100%" }}
                    >
                        A <span className="text-highlight-primary">creative developer</span>
                        &nbsp;
                        & digital designer
                    </h1>

                    <p className='text-balance w-[100%] md:w-[70%]'>
                        I build modern, user friendly web and mobile experiences focused on performance, usability, and real world impact
                    </p>

                    <a href="/Mohammed Lazim Latheef.pdf" target="_blank" rel="noopener noreferrer" className="m-auto md:m-0">
                        <button
                            className="btn ring-offset-background focus-visible:ring-highlight-primary whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 btn__outline"
                            type="button"
                            aria-disabled="false"
                        >
                            <span className="btn__ripple" />
                            <span className="block overflow-hidden">
                                <span className="btn__text" data-attr="Resume">
                                    My Resume
                                </span>
                            </span>
                        </button>
                    </a>


                </div>
            </section>

            <MarqueeLogos border={true} />

            <section className='max-screen flex flex-col gap-8 sm:flex-row sm:gap-12'>
                <div className='top-40 h-fit md:sticky'>
                    <SectionName title='Career Highlights' extraClass="mb-4" />
                    <SectionTitleAndDesc text='Experience' heading />
                    <div className='md:w-[100%]'>
                        <SectionTitleAndDesc text='I have worked with some of the most innovative industry leaders to help build their top-notch products.' desc />
                    </div>
                </div>

                <div className='flex w-full flex-col items-center'>
                    <div className="w-full">
                        {visibleExperience.map((exp, index) => (
                            <div key={index} className="border-bg-700 mb-4 rounded-none border-0 border-b bg-transparent">
                                <h3 data-orientation="vertical" data-state="open" className="flex">
                                    <button
                                        type="button"
                                        aria-expanded={openIndex === index}
                                        onClick={() => toggle(index)}
                                        className="font-satoshi text-text-primary flex-1 cursor-pointer justify-between text-left text-base font-medium transition-all [&[aria-expanded=true]>.chevron]:rotate-180 flex items-center gap-2 p-0 pb-4"
                                        data-radix-collection-item=""
                                    >
                                        <img
                                            alt={exp.company}
                                            loading="lazy"
                                            width={50}
                                            height={50}
                                            className="mr-2 aspect-square h-10 w-fit rounded-full border border-bg-600 bg-bg-800"
                                            src={exp.icon}
                                            style={{ color: 'transparent', objectFit: 'cover' }}
                                        />
                                        <div className="w-full">
                                            <h6 className="text-text-primary">{exp.role}</h6>
                                            <div className="flex justify-between">
                                                <span className="text-sm text-text-secondary underline-offset-4 hover:underline">
                                                    @{exp.company}
                                                </span>
                                                <p className="text-xs text-text-secondary">{exp.date}</p>
                                            </div>
                                        </div>
                                    </button>
                                </h3>

                                <div
                                    className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-[1000px] opacity-100 py-2 pb-4' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <ul className="list-disc space-y-2 pl-4 text-sm">
                                        {exp.points.map((point, i) => (
                                            <li key={i} className='text-xs text-text-secondary'>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className="ring-offset-background 
                    focus-visible:outline-hidden focus-visible:ring-highlight-primary inline-flex 
                    cursor-pointer items-center justify-center whitespace-nowrap text-sm transition-all 
                    focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none 
                    disabled:opacity-50 underline-link text-text-primary rounded-none font-semibold px-8 py-3 m-auto"
                        onClick={toggleShowAll}
                    >
                        {showAll ? 'Show Less' : 'Show More'}
                    </button>
                </div>
            </section>

            <section className='max-screen'>
                <div className='w-full'>
                    <SectionName title={projectProcessSection.sectionName} extraClass="mb-4" />
                    <SectionTitleAndDesc text={projectProcessSection.title} heading />
                    <FadeInOnScroll>
                        <p className='mt-4'>{projectProcessSection.description}</p>
                    </FadeInOnScroll>
                </div>
                <FadeInOnScroll>
                    <div className=' mx-auto mt-8 flex  w-full flex-col items-start justify-center overflow-hidden'>
                        <div className='flex gap-4 flex-col md:flex-row'>
                            {projectSequenceData.map((item, index) => (
                                <div className="w-full rounded-3xl border border-bg-600 p-6 min-w-[300px]" key={index}>
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

            <section className='max-screen flex flex-col-reverse items-center gap-8 md:flex-row md:gap-20'>
                <div className='grid grid-cols-1 grid-rows-[masonry] gap-4 sm:grid-cols-2'>
                    {workPhilosophies.map((item, index) => (
                        <div className="rounded-3xl border border-bg-600 p-6 h-fit w-full " key={index}>
                            <FadeInOnScroll>
                                <div className="mb-4 w-fit rounded-full border border-bg-600 bg-bg-700 p-4 text-highlight-primary">
                                    <item.icon size={18} strokeWidth={2} />
                                </div>
                                <h5 className="mb-2 font-satoshi">{item.title}</h5>
                                <p>{item.description}</p>
                            </FadeInOnScroll>
                        </div>
                    ))}
                </div>
                <div className='w-full'>
                    <SectionName title='Work Philosophy' extraClass="mb-4" />
                    <SectionTitleAndDesc text='Behind Every Line of Code' heading />
                    <FadeInOnScroll>
                        <p className='mt-4'>My approach to work is driven by core values that shape how I build,
                            communicate, and deliver. These philosophies guide my daily
                            actions and long-term growth, ensuring everything I contribute is thoughtful, effective, and human-centered.
                        </p>
                    </FadeInOnScroll>
                </div>
            </section>
        </>
    )
}

export default ClientSideComponent