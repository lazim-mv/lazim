"use client"
import React, { useState } from 'react'
import { faqs } from './data';
import SectionName from '../common/SectionName';
import { ChevronDown } from 'lucide-react'
import SectionTitleAndDesc from '../common/SectionTitleAndDesc';

const FAQS = () => {
    const [expanded, setExpanded] = useState(0);

    const toggleAccordion = (index) => {
        setExpanded(prev => (prev === index ? null : index));
    };
    return (
        <section id='faqs' className='max-screen justify-between gap-6 sm:flex'>
            <div>
                <SectionName title="Faqs" extraClass="mb-4" animation={false} />
                <SectionTitleAndDesc text="Have Questions?" heading animation={false} />
            </div>
            <div className='w-full md:w-2/3 mt-8 md:mt-0'>
                {faqs.map((faq, index) => {
                    const isOpen = expanded === index;
                    return (
                        <article
                            key={index}
                            className="border border-bg-700 bg-bg-800 rounded-2xl overflow-hidden transition-all duration-800 mb-4"
                        >
                            <button
                                className="w-full text-left p-4 flex items-center justify-between cursor-pointer"
                                style={{ color: 'var(--text-primary)' }}
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={isOpen}
                                aria-controls={`faq-panel-${index}`}
                                id={`faq-button-${index}`}
                            >
                                <span className="flex items-center gap-2">
                                    <span>{faq.number}</span>{faq.question}
                                </span>
                                <span
                                    className={`transition-transform duration-800 ${isOpen ? 'rotate-180' : 'rotate-0'
                                        }`}
                                >
                                    <ChevronDown size={18} />
                                </span>
                            </button>

                            {/* Accordion content with animated height */}
                            <div
                                className={`transition-all duration-800 overflow-hidden ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div
                                    className="p-4 text-sm text-gray-400"
                                    id={`faq-panel-${index}`}
                                    role="region"
                                    aria-labelledby={`faq-button-${index}`}
                                >{faq.answer}</div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default FAQS