'use client';

import { Bot, Maximize2, RotateCcw, Send, X } from 'lucide-react';
import { useState } from 'react';

export default function ChatWidget() {
    const [isChatBotOpen, setIsChatBotOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [followUps, setFollowUps] = useState([]);

    const sendMessage = async (msg) => {
        if (!msg.trim()) return;

     
        const newMessages = [...messages, { role: 'user', content: msg }];
        setMessages(newMessages);
        setInput('');
        setFollowUps([]); 

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: msg,
                    chatHistory: newMessages.slice(-6), // Send last 6 messages only
                }),
            });

            const data = await res.json();

            if (res.ok) {
                setMessages([
                    ...newMessages,
                    { role: 'assistant', content: data.message },
                ]);
                setFollowUps(data.followups || []);
            } else {
                console.error('Error from API:', data);
                setMessages([
                    ...newMessages,
                    { role: 'assistant', content: '⚠️ Sorry, there was an issue.' },
                ]);
            }
        } catch (err) {
            console.error(err);
            setMessages([
                ...newMessages,
                { role: 'assistant', content: '⚠️ Failed to connect. Try again.' },
            ]);
        }
    };

    const toggleChatBot = () => {
        setIsChatBotOpen(!isChatBotOpen);
    };

    const resetChat = () => {
        setMessages([]);
        setFollowUps([]);
        setInput('');
    };


    return (
        <>
            <div
                className="fixed right-4 bottom-20 z-50 sm:right-6 sm:bottom-6"
                style={{ opacity: 1, transform: "none" }}
            >
                <button
                    className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-highlight-primary inline-flex cursor-pointer items-center justify-center whitespace-nowrap text-sm font-semibold transition-all focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground bg-primary hover:bg-primary/90 aspect-square rounded-full p-3 shadow-lg active:scale-[0.8] sm:p-4"
                    onClick={toggleChatBot}
                >
                    <Bot size={24} strokeWidth={2} style={{ color: "var(--text-inverse)" }} />
                </button>
            </div>

            {isChatBotOpen &&
                <div className='border-border bg-background/95 fixed top-0 right-0 z-50 flex 
                            flex-col overflow-hidden backdrop-blur-xs sm:top-auto sm:right-6 
                            sm:bottom-24 sm:rounded-2xl sm:border sm:shadow-xl'
                    style={{ opacity: "1", transform: "none", width: "500px", height: "70vh", maxWidth: "700px", }}
                >
                    <div className="border-border flex flex-none items-center justify-between border-b px-4 py-3 backdrop-blur-lg bg-[var(--bg-900)]">
                        <div className="flex items-center gap-4 ">
                            <div className="relative">
                                <div
                                    className="border-bg-900 bg-primary aspect-square rounded-full border p-2"
                                    style={{ transform: "none" }}
                                >
                                    <Bot size={24} strokeWidth={2} color='var(--text-inverse)' />
                                </div>
                                <div className="border-bg-900 bg-highlight-primary absolute right-[2px] bottom-[2px] h-2 w-2 rounded-full border" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium">AI Assistant</h3>
                                <p className="text-muted-foreground text-xs">Built by Lazim MV</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-highlight-primary inline-flex cursor-pointer items-center justify-center whitespace-nowrap text-sm font-semibold transition-all focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-auto w-auto rounded-lg p-3 active:scale-[0.8]"
                                aria-label="Reset chatbot"
                                onClick={resetChat}
                            >
                                <RotateCcw size={16} strokeWidth={2} color='var(--text-primary)' />
                            </button>
                            <button
                                className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-highlight-primary inline-flex cursor-pointer items-center justify-center whitespace-nowrap text-sm font-semibold transition-all focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-auto w-auto rounded-lg p-3 active:scale-[0.8]"
                                aria-label="Maximize chatbot"
                            >
                                <Maximize2 size={16} strokeWidth={2} color='var(--text-primary)' />
                            </button>
                            <button
                                className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-highlight-primary inline-flex cursor-pointer items-center justify-center whitespace-nowrap text-sm font-semibold transition-all focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-auto w-auto rounded-lg p-3 active:scale-[0.8]"
                                aria-label="Close chatbot"
                                onClick={() => setIsChatBotOpen(false)}
                            >
                                <X size={16} strokeWidth={2} color='var(--text-primary)' />
                            </button>
                        </div>
                    </div>

                    <div className='chatMessagingScreen h-full space-y-4 p-4 overflow-y-auto bg-[var(--bg-900)]'>
                        {messages.length === 0 &&
                            <div className="text-muted-foreground flex h-full flex-col items-center justify-center space-y-6 text-center">
                                <Bot size={48} strokeWidth={2} color='var(--text-secondary)' />
                                <p className="text-sm">
                                    Hi! I'm Lazim's personal assistant. Ask me anything about his work,
                                    experience, skills, or projects, or choose from the suggested questions!
                                </p>
                                <div className="flex flex-col gap-2">
                                    {[
                                        "What are your key skills and areas of expertise?",
                                        "Give me a detailed summary of your past work experiences",
                                        "What are your key skills and areas of expertise?",
                                        "Give me a detailed summary of your past work experiences",
                                        "What are your key skills and areas of expertise?",
                                        "Give me a detailed summary of your past work experiences",
                                        "What are your key skills and areas of expertise?",
                                        "Give me a detailed summary of your past work experiences",
                                        "What are your key skills and areas of expertise?",
                                        "Give me a detailed summary of your past work experiences",
                                        "What are some of your notable projects?"
                                    ].map((q, i) => (
                                        <button
                                            key={i}
                                            onClick={() => sendMessage(q)}
                                            className="bg-bg-700 text-text-primary hover:bg-bg-600 rounded-full px-4 py-2 text-sm transition-colors duration-300"
                                        >
                                            {q}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        }

                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm
                                    ${msg.role === 'user'
                                        ? 'bg-primary text-text-inverse rounded-tr-none'
                                        : 'bg-muted text-text-primary border border-bg-700 rounded-tl-none dark:bg-bg-700'
                                    }`}>
                                    <p>{msg.content}</p>
                                </div>
                            </div>
                        ))}

                        {followUps.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-2">
                                {followUps.map((q, i) => (
                                    <button
                                        key={i}
                                        onClick={() => sendMessage(q)}
                                        className="bg-bg-700 text-text-primary hover:bg-bg-600 rounded-full px-4 py-1 text-xs transition-colors duration-300"
                                    >
                                        {q}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <form className="bg-bg-900 flex-none p-4" onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}>
                        <div className="bg-muted/50 relative flex items-center rounded-full">
                            <input
                                type='text'
                                className="flex border border-bg-600 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-secondary focus-visible:outline-hidden focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-bg-900 focus-visible:ring-foreground h-auto w-full rounded-full bg-transparent p-4 pr-14 text-sm focus-visible:ring-offset-0"
                                placeholder="Ask me anything..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
                            />
                            <button
                                type="button"
                                disabled={!input.trim()}
                                onClick={() => sendMessage(input)}
                                className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-highlight-primary inline-flex cursor-pointer items-center justify-center whitespace-nowrap text-sm font-semibold transition-all focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground bg-primary hover:bg-primary/90 absolute right-2 aspect-square h-auto w-auto shrink-0 rounded-full p-3 active:scale-[0.8]"
                            >
                                <Send size={24} strokeWidth={2} color='var(--text-inverse)' />
                            </button>
                        </div>
                    </form>
                </div>
            }
        </>
    );
}






// <div className='fixed bottom-5 right-5 w-1/5 rounded-b-full' style={{  padding: 12, zIndex: 999 }}>
//     <div style={{ maxHeight: 250, overflowY: 'auto', marginBottom: 10 }}>
//         {messages.map((msg, i) => (
//             <div key={i} style={{ marginBottom: 6, textAlign: msg.role === 'user' ? 'right' : 'left' }}>
//                 <div style={{
//                     display: 'inline-block',
//                     padding: '6px 10px',
//                     borderRadius: 8,
//                     backgroundColor: msg.role === 'user' ? '#dbeafe' : '#f1f5f9'
//                 }}>
//                     {msg.content}
//                 </div>
//             </div>
//         ))}
//     </div>

//     <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
//         <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
//             placeholder="Ask me anything..."
//             style={{ flex: 1, padding: '6px 8px', borderRadius: 6 }}
//         />
//         <button onClick={() => sendMessage(input)} style={{ padding: '6px 12px', backgroundColor: '#000', color: '#fff', borderRadius: 6 }}>
//             Send
//         </button>
//     </div>

//     {followUps.length > 0 && (
//         <div>
//             <p style={{ fontSize: 12, color: '#666', marginBottom: 4 }}>Suggested:</p>
//             {followUps.map((q, i) => (
//                 <button
//                     key={i}
//                     onClick={() => sendMessage(q)}
//                     style={{ display: 'block', textAlign: 'left', fontSize: 12, backgroundColor: '#f3f4f6', padding: 6, borderRadius: 6, marginBottom: 4 }}
//                 >
//                     {q}
//                 </button>
//             ))}
//         </div>
//     )}
// </div>
