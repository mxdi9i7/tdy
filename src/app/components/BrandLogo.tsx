'use client';

import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface BrandLogoProps {
  name: string;
  url: string | StaticImageData;
  width: string;
}

export default function BrandLogo({ name, url, width }: BrandLogoProps) {
  return (
    <div className='relative group flex items-center justify-center w-full h-24 px-4'>
      <div className='absolute inset-0 rounded-xl bg-gradient-to-br from-white/50 to-white/70 dark:from-gray-800/50 dark:to-gray-800/70 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform group-hover:scale-105 shadow-lg'></div>
      <div className='relative transition-all duration-500 ease-out transform group-hover:scale-110 group-hover:translate-y-[-2px]'>
        <Image
          src={url}
          alt={`${name} logo`}
          width={200}
          height={80}
          className={`${width} h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-500 ease-out hover:drop-shadow-lg`}
        />
      </div>
    </div>
  );
}
