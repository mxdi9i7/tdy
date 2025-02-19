import Container from './Container';

export default function CallToAction() {
  return (
    <div className='relative py-16'>
      <div
        aria-hidden='true'
        className='absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20'
      >
        <div className='blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700'></div>
        <div className='blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600'></div>
      </div>
      <Container>
        <div className='relative'>
          <div className='mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12'>
            <h1 className='text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl'>
              开启您的跨境电商之旅
            </h1>
            <p className='text-center text-xl text-gray-600 dark:text-gray-300'>
              专业的仓储服务，高效的物流配送，让您的跨境业务更上一层楼
            </p>
            <div className='flex flex-wrap justify-center gap-6'>
              <a
                href='tel:15726852525'
                className='relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max'
              >
                <span className='relative text-base font-semibold text-white dark:text-dark'>
                  立即咨询：157-2685-2525
                </span>
              </a>
              <a
                href='#services'
                className='relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max'
              >
                <span className='relative text-base font-semibold text-primary dark:text-white'>
                  查看服务详情
                </span>
              </a>
            </div>
          </div>
          <div className='mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8'>
            <div className='p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none'>
              <p className='text-center text-2xl font-bold text-gray-700 dark:text-white'>
                30+
              </p>
              <p className='text-center text-gray-500 dark:text-gray-400'>
                专业美国员工
              </p>
            </div>
            <div className='p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none'>
              <p className='text-center text-2xl font-bold text-gray-700 dark:text-white'>
                12+
              </p>
              <p className='text-center text-gray-500 dark:text-gray-400'>
                支持电商平台
              </p>
            </div>
            <div className='p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none'>
              <p className='text-center text-2xl font-bold text-gray-700 dark:text-white'>
                24h
              </p>
              <p className='text-center text-gray-500 dark:text-gray-400'>
                订单处理时效
              </p>
            </div>
            <div className='p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none'>
              <p className='text-center text-2xl font-bold text-gray-700 dark:text-white'>
                99%
              </p>
              <p className='text-center text-gray-500 dark:text-gray-400'>
                客户满意度
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
