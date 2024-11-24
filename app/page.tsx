import { FiDownload } from "react-icons/fi"
import { Button } from "@/components/ui/button"

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
          <div className="text-center xl:text-left xl:ml-32 mt-20">

            <h1 className="h2 mb-6">
              Bienvenue <br /> 
              <div className="flex gap-3">
                chez <TextAnimation />
              </div>
            </h1>

            <p className="max-w-[500px] mb-16 text-gray-900">
              Because we love Benin and these colors.
            </p>

            <Button className="hover:bg-green-600 uppercase gap-2 transition duration-500 ease-in-out">Nos Collections</Button>

            <div className="mb-6 mt-6 xl:mb-0 xl:ml-10">
              <Social 
                containerStyles="flex gap-6" 
                iconStyles="w-9 h-9 border border-green-600 rounded-full flex justify-center items-center text-green-600 text-base 
                   hover:transition-all duration-500"
              />
            </div>


          </div>

          {/* logo */}
          <div>
            <Logo />
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Home
