import { Sparkle } from 'lucide-react'
import React from 'react'
import './MarqueeStyles.css'

const MarqueeText = () => {
    return (
        <div className="marquee-wrapper border-y border-bg-700 py-8 ">
            <div className="absolute top-0 left-0 h-full md:w-1/8 w-1/6 z-10 pointer-events-none shadow-left" />
            <div className="absolute top-0 right-0 h-full md:w-1/8 w-1/6 z-10 pointer-events-none shadow-right" />
            <div className="marquee-content gap-6 items-center">
                {[...Array(2)].map((_, i) => (
                    <div className="flex items-center gap-6 text-bg-600" key={i}>
                        {[
                            "Websites",
                            "Designing",
                            "Hosting",
                            "Animations",
                            "Backend",
                            "Dashboards",
                            "Mobile Apps",
                        ].map((text, index) => (
                            <div className="flex items-center gap-6" key={`${text}-${index}`}>
                                <h2 className="text-bg-600 whitespace-nowrap">{text}</h2>
                                <svg
                                    className="spinnerWheel"
                                    viewBox="0 0 112 112"
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="presentation"
                                    aria-hidden="true"
                                >
                                    <path
                                        className="spinnerWheelFill"
                                        d="m111.547 59.968-50.391-1.406 36.64 34.531-5.155 5.157L58.11 61.61 59.516 112h-7.188l1.407-50.39-34.532 36.64-5.156-5.157 36.64-34.53-50.39 1.405v-7.187l50.39 1.641-36.64-34.61 5.156-5.078 34.532 36.641L52.328.985h7.188l-1.406 50.39 34.53-36.64 5.157 5.077-36.641 34.61 50.39-1.407z"
                                        fill="var(--bg-600)"
                                        fillRule="nonzero"
                                    />
                                </svg>
                            </div>
                        ))}
                    </div>
                ))}

            </div>
        </div>
    )
}

export default MarqueeText