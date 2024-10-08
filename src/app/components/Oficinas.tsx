import Button from "@/components/Button";
import ImageG from "@/components/ImageG"

export default function Oficinas() {
 
    return (
        <div>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 lg:p-32 pb-[150px]" id="workshops">
                <div className="space-x-2 md:space-x-0 py-10 items-center">
                    <div className="flex flex-col lg:col-span-5 content-center items-center md:items-start">  

                        <h2 className="text-4xl font-bold text-center md:text-left mb-18 md:mb-0">Como e onde as <span className="text-rosaLab">oficinas</span> são realizadas?</h2>
                        <p className="space-y-16 mt-8 md:space-y-8">
                            Quinzenalmente, as oficinas são realizadas nas instalações da faculdade <b>EACH (Escola de Artes, Ciências e Humanidades)</b>. Geralmente, possuem a <b>duração de 2 horas</b> de muito aprendizado e mão na massa!
                        </p>
                        <p className="space-y-16 mb-8 mt-2 md:space-y-8">
                            Possuímos um espaço onde guardamos todos os materiais utilizados nas oficinas manuais e onde as meninas de escolas da Zona Leste de São Paulo/SP podem facilmente chegar. Em toda oficina, há <b>distribuição de lanches</b>!
                        </p>

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