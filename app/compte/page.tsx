import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: "Mon Compte",
};


const Compte = () => {
  return (
        
    <section className="min-h-[80vh] flex flex-col justify-center">
        
        <div className="flex justify-center items-center text-center">
            <h1 className="font-semibold text-3xl p-2 border-b-2 border-emerald-600">
                CONNEXION
            </h1>
        </div>

        <div className="px-6 md:flex justify-center items-center text-center font-times ">
            <form>
                <div className="w-9/10 md:w-96 space-y-9">
                    <label className="text-black"></label>
                    <input type="email" className="w-full p-2 border text-black border-gray-300 rounded-lg hover:border-emerald-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Entrer votre email" required />

                    <label className="text-black"></label>
                    <input type="password" className="w-full p-2 border text-black border-gray-300 rounded-lg hover:border-emerald-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Entrer votre mot de passe" required />

                </div>

                <div className="flex items-start pt-2">
                    <Link href="/" className="underline border-black hover:text-emerald-700">Mot de passe oublié ?</Link>
                </div>

                
                <div className="flex items-start mt-10">
                    <div className="flex items-center h-5">
                      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded" required />
                    </div>
                    <label htmlFor="remember" className="ms-2 text-sm font-medium">Se souvenir de moi</label>
                </div>
 
                <Button type="submit" className="w-full py-2 bg-black text-white hover:bg-emerald-700 rounded-lg mt-10">Se connecter</Button>

                <Link href="/compte/nouveaucompte" className="flex justify-center items-center mt-8 font-semibold hover:text-emerald-700 hover:underline">
                    Créer un compte
                </Link>

            </form>

        </div>
        
    </section>
        

  )
}

export default Compte