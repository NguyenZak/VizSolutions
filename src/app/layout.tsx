import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Ashley",
  description: "Creative portfolio website",
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
    <html lang="en">
      <head>
        {/* bootstrap grid css */}
        <link rel="stylesheet" href="/css/plugins/bootstrap-grid.css" />
        {/* font awesome css */}
        <link rel="stylesheet" href="/css/plugins/font-awesome.min.css" />
        {/* swiper css */}
        <link rel="stylesheet" href="/css/plugins/swiper.min.css" />
        {/* fancybox css */}
        <link rel="stylesheet" href="/css/plugins/fancybox.min.css" />
        {/* ashley scss */}
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
