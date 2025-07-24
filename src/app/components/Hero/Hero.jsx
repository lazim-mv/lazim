import React from 'react'
import './HeroStyles.css'
import { ArrowUpRight, Hand, Sparkle } from 'lucide-react'

const Hero = () => {
    return (
        <section className='max-screen hero'>
            <div className='md:flex-center items-center mb-8 flex flex-col gap-4 md:flex-row'>
                <div className="bg-bg-700 h-px w-full" />
                <p className="text-text-primary flex items-center justify-center gap-2 w-max whitespace-nowrap">
                    <span className="wobble-infinite">
                        <Hand color='var(--highlight)' />
                    </span>
                    Hey! It's Lazim Latheef,
                </p>
                <div className="bg-bg-700 h-px w-full" />
            </div>



            <div className='justify-center items-center md:flex hidden'>
                <h1 className="text-[3rem] text-center leading-none text-pretty md:text-6xl lg:w-3/4 lg:text-7xl">
                    Turning ideas into
                    &nbsp;
                    <span className="text-highlight-primary">immersive digital visions</span>
                    &nbsp;
                    that inspire action &amp;
                    drive real impact
                </h1>
            </div>

            <div className='justify-center items-center flex md:hidden'>
                <h1 className="text-[3rem] text-center leading-none text-pretty md:text-6xl lg:w-3/4 lg:text-7xl">
                    Turning ideas into <span className="text-highlight-primary">immersive digital visions</span><br />
                    that inspire <span className="text-highlight-primary">action &amp; drive real impact</span>&nbsp;.
                </h1>
            </div>


            <div className="md:flex-center items-center mt-8 flex flex-col gap-4 md:flex-row">
                <div className="bg-bg-700 h-px w-full" />
                <p className=" text-center w-full md:w-[200%] lg:w-[120%]">
                    From concept to launch, crafting pixel perfect, accessible digital solutions that maximize impact, accelerate growth, and elevate user experience.
                </p>
                <div className="bg-bg-700 h-px w-full" />
            </div>


            <div className="mt-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <ul className="opacity-container hidden h-fit gap-4 md:flex">
                    <li className="opacity-container-child h-fit">
                        <a
                            target="_blank"
                            className="flex items-center justify-center text-text-secondary gap-2 text-sm uppercase transition"
                            href="https://www.linkedin.com/in/lazim-mv/"
                        >
                            LinkedIn
                            <span>
                                <ArrowUpRight size={16} />
                            </span>
                        </a>
                    </li>
                    <li className="opacity-container-child h-fit">
                        <a
                            target="_blank"
                            className="flex items-center justify-center text-text-secondary gap-2 text-sm uppercase transition"
                            href="https://github.com/lazim-mv"
                        >
                            GitHub
                            <span>
                                <ArrowUpRight size={16} />
                            </span>
                        </a>
                    </li>
                    <li className="opacity-container-child h-fit">
                        <a
                            href="https://wa.me/918921076209"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center text-text-secondary gap-2 text-sm uppercase transition"
                            aria-label="WhatsApp"
                        >
                            Whatsapp
                            <span>
                                <ArrowUpRight size={16} />
                            </span>
                        </a>
                    </li>
                    <li className="opacity-container-child h-fit">
                        <a
                            target="_blank"
                            className="flex items-center justify-center text-text-secondary gap-2 text-sm uppercase transition"
                            href="mailto:lazimlatheef@gmail.com"
                        >
                            Gmail
                            <span>
                                <ArrowUpRight size={16} />
                            </span>
                        </a>
                    </li>
                </ul>
                <a href="/about" className='m-auto md:m-0'>
                    <button
                        className="btn ring-offset-background focus-visible:ring-highlight-primary whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 btn__outline"
                        type="button"
                        aria-disabled="false"
                    >
                        <span className="btn__ripple" />
                        <span className="block overflow-hidden">
                            <span className="btn__text" data-attr="About me">
                                Know me better
                            </span>
                        </span>
                    </button>
                </a>
            </div>
        </section>


    )
}

export default Hero