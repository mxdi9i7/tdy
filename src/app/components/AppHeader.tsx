'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Container from './Container';
import Link from 'next/link';
import Image from 'next/image';

const links = [
  {
    to: '/',
    section: 'home',
    label: '首页',
  },
  {
    to: '/#features',
    section: 'features',
    label: '服务优势',
  },
  {
    to: '/#blog',
    section: 'blog',
    label: '物流资讯',
  },
  {
    to: '/contact',
    label: '联系我们',
    isPage: true,
  },
];

export default function AppHeader() {
  const [isToggled, setIsToggled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    to: string,
    section?: string,
    isPage?: boolean
  ) => {
    if (isPage) {
      return; // Let the normal navigation happen
    }

    e.preventDefault();
    if (pathname !== '/') {
      router.push('/');
      setTimeout(() => {
        document
          .getElementById(section!)
          ?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(section!)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsToggled(false);
  };

  return (
    <header>
      <nav className='absolute z-10 w-full border-b border-black/5 dark:border-white/5 lg:border-transparent'>
        <Container>
          <div className='relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4'>
            <div className='relative z-20 flex w-full justify-between md:px-0 lg:w-fit'>
              <Link
                href='/'
                aria-label='logo'
                className='flex items-center space-x-2'
              >
                <Image
                  src='/images/logo.png'
                  alt='TDY Warehousing Logo'
                  width={200}
                  height={50}
                  className='h-10 w-auto'
                />
              </Link>

              <div className='relative flex max-h-10 items-center lg:hidden'>
                <button
                  aria-label='hamburger'
                  onClick={() => setIsToggled(!isToggled)}
                  className='relative -mr-6 p-6 active:scale-95 duration-300'
                >
                  <div
                    aria-hidden='true'
                    className={`m-auto h-0.5 w-5 rounded bg-gray-950 transition duration-300 dark:bg-white origin-top ${
                      isToggled ? 'rotate-45 translate-y-1.5' : ''
                    }`}
                  ></div>
                  <div
                    aria-hidden='true'
                    className={`m-auto mt-2 h-0.5 w-5 rounded bg-gray-950 transition duration-300 dark:bg-white origin-bottom ${
                      isToggled ? '-rotate-45 -translate-y-1' : ''
                    }`}
                  ></div>
                </button>
              </div>
            </div>

            <div
              className={`fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 ${
                isToggled ? 'origin-top scale-y-100' : ''
              } dark:bg-gray-950/70 lg:hidden`}
            ></div>

            <div
              className={`invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-fit lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:dark:bg-transparent ${
                isToggled ? 'visible scale-100 opacity-100' : ''
              }`}
            >
              <div className='w-full text-gray-600 dark:text-gray-200 lg:w-auto lg:pr-4 lg:pt-0'>
                <div className='flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm'>
                  {links.map((link) =>
                    link.isPage ? (
                      <Link
                        key={link.label}
                        href={link.to}
                        className='hover:text-primary block transition dark:hover:text-white md:px-4'
                        onClick={() => setIsToggled(false)}
                      >
                        <span>{link.label}</span>
                      </Link>
                    ) : (
                      <a
                        key={link.label}
                        href={link.to}
                        onClick={(e) =>
                          handleNavClick(e, link.to, link.section)
                        }
                        className='hover:text-primary block transition dark:hover:text-white md:px-4'
                      >
                        <span>{link.label}</span>
                      </a>
                    )
                  )}
                </div>
              </div>

              <div className='mt-12 lg:mt-0'>
                <Link
                  href='/contact'
                  className='relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max'
                >
                  <span className='relative text-sm font-semibold text-white'>
                    联系我们
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
}
