'use client'

import ImageG from "@/components/ImageG"
import Header from "@/components/Header"



export default function Hero(){
    return (
        <div>
        <Header/>   
        <section className="flex place-content-center 2xl:place-content-start md:min-h-[calc(100vh+150px)] 2xl:min-h-[calc(100vh+70px)] pb-32 md:pb-16" id="home">         
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-2 pt-24 md:pt-16 2xl:p-32">
                <div className="2xl:ml-16">
                    <div className="max-w-min flex flex-col justify-center min-w-[300px]  md:min-w-[400px]">   
                        <h1 className=" font-bold text-3xl sm:text-6xl max-w-max">
                            Lab das Minas
                        </h1>
                         <p className="pt-5 md:pt-5 pb-5 md:pb-9 text-base leading-5 text-justify md:text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>

                    <button className="bg-white text-rosaLab rounded-[30px] h-[50px] min-w-[180px] md:h-[60px] md:min-w-[200px] font-medium text-[18px]">
                        Saiba mais
                    </button>
                </div>
                

                <div className="lg:col-span-3 w-full flex justify-center">
                    <ImageG className="absolute right-0 transform -translate-y-[50%] md:-translate-y-[80%] 2xl:-translate-y-[60%] h-[210px] md:h-[620px] w-fit" src="/dinaFinal.png" height={200} width={500} alt=""/>
                </div>
                
            </div>        
        </section>
            <ImageG 
                src="/header_green.svg" 
                alt="" width={0} height={0}
                className="absolute w-full h-[800px] object-fill top-0 md:h-fit -top-[50px] 2xl:-top-[120px] z-[-2]"
            />
            <ImageG 
                src="/header_pink.svg" 
                alt="" width={0} height={0}
                className="absolute w-full h-[850px] object-fill md:h-fit -top-[50px] 2xl:-top-[120px] z-[-1]"
            />
        </div>
    );
}                                                                                                                               