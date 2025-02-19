import Container from './Container';
import OptimizedImage from './OptimizedImage';

export default function Blog() {
  const articles = [
    {
      title: '2024年跨境电商物流新趋势：智能仓储和自动化配送',
      description:
        '随着技术的发展，智能仓储和自动化配送正在重塑跨境电商物流行业。本文深入分析了AI驱动的库存管理、机器人分拣系统、智能打包设备等新技术如何提升仓储效率，降低运营成本。同时探讨了这些技术对传统仓储服务商的影响及应对策略。',
      image: '/images/local-shipping-2.jpg',
      tags: ['物流趋势', '智能仓储', '自动化'],
      date: '2024-03-15',
    },
    {
      title: '美国各大电商平台旺季备货攻略',
      description:
        '针对亚马逊、沃尔玛、eBay等主流电商平台的旺季特点，详细解读最佳备货时间、仓储策略和物流方案。包括旺季仓储费用分析、平台政策解读、头程运输时效等关键信息，帮助卖家制定更好的备货计划。',
      image: '/images/local-shipping-1.jpg',
      tags: ['备货攻略', '旺季运营', '平台政策'],
      date: '2024-03-10',
    },
    {
      title: '跨境退货处理最佳实践指南',
      description:
        '退货处理是跨境电商运营中的重要环节。本文分享了高效的退货流程管理方法，包括退货原因分析、质量检测标准、库存分类管理等实用技巧。通过优化退货处理流程，提升客户满意度，降低运营成本。',
      image: '/images/global-shipping.webp',
      tags: ['退货管理', '质量控制', '客户服务'],
      date: '2024-03-05',
    },
  ];

  return (
    <div id='blog'>
      <Container>
        <div className='mb-12 space-y-2 text-center'>
          <h2 className='text-3xl font-bold text-gray-800 md:text-4xl dark:text-white'>
            物流资讯
          </h2>
          <p className='lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300'>
            及时了解跨境物流最新动态，掌握行业趋势
          </p>
        </div>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {articles.map((article, idx) => (
            <div
              key={idx}
              className='group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10'
            >
              <div className='relative overflow-hidden rounded-xl'>
                <OptimizedImage
                  src={article.image}
                  alt={article.title}
                  className='h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105'
                />
              </div>
              <div className='mt-6 relative'>
                <h3 className='text-2xl font-semibold text-gray-800 dark:text-white'>
                  {article.title}
                </h3>
                <p className='mt-6 mb-8 text-gray-600 dark:text-gray-300'>
                  {article.description}
                </p>
                <div className='flex flex-wrap gap-2 mb-5'>
                  {article.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className='px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-sm text-gray-600 dark:text-gray-300'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='flex items-center justify-between'>
                  <a
                    href={`/blog/${
                      idx === 0
                        ? 'smart-warehouse-trends-2024'
                        : idx === 1
                        ? 'peak-season-preparation-guide'
                        : 'returns-management-guide'
                    }`}
                    className='inline-block text-info dark:text-blue-300 hover:underline'
                  >
                    阅读更多
                  </a>
                  <span className='text-sm text-gray-500 dark:text-gray-400'>
                    {article.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
