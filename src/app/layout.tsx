import type { Metadata, Viewport } from 'next';
import { Kanit, JetBrains_Mono } from 'next/font/google';
import { MotionProvider } from '@/components/MotionProvider';
import './globals.css';

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Shoumik Aggarwal | Aspiring Cloud Solution Architect',
  description: 'Portfolio of Shoumik Aggarwal, a student and aspiring Cloud Solution Architect building projects across AI, cloud computing, web development, and modern software technologies.',
  keywords: ['Cloud Solution Architect', 'AI Engineer', 'Software Developer', 'Python', 'JavaScript', 'React', 'Next.js', 'Cloud Computing', 'Web Development', 'Portfolio', 'Student'],
  authors: [{ name: 'Shoumik Aggarwal' }],
  creator: 'Shoumik Aggarwal',
  publisher: 'Shoumik Aggarwal',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shoumikaggarwal.dev',
    title: 'Shoumik Aggarwal | Aspiring Cloud Solution Architect',
    description: 'Portfolio of Shoumik Aggarwal, a student and aspiring Cloud Solution Architect building projects across AI, cloud computing, web development, and modern software technologies.',
    siteName: 'Shoumik Aggarwal Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shoumik Aggarwal | Aspiring Cloud Solution Architect',
    description: 'Portfolio of Shoumik Aggarwal, a student and aspiring Cloud Solution Architect building projects across AI, cloud computing, web development, and modern software technologies.',
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
    <html lang="en" className={`${kanit.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-background text-textPrimary antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}