import Container from '@/app/components/Container';
import ContactForm from '@/app/components/ContactForm';
import Image from 'next/image';

export default function Contact() {
  const locations = [
    {
      title: '美国仓储中心',
      address: '18001 Cortney Ct, City of Industry, CA',
      phone: '15726852525',
      email: 'tdywarehousingca@gmail.com',
      image: '/images/warehouse-3.webp',
    },
    {
      title: '义乌总部',
      address: '浙江省义乌市柳青路',
      phone: '15726852525',
      email: 'contact@tdywarehousing.com',
      image: '/images/warehouse-4.jpg',
    },
  ];

  return (
    <div className='pt-32 pb-20'>
      <Container>
        <div className='mb-12 space-y-2 text-center'>
          <h1 className='text-4xl font-bold text-gray-800 md:text-5xl dark:text-white'>
            联系我们
          </h1>
          <p className='lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300'>
            随时为您提供专业的跨境物流解决方案
          </p>
        </div>

        <div className='grid gap-12 md:grid-cols-2 mb-20'>
          {locations.map((location) => (
            <div key={location.title} className='group space-y-4 text-center'>
              <div className='relative overflow-hidden rounded-xl'>
                <Image
                  src={location.image}
                  alt={location.title}
                  width={600}
                  height={400}
                  className='h-64 w-full object-cover transition duration-500 group-hover:scale-105'
                />
              </div>
              <div className='space-y-2'>
                <h3 className='text-2xl font-bold text-gray-800 dark:text-white'>
                  {location.title}
                </h3>
                <div className='space-y-1 text-gray-600 dark:text-gray-300'>
                  <p>{location.address}</p>
                  <p>电话：{location.phone}</p>
                  <p>邮箱：{location.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='rounded-2xl bg-gray-50 dark:bg-gray-900 p-8 md:p-12'>
          <ContactForm />
        </div>
      </Container>
    </div>
  );
}
