'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const RotatingWheel = ({
    size = 200,
    className = "",
    rotationDuration = "0.5s",
    hoverRotation = "rotate-90"
}) => {
    return (
        <div
            className={`inline-block transition-transform duration-500 ease-in-out group hover:${hoverRotation} ${className}`}
            style={{ width: size, height: size }}
        >
            <svg
                width={size}
                height={size}
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-lg"
            >
                {/* Outer circle background */}
                <circle
                    cx="100"
                    cy="100"
                    r="98"
                    fill="var(--bg-800)"
                    stroke="none"
                    strokeWidth="1"
                />

                {/* Outline circle below text */}
                <circle
                    cx="100"
                    cy="100"
                    r="55"
                    fill="none"
                    stroke="#a9a9bd"
                    strokeWidth="1"
                />



                {/* Arrow in center without background */}
                <foreignObject x="90" y="90" width="20" height="20">
                    <div className="w-full h-full flex items-center justify-center duration-500 ease-in-out group-hover:rotate-45 ">
                        <ArrowUpRight size={20} color="var(--text-secondary)" strokeWidth={2}/>
                    </div>
                </foreignObject>

                {/* Text along the circle path with infinite rotation */}
                <defs>
                    <path
                        id="circle-path"
                        d="M 100 30 A 70 70 0 1 1 99.99 30"
                    />
                    <style>
                        {`
                            .rotating-text {
                                animation: rotate-text 10s linear infinite;
                                transform-origin: 100px 100px;
                            }
                            @keyframes rotate-text {
                                from {
                                    transform: rotate(0deg);
                                }
                                to {
                                    transform: rotate(360deg);
                                }
                            }
                        `}
                    </style>
                </defs>

                <g className="rotating-text">
                    <text
                        className="fill-[var(--text-secondary)] font-bold uppercase"
                        style={{
                            fontSize: '16px',
                            letterSpacing: '0.077em',
                            fontFamily: 'var(--font-clash)',
                            fontWeight: 'normal',
                            color: 'var(--text-secondary)',
                        }}
                    >
                        <textPath href="#circle-path" startOffset="3%">
                            <tspan style={{ fontSize: '24px', color: 'var(--text-secondary)', }}>•</tspan>&#x2003; LETS TALK &#x2003;
                            <tspan style={{ fontSize: '24px', color: 'var(--text-secondary)', }}>•</tspan>&#x2003; LETS TALK &#x2003;
                            <tspan style={{ fontSize: '24px', color: 'var(--text-secondary)', }}>•</tspan>&#x2003; LETS TALK &#x2003;
                            <tspan style={{ fontSize: '24px', color: 'var(--text-secondary)', }}>•</tspan>&#x2003; LETS TALK &#x2003;
                        </textPath>
                    </text>
                </g>

            </svg>
        </div>
    );
};

export default RotatingWheel;