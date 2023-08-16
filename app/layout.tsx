import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import TopNav from '@/components/top-nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NFT Marketplace',
  description: 'Learning to Develop a Landing Page Using Tailwind CSS',
};

enum ThemeMode {
  Light = 'light',
  Dark = 'dark',
  System = 'system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // https://github.com/vercel/next.js/discussions/22388#discussioncomment-6329930
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme={ThemeMode.System}
          enableSystem
        >
          <main className="bg-[url('/bg.png')] dark:bg-none bg-no-repeat bg-top pt-6 md:pt-2">
            <TopNav />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
