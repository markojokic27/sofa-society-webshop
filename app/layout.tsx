import './globals.css';
import localFont from 'next/font/local';

// Font files can be colocated inside of `pages`
const MonaSansFont = localFont({
  src: '../public/assets/fonts/Mona-Sans.woff2',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={MonaSansFont.className}>
      <body>{children}</body>
    </html>
  );
}