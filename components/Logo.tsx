"use client"

import Image from "next/image"

const Logo = () => {
  return (
    <div className="w-full h-full relative">
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mr-40">
            <Image
                src="/image/ayobeen-1.png"
                priority
                quality={100}
                fill
                alt="logo"
                className="object-contain"
            />
        </div>
    </div>
  )
}

export default Logo