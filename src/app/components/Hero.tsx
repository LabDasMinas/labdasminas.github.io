'use client'

import ImageG from "@/components/ImageG"
import Header from "@/components/Header"



export default function Hero(){
    return (
        <div>
            <Header/>
        <section className="flex place-content-center relative min-h-[calc(100vh-100px)] pb-16" >         
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-2 md:px-16  lg:p-16">
                <div className=" content-center">
                    <div className="max-w-min flex flex-col justify-center" style={{minWidth: '400px'}}>
                        
                        <h1 className=" font-bold text-3xl sm:text-6xl max-w-max">
                            Lab das Minas
                        </h1>
                         <p className="pt-5 md:pt-5 pb-5 md:pb-9 text-base leading-5 text-justify md:text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen </p>

                    </div>

                    <button className="flex flex-col md:flex-row items-center md:pb-7 lg:pb-0 bg-white text-rosaLab" style={{borderRadius: '30px', height: '60px', minWidth: '200px', fontWeight: 500, fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        Saiba mais
                    </button>
                </div>
                

                <div className="lg:col-span-3 w-full flex justify-center">
                    <ImageG className=" h-fit" src="/dinaFinal.png" height={200} width={500} alt="" style={{position: 'absolute', right:0, transform: 'translate(0%, -60%)'}}/>
                </div>
                
            </div>        
        </section>
            <ImageG 
                src="/header_green.svg" 
                alt="" width={0} height={0}
                style={{ width: '100%', position: 'absolute', top: -50, zIndex: -2 }} 
            />
            <ImageG 
                src="/header_pink.svg" 
                alt="" width={0} height={0}
                style={{ width: '100%', position: 'absolute', top: -50, zIndex: -1 }} 
            />
        </div>
    );
}                                                                                                                               