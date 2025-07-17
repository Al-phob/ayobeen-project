

import React from 'react'
import Image from 'next/image'

export const metadata = {
  title: "Classique",
};

const articles = [

  {
    id: 1,
    name: "T-shirt Green & Yellow",
    price: "40.00 $CAN",
    image: "/image/shirt-green-1.jpg",
    hoverImage: "/image/shirt-green-2.jpg"
  },
  {
    id: 2,
    name: "T-shirt Yellow & Green",
    price: "40.00 $CAN",
    image: "/image/shirt-yellow-1.jpg",
    hoverImage: "/image/shirt-yellow-2.jpg"
  },
  {
    id: 3,
    name: "T-shirt White & Green",
    price: "35.00 $CAN",
    image: "/image/shirt-white-1.jpg",
    hoverImage: "/image/shirt-white-2.jpg"
  },
  {
    id: 4,
    name: "T-shirt Yellow & Red",
    price: "35.00 $CAN",
    image: "/image/shirt-yellowr-1.jpg",
    hoverImage: "/image/shirt-yellowr-2.jpg"
  }

]

const classique = () => {
  return (
    <section className='h-full mt-5'>

      <div className="grid grid-cols-1 md:grid-cols-2 px-3">
      
        <div className="order-2 flex flex-col 2xl:ml-32">
          {/* Video */}
          <video
            className="w-3/4 mx-auto rounded-lg shadow-[16px_-8px_7px_-2px_rgba(34,_197,_94,_0.5)]"
            autoPlay
            loop
            muted
          >
            <source src='/image/video.mp4' type='video/mp4'/>

          </video>
        </div>

        <div className="flex flex-col justify-center items-center bg-white">

          {/* text */}
          <div className="">
            <p className="h2 text-center text-[clamp(6vw,7vw,2rem)] mb-9">
              Notre collection de t-shirts pour femmes.
            </p>
          </div>

        </div>
              
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Découvrez nos articles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 group"
            >
              <div className="relative w-full h-96 overflow-hidden">
                {/* Image par défaut */}
                <Image
                  src={article.image}
                  alt={article.name}
                  width={250}
                  height={250}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                {/* Image par survol */}
                <Image
                  src={article.hoverImage}
                  alt={article.name}
                  width={250}
                  height={250}
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="p-4">
                <div className='flex justify-between  mb-2'>
                  <h2 className="text-lg font-semibold">{article.name}</h2>
                  <span className='text-gray-600 mt-1'>S-XL</span>
                </div>
                <p className="text-emerald-600 mb-4">{article.price}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    

    </section>
  )
}

export default classique