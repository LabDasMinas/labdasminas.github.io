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
                style={{ position: 'absolute', transform: 'translate(0%, 55%)'}} 
            />

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 md:px-16  lg:p-32" style={{paddingLeft: "0px"}}>
                <div className="flex items-start justify-center mb-18 md:mb-0" style={{  }}>
                    <div className="relative">
                        <ImageG 
                            src="/shape1_produtos.svg" 
                            alt="" 
                            width={300} 
                            height={358} 
                            style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(5%, -18%)' }} 
                        />
                        <ImageG 
                            src="/produtos.png" 
                            alt="" 
                            width={800} 
                            height={700} 
                            style={{ position: 'relative', zIndex: 1, transform: 'translate(15%, 0%)' }} 
                        />
                    </div>
                </div>


                <div className="space-x-2 md:space-x-0 py-10 items-center">
                    <div className="flex flex-col lg:col-span-5 items-end">  

                        <h2 className="text-4xl font-bold text-center md:text-right mb-18 md:mb-0">Não percam os nossos <span className="text-rosaLab">produtinhos</span></h2>
                        <p className="space-y-16 my-8 md:space-y-8 md:text-right" style={{maxWidth:"400px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        <Button text="Compre já!"/>
                    </div>                
                </div>
                                
            </section>
        
        </div>
    )
}