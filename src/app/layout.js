import localFont from 'next/font/local'

import "./globals.css";
import SmoothScrolling from './utils/SmoothScrolling';
import Head from 'next/head';
import Footer from './components/Footer/Footer';
import BottomFade from './components/common/BottomFade';
import Header from './components/Header/Header';
import MobileNav from './components/MobileNav/MobileNav';
import { GoogleAnalytics } from '@next/third-parties/google';
import SEO from './components/common/SEO';

const satoshi = localFont({
  src: [
    {
      path: 'fonts/satoshifont/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'fonts/satoshifont/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: 'fonts/satoshifont/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-satoshi',
});

const clashDisplay = localFont({
  src: [
    {
      path: 'fonts/clashfont/ClashDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'fonts/clashfont/ClashDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: 'fonts/clashfont/ClashDisplay-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: 'fonts/clashfont/ClashDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-clash',
});

export const metadata = {
  title: "Lazim Latheef (Lazim MV) — Software Developer",
  description:
    "I'm Lazim Latheef, a fullstack developer crafting high-performance web and mobile solutions. Explore my portfolio showcasing expertise in Next.js, React, and scalable apps.",
  keywords:
    "Lazim, Lazim MV, Lazim Latheef, software developer, web developer, fullstack developer, Next.js, React, mobile app developer, portfolio",
  openGraph: {
    title: "Lazim Latheef (Lazim MV) — Software Developer",
    description:
      "I'm Lazim Latheef, a fullstack developer crafting high-performance web and mobile solutions. Explore my portfolio showcasing expertise in Next.js, React, and scalable apps.",
    url: "https://lazimmv.vercel.app",
    siteName: "Lazim MV Portfolio",
    images: [
      {
        url: "https://lazim-mv.vercel.app/opengraph.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lazim Latheef (Lazim MV) — Software Developer",
    description:
      "I'm Lazim Latheef, a fullstack developer crafting high-performance web and mobile solutions. Explore my portfolio showcasing expertise in Next.js, React, and scalable apps.",
    images: ["https://lazim-mv.vercel.app/opengraph.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
            {/* <EnhancedReferrerTracker /> */}
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Lazim Latheef",
              alternateName: "Lazim MV",
              url: "https://lazimmv.vercel.app",
              jobTitle: "Software Developer",
              sameAs: [
                "https://www.linkedin.com/in/lazim-mv-/",
                "https://github.com/lazim-mv",
              ],
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const theme = stored || (prefersDark ? 'dark' : 'light');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e){}
              })();
            `,
          }}
        />
      </head>
      <body
        className={` ${satoshi.variable}  ${clashDisplay.variable} antialiased relative flex h-full min-h-dvh flex-col`}
      >
        <SEO />
        <SmoothScrolling>

          <div className="flex grow flex-col items-center">
            <div
              // className="fixed top-0 left-0 right-0 bottom-0 z-[-1] bg-[radial-gradient(circle_at_1px_1px,var(--loading-bg-rgb)_1px,transparent_0)] [background-size:40px_40px] animate-pulse"
              className="fixed top-0 left-0 right-0 bottom-0 z-[-1] bg-[radial-gradient(circle_at_1px_1px,var(--loading-bg-rgb)_1px,transparent_0)] [background-size:40px_40px] "
            />

            <Header />
            <MobileNav />
            <BottomFade fadeDirection="bottom" placement="top" />
            <main className="grow w-[100%]">
              {children}
              <Footer />
              <BottomFade fadeDirection="top" placement="bottom" />
            </main>
          </div>
        </SmoothScrolling>
      </body>
    </html>
  );
}
