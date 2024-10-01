'use client';
import { usePathname } from "next/navigation";
import { useState } from "react";
import ImageG from './ImageG';
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

export default function Header() {
    const navLinks = [
        { title: "Início", id: "home" },
        { title: "Quem somos?", id: "about" },
        { title: "Oficinas", id: "workshops" },
        { title: "Produtos", id: "products" }
    ];

    const [openMenu, setOpenMenu] = useState(false);

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setOpenMenu(false); // Fecha o menu ao clicar em um link
        }
    };

    return (
        <header className="text-black py-4 px-8 lg:flex lg:justify-center lg:items-center relative bg-rosaLab md:bg-transparent">
            <div className="flex items-center">
                <ImageG
                    src="/logo_Lab.png" 
                    alt="Lab das Minas"
                    width={40}
                    height={40}
                />
                <button id="navButton" title="Menu de navegação" className="text-white w-full flex justify-end lg:hidden" onClick={() => setOpenMenu((prevValue) => !prevValue)}>
                    {openMenu ? <FiX size={30} /> : <FiMenu size={30} />}
                </button>
            </div>
            <section className={`m-4 drop-shadow left-0 w-[calc(100vw-32px)] rounded-md z-40 p-4 lg:p-0 my-2 transition-all duration-300 max-lg:absolute max-lg:bg-verdeLab lg:flex lg:flex-grow lg:visible lg:opacity-100 ${openMenu ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <nav className={`flex grow flex-col lg:flex-row lg:items-center lg:justify-end`}>
                    {navLinks.map((link) => (
                        <a 
                            key={link.title} 
                            onClick={() => handleScroll(link.id)}
                            className={`transition-all lg:mx-2 xl:mx-8 text-white hover:font-bold cursor-pointer`}
                        >
                            {link.title}
                        </a>
                    ))}
                    <button className='transition-all text-white' style={{ border: '1px solid white', borderRadius: 30, paddingInline: 20, paddingBlock: 5, marginLeft: '8px' }} onClick={() => handleScroll('colab')}>Colaborar</button>
                </nav>
            </section>
        </header>
    );
}
