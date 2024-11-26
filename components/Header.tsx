
import Link from 'next/link'
import Image from 'next/image'

// components
import Nav from './Nav'
import MobileNav from './MobileNav'

export default function Header() {
  return (
    <header className=" bg-gradient-to-r from-emerald-200 via-emerald-900 via-40% to-emerald-300 to-80% w-full z-20 top-0 start-0 border-b dark:bg-white">
      <div className="max-w-screen-xl disp flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image 
              src="/image/ayobeen-1.png"
              alt="Flowbite Logo" 
              width={60} 
              height={60}
            />
            <h1 className="self-center font-bold whitespace-nowrap text-white dark:text-gray-800 hover:text-green-800 shadow-lime-700">AYOBEEN</h1>
        </Link>
        
        {/* desktop nav */}
        <div className="hidden xl:flex">
          <Nav />
        </div>
        

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>


      </div>
    </header>
  )
}
