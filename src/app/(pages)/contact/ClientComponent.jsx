"use client";
import SectionName from '@/app/components/common/SectionName'
import SectionTitleAndDesc from '@/app/components/common/SectionTitleAndDesc'
import { ChevronDown, Github, Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react'
import React, { useRef, useState } from 'react'
import Image from 'next/image';
import img1 from '../../../../public/aboutpage/me75.webp'
import emailjs from "@emailjs/browser";
import FAQS from '../../components/Faqs/FAQS'

const ClientComponent = () => {
    const formRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs
            .sendForm(
                "service_25zeyqg",
                "template_1c1sijg",
                formRef.current,
                "lX5reIWKLGr1jLJVH"
            )
            .then(
                (result) => {
                    alert("Message sent!");
                    formRef.current?.reset();
                },
                (error) => {
                    console.error(error.text);
                    alert("Failed to send message.");
                }
            )
            .finally(() => setIsLoading(false));
    };

    return (
        <>
            <section id='ContactForm' className='max-screen'>
                <SectionName title="connect with me" extraClass="mb-4" />
                <div className='w-[100%] md:w-[40%]'>
                    <SectionTitleAndDesc text="Let's start a project together" heading />
                </div>

                <div className='flex w-full flex-col gap-10 sm:flex-row sm:gap-8 mt-8' >
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className='w-full space-y-4'
                    >

                        <div className="space-y-2 mb-4">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block"
                                htmlFor=":r8:-form-item"
                            >
                                Full Name
                            </label>
                            <input
                                className="flex h-11 w-full rounded-xl border border-bg-600 bg-bg-800 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-secondary focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-highlight-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-bg-900"
                                id=":r8:-form-item"
                                aria-describedby=":r8:-form-item-description"
                                aria-invalid="false"
                                defaultValue=""
                                name="fullName"
                            />
                        </div>

                        <div className="space-y-2 mb-4">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block"
                                htmlFor=":r9:-form-item"
                            >
                                Email
                            </label>
                            <input
                                className="flex h-11 w-full rounded-xl border border-bg-600 bg-bg-800 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-secondary focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-highlight-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-bg-900"
                                id=":r9:-form-item"
                                aria-describedby=":r9:-form-item-description"
                                aria-invalid="false"
                                defaultValue=""
                                name="email"
                            />
                        </div>
                        <div className="space-y-2 mb-4">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block"
                                htmlFor=":ra:-form-item"
                            >
                                Message
                            </label>
                            <textarea
                                className="flex min-h-[100px] w-full rounded-xl border border-bg-600 bg-bg-800 px-3 py-2 text-sm ring-offset-background placeholder:text-text-secondary focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-highlight-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-bg-900 resize-none"
                                name="message"
                                id=":ra:-form-item"
                                aria-describedby=":ra:-form-item-description"
                                aria-invalid="false"
                                defaultValue={""}
                            />
                        </div>

                        <div className='w-max flex justify-end items-center'>
                            <a href="/contact">
                                <button
                                    className="btn ring-offset-background focus-visible:ring-highlight-primary whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 btn__outline"
                                    type="submit"
                                    aria-disabled="false"
                                >
                                    <span className="btn__ripple" />
                                    <span className="block overflow-hidden">
                                        <span className="btn__text" data-attr="Submit">
                                            {isLoading ? "Sending..." : "Submit"}
                                        </span>
                                    </span>
                                </button>
                            </a>
                        </div>
                    </form>
                    <div className='bg-bg-800 h-full w-full rounded-3xl p-6 shadow'>
                        <div className="flex-center mb-5 gap-2 rounded-full px-4 py-2 w-max mr-auto md:mx-0" style={{ background: 'rgba(0,217,255,0.3)' }}>
                            <span className="relative flex h-[6px] w-[6px]">
                                <span className="bg-highlight-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                                <span className="bg-highlight-primary relative inline-flex h-full w-full rounded-full" />
                            </span>
                            <p className="text-xs" style={{ color: 'var(--text-primary)' }}>Available for work</p>
                        </div>
                        <Image
                            alt="Lazim Latheef (Lazim Mv) Lazim"
                            loading="lazy"
                            width={100}
                            height={100}
                            decoding="async"
                            data-nimg={1}
                            className="border-bg-600 aspect-square overflow-hidden rounded-full border object-cover p-2"
                            src={img1}
                            style={{ color: "transparent" }}
                        />
                        <p className="mt-4 mb-6">
                            My inbox is always open, Whether you have a project or just want to say Hi.
                            I would love to hear from you. Feel free to contact me and I'll get back to you.
                        </p>

                        <div className="flex items-center  opacity-container text-text-secondary gap-6">
                            <a
                                href="https://www.linkedin.com/in/lazim-mv-/"
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
                </div>
            </section>

            <FAQS />
        </>
    )
}

export default ClientComponent