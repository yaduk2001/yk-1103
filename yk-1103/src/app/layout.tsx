import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'YK-1103',
  description: 'Deterministic Reversible Encryption System by YK',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <nav className="navbar">
          <Link href="/" className="brand">
            YK-1103
          </Link>
          <div className="nav-links">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/tool" className="nav-link">Tool</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/how-it-works" className="nav-link">How it&apos;s built</Link>
            <Link href="/creator" className="nav-link">Creator</Link>
          </div>
          <div className="nav-spacer"></div>
        </nav>

        <main className="main-content">
          {children}
        </main>

        <footer className="footer">
          <p>YK-1103 &copy; {new Date().getFullYear()} YADU. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
