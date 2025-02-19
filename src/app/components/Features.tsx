import Container from './Container';

export default function Features() {
  return (
    <div id='features'>
      <Container>
        <div className='md:w-2/3 lg:w-1/2'>
          <h2 className='my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl'>
            TDY海外仓服务优势
          </h2>
          <p className='text-gray-600 dark:text-gray-300'>
            我们提供宽敞而高效的仓储空间，配备先进的物流管理系统，为您的跨境电商业务保驾护航。
          </p>
        </div>
        <div className='mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4'>
          <div className='group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10'>
            <div className='relative space-y-8 py-12 p-8'>
              <div className='space-y-2'>
                <h5 className='text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary'>
                  高效仓储管理
                </h5>
                <p className='text-gray-600 dark:text-gray-300'>
                  宽敞的仓储空间，能容纳海量商品，确保每一件货物都得到精心的存放与管理。无论是时尚服装、精致饰品，还是高科技电子产品，都能提供最适宜的存放环境。
                </p>
              </div>
            </div>
          </div>

          <div className='group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10'>
            <div className='relative space-y-8 py-12 p-8'>
              <div className='space-y-2'>
                <h5 className='text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary'>
                  先进物流系统
                </h5>
                <p className='text-gray-600 dark:text-gray-300'>
                  先进的物流管理系统实现库存实时监控和精准调度。从订单生成的那一刻起，以闪电般的速度响应，迅速完成拣货、包装和发货流程。
                </p>
              </div>
            </div>
          </div>

          <div className='group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10'>
            <div className='relative space-y-8 py-12 p-8'>
              <div className='space-y-2'>
                <h5 className='text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary'>
                  专业服务团队
                </h5>
                <p className='text-gray-600 dark:text-gray-300'>
                  拥有美国工作人员30余人，团队经验丰富、训练有素，对每一个环节都精益求精，确保服务的高质量和高效率。
                </p>
              </div>
            </div>
          </div>

          <div className='group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10'>
            <div className='relative space-y-8 py-12 p-8'>
              <div className='space-y-2'>
                <h5 className='text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary'>
                  成本优化方案
                </h5>
                <p className='text-gray-600 dark:text-gray-300'>
                  通过集中仓储和规模化运营，有效降低物流和仓储成本。灵活应对市场变化，根据销售数据及时调整库存，降低库存积压风险，提高资金周转率。
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
