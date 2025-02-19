import Container from './Container';

export default function LogoGrid() {
  const logos = [
    {
      name: 'AliExpress',
      url: './images/brands/aliexpress-logo.svg',
      width: 'w-36',
    },
    {
      name: 'eBay',
      url: './images/brands/ebay.svg',
      width: 'w-24',
    },
    {
      name: 'Home Depot',
      url: './images/brands/homedepot.svg',
      width: 'w-36',
    },
    {
      name: "Lowe's",
      url: './images/brands/lowes.svg',
      width: 'w-28',
    },
    {
      name: 'Shopify',
      url: './images/brands/shopify.svg',
      width: 'w-32',
    },
    {
      name: 'Walmart',
      url: './images/brands/walmart.svg',
      width: 'w-36',
    },
    {
      name: 'Amazon',
      url: './images/brands/amazon.svg',
      width: 'w-32',
    },
  ];

  return (
    <div className='py-16 bg-gray-50 dark:bg-gray-900'>
      <Container>
        <div className='mb-8 text-center'>
          <h2 className='text-2xl font-bold text-gray-800 dark:text-white'>
            支持平台
          </h2>
          <p className='text-gray-600 dark:text-gray-300 mt-2'>
            我们支持以下主流电商平台的仓储和物流服务
          </p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center'>
          {logos.map((logo) => (
            <div
              key={logo.name}
              className='flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full'
              data-aos='fade-up'
              data-aos-delay={(logos.indexOf(logo) % 4) * 100}
            >
              <img
                src={logo.url}
                alt={`${logo.name} logo`}
                className={`${logo.width} h-12 object-contain opacity-75 hover:opacity-100 transition-opacity duration-300 dark:brightness-200`}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
