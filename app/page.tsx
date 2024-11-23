import { FiDownload } from "react-icons/fi"
import { Button } from "@/components/ui/button"
import Social from "@/components/Social"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">

        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl-pb-24">
          {/*text */}
          <div className="text-center xl:text-left xl:ml-32 mt-20">

            <h1 className="h2 mb-6">
              Bienvenue <br /> chez <span className="h2 text-green-600">AyoBeen</span>
            </h1>

            <p className="max-w-[500px] mb-16 text-gray-900">
              Because we love Benin and these colors.
            </p>

            <Button className="hover:bg-green-600 uppercase gap-2">Nos Collections</Button>

            <div className="mb-6 mt-6 xl:mb-0">
              <Social />
            </div>


          </div>

          {/* photo */}
          <div>photo</div>
        </div>
        
      </div>
    </section>
  )
}

export default Home
