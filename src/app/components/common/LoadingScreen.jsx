"use client";

import { useState, useEffect } from 'react';

export default function LoadingScreen({ isReady = false, loadingProgress = 0 }) {
    const [progress, setProgress] = useState(0);
    const [dots, setDots] = useState('');



    useEffect(() => {
        if (loadingProgress > 0) {
            // Use the actual loading progress from parent
            setProgress(loadingProgress);
            if (loadingProgress >= 100) {
                setDots('');
            }
            return;
        }

        if (isReady) {
            setProgress(100);
            setDots('');
            return;
        }

        // Fallback: Animate progress bar if no loadingProgress provided
        const progressTimer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) return 100;
                return prev + Math.random() * 15;
            });
        }, 200);

        // Animate loading dots
        const dotsTimer = setInterval(() => {
            setDots(prev => {
                if (prev === '...') return '';
                return prev + '.';
            });
        }, 100);

        return () => {
            clearInterval(progressTimer);
            clearInterval(dotsTimer);
        };
    }, [isReady, loadingProgress]);

    return (
        <div className={`fixed top-0 left-0 w-full h-full z-[9999] transition-opacity duration-500 ${isReady ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
            <div
                className="min-h-screen w-full flex flex-col justify-center items-center  overflow-hidden"
                style={{ backgroundColor: "var(--bg-900)" }}
            >
                {/* Animated background grid */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--loading-bg-rgb)_1px,transparent_0)] [background-size:40px_40px] animate-pulse" />

                {/* Floating orbs */}
                {/* <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000" />
            <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-500" /> */}

                {/* Main content */}
                <div className="relative z-10 flex flex-col items-center space-y-8">
                    {/* Logo with enhanced effects */}
                    <div className="relative group">
                        <div className="absolute -inset-2 rounded-full opacity-20 blur-md animate-pulse" style={{
                            background: 'linear-gradient(45deg, #00d9ff, #00a3cc, #00d9ff)'
                        }} />
                        <div className="relative rounded-full w-20 h-20 flex items-center justify-center border backdrop-blur-sm" style={{
                            background: 'linear-gradient(135deg, var(--bg-700), var(--bg-800))',
                            borderColor: 'rgba(0, 217, 255, 0.3)'
                        }}>
                            <span className="text-2xl font-[var(text-primary)] font-semibold tracking-wide"
                                style={{
                                    background: 'linear-gradient(20deg,var(--text-primary), #66e6ff, var(--text-primary))',
                                    WebkitBackgroundClip: 'text',
                                    backgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                LM
                            </span>
                        </div>

                        {/* Rotating ring */}
                        <div className="absolute inset-0 rounded-full opacity-60" style={{
                            background: 'conic-gradient(from 0deg, #00d9ff, #0099cc, #00d9ff, #0099cc, #00d9ff)',
                            WebkitMask: 'radial-gradient(circle, transparent 36px, black 38px)',
                            mask: 'radial-gradient(circle, transparent 100px, black 38px)',
                            animation: 'spin 3s linear infinite'
                        }} />
                    </div>

                    {/* Loading text with typewriter effect */}
                    <div className="text-center space-y-3 font-normal">
                        <h1 className="text-xl font-light text-slate-200 tracking-wide" style={{ color: "var(--text-primary)" }}>
                            Loading{dots}
                        </h1>

                        {/* Progress bar */}
                        <div className="w-80 h-1 bg-slate-800 rounded-full overflow-hidden">
                            <div
                                className="h-full rounded-full transition-all duration-500 ease-out"
                                style={{
                                    width: `${Math.min(progress, 100)}%`,
                                    background: 'linear-gradient(90deg, #00d9ff, #66e6ff)',
                                    boxShadow: '0 0 8px rgba(0, 217, 255, 0.3)'
                                }}
                            />
                        </div>

                        {/* Percentage */}
                        <p className="text-sm text-slate-400 font-mono">
                            {Math.floor(Math.min(progress, 100))}%
                        </p>
                    </div>

                    {/* Status indicators */}
                    {/* <div className="flex space-x-6 text-xs text-slate-500">
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        <span>Initializing</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300" />
                        <span>Loading Assets</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-700" />
                        <span>Preparing UI</span>
                    </div>
                </div> */}
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            </div>
        </div>
    );
}