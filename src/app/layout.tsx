import '@/app/app.css';

import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
});

export const metadata: Metadata = {
  metadataBase: new URL('/', process.env.NEXT_PUBLIC_PUBLIC_URL),
  title: {
    template: '%s | Money Snek 🐍🐍💰💰',
    default: 'Money Snek 🐍🐍💰💰',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
      <body className="font-noto-sans min-w-80 bg-slate-950">{children}</body>
    </html>
  );
}
