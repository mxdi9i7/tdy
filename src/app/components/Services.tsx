import Container from './Container';

export default function Services() {
  const serviceCategories = [
    {
      title: '海外仓',
      services: [
        '一件代发',
        '平台自提',
        'Wayfair',
        '沃尔玛',
        '其他平台',
        'FBA 中转配送',
        '退仓换标',
        '退货管理',
        '产品检测维修',
        '产品清理分拣',
      ],
    },
    {
      title: '跨境物流',
      services: [
        '头程',
        '国际小包直发',
        '合同物流',
        '退货回国',
        '知识产权保护',
      ],
    },
    {
      title: '解决方案',
      services: [
        '工商税务',
        '贸易保险',
        '供应链进口',
        '数据分析与营销',
        '智能分仓',
        '其他',
      ],
    },
  ];

  return (
    <div id='services' className='py-20'>
      <Container>
        <div className='mb-12 space-y-2 text-center'>
          <h2 className='text-3xl font-bold text-gray-800 md:text-4xl dark:text-white'>
            全方位服务项目
          </h2>
          <p className='lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300'>
            为您的跨境电商业务提供一站式解决方案
          </p>
        </div>

        <div className='grid gap-8 md:grid-cols-3'>
          {serviceCategories.map((category, idx) => (
            <div
              key={idx}
              className='relative group bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none transition duration-500 hover:z-10 hover:shadow-2xl'
            >
              <div className='relative space-y-8'>
                <h3 className='text-2xl font-bold text-gray-800 dark:text-white mb-6'>
                  {category.title}
                </h3>
                <ul className='space-y-4'>
                  {category.services.map((service, serviceIdx) => (
                    <li
                      key={serviceIdx}
                      className='flex items-center space-x-3 text-gray-600 dark:text-gray-300'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='w-5 h-5 text-primary'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M4.5 12.75l6 6 9-13.5'
                        />
                      </svg>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
