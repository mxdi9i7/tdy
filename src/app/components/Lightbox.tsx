'use client';

import { useEffect, useState } from 'react';
import OptimizedImage from './OptimizedImage';

interface LightboxProps {
  images: {
    src: string;
    alt: string;
    title: string;
    description: string;
  }[];
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  images,
  isOpen,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 bg-black/90 flex items-center justify-center'>
      <button
        onClick={onClose}
        className='absolute top-4 right-4 text-white hover:text-gray-300'
      >
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </button>
      <button
        onClick={onPrev}
        className='absolute left-4 text-white hover:text-gray-300'
      >
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15 19l-7-7 7-7'
          />
        </svg>
      </button>
      <button
        onClick={onNext}
        className='absolute right-4 text-white hover:text-gray-300'
      >
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 5l7 7-7 7'
          />
        </svg>
      </button>
      <div className='max-w-5xl mx-auto px-4'>
        <div className='relative'>
          <OptimizedImage
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className='max-h-[80vh] w-auto mx-auto'
          />
          <div className='absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white'>
            <h3 className='text-2xl font-semibold mb-2'>
              {images[currentIndex].title}
            </h3>
            <p className='text-gray-200'>{images[currentIndex].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
