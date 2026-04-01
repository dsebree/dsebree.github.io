import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Daniel Sebree | Senior UX Designer',
  description: 'Specializing in Enterprise SaaS, Figma Design Systems, and Technical Handoff.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-50 antialiased`}>
        {/* Modern Glassmorphic Navigation */}
        <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/50 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl font-bold tracking-tighter hover:text-blue-400 transition-colors">
              DS<span className="text-blue-500">.</span>
            </Link>
            
            <div className="flex gap-8 text-sm font-medium text-slate-400">
              <Link href="#work" className="hover:text-white transition-colors">Work</Link>
              <Link href="#about" className="hover:text-white transition-colors">About</Link>
              <Link 
                href="/resume.pdf" 
                target="_blank"
                className="rounded-full bg-blue-600 px-4 py-1.5 text-white hover:bg-blue-500 transition-all"
              >
                Resume
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="relative pt-24">
          {children}
        </main>

        {/* Minimalist Footer */}
        <footer className="border-t border-white/5 py-12 mt-20">
          <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
            <p>© 2026 Daniel Sebree — Built with Next.js & Figma tokens.</p>
            <div className="flex gap-6">
              <a href="https://github.com/your-username" className="hover:text-white">GitHub</a>
              <a href="https://linkedin.com/in/your-username" className="hover:text-white">LinkedIn</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}