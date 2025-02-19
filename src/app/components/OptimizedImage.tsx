'use client';

import Image from 'next/image';
import { useState } from 'react';
import { StaticImageData } from 'next/image';

interface OptimizedImageProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  width = 1920,
  height = 1080,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  return (
    <div className='relative overflow-hidden'>
      {isLoading && (
        <div className='absolute inset-0 bg-gray-100 dark:bg-gray-800 animate-pulse blur-lg' />
      )}
      {isError ? (
        <div className='absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800'>
          <span className='text-gray-500'>Failed to load image</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={90}
          priority={false}
          className={`transition-all duration-500 ${
            isLoading ? 'scale-110 blur-2xl' : 'scale-100 blur-0'
          } ${className}`}
          onLoad={() => setIsLoading(false)}
          onError={() => setIsError(true)}
        />
      )}
    </div>
  );
}
