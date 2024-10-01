'use client'

import ImageG from "@/components/ImageG"
import Header from "@/components/Header"



export default function Hero(){
    return (
    <div>
        <Header/>
        <section className="flex flex-col w-full h-fit text-white px-8 md:p-20 relative mb-8">

        <ImageG src="/header_green.svg" fill={true} alt="" className="object-cover object-bottom z-0 drop-shadow-[0_-4px_4px_rgba(0,0,0,0.25)]" />
        <ImageG src="/header_pink.svg" fill={true} alt="" className="object-cover object-bottom z-1 -mt-16"/>

        
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 px-2 pb-32 md:p-2 lg:p-16 2xl:pb-32 z-10">
                <div className="2xl:ml-16">
                    <div className="lg:max-w-min flex flex-col justify-center md:min-w-[400px]">   
                        <h1 className=" font-bold text-3xl sm:text-6xl max-w-max">
                            Lab das Minas
                        </h1>
                        <p className="pt-5 md:pt-5 pb-5 md:pb-9 text-base leading-5 text-justify md:text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>

                    <button className="bg-white text-rosaLab rounded-[30px] h-[50px] min-w-[160px] md:h-[60px] md:min-w-[200px] font-medium text-[18px]">
                        Saiba mais
                    </button>
                </div>
                    

                <div className="lg:col-span-3 w-full flex justify-center">
                    <ImageG className="absolute right-0 -translate-y-[30%] lg:-translate-y-[80%] 2xl:-translate-y-[60%] h-[210px] lg:h-[550px] w-fit" src="/dinaFinal.png" height={200} width={500} alt=""/>
                </div>
                    
            </div>
        </section>
    </div>
    );
}                                                                                                                               