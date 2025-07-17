"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


const links = [
    {
        name: "Accueil",
        path: "/"
    },
    {
        name: "Nos collections",
        path: "/collections"
    },
    {
        name: "Mon Compte",
        path: "/compte"
    },
    {
        name: "Contact",
        path: "/contact"
    }
]

const Nav = () => {
    const pathname = usePathname();

    return (
        <nav className="flex gap-20 mx-32">
            {links.map((link, index) => {
                return (
                    <Link href = {link.path} key={index} className={`${link.path === pathname &&
                        "text-white border-b-2 border-black"
                    } text-white font-medium hover:text-green-800 transition-all`}>
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    ) 
}

export default Nav