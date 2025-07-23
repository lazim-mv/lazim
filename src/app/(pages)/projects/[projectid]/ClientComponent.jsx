"use client";
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image';
import React, { useState } from 'react'

const ClientComponent = ({ project, next, previous }) => {
    const [iframeLoaded, setIframeLoaded] = useState(false);



    
    return (
        <>
            <div className="flex w-full items-center justify-between">
                <a
                    className="text-text-secondary hover:text-text-primary flex items-center gap-2 p-1 transition-colors"
                    href="/projects"
                >
                    <ArrowLeft size={16} strokeWidth={2} />
                    <span className="text-sm">Back to Projects</span>
                </a>
                {project.year &&
                    <div className="inline-flex w-fit min-w-fit items-center gap-2 border text-sm shadow transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 border-bg-600 text-text-secondary rounded-sm px-2 py-1">
                        {project.year}
                    </div>
                }
            </div>


            <div className="flex flex-col gap-4 mt-8 ">
                <div className="flex flex-wrap justify-between gap-4 md:items-end">
                    <h1 className='text-5xl'>{project?.name}</h1>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                    <p className="text-text-secondary w-full sm:w-2/3">
                        {project?.longDescription}
                    </p>
                </div>
                {project.tags && project.tags.length > 0 &&
                    <div className="flex flex-wrap gap-2">
                        {project?.tags.map((tag, index) => (
                            <div
                                key={index}
                                className="inline-flex w-fit min-w-fit items-center gap-2 rounded-full 
                         text-sm shadow transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring 
                         focus:ring-offset-2 border-transparent bg-bg-800 text-text-primary dark:bg-bg-700 px-3 py-1"
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                }
            </div>

            {project.problemStatement &&
                <div className='mt-12'>
                    <h2 id="problem-statement" className='pb-2'>
                        <a className="anchor" href="#problem-statement">
                            <span className="icon icon-link" />
                        </a>
                        Problem Statement
                    </h2>
                    <p>
                        {project?.problemStatement}
                    </p>
                </div>
            }

            {project.images && project.images.length > 0 &&
                (
                    <div className='mt-8'>
                        <h2 id="problem-statement" className='pb-2'>
                            <a className="anchor" href="#problem-statement">
                                <span className="icon icon-link" />
                            </a>
                            Website
                        </h2>
                        <div>
                            {project.images.map((image, index) => (
                                <Image
                                    alt={project.alt}
                                    width={600}
                                    height={300}
                                    key={index}
                                    decoding="async"
                                    className="aspect-3/2 w-full object-cover transition duration-300 group-hover:scale-[1.015]"
                                    style={{ color: "transparent" }}
                                    src={image}
                                    quality={100}
                                    unoptimized
                                />
                            ))}
                        </div>
                    </div>
                )}

            {project.link && project.link !== "" && (
                <div className='mt-8'>
                    <h2 id="problem-statement" className='pb-2'>
                        <a className="anchor" href="#problem-statement">
                            <span className="icon icon-link" />
                        </a>
                        Website
                    </h2>
                    <div className={`w-full ${project.id === "smartplus" || project.id === "igreenie"
                        ? "h-[80vh] md:h-[60vh]"
                        : "h-[80vh]"
                        } relative`}
                    >

                        {!iframeLoaded && (
                            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded z-5" />
                        )}

                        {/* Clickable overlay for opening in new tab */}
                        <div
                            onClick={() => window.open(project.link, '_blank')}
                            className='absolute inset-0 z-20 cursor-pointer transition-colors'
                            title="Click to open in new tab"
                        />

                        {/* Iframe with modern settings */}
                        <iframe
                            // ref={iframeRef}
                            src={project.link}
                            className="w-full h-full relative z-10 rounded transition-opacity duration-300"
                            style={{
                                backgroundColor: 'white',
                                pointerEvents: 'none',
                                overflow: 'hidden',
                                scrollBehavior: 'smooth',
                                isolation: 'isolate',
                                willChange: 'transform',

                            }}
                            onLoad={() => setIframeLoaded(true)}
                            // loading="lazy"
                            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                            title={`Preview of ${project.name || 'project'}`}
                            // onLoad={handleIframeLoad}
                            onError={() => setIframeLoaded(false)}
                            scrolling='no'
                        />


                        <div className='absolute bottom-2 right-2 z-[15]'>
                            <div className='bg-[var(--bg-800)] bg-opacity-50 text-[var(--text-primary)] text-xs px-2 py-1 rounded'>
                                Preview • Click to open full site
                            </div>
                        </div>

                    </div>
                </div>
            )}

            <div className="flex items-center justify-between gap-4 mt-8">
                {previous &&
                    <a
                        className="
                    projectPageNavigationButton
                    inline-flex 
                    cursor-pointer items-center text-sm font-semibold transition-all
                    focus-visible:ring-offset-2  
                    border-bg-700 border py-3 w-full 
                    justify-between gap-4 rounded-xl px-3 whitespace-normal sm:w-fit sm:min-w-[150px] sm:gap-8 sm:px-6 mr-auto flex-row-reverse"
                        href={previous?.id ? `/projects/${previous.id}` : "/projects"}
                    >
                        <div className="flex flex-col gap-1">
                            <span className="text-text-secondary text-xs">Prev</span>
                            <p className="text-text-primary text-xs">{previous?.name ? previous.name : "Projects"}</p>
                        </div>
                        <ChevronLeft size={16} strokeWidth={2} />
                    </a>
                }
                {next &&
                    <a
                        className="projectPageNavigationButton inline-flex cursor-pointer 
                    items-center text-sm font-semibold transition-allfocus-visible:ring-offset-2
                    border-bg-700 bg-background hover:bg-accent hover:text-accent-foreground border 
                    py-3 w-full justify-between gap-4 rounded-xl px-3 whitespace-normal 
                    sm:w-fit sm:min-w-[150px] sm:gap-8 sm:px-6 ml-auto"
                        href={next?.id ? `/projects/${next.id}` : "/projects"}
                    >
                        <div className="flex flex-col gap-1">
                            <span className="text-text-secondary text-xs">Next</span>
                            <p className="text-text-primary text-xs">{next?.name ? next.name : "Projects"}</p>
                        </div>
                        <ChevronRight size={16} strokeWidth={2} />
                    </a>
                }
            </div>


        </>
    )
}

export default ClientComponent