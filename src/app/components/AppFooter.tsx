import Container from './Container';
import Link from 'next/link';

export default function AppFooter() {
  return (
    <footer className='relative py-20 md:py-40 bg-white dark:bg-gray-900'>
      <Container>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-12 border-t border-gray-100 dark:border-gray-800 pt-10'>
          {/* Brand & Description */}
          <div className='md:col-span-4'>
            <Link href='#' className='flex items-center'>
              <span className='text-2xl font-bold text-gray-900 dark:text-white'>
                TDYWAREHOUSING<sup className='text-sm'>®</sup>
              </span>
            </Link>
            <p className='mt-4 text-gray-600 dark:text-gray-300'>
              义乌市联盾货运代理有限公司
            </p>
          </div>

          {/* Quick Links */}
          <div className='md:col-span-2'>
            <h3 className='text-gray-900 dark:text-white font-semibold mb-4'>
              快速链接
            </h3>
            <ul className='space-y-4'>
              <li>
                <Link
                  href='#home'
                  className='text-gray-600 dark:text-gray-300 hover:text-secondary transition'
                >
                  首页
                </Link>
              </li>
              <li>
                <Link
                  href='#about'
                  className='text-gray-600 dark:text-gray-300 hover:text-secondary transition'
                >
                  关于我们
                </Link>
              </li>
              <li>
                <Link
                  href='#features'
                  className='text-gray-600 dark:text-gray-300 hover:text-secondary transition'
                >
                  服务优势
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className='md:col-span-4'>
            <h3 className='text-gray-900 dark:text-white font-semibold mb-4'>
              联系我们
            </h3>
            <div className='space-y-4 text-gray-600 dark:text-gray-300'>
              <p>
                <strong>地址：</strong>浙江省义乌市柳青路
              </p>
              <p>
                <strong>电话：</strong>何先生 15726852525
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='mt-10 pt-10 border-t border-gray-100 dark:border-gray-800'>
          <div className='text-center text-gray-600 dark:text-gray-300'>
            © {new Date().getFullYear()} TDYWAREHOUSING All Rights by
            义乌市联盾货运代理有限公司.
          </div>
        </div>
      </Container>
    </footer>
  );
}
