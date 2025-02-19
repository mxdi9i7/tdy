import Container from './Container';
import BrandLogo from './BrandLogo';

// Import all logos
import amazonLogo from '../../../public/images/brands/logo-amazon.svg';
import walmartLogo from '../../../public/images/brands/walmart.svg';
import ebayLogo from '../../../public/images/brands/ebay.svg';
import homedepotLogo from '../../../public/images/brands/the-home-depot-2.svg';
import lowesLogo from '../../../public/images/brands/lowe-s-4.svg';
import shopifyLogo from '../../../public/images/brands/shopify-2.svg';
import aliexpressLogo from '../../../public/images/brands/aliexpress-logo.svg';
import temuLogo from '../../../public/images/brands/temu_logo.png';
import overstockLogo from '../../../public/images/brands/Overstock_logo_2024.svg.png';
import indiegogoLogo from '../../../public/images/brands/Indiegogo_logo.png';
import tiktokLogo from '../../../public/images/brands/tiktok.webp';
import wayfairLogo from '../../../public/images/brands/wayfair.jpeg';

export default function HeroSection() {
  const brands = [
    {
      name: 'Amazon',
      url: amazonLogo,
      width: 'w-32',
    },
    {
      name: 'Walmart',
      url: walmartLogo,
      width: 'w-32',
    },
    {
      name: 'eBay',
      url: ebayLogo,
      width: 'w-32',
    },
    {
      name: 'Home Depot',
      url: homedepotLogo,
      width: 'w-32',
    },
    {
      name: "Lowe's",
      url: lowesLogo,
      width: 'w-32',
    },
    {
      name: 'Shopify',
      url: shopifyLogo,
      width: 'w-32',
    },
    {
      name: 'AliExpress',
      url: aliexpressLogo,
      width: 'w-32',
    },
    {
      name: 'TEMU',
      url: temuLogo,
      width: 'w-32',
    },
    {
      name: 'Overstock',
      url: overstockLogo,
      width: 'w-32',
    },
    {
      name: 'Indiegogo',
      url: indiegogoLogo,
      width: 'w-32',
    },
    {
      name: 'TikTok Shop',
      url: tiktokLogo,
      width: 'w-32',
    },
    {
      name: 'Wayfair',
      url: wayfairLogo,
      width: 'w-32',
    },
  ];

  return (
    <div className='relative' id='home'>
      <div
        aria-hidden='true'
        className='absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20'
      >
        <div className='blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700'></div>
        <div className='blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600'></div>
      </div>
      <Container>
        <div className='relative pt-36 ml-auto'>
          <div className='lg:w-2/3 text-center mx-auto'>
            <h1 className='text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl'>
              TDYWAREHOUSING<sup className='text-sm'>®</sup>{' '}
              <span className='text-primary dark:text-white'>
                海外仓储解决方案
              </span>
            </h1>
            <p className='mt-8 text-gray-700 dark:text-gray-300'>
              在全球化贸易的浪潮中，TDY海外仓宛如一座坚实的桥梁，连接着世界的各个角落。作为跨境电商的得力伙伴，我们为您提供强大的国际市场拓展支持。
            </p>
            <div className='mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6'>
              <a
                href='/contact'
                className='relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max'
              >
                <span className='relative text-base font-semibold text-white'>
                  联系我们
                </span>
              </a>
              <a
                href='#about'
                className='relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max'
              >
                <span className='relative text-base font-semibold text-primary dark:text-white'>
                  了解更多
                </span>
              </a>
            </div>
            <div className='hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between'>
              <div className='text-left'>
                <h6 className='text-lg font-semibold text-gray-700 dark:text-white'>
                  专业团队
                </h6>
                <p className='mt-2 text-gray-500'>美国工作人员30余人</p>
              </div>
              <div className='text-left'>
                <h6 className='text-lg font-semibold text-gray-700 dark:text-white'>
                  快速响应
                </h6>
                <p className='mt-2 text-gray-500'>闪电般的处理速度</p>
              </div>
              <div className='text-left'>
                <h6 className='text-lg font-semibold text-gray-700 dark:text-white'>
                  成本优势
                </h6>
                <p className='mt-2 text-gray-500'>高效率低成本</p>
              </div>
            </div>
          </div>
          <div className='mt-16 relative'>
            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-gray-950/50 dark:to-gray-950 pointer-events-none'></div>
            <div className='relative'>
              <p className='text-center text-sm font-semibold text-gray-600 dark:text-gray-400 mb-8'>
                Trusted by the world's leading e-commerce platforms
              </p>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center'>
                {brands.map((brand) => (
                  <BrandLogo
                    key={brand.name}
                    name={brand.name}
                    url={brand.url}
                    width={brand.width}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
