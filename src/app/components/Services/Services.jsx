"use client";
import React, { useRef, useState } from 'react'
import SectionName from '../common/SectionName'
import { ChevronDown } from 'lucide-react';
import { servicesData } from './content';
import Image from 'next/image';
import './servicesStyles.css';
import MarqueeLogos from '../common/marquee/MarqueeLogos';
import SectionTitleAndDesc from '../common/SectionTitleAndDesc';
import FadeInOnScroll from '../common/FadeInOnScroll';

const Services = () => {

    const containerRef = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0);
    const [expanded, setExpanded] = useState(0);

    const toggleAccordion = (index) => {
        setExpanded(prev => (prev === index ? null : index));
        setActiveIndex(index);
    };



    return (
        <section id='ServiesOffered' className='max-screen' ref={containerRef}>

            <SectionName title='Services' extraClass="mb-4" />


            <div className='md:w-[50%] w-[100%]'>
                <SectionTitleAndDesc text="From Idea to Code" heading />
            </div>


            <div className="flex flex-col md:flex-row gap-6 overflow-hidden mt-8">
                {/* Accordion Panel */}
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                    {servicesData.map((item, index) => {
                        const isOpen = expanded === index;
                        return (

                            <div
                                key={item.id}
                                className="border border-bg-700 bg-bg-800 rounded-2xl overflow-hidden transition-all duration-800"
                            // className="border border-bg-700 rounded-2xl overflow-hidden transition-all duration-800"
                            >
                                <button
                                    className="w-full text-left p-4 flex items-center justify-between cursor-pointer"
                                    style={{ color: 'var(--text-primary)' }}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <span className="flex items-center gap-2">
                                        <item.Icon size={18} /> {item.title}
                                    </span>
                                    <span
                                        className={`transition-transform duration-800 ${isOpen ? 'rotate-180' : 'rotate-0'
                                            }`}
                                    >
                                        <ChevronDown size={18} />
                                    </span>
                                </button>

                                {/* Accordion content with animated height */}
                                <div
                                    className={`transition-all duration-800 overflow-hidden ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="p-4 text-sm text-gray-400">{item.description}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Image Preview with smooth transition */}
                <div className="w-full h-[100%] md:w-1/2 transition-all duration-100 order-[-1]">
                    <Image
                        key={servicesData[activeIndex].image} // forces re-render to animate
                        src={servicesData[activeIndex].image}
                        alt={servicesData[activeIndex].title}
                        width={600}
                        height={400}
                        className="rounded-2xl object-cover w-full h-full transition-opacity duration-500 opacity-0 animate-fadeIn"

                    />
                </div>
            </div>
            <MarqueeLogos />

        </section>
    )
}

export default Services