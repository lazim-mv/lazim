"use client";

import gsap from '@/app/utils/gsapInit';
import { useGSAP } from '@gsap/react';
import React, { useRef, useEffect } from 'react';
import FadeInOnScroll from './FadeInOnScroll';



const SectionTitleAndDesc = ({ text, desc = false, heading = false, animation = true }) => {
    return (
        <div >
            {heading &&
                <FadeInOnScroll animation={animation}>
                    <h2
                        className=""
                        role="heading"
                        style={{ opacity: 1 }}
                    >
                        {text}
                    </h2>
                </FadeInOnScroll>
            }

            {desc &&
                <FadeInOnScroll animation={animation}>
                    <p
                        className="mt-2"
                    >
                        {text}
                    </p>
                </FadeInOnScroll>
            }
        </div>
    );
};

export default SectionTitleAndDesc;
