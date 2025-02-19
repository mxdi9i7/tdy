import Container from './Container';
import OptimizedImage from './OptimizedImage';

export default function Stats() {
  return (
    <div id='solution'>
      <div className='max-w-7xl mx-auto px-6 md:px-12'>
        <div className='space-y-6 justify-between text-gray-600 md:flex flex-row-reverse md:gap-6 md:space-y-0 lg:gap-12 lg:items-center'>
          <div className='md:5/12 lg:w-1/2'>
            <OptimizedImage
              src='/images/freight-shipping.jpg'
              alt='TDY海外仓实景图'
              className='w-full rounded-lg shadow-lg object-cover h-[400px]'
            />
          </div>
          <div className='md:7/12 lg:w-1/2'>
            <h2 className='text-3xl font-bold text-gray-900 md:text-4xl dark:text-white'>
              业务需求清单
            </h2>
            <p className='my-8 text-gray-600 dark:text-gray-300'>
              TDY海外仓为您提供全方位的跨境电商仓储物流解决方案，支持多个主流电商平台的发货需求。
            </p>
            <div className='divide-y space-y-4 divide-gray-100 dark:divide-gray-800'>
              <div className='mt-8 flex gap-4 md:items-center'>
                <div className='w-12 h-12 flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-6 h-6 m-auto text-indigo-500 dark:text-indigo-400'
                  >
                    <path d='M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z' />
                    <path
                      fillRule='evenodd'
                      d='M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <div className='w-5/6'>
                  <h3 className='font-semibold text-lg text-gray-700 dark:text-indigo-300'>
                    支持发货平台
                  </h3>
                  <p className='text-gray-500 dark:text-gray-400'>
                    Amazon, Walmart, eBay, Wayfair, Shopify, Home Depot, Lowe's,
                    AliExpress, TEMU, Overstock, Indiegogo, TikTok等
                  </p>
                </div>
              </div>
              <div className='pt-4 flex gap-4 md:items-center'>
                <div className='w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-6 h-6 m-auto text-teal-600 dark:text-teal-400'
                  >
                    <path
                      fillRule='evenodd'
                      d='M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <div className='w-5/6'>
                  <h3 className='font-semibold text-lg text-gray-700 dark:text-teal-300'>
                    联系方式
                  </h3>
                  <p className='text-gray-500 dark:text-gray-400'>
                    地址：浙江省义乌市柳青路
                    <br />
                    电话：何先生 15726852525
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
