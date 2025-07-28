import { NextRequest, NextResponse } from 'next/server';
import { Groq } from 'groq-sdk';
import { projectData } from '../../components/Projects/data';
import { workPhilosophies } from '../../(pages)/about/data';
import { faqs } from '../../(pages)/contact/data';
// import {
//     projectData,
//     testimonials,
//     workPhilosophies,
//     faq
// } from '@/lib/data';

const groqClient = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Prepare chunked data
const dataChunks = [
    {
        id: 'about', text: "Lazim MV is a frontend developer with 3+ years experience in React.js, Next.js, and React Native. He has worked on e- commerce apps, admin dashboards, portfolio websites, and scalable mobile apps. He uses tools like Zustand, Prisma, Supabase, Tailwind CSS, and Next.js App Router.He's currently building a Learning Management System (LMS) for a client."
    },
    {
        id: 'projects',
        text: projectData.map(p => `${p.name}: ${p.description}`).join('\n')
    },
    {
        id: 'workPhilosophy',
        text: workPhilosophies.map(p => p.description).join('\n')
    },
    {
        id: 'faq',
        text: faqs.map(f => `${f.question}: ${f.answer}`).join('\n')
    },
    // {
    //     id: 'testimonials',
    //     text: testimonials.map(
    //         t => `${t.name} (${t.company}): ${t.testimonial}`
    //     ).join('\n')
    // }
];

// Simple keyword match to find relevant chunks
function getRelevantChunks(userMessage) {
    const lowerMsg = userMessage.toLowerCase();
    const matches = dataChunks.filter(({ text }) =>
        text.toLowerCase().includes(lowerMsg)
    );

    // Always include about + top 1–2 relevant sections
    const guaranteedAbout = dataChunks.find(d => d.id === 'about');
    const relevant = matches.length > 0 ? matches.slice(0, 2) : dataChunks.slice(1, 2);
    return [guaranteedAbout, ...relevant];
}

export async function POST(req) {
    try {
        const { message } = await req.json();
        const relevantChunks = getRelevantChunks(message);

        const contextPrompt = relevantChunks
            .map(c => `Section: ${c.id}\n${c.text}`)
            .join('\n\n');

        const messages = [
            {
                role: 'system',
                content: `You are Lazim MV’s portfolio assistant. Only answer questions using the context below. If something isn't covered, say you don’t know.\n\n${contextPrompt}`
            },
            {
                role: 'user',
                content: message
            }
        ];

        const completion = await groqClient.chat.completions.create({
            model: 'llama3-8b-8192',
            messages
        });

        const responseText = completion.choices[0]?.message?.content || 'Sorry, no response.';

        // Generate follow-up questions
        const followupPrompt = [
            {
                role: 'system',
                content:
                    'You are a helpful assistant that suggests 2 short, natural follow-up questions based on the conversation.'
            },
            {
                role: 'user',
                content: `User asked: ${message}\nAssistant answered: ${responseText}\n\nSuggest 2 follow-up questions.`
            }
        ];

        const followupCompletion = await groqClient.chat.completions.create({
            model: 'llama3-8b-8192',
            messages: followupPrompt
        });

        const followups = followupCompletion.choices[0]?.message?.content
            ?.split('\n')
            .filter(Boolean)
            .slice(0, 2);

        return NextResponse.json({
            message: responseText,
            followups
        });
    } catch (error) {
        console.error('Chat route error:', error);
        return NextResponse.json(
            { error: error?.response?.data || error.message },
            { status: 500 }
        );
    }
}
