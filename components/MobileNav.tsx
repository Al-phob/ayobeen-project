"use client";

import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import path from "path";

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
        <div>logo</div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav