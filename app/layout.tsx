import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from 'next-themes';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Zephyr',
    default: 'Zephyr',
  },
  icons: {
    icon: [
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
      },
      {
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
      },
    ],
    apple: '/apple-touch-icon.png',
  },
  description:
    'The Next-Generation Blog Accelerator for Content Creation and Collaboration platform',
  keywords:
    'blog accelerator, blogs, blogging platform, content, creation, collaboration, platform, zephyr, parazeeknova, hashcodes, AI, social, platform, content, creators, researchers, blogpost, summarization, collaborative, knowledge, sharing, blogging, research, writing, publishing, blog, accelerator, research accelerator, writing accelerator, collaborative accelerator, smart accelerator, AI accelerator, messaging',
  authors: [{ name: 'Parazeeknova', url: 'https://harshsahu-portfolio.vercel.app/' }],
  creator: 'Harsh',
  publisher: 'Parazeeknova',
  openGraph: {
    title: 'Zephyr',
    description:
      'The Next-Generation Blog Accelerator for Content Creation and Collaboration platform',
    url: 'https://github.com/Parazeeknova/zephyr',
    siteName: 'Zephyr - The Next-Generation Blog Accelerator',
    images: ['/Banner.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zephyr',
    description:
      'The Next-Generation Blog Accelerator for Content Creation and Collaboration platform',
    images: ['/Banner.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
