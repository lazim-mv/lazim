"use client";
import React, { useRef, useState } from 'react'
import { testimonialsData } from './content'
import SectionName from '../common/SectionName';
import SectionTitleAndDesc from '../common/SectionTitleAndDesc';
import FadeInOnScroll from '../common/FadeInOnScroll';

const Testimonials = ({ isMobile, hasMounted }) => {
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
        )
    }

    if (!hasMounted) {
        return null
    }



    return (
        <section id="testimonials" className='max-screen' ref={containerRef}>
            <div className="flex flex-col">
                <SectionName title='Testimonials' extraClass="mb-4" />
                <SectionTitleAndDesc text="What Others Say" heading />
                <FadeInOnScroll>
                    <div className='flex justify-between md:flex-row flex-col mt-8'>
                        <div className='md:w-[70%] w-[100%] flex flex-col'>
                            <div className='relative overflow-hidden'>
                                <div
                                    className='flex transition-transform duration-500 ease-in-out'
                                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                                >
                                    {testimonialsData.map((data, index) => (
                                        <div key={index}
                                            // className='w-full flex-shrink-0 border-bg-700 bg-bg-700 flex h-fit flex-col gap-4 rounded-3xl border p-6 sm:p-8'
                                            className='w-full flex-shrink-0 border-bg-700 flex h-fit flex-col gap-4 rounded-3xl border p-6 sm:p-8'

                                        >
                                            <p className='' >
                                                {data.testimonial}
                                            </p>
                                            {data.name && (
                                                <div className='md:mt-[3rem] mt-[30px] flex gap-3 items-center'>
                                                    <div className='rounded-full 
                                                hover:bg-gray-400 flex items-center justify-center bg-bg-800'
                                                        style={{ width: 'max(3.5rem, 32px)', height: 'max(3.5rem, 32px)' }}
                                                    >
                                                        <h3 className='text-center'
                                                            style={{ color: 'var(--text-primary)' }}
                                                        >
                                                            {data.initial}</h3>
                                                    </div>

                                                    <div className='flex flex-col gap-1 '>
                                                        <h5 className=''>{data.name}</h5>
                                                        <p className='text-text-secondary text-sm'>{data.company}</p>
                                                    </div>

                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-3 mt-8 md:mt-0'>
                            <div
                                onClick={prevTestimonial}
                                className='relative overflow-hidden group flex items-center justify-center rounded-full hover:bg-gray-400 cursor-pointer transition-all duration-300'
                                style={{
                                    width: 'max(2.5rem, 28px)',        // smaller default
                                    height: 'max(2.5rem, 28px)',
                                    background: 'var(--text-primary)',
                                }}
                            >
                                <div className='absolute inset-0 bg-[var(--bg-800)] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out'></div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12" height="6"   // smaller SVG on mobile
                                    viewBox="0 0 16 8"
                                    className='relative z-10'
                                >
                                    <g clipPath="url(#clip0_1436_35)">
                                        <path
                                            d="M0.646401 3.64659C0.451201 3.84186 0.451201 4.15844 0.646401 4.3537L3.8284 7.53568C4.0237 7.73094 4.3403 7.73094 4.5355 7.53568C4.7308 7.34042 4.7308 7.02384 4.5355 6.82857L1.7071 4.00015L4.5355 1.17172C4.7308 0.97646 4.7308 0.65988 4.5355 0.46461C4.3403 0.26935 4.0237 0.26935 3.8284 0.46461L0.646401 3.64659ZM16 3.50015L1 3.50015L1 4.50015L16 4.50015L16 3.50015Z"
                                            fill="var(--bg-900)"
                                            className='group-hover:fill-[var(--text-primary)] transition-colors duration-300'
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1436_35">
                                            <rect width="16" height="8" fill="white" transform="translate(16 8) rotate(-180)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>

                            <div
                                onClick={nextTestimonial}
                                className='relative overflow-hidden group flex items-center justify-center rounded-full hover:bg-gray-400 cursor-pointer transition-all duration-300'
                                style={{
                                    width: 'max(2.5rem, 28px)',
                                    height: 'max(2.5rem, 28px)',
                                    background: 'var(--text-primary)',
                                }}
                            >
                                <div className='absolute inset-0 bg-[var(--bg-800)] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out'></div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12" height="6"
                                    viewBox="0 0 16 8"
                                    className='relative z-10 rotate-180'
                                >
                                    <g clipPath="url(#clip0_1436_35)">
                                        <path
                                            d="M0.646401 3.64659C0.451201 3.84186 0.451201 4.15844 0.646401 4.3537L3.8284 7.53568C4.0237 7.73094 4.3403 7.73094 4.5355 7.53568C4.7308 7.34042 4.7308 7.02384 4.5355 6.82857L1.7071 4.00015L4.5355 1.17172C4.7308 0.97646 4.7308 0.65988 4.5355 0.46461C4.3403 0.26935 4.0237 0.26935 3.8284 0.46461L0.646401 3.64659ZM16 3.50015L1 3.50015L1 4.50015L16 4.50015L16 3.50015Z"
                                            fill="var(--bg-900)"
                                            className='group-hover:fill-[var(--text-primary)] transition-colors duration-300'
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1436_35">
                                            <rect width="16" height="8" fill="white" transform="translate(16 8) rotate(-180)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                    </div>
                </FadeInOnScroll>
            </div>
        </section>
    )
}

export default Testimonials