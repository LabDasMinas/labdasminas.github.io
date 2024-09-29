import { LuInstagram } from "react-icons/lu";
import { LuMail } from "react-icons/lu";


interface RedeSocialProps {
    icon: JSX.Element;
    link: string;
}

function RedeSocial({ icon, link }: RedeSocialProps) {
    return (
        <a href={link} className="bg-red-500 p-2 rounded">
            {icon}
        </a>
    );
}


export default function Footer() {
    return (
        <section className="bg-rosaLab flex w-full h-fit">

            <div className="flex flex-col flex-grow">
                <h1> Lab das minas! </h1>
                <h2> Lugar de mulher é onde ela quiser. </h2>
                <div className="flex gap-x-2">
                    <RedeSocial icon={<LuInstagram />} link="" />
                    <RedeSocial icon={<LuMail/>} link="" />
                </div>
            </div>
            <div>
                {/* Logo Usp */}
                <p>Desenvolvido por Lab das Minas</p>
            </div>

        </section>
    );
}
