import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

import './globals.css';

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: false,
    follow: false,
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-iron text-white text-center font-sans text-lg`}
      >
        {children}
      </body>
    </html>
  );
}
