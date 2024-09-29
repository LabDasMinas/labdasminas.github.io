import Image from "@/components/ImageG";
import { LuInstagram } from "react-icons/lu";
import { LuMail } from "react-icons/lu";


interface RedeSocialProps {
    icon: JSX.Element;
    link: string;
}

function RedeSocial({ icon, link }: RedeSocialProps) {
    return (
        <a href={link} target="_blank" className="filter drop-shadow-lg bg-white p-3 rounded-full">
            {icon}
        </a>
    );
}


export default function Footer() {
    return (
        <section className="flex flex-col md:flex-row w-full h-fit text-white px-8 py-16 md:p-20 relative mt-16">

            <Image src="/footer-wave-pink.svg" fill={true} alt="" className="object-cover object-top z-10"/>
            <Image src="/footer-wave-green.svg" fill={true} alt="" className="object-cover object-top z-0 -mt-16"/>

            <div className="z-20 w-full flex flex-col md:flex-row">
                <div className="flex flex-col flex-grow">
                <h1 className="font-bold "> Lab das minas! </h1>
                <h2 className="text-sm"> Lugar de mulher é onde ela quiser. </h2>
                <div className="flex gap-x-2 text-verdeLab pt-4">
                    <RedeSocial icon={<LuInstagram size={20} />} link="https://www.instagram.com/labdasminas/" />
                    <RedeSocial icon={<LuMail size={20} />} link="mailto:labdasminas@gmail.com" />
                </div>
            </div>
            <div className="md:flex md:flex-col md:items-end md:justify-between pt-8 md:pt-0">
                <Image src="/usplogo.svg" alt={""} width={39} height={16}/>
                <p className="text-xs pt-4 md:self-end">Desenvolvido por Lab das Minas</p>
            </div>
            </div>
        </section>
    );
}
