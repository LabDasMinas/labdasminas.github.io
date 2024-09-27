'use client'
import Image from 'next/image'
import { usePathname } from "next/navigation";
import { useState } from "react";

import ImageG from './ImageG';


export default function Header() {

    const navLinks = [
        {
            title: "Início",
        },
        {
            title: "Quem somos?",
        },
        {
            title: "Oficinas",
        },
        {
            title: "Produtos",
        }
    ]

    const pathname = usePathname();

    const [openMenu, setOpenMenu] = useState(false);


    return (

        <header className="text-black  m-8 lg:flex lg:justify-center lg:items-center relative px-4">

            <div className="flex items-center">
                <ImageG
                    src="/logo_Lab.png" 
                    alt="Lab das Minas"
                    width={40}
                    height={40}
                />
            </div>

             <nav className={`flex grow flex-col lg:flex-row lg:items-center lg:justify-end`}>
                    {
                        navLinks.map((link) => (

                            <a className={` transition-all lg:mx-2 xl:mx-8 text-white`}
                                
                                key={link.title}>
                                {link.title}
                            </a>
                        ))
                    }
                    <button className='transition-all  text-white' style={{border:'1px solid white', borderRadius: 30, paddingInline: 20, paddingBlock: 5, marginLeft:'8px'}}>Colaborar</button>
            </nav>


        </header>

    );
}