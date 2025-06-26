
import { Suspense } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import GATracker from './components/GATracker';
import { Toaster } from 'react-hot-toast';
import Script from 'next/script';
import { ThemeProvider } from '../context/ThemeContext';

export const metadata = {
  title: 'New Lakshmi Store',
  description: 'B2B website for vendors and businesses',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Tailwind CDN and Dynamic Config */}
        <script src="https://cdn.tailwindcss.com" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      primary: '#1563AC',
                      accent1: '#DD2036',
                      accent2: '#EC691F',
                      accent3: '#1FA7E0',
                    },
                    fontFamily: {
                      mont: ['Montserrat', 'sans-serif'],
                    },
                  }
                }
              }
            `,
          }}
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/NLS_logo-removebg-preview.png" type="image/png" />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2MB3E5Q5K8"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2MB3E5Q5K8');
            `,
          }}
        />
      </head>

      <body className="font-mont bg-white text-gray-800 scroll-smooth">
        <ThemeProvider>
          <Header />
          <Suspense fallback={null}>
            <GATracker />
          </Suspense>
          <main>{children}</main>
          <Footer />
          <Toaster position="top-center" />

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/+919582834877"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
            aria-label="Chat with us on WhatsApp"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.38 0 0 5.38 0 12c0 2.12.55 4.14 1.6 5.94L0 24l6.26-1.64A11.93 11.93 0 0012 24c6.62 0 12-5.38 12-12 0-3.2-1.25-6.22-3.48-8.52zm-8.51 17.8c-1.94 0-3.82-.52-5.45-1.5l-.39-.23-3.71.97.99-3.63-.25-.38A9.92 9.92 0 012.1 12c0-5.46 4.44-9.9 9.9-9.9 2.65 0 5.13 1.03 7 2.9a9.88 9.88 0 012.9 7c0 5.46-4.44 9.9-9.9 9.9zm5.59-7.49c-.31-.16-1.85-.91-2.14-1.01-.29-.11-.5-.16-.71.16s-.82 1.01-1.01 1.22c-.18.21-.37.24-.68.08s-1.32-.49-2.52-1.56c-.93-.82-1.56-1.84-1.74-2.15-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.02-.55-.07-.16-.71-1.7-.97-2.33-.26-.62-.53-.53-.71-.54h-.61c-.18 0-.47.07-.72.35-.25.28-.95.93-.95 2.28s.98 2.64 1.12 2.83c.14.18 1.93 2.95 4.67 4.14.65.28 1.16.45 1.56.58.65.2 1.24.17 1.71.1.52-.08 1.85-.76 2.11-1.49.26-.72.26-1.34.18-1.49-.09-.14-.28-.21-.58-.37z" />
            </svg>
          </a>
        </ThemeProvider>
      </body>
    </html>
  );
}
