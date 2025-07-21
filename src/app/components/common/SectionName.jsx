import { Sparkle } from 'lucide-react'
import React from 'react'
import FadeInOnScroll from './FadeInOnScroll'

const SectionName = ({ title, extraClass, animation = true }) => {
    return (
        <FadeInOnScroll animation={animation}>
            <div className={`${extraClass} flex w-fit items-center gap-2 text-highlight-primary`}>
                <Sparkle size={18} />
                <p className="shimmer word-spacing font-clash-display text-sm uppercase leading-none text-highlight-primary" style={{ fontFamily: 'var(--font-clash)' }}>
                    {title}
                </p>
            </div>
        </FadeInOnScroll>

    )
}

export default SectionName