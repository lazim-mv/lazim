import localFont from 'next/font/local'

import "./globals.css";
import SmoothScrolling from './utils/SmoothScrolling';
import Head from 'next/head';
import Footer from './components/Footer/Footer';
import BottomFade from './components/common/BottomFade';
import Header from './components/Header/Header';
import MobileNav from './components/MobileNav/MobileNav';

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
        <SmoothScrolling>

          <div className="flex grow flex-col items-center">
            <div className="fixed top-0 left-0 right-0 bottom-0 z-[-1] bg-[radial-gradient(circle_at_1px_1px,var(--loading-bg-rgb)_1px,transparent_0)] [background-size:40px_40px] animate-pulse" />

            <Header />
            <MobileNav />
            <BottomFade fadeDirection="bottom" placement="top" />
            <main className="grow w-[100%]">
              <div
                className="relative flex w-full flex-col justify-center revealedFx"
                style={{ transitionDuration: '1.5s', transform: 'translateY(0px)' }}
              >
                {children}
                <Footer />
              </div>
              <BottomFade fadeDirection="top" placement="bottom" />
            </main>
          </div>
        </SmoothScrolling>
      </body>
    </html>
  );
}
