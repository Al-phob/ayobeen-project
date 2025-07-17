
import React from 'react'
import Image from 'next/image'

export const metadata = {
  title: "New Pull",
};

const articles = [

  {
    id: 1,
    name: "Pull Black",
    price: "30.00 $CAN",
    image: "/image/pull-black.jpg",
    hoverImage: "/image/new_collection-1.jpg"
  },
  {
    id: 2,
    name: "Pull Yellow",
    price: "35.00 $CAN",
    image: "/image/pull-jaune.jpg",
    hoverImage: "/image/pull_collection.jpg"
  },
  {
    id: 3,
    name: "Pull Green",
    price: "40.00 $CAN",
    image: "/image/pull-green.jpg",
    hoverImage: "/image/pull-green.jpg"
  },
  {
    id: 4,
    name: "Pull Blue",
    price: "35.00 $CAN",
    image: "/image/pull-blue.jpg",
    hoverImage: "/image/pull-blue.jpg"
  },
  {
    id: 5,
    name: "Pull White",
    price: "40.00 $CAN",
    image: "/image/pull-white.jpg",
    hoverImage: "/image/pull-white.jpg"
  }

]

const pull = () => {
  return (
    <section className='h-full mt-5'>

      <div className="grid grid-cols-1 md:grid-cols-2 px-3">

        <div className="order-2 flex flex-col 2xl:ml-32">
          {/*Image */}
          <Image
            src="/image/pulls-1.jpg"
            alt="newcollection"
            width={670}
            height={470}
            className="object-contain"
          />
        </div>

        <div className="flex flex-col justify-center items-center bg-white">

          {/* text */}
          <div className="px-5">
            <p className="h2 text-center text-[clamp(h2,3vw,2rem)] mb-9">
              Notre nouvelle collection de pull.
            </p>
          </div>

        </div>
        
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Découvrez nos articles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

export default pull