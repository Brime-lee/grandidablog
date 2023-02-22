import Image from 'next/image';
import cardImg from '../../public/cardImg.jpg';
import brime from '../../public/brime.png';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='container mx-auto px-2'>
      <div className='grid grid-cols-12 gap-12 '>
        <div className='col-span-8'>
          <div className='mb-8 rounded-lg bg-emerald-50 p-4 pb-12 shadow-lg sm:p-4 md:p-4 lg:p-8'>
            <div className='relative mb-6 overflow-hidden shadow-md'>
              <Image
                src={cardImg}
                alt='Picture of the author'
                width={1200}
                height={2000}
                className=' w-full rounded-lg rounded-t-lg object-cover object-top shadow-lg'
              />
            </div>
            <Link href='#' passHref>
              <h1 className='mb-8 cursor-pointer text-center text-xl font-semibold text-neutral-700 transition duration-700 hover:text-emerald-500 md:text-2xl lg:text-3xl'>
                Richest people in the world
              </h1>
            </Link>
            <div className='mb-8  flex w-full items-center justify-center text-center'>
              <div className=' mr-8 flex  items-center justify-center'>
                <Image
                  unoptimized
                  alt='brime'
                  height='30px'
                  width='30px'
                  className='w-[30px] h-[30px] rounded-full align-middle'
                  src={brime}
                />
                <p className=' ml-2 inline align-middle text-lg font-medium text-gray-700'>
                  Brime
                </p>
              </div>
              <div className='font-medium text-gray-700'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='mr-2 inline h-6 w-6 text-emerald-500	'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                  />
                </svg>
                <span className='align-middle'>Feb 19 2023</span>
              </div>
            </div>
            <p className='text-md md: text-md mb-8 text-center font-normal text-gray-700 lg:text-lg'>
              Mansa Musa, or Musa I of Mali is considered one of the richest
              people ever. Musa was the tenth emperor of the Mali Empire, one of
              the prosperous Sahelian ...
            </p>
            <div className='text-center'>
              <Link href='#' passHref>
                <span className='ease inline-block transform cursor-pointer rounded-full bg-emerald-500	 px-8 py-3 text-lg font-medium text-white transition duration-500 hover:-translate-y-1 active:translate-y-1 '>
                  Continue Reading
                </span>
              </Link>
            </div>
          </div>
          <div className='col-span-4'></div>
        </div>
      </div>
    </div>
  );
}
