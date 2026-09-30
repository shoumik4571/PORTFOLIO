import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Shoumik Aggarwal | AI & Software Developer',
  description: 'Portfolio of Shoumik Aggarwal, an early-career AI and software developer building projects across artificial intelligence, web development, cybersecurity, and modern software technologies.',
  keywords: ['AI Developer', 'Software Developer', 'Python', 'JavaScript', 'React', 'Next.js', 'Cybersecurity', 'Machine Learning', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Shoumik Aggarwal' }],
  creator: 'Shoumik Aggarwal',
  publisher: 'Shoumik Aggarwal',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shoumikaggarwal.dev',
    title: 'Shoumik Aggarwal | AI & Software Developer',
    description: 'Portfolio of Shoumik Aggarwal, an early-career AI and software developer building projects across artificial intelligence, web development, cybersecurity, and modern software technologies.',
    siteName: 'Shoumik Aggarwal Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shoumik Aggarwal | AI & Software Developer',
    description: 'Portfolio of Shoumik Aggarwal, an early-career AI and software developer building projects across artificial intelligence, web development, cybersecurity, and modern software technologies.',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#0a0a0b',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-background text-textPrimary antialiased">
        {children}
      </body>
    </html>
  );
}