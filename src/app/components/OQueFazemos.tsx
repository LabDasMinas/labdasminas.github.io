import Image from "@/components/ImageG";
export default function OQueFazemos() {
    return (

        <section className="text-center text-white flex flex-col items-center justify-center relative">
            {/* <Image src="/greenblob-fazemos.svg" width={400} height={500} alt="" className=" absolute -left-48 -bottom-96 z-0 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]" /> */}

            {/* <div className="bg-red-500 size-40 absolute -left-20 -bottom-20" /> */}

            <p className="text-xl mb-4">O que fazemos?</p>
            <h2 className="text-4xl text-verdeLab font-bold mb-8">O que fazemos?</h2>
            <p className="text-base">Saiba um pouco mais dos nossos principais objetivos e motivações</p>

            <div className="flex flex-col lg:flex-row gap-12 p-12 items-center justify-center w-full">

                <div className="bg-[#F4F4F4] w-full lg:w-72 shadow-lg rounded-xl text-black border border-[#F3F3F3] gap-y-4 py-8 px-16 flex flex-col justify-center items-center">

                    <div className="size-24 mb-8 relative">
                        <Image src="/fazemos-1.png" fill={true} alt="" />
                    </div>
                    <h3 className="text-2xl font-semibold">Títualo</h3>
                    <p className="text-sm break-words text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus urna sapien, convallis non accumsan luctus, luctus vulputate odio. Ut tincidunt, urna quis posuere pretium, nibh lectus pretium tellus, quis placerat orci nunc ac nulla.</p>

                </div>

                <div className="bg-roxo-gradient  w-full lg:w-72 shadow-xl rounded-xl text-white border border-[#F3F3F3] gap-y-4 lg:py-20 py-8 px-16 flex flex-col justify-center items-center">
                    <div className="size-24 mb-8 relative">
                        <Image src="/fazemos-3.png" fill={true} alt="" />
                    </div>
                    <h3 className="text-2xl font-semibold">Título</h3>
                    <p className="text-sm text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus urna sapien, convallis non accumsan luctus, luctus vulputate odio. Ut tincidunt, urna quis posuere pretium, nibh lectus pretium tellus, quis placerat orci nunc ac nulla.</p>

                </div>

                <div className="bg-[#F4F4F4] w-full lg:w-72 shadow-lg rounded-xl text-black border border-[#F3F3F3] gap-y-4 py-8 px-16 flex flex-col justify-center items-center">

                    <div className="size-24 mb-8 relative">
                        <Image src="/fazemos-2.png" fill={true} alt="" />
                    </div>
                    <h3 className="text-2xl font-semibold">Título</h3>
                    <p className="text-sm text-left text-ellipsis">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus urna sapien, convallis non accumsan luctus, luctus vulputate odio. Ut tincidunt, urna quis posuere pretium, nibh lectus pretium tellus, quis placerat orci nunc ac nulla.</p>

                </div>


            </div>

        </section>

    );
}
