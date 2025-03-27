import { FiDownload } from "react-icons/fi"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
// components
import Social from "@/components/Social"
import Logo from "@/components/Logo"
import TextAnimation from "@/components/TextAnimation"


const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">

        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl-pb-24">
          {/*text */}
          <div className="text-center xl:text-left xl:ml-32 xl:mt-20 order-2 xl:order-none">

            <h1 className="h2 mb-6">
              Bienvenue <br /> 
              <div className="flex gap-3">
                chez <TextAnimation />
              </div>
            </h1>

            <p className="max-w-[500px] mb-16 text-gray-900">
              Because we love Benin and these colors.
            </p>

           {/* <Button className="hover:bg-green-600 uppercase gap-2 transition duration-500 ease-in-out">Nos Collections</Button> */}

            <div className="flex justify-center items-center xl:bottom-4 xl:left-4 2xl:bottom-10 2xl:left-10 lg:flex flex-col gap-3 z-20">
              <Social 
                containerStyles="flex" 
                iconStyles="w-9 h-9 border border-green-600 rounded-full flex justify-center items-center text-green-600 text-base 
                   hover:transition-all hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:animate-bounce hover:text-white duration-500"
              />
            </div>


          </div>

          {/* logo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Logo />
          </div>
        </div>
        
      </div>

      <div className="h-full mix-blend-darken mt-10">
        <div className="grid grid-cols-2">
          <div className="flex flex-col 2xl:ml-52">
            {/*Image */}
            <Image
              src="/image/pull_collection.jpg"
              alt="newcollection"
              width={670}
              height={470}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-center bg-white">
            {/* text */}
            <div className="mt-60 xl:mt-80 2xl:mr-36">
              <p className="h2 text-center mb-9">
                Découvrez notre nouvelle collection de pull.
              </p>
            </div>
            {/* Button */}
            <div className="flex justify-center items-center">
              <Link href="/collections/pull">
                <Button className="hover:bg-green-600 uppercase transition duration-500 ease-in-out 2xl:mr-20">
                  Nouvelle collection
                </Button>
              </Link>
              
            </div>
          </div>
        </div>
  
      </div>

      <div>
      <div className="h-full mix-blend-darken">
        <div className="grid grid-cols-2">
          <div className="flex flex-col order-2">
            {/*Image */}
            <Image
              src="/image/best_seller.jpg"
              alt="bestseller"
              width={650}
              height={400}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-center bg-white h-full order-1">
            {/* text */}
            <div className="xl:mt-80 mt-60">
              <p className="h2 text-center mb-9 2xl:ml-44">
                Notre Best-Seller.
              </p>
            </div>
            {/* Button */}
            <div className="flex justify-center items-center">
              <Link href="/collections/classique">
                <Button className="hover:bg-green-600 uppercase transition duration-500 ease-in-out 2xl:ml-36">
                  Collection classique
                </Button>
              </Link>
              
            </div>
          </div>
        </div>
  
      </div>

      </div>
    </section>

  )
}

export default Home
