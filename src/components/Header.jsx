import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='w-full mb-4 container mx-auto py-8 border-b-2 border-neutral-700 '>
      <div className='flex justify-center items-center'>
        <Link href='/' className='text-black text-4xl font-bold'>
          Grandida Blog
        </Link>
      </div>
    </div>
  );
};

export default Header;
