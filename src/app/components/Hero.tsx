'use client'

import ImageG from "@/components/ImageG"
import Header from "@/components/Header"



export default function Hero(){
    return (
    <div>
        <Header/>
        <section className="flex flex-col w-full h-fit text-white px-8 md:p-20 relative mb-12">

        <ImageG src="/header_green.svg" fill={true} alt="" className="object-cover object-bottom z-0 drop-shadow-[0_-4px_4px_rgba(0,0,0,0.25)]" />
        <ImageG src="/header_pink.svg" fill={true} alt="" className="object-cover object-bottom z-1 -mt-16"/>

        
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 px-2 pb-32 md:p-2 lg:p-16 2xl:pb-32 z-10">
                <div className="2xl:ml-16">
                    <div className="lg:max-w-min flex flex-col justify-center md:min-w-[400px]">   
                        <h1 className=" font-bold text-3xl sm:text-6xl max-w-max">
                            Lab das Minas
                        </h1>
                        <p className="pt-5 md:pt-5 pb-5 md:pb-9 text-base leading-5 text-justify md:text-left">
                            O Lab das Minas é um grupo de pesquisa e extensão da EACH-USP com propósito de incentivar e apoiar meninas e mulheres nas áreas de Ciência e Tecnologia. 
                        </p>
                    </div>

                    <button className="bg-white text-rosaLab rounded-[30px] h-[50px] min-w-[160px] md:h-[60px] md:min-w-[200px] font-medium text-[18px]">
                        Saiba mais
                    </button>
                </div>
                    

                
                <div className="absolute xl:h-full h-[210px] lg:h-[550px] w-[500px] right-0 bottom-0 -mb-10">
                    <div className="relative w-full h-full">
                    <ImageG className="object-right object-scale-down right-0 bottom-0" src="/dinaFinal.png" fill={true} alt=""/>
                    </div>

                </div>
                    
            </div>
        </section>
    </div>
    );
}                                                                                                                               