import Image from "@/components/ImageG";
export default function OQueFazemos() {
    return (
        <section className="text-center text-white flex flex-col items-center justify-center relative">
            <Image src="/greenblob-fazemos.svg" fill={true} alt="" className="object-cover object-top z-10 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]" />
            
            <p className="text-xl mb-4">O que fazemos?</p>
            <h2 className="text-4xl text-verdeLab font-bold mb-8">O que fazemos?</h2>
            <p className="text-base">Saiba um pouco mais dos nossos principais objetivos e motivações</p>

            <div className="grid grid-cols-3 gap-24 p-12 items-center justify-center w-[70%]">

                <div className="bg-[#F4F4F4] h-80  w-full shadow-lg rounded-xl text-black border border-[#F3F3F3] gap-y-4 py-8 px-16 flex flex-col justify-center items-center">

                    <div className="bg-red-500 size-28 mb-8"></div>
                    <h3 className="text-2xl font-semibold">Título</h3>
                    <p className="text-sm text-ellipsis text-left text-ellipsis">Texto explicativo breve falando de objetivos bla bla bla bla aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>

                </div>

                <div className="bg-roxo-gradient h-96  w-full shadow-xl rounded-xl text-white border border-[#F3F3F3] gap-y-4 py-8 px-16 flex flex-col justify-center items-center">
                    <div className="bg-red-500 size-28 mb-8"></div>
                    <h3 className="text-2xl font-semibold">Título</h3>
                    <p className="text-sm text-left text-ellipsis">Texto explicativo breve falando de objetivos bla bla bla bla aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaTexto explicativo breve falando de objetivos bla bla bla bla aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>

                </div>

                <div className="bg-[#F4F4F4] h-80 w-full shadow-lg rounded-xl text-black border border-[#F3F3F3] gap-y-4 py-8 px-16 flex flex-col justify-center items-center">

                    <div className="bg-red-500 size-28 mb-8"></div>
                    <h3 className="text-2xl font-semibold">Título</h3>
                    <p className="text-sm text-left text-ellipsis">Texto explicativo breve falando de objetivos bla bla bla bla aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>

                </div>


            </div>

        </section>
    );
}
