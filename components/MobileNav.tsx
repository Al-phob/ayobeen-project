"use client";

import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import path from "path";
import Image from "next/image";

const links = [
  {
    name: "Accueil",
    path: "/"
  },
  {
    name: "Nos collections",
    path: "/collections"
  },
  {
    name: "Contact",
    path: "/contact"
  }
]

const MobileNav = () => {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[30px] text-emerald-600" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Logo */}
        <div className="mt-32 mb-36 text-center text-2xl">
          <Link href="/">
            <div className="flex justify-center items-center">
              <Image 
                src="/image/ayobeen-1.png"
                alt="Flowbite Logo" 
                width={60} 
                height={60} 
              />
            </div>
            <h1 className="self-center font-bold whitespace-nowrap dark:text-gray-800 hover:text-green-600 shadow-lime-700">AYOBEEN</h1>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex flex-col justify-center items-center gap-7">
          {links.map((link, index) => {
            return <Link href={link.path} key={index} className={`${link.path === pathname &&
              "text-xl border-b-2 border-emerald-500"} 
              text-xl font-medium hover:text-emerald-700 transition-all`}>
                {link.name}
          </Link>
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav