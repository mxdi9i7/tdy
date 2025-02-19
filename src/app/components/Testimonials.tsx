import Container from './Container';

export default function Testimonials() {
  const testimonials = [
    {
      name: '张经理',
      role: '跨境电商卖家',
      content:
        '与TDY海外仓合作两年多，他们的服务一直很稳定。特别是旺季期间的订单处理速度令人印象深刻，帮助我们在亚马逊平台上保持了很高的客户满意度。他们的库存管理系统非常准确，让我们可以实时掌握货物状态。',
      image: './images/avatars/avatar.webp',
    },
    {
      name: '李总',
      role: 'Shopify店主',
      content:
        '作为一个中小型卖家，最担心的就是成本问题。TDY海外仓的性价比确实很高，不仅仓储费用合理，他们的一件代发服务更是帮我们节省了大量人力成本。客服响应也很及时，经常给出很专业的建议。',
      image: './images/avatars/avatar-1.webp',
    },
    {
      name: 'Mike Johnson',
      role: 'Wayfair Seller',
      content:
        "TDY's warehouse service has been instrumental in our expansion into the Chinese market. Their team's understanding of both US and Chinese e-commerce platforms makes cross-border trade seamless. The quality control process is thorough and reliable.",
      image: './images/avatars/avatar-2.webp',
    },
    {
      name: '王老板',
      role: '跨境物流经理',
      content:
        'TDY的退货处理服务特别专业，他们不仅处理退货检查和分类，还会提供详细的产品质量分析报告，帮助我们改进产品。他们的FBA中转服务也很完善，为我们省去了很多物流环节的麻烦。',
      image: './images/avatars/avatar-3.webp',
    },
    {
      name: '陈经理',
      role: '品牌运营总监',
      content:
        '我们是一个快速成长的品牌，TDY海外仓的智能分仓系统帮助我们实现了多渠道库存的高效管理。他们的数据分析服务也很专业，定期提供的市场分析报告对我们的运营策略很有帮助。',
      image: './images/avatars/avatar-4.webp',
    },
    {
      name: 'Sarah Miller',
      role: 'E-commerce Consultant',
      content:
        'What impresses me most about TDY is their ability to handle complex logistics challenges. Their customs clearance expertise and efficient return management system have helped many of my clients streamline their cross-border operations.',
      image: './images/avatars/avatar-2.webp',
    },
  ];

  return (
    <div className='text-gray-600 dark:text-gray-300' id='reviews'>
      <div className='max-w-7xl mx-auto px-6 md:px-12'>
        <div className='mb-20 space-y-4 px-6 md:px-0'>
          <h2 className='text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl'>
            客户反馈
          </h2>
          <p className='text-center text-gray-600 dark:text-gray-300'>
            来自我们尊贵客户的真实评价
          </p>
        </div>
        <div className='md:columns-2 lg:columns-3 gap-8 space-y-8'>
          {testimonials.map((item, index) => (
            <div
              key={index}
              className='aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none'
              style={{
                backgroundImage: 'url(./images/warehouse-pattern.jpg)',
                backgroundSize: 'cover',
                backgroundBlendMode: 'overlay',
              }}
            >
              <div className='flex gap-4'>
                <img
                  className='w-12 h-12 rounded-full object-cover'
                  src={item.image}
                  alt={item.name}
                  width='400'
                  height='400'
                  loading='lazy'
                />
                <div>
                  <h6 className='text-lg font-medium text-gray-700 dark:text-white'>
                    {item.name}
                  </h6>
                  <p className='text-sm text-gray-500 dark:text-gray-300'>
                    {item.role}
                  </p>
                </div>
              </div>
              <p className='mt-8'>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
