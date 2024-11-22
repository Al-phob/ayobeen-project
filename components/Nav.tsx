"use client";

import { link } from "fs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";

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
                        "text-green-800 border-b-2 border-emerald-500"
                    } font-medium hover:text-emerald-700 transition-all`}>
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    ) 
}

export default Nav