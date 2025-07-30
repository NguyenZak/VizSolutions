import type { Metadata, Viewport } from "next";
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "ViZ Solutions - Marketing & Technology",
  description: "ViZ Solutions - Giải pháp Marketing & Technology toàn diện cho doanh nghiệp",
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon/favicon.ico',
    apple: [
      { url: '/favicon/apple-touch-icon.png', type: 'image/png' },
      { url: '/favicon/apple-touch-icon.svg', type: 'image/svg+xml' }
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        {/* Font Awesome CDN */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" type="image/svg+xml" href="/favicon/apple-touch-icon.svg" />
        <link rel="apple-touch-icon" type="image/png" href="/favicon/apple-touch-icon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
