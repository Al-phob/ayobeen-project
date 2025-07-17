import React from 'react'
import { Button } from '@/components/ui/button'

const newAccount = () => {
  return (

    <section className="py-24">
        
        <div className="flex justify-center items-center text-center">
            <h1 className="font-semibold text-3xl p-2 border-b-2 border-emerald-600">
                CRÉER MON COMPTE
            </h1>
        </div>

        <form className="max-w-md mt-8 mx-auto font-times">
            <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-700 peer" placeholder=" " required />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-color_tr bg-transparent border-0 border-b-2 border-bg_primary appearance-none focus:outline-none focus:ring-0 focus:border-emerald-700 peer" placeholder=" " required />
                <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-color_tr duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-emerald-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mot de passe</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-color_tr bg-transparent border-0 border-b-2 border-bg_primary appearance-none focus:outline-none focus:ring-0 focus:border-emerald-700 peer" placeholder=" " required />
                <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-color_tr duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-emerald-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirmer le mot de passe</label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-color_tr bg-transparent border-0 border-b-2 border-bg_primary appearance-none focus:outline-none focus:ring-0 focus:border-emerald-700 peer" placeholder=" " required />
                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-color_tr duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-emerald-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Prénom</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-color_tr bg-transparent border-0 border-b-2 border-bg_primary appearance-none focus:outline-none focus:ring-0 focus:border-emerald-700 peer" placeholder=" " required />
                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-color_tr duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-emerald-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nom</label>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-color_tr bg-transparent border-0 border-b-2 border-bg_primary appearance-none focus:outline-none focus:ring-0 focus:border-emerald-700 peer" placeholder=" " required />
                    <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-color_tr duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-emerald-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tél (123-456-7890)</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-color_tr bg-transparent border-0 border-b-2 border-bg_primary appearance-none focus:outline-none focus:ring-0 focus:border-emerald-700 peer" placeholder=" " required />
                    <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-color_tr duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-emerald-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Compagnie (Ex. Google)</label>
                </div>
            </div>
            <div className="flex justify-center items-center py-4">
                <Button type="submit" className="text-white bg-black hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Soumettre</Button>
            </div>
            
        </form>
        

    </section>

  )
}

export default newAccount