
import { Mail, Phone, MapPin} from "lucide-react"

export const metadata = {
  title: "Contact",
};

const Contact = () => {
  return (
    <section className="h-full my-32">

      <div className="flex flex-col justify-center items-center">

        <h2 className="text-5xl font-bold">Contactez-nous</h2>
        <p className="text-gray-700 max-w-xl mx-auto text-center px-3 py-6"> Nous sommes là pour répondre à vos questions.
          N'hésitez pas à nous écrire pour toute information supplémentaire. Nous vous répondrons
          dans les plus brefs délais.
        </p>
        
        <div className="flex flex-col md:flex md:flex-row gap-24">
          {/* Address */}
          <div className="flex flex-col justify-center items-center space-y-4 py-4">
            <MapPin className="text-gray-600 font-bold w-32 h-14 " />
            <span className="uppercase font-bold text-emerald-700">A d d r e s s</span>
            <p className="text-lg max-w-56 text-center">1001 Rue Lucien-L'Allier</p>

          </div>

          {/* Phone */}
          <div className=" flex flex-col justify-center items-center space-y-4">
            <Phone className="text-gray-600 font-bold w-32 h-14 " />
            <span className="uppercase font-bold text-emerald-700">P h o n e</span>
            <p className="text-lg">+1 514 703 2115</p>

          </div>

          {/* Email */}
          <div className=" flex flex-col justify-center items-center space-y-4">
            <Mail className="text-gray-600 font-bold w-32 h-14 " />
            <span className="uppercase font-bold text-emerald-700">E m a i l</span>
            <p className="text-lg">wbiotchane@gmail.com</p>

          </div>

        </div>
        
      </div>



    </section>
  )
}

export default Contact