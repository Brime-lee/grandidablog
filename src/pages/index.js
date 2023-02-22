import Image from 'next/image';
import cardImg from '../../public/cardImg.jpg';
import Header from './../components/Header';

export default function Home() {
  return (
    <div className='container mx-auto px-2'>
      <div className='grid grid-cols-12 gap-12 '>
        <div className='col-span-8'>
          <div className='p-8 rounded-lg bg-green-100'>
            <Image
              src={cardImg}
              alt='Picture of the author'
              width={1200}
              height={2000}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />

            <h1 className='font-bold mb-8 cursor-pointer mt-4 text-center transition duration-700 text-black hover:text-green-500 text-3xl '>
              Richest people in history
            </h1>
            <div className='flex w-24 justify-center items-center'></div>
          </div>
        </div>
        <div className='col-span-4'></div>
      </div>
    </div>
  );
}
