import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Finleaf - Professional CA, CS & Legal Consultancy Services',
  description: 'Expert consultancy for CA, CS, and legal business solutions. Your trusted partner in compliance for all your needs.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/cropped-finleaf-logo-1-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/cropped-finleaf-logo-1-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    apple: [
      { url: '/cropped-finleaf-logo-1-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}