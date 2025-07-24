import React from 'react';
import Image from 'next/image';
import './MarqueeStyles.css';

const logos = [
    "HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js",
    "GSAP", "Redux", "Angular", "ReactNative", "GIT", "Node.js", "Express.js", "MySQL", "MongoDB",
    "PostgreSQL", "Docker", "Firebase", "AWS", "FramerMotion",
    "Figma", "TailwindCSS",
];

const MarqueeLogos = ({ border }) => {
    return (
        <div className={`marquee-wrapper py-8 ${border ? 'border-y border-bg-700' : ''}`}>
            <div className="absolute top-0 left-0 h-full w-1/4 z-10 pointer-events-none shadow-left" />
            <div className="absolute top-0 right-0 h-full w-1/4 z-10 pointer-events-none shadow-right" />
            <div className="marquee-content gap-6 items-center">
                {logos.map((tech) => (
                    <div
                        key={tech}
                        className="inline-flex w-fit min-w-fit items-center gap-2 rounded-full px-4 py-2
                         text-sm shadow transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2
                          border-transparent bg-bg-800 text-text-primary dark:bg-bg-700"
                    >
                        <div className="relative h-5 w-5 flex-shrink-0"> {/* Add flex-shrink-0 to prevent icon shrinking */}
                            <Image // Use Next.js Image here
                                alt={tech}
                                src={`/tech-logos/${tech}.svg`}
                                fill // Fill parent div (h-5 w-5)
                                sizes="20px" // Smallest possible size, helps Next.js optimize
                                className="object-contain" // object-contain from old img
                                priority
                            />
                        </div>
                        {tech}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MarqueeLogos;