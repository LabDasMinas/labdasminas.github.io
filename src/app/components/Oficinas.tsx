import Button from "@/components/Button";
import ImageG from "@/components/ImageG"

export default function Oficinas() {
 
    return (
        <div>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 lg:p-32 pb-[150px]" id="workshops">
                <div className="space-x-2 md:space-x-0 py-10 items-center">
                    <div className="flex flex-col lg:col-span-5 content-center items-center md:items-start">  

                        <h2 className="text-4xl font-bold text-center md:text-left mb-18 md:mb-0">Como as <span className="text-rosaLab">oficinas</span> podem ajudar a sla oq sla oq?</h2>
                        <p className="space-y-16 my-8 md:space-y-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        <Button text="Vamos colaborar!"/>
                    </div>                
                </div>
                
                <div className="flex items-start justify-center mb-18 md:mb-0 sm:translate-x-[20%] lg:translate-x-[10%] md:-translate-y-[5%]">
                    <div className="relative">
                        <ImageG src="/shape1_oficinas.svg" alt="" width={380} height={380} className="lg:w-[380px] h-fit w-[260px]"/>
                        <ImageG 
                            src="/meninas.png" 
                            alt="" 
                            width={380} 
                            height={380} 
                            className="absolute rounded-full top-1/2 left-1/2 -translate-x-[58%] -translate-y-[55%] lg:w-[380px] h-fit w-[260px]"
                        />
                    </div>
                </div>
                
            </section>
            <div className="absolute right-0">
                <ImageG src="/shape2_oficinas.svg" alt="" width={180} height={180} className="-translate-y-[120%] md:-translate-y-[80%] lg:w-[180px] h-fit w-[100px]"/>
            </div>
        </div>
    )
}