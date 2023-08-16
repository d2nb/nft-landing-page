import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import TopNav from '@/components/top-nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Agency Landing Page',
  description: 'Learning to Develop a Landing Page Using Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[url('/bg.png')] bg-no-repeat bg-top`}
      >
        <TopNav />
        {children}
      </body>
    </html>
  );
}
