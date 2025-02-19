'use client';

import { useState, useEffect } from 'react';
import Container from './Container';
import OptimizedImage from './OptimizedImage';
import Lightbox from './Lightbox';

export default function WarehouseGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: './images/warehouse-1.jpg',
      alt: '智能仓储设施',
      title: '先进的仓储设施',
      description: '配备现代化的仓储管理系统，确保高效运营',
    },
    {
      src: './images/warehouse-2.jpg',
      alt: '自动化分拣系统',
      title: '自动化分拣',
      description: '采用智能分拣系统，提高作业效率',
    },
    {
      src: './images/warehouse-3.jpg',
      alt: '质量控制中心',
      title: '质量管控',
      description: '严格的质量检验流程，保证服务品质',
    },
    {
      src: './images/warehouse-4.jpg',
      alt: '物流配送中心',
      title: '物流配送',
      description: '完善的物流网络，快速响应客户需求',
    },
  ];

  // Preload images
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image.src;
    });
  }, []);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className='py-16 bg-gray-50 dark:bg-gray-900' id='gallery'>
      <Container>
        <div
          className='mb-12 space-y-2 text-center'
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          <h2 className='text-3xl font-bold text-gray-800 md:text-4xl dark:text-white'>
            仓储设施展示
          </h2>
          <p className='lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300'>
            现代化的仓储设施，为您的跨境电商业务保驾护航
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {images.map((image, index) => (
            <div
              key={index}
              className='group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer'
              onClick={() => handleImageClick(index)}
              data-aos='zoom-in'
              data-aos-delay={index * 100}
            >
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                className='w-full h-80 object-cover transition duration-500 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='absolute bottom-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
                  <h3 className='text-xl font-semibold mb-2'>{image.title}</h3>
                  <p className='text-sm text-gray-200'>{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <Lightbox
        images={images}
        isOpen={lightboxOpen}
        currentIndex={currentImageIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}
