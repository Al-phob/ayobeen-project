"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"



const collections = [
  {
    title: "Nouvelle Collection de Pulls Mixtes",
    description:
      "Des modèles élégants mixtes, disponibles en plusieurs tailles et styles pour affronter la saison avec style !",
    path: "/collections/pull",
    button: "Plongez dans la collection",
    color: "hover:bg-gradient-to-r from-sky-500 from-20% via-emerald-700 via-40% to-emerald-700 to-80% uppercase transition duration-500 ease-in-out"
  },
  {
    title: "Collection Classique : Notre Best-Seller",
    description: 
      "Les T-shirts pour femmes : Confort, simplicité et classe, les t-shirts préférés de nos clientes sont de retour !",
    path: "/collections/classique",
    button: "Entrez dans l'univers",
    color: "hover:bg-gradient-to-r from-pink-500 from-10% via-emerald-700 via-40% to-emerald-700 to-80% uppercase transition duration-500 ease-in-out"
  }
]

const Collections = () => {

  return (
    <section className="font-serif min-h-[80vh] flex flex-col justify-center py-12 px-7 xl:py-0">
      <div className="flex justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.2, duration: 0.5, ease: "easeIn"},
          }}
          
        >
          <div className="h1 text-green-800">
            Nos Collections
          </div>
          <div className="mt-4 mb-10">
            Laissez-vous séduire par des vêtements qui vous ressemblent.
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">

            {collections.map((collection, index) => {
              return ( 
                <div 
                  key={index}
                  className="flex-1 flex flex-col justify-center gap-6 group"
                >
                  <div>
                    {/* Heading */}
                    <div className="h3">{collection.title}</div>
                    
                  </div>
                  {/* Description */}
                  <p>{collection.description}</p>

                  {/* Border */}
                  <div className="border-b-2 border-emerald-700 w-full"></div>

                  {/* Button */}
                  <div>
                    <Link href={collection.path}>
                      <Button className={collection.color}>
                        {collection.button}
                      </Button>
                    </Link>
                    
                  </div>
                </div>
              )
            })}
          </div>
          
        </motion.div>
      </div>

    </section>
    
  )
}

export default Collections