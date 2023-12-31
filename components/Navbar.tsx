import Link from 'next/link';
import Image from 'next/image';
import CustomButton from './CustomButton';

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1280px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
        <Link href='/' className='flex justify-center items-center'>
          <Image
            src='./logo.svg'
            alt='logo'
            width={115}
            height={15}
            className='object-contain'
          ></Image>
        </Link>
        <CustomButton
          title='Sign in'
          btnType='button'
          containerStyles='text-primary-blue bg-white rounded-full min-w-[120px]'
        />
      </nav>
    </header>
  );
};

export default Navbar;
