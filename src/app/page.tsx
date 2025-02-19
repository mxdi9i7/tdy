'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import AppHeader from '@/app/components/AppHeader';
import HeroSection from '@/app/components/HeroSection';
import Features from '@/app/components/Features';
import Services from '@/app/components/Services';
import Stats from '@/app/components/Stats';
import Testimonials from '@/app/components/Testimonials';
import CallToAction from '@/app/components/CallToAction';
import Blog from '@/app/components/Blog';
import AppFooter from '@/app/components/AppFooter';
import WarehouseGallery from '@/app/components/WarehouseGallery';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <>
      <main className='space-y-40 mb-40'>
        <div data-aos='fade-up'>
          <HeroSection />
        </div>
        <div data-aos='fade-up'>
          <Features />
        </div>
        <div data-aos='fade-up'>
          <Services />
        </div>
        <div data-aos='fade-up'>
          <WarehouseGallery />
        </div>
        <div data-aos='fade-up'>
          <Stats />
        </div>
        <div data-aos='fade-up'>
          <Testimonials />
        </div>
        <div data-aos='fade-up'>
          <CallToAction />
        </div>
        <div data-aos='fade-up'>
          <Blog />
        </div>
      </main>
    </>
  );
}
