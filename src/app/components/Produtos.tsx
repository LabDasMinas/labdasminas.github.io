import Button from "@/components/Button";
import ImageG from "@/components/ImageG"

export default function Produtos() {
 
    return (
        <div>
            <ImageG 
                src="/shape2_produtos.svg" 
                alt="" 
                width={250} 
                height={338} 
                className="absolute translate-y-[25%] md:translate-y-[55%] w-[150px] lg:w-[230px] h-fit"
            />

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 md:px-16  lg:p-32 lg:pl-0 " id="products">
                <div className="flex items-start justify-center mb-18 md:mb-0">
                    <div className="relative">
                        <ImageG 
                            src="/shape1_produtos.svg" 
                            alt="" 
                            width={300} 
                            height={358} 
                            className="absolute top-1/2 left-1/2 translate-x-[5%] -translate-y-[18%] 2xl:-translate-x-[28%] w-[150px] lg:w-[280px] h-fit"
                        />
                        <ImageG 
                            src="/produtos.png" 
                            alt="" 
                            width={800} 
                            height={700} 
                            className="relative z-1 translate-y-[5%] sm:-translate-x-[30%] lg:translate-x-[15%] lg:translate-y-0 2xl:translate-x-0 w-[450px] lg:w-[500px] 2xl:w-[650px] h-fit"
                        />
                    </div>
                </div>


                <div className="space-x-2 md:space-x-0 py-10 items-center">
                    <div className="flex flex-col lg:col-span-5 items-center md:items-end">  

                        <h2 className="text-4xl font-bold text-center md:text-right mb-18 md:mb-0">Não percam os nossos <span className="text-rosaLab">produtinhos</span></h2>
                        <p className="space-y-16 my-8 md:space-y-8 md:text-right" style={{maxWidth:"400px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        <Button text="Compre já!"/>
                    </div>                
                </div>
                                
            </section>
        
        </div>
    )
}