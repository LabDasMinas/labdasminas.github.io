import Image from "@/components/ImageG";
export default function OQueFazemos() {
    return (

        <section className="text-center text-white flex flex-col items-center justify-center relative" id="about">

                <Image src="/greenblob-fazemos.svg" width={200} height={200} alt="" className=" absolute -left-12 -bottom-20 -z-10 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]" />


            <p className="text-xl mb-4">Para quê o Lab existe?</p>
            <h2 className="text-4xl text-verdeLab font-bold mb-8">Nossos objetivos</h2>
            <p className="text-base">Saiba um pouco mais dos nossos principais objetivos e motivações</p>

            <div className="flex flex-col lg:flex-row gap-12 p-12 items-center justify-center w-full">

                <div className="bg-[#F4F4F4] w-full  lg:w-72 xl:w-96 shadow-lg rounded-xl text-black border border-[#F3F3F3] gap-y-4 py-8 px-16 flex flex-col justify-center items-center">

                    <div className="size-24 mb-8 relative">
                        <Image src="/fazemos-1.png" fill={true} alt="" />
                    </div>
                    <h3 className="text-2xl font-semibold">Incentivar meninas em STEM</h3>
                    <p className="text-sm break-words text-center">
                    Ainda hoje, as mulheres representam um pouco mais de 25% dos graduados de cursos na área de STEM. Queremos incentivar as meninas jovens a se interessarem por essas áreas, mostrando-as que são capazes!
                    </p>

                </div>

                <div className="bg-roxo-gradient  w-full lg:w-72 xl:w-96 shadow-xl rounded-xl text-white border border-[#F3F3F3] gap-y-4 lg:py-20 py-8 px-16 flex flex-col justify-center items-center">
                    <div className="size-24 mb-8 relative">
                        <Image src="/fazemos-3.png" fill={true} alt="" />
                    </div>
                    <h3 className="text-2xl font-semibold">Disseminar conhecimento</h3>
                    <p className="text-sm text-center">Através de posts no instagram e oficinas, buscamos compartilhar sobre a trajetória de mulheres na área de STEM e conteúdos técnicos que incentivem a curiosidade. Os temas vão de construção de carrinhos eletrônicos até biologia das flores.</p>

                </div>

                <div className="bg-[#F4F4F4] w-full  lg:w-72 xl:w-96 shadow-lg rounded-xl text-black border border-[#F3F3F3] gap-y-4 py-8 px-16 flex flex-col justify-center items-center">

                    <div className="size-24 mb-8 relative">
                        <Image src="/fazemos-2.png" fill={true} alt="" />
                    </div>
                    <h3 className="text-2xl font-semibold">Criar um ambiente seguro</h3>
                    <p className="text-sm text-center text-ellipsis">
                    O grupo é formado apenas por mulheres e atende apenas as meninas das escolas. Nosso objetivo é criar um ambiente acolhedor para fortalecer os laços e contato entre as próprias mulheres, para que sejamos uma rede de apoio!
                    </p>

                </div>


            </div>

        </section>

    );
}
