import { metadata } from './meta';
import { Inter } from 'next/font/google';
import 'aos/dist/aos.css';
import './globals.css';
import AppHeader from '@/app/components/AppHeader';
import AppFooter from '@/app/components/AppFooter';

const inter = Inter({ subsets: ['latin'] });

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='zh' className='scroll-smooth'>
      <body className={inter.className}>
        <AppHeader />
        <main>{children}</main>
        <AppFooter />
      </body>
    </html>
  );
}
