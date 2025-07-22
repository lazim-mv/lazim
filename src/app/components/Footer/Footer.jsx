"use client";
import React, { useEffect, useRef, useState } from 'react'
import { Mail, Linkedin, Instagram, MessageCircle, Github } from "lucide-react";
import TextReveal from '../common/gsapAnimations/TextReveal';
import { usePathname } from 'next/navigation';




const Footer = () => {
    const sectionRef = useRef(null);
    const pathname = usePathname();


    return (
        <section className='max-screen py-sm z-40 space-y-6 pb-0' style={{ paddingBottom: "10px" }} ref={sectionRef}>
            {pathname !== "/contact" &&
                <div
                    className='flex md:flex-row flex-col gap-4 bg-bg-800 rounded-3xl px-8 
                        py-14 shadow md:justify-between justify-center items-center
                        text-center md:text-left md:min-h-[17.195767195767196vw]
                        footerCustom'

                >
                    <div className='flex-col items-start justify-center '>
                        <div className="flex-center mb-5 gap-2 rounded-full px-4 py-2 w-max mx-auto md:mx-0" style={{ background: 'rgba(0,217,255,0.3)' }}>
                            <span className="relative flex h-[6px] w-[6px]">
                                <span className="bg-highlight-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                                <span className="bg-highlight-primary relative inline-flex h-full w-full rounded-full" />
                            </span>
                            <p className="text-xs" style={{ color: 'var(--text-primary)' }}>Available for work</p>
                        </div>

                        <div className='flex flex-col md:gap-2'>
                            <TextReveal text="From Idea to Reality." containerRef={sectionRef} animationStart={'top bottom'} heading />
                            <TextReveal text="Let's Talk" containerRef={sectionRef} animationStart={'top bottom'} heading />
                        </div>
                    </div>

                    <div className='w-max flex justify-end items-center'>
                        <a href="/contact">
                            <button
                                className="btn ring-offset-background focus-visible:ring-highlight-primary whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 btn__outline"
                                type="button"
                                aria-disabled="false"
                            >
                                <span className="btn__ripple" />
                                <span className="block overflow-hidden">
                                    <span className="btn__text" data-attr="Contact Me">
                                        Contact Me
                                    </span>
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
            }
            <div className="z-10 flex flex-col justify-between gap-4 sm:flex-row items-center">
                <p className="mb-4 text-center text-sm sm:mb-0 sm:text-left">
                    © 2025 Lazim MV. All rights reserved.
                </p>

                <div className="flex items-center  opacity-container text-text-secondary gap-6">
                    <a
                        href="https://www.linkedin.com/in/lazim-mv/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--text-secondary)' }}
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} className='opacity-container-child' />
                    </a>
                    <a
                        href="https://github.com/lazim-mv/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--text-secondary)' }}
                        aria-label="LinkedIn"
                    >
                        <Github size={20} className='opacity-container-child' />
                    </a>
                    <a
                        href="https://www.instagram.com/lazim_mv/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--text-secondary)' }}
                        aria-label="Instagram"
                    >
                        <Instagram size={20} className='opacity-container-child' />
                    </a>
                    <a
                        href="mailto:lazimlatheef@gmail.com"
                        style={{ color: 'var(--text-secondary)' }}
                        aria-label="Email"
                    >
                        <Mail size={20} className='opacity-container-child' />
                    </a>
                    <a
                        href="https://wa.me/918921076209"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--text-secondary)' }}
                        aria-label="WhatsApp"
                    >
                        <MessageCircle size={20} className='opacity-container-child' />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Footer