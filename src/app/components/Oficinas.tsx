import Button from "@/components/Button";
import ImageG from "@/components/ImageG"

export default function Oficinas() {
 
    return (
        <div>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 md:px-16  lg:p-32">
                <div className="space-x-2 md:space-x-0 py-10 items-center">
                    <div className="lg:col-span-5 content-center">  

                        <h2 className="text-4xl font-bold text-center md:text-left mb-18 md:mb-0">Como as <span className="text-rosaLab">oficinas</span> podem ajudar a sla oq sla oq?</h2>
                        <p className="space-y-16 my-8 md:space-y-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        <Button text="Vamos colaborar!"/>
                    </div>                
                </div>
                
                <div className="flex items-start justify-center mb-18 md:mb-0" style={{transform: 'translate(10%, -5%)'}}>
                    <div className="relative">
                        <ImageG src="/shape1_oficinas.svg" alt="" width={380} height={380} />
                        <ImageG 
                            src="/meninas.png" 
                            alt="" 
                            width={380} 
                            height={380} 
                            style={{ borderRadius: '100%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-58%, -55%)' }} 
                        />
                    </div>
                </div>
                
            </section>
            <div className="flex items-center justify-end mb-18 md:mb-0">
                <ImageG src="/shape2_oficinas.svg" alt="" width={180} height={180}  style={{transform: 'translate(0%, -80%)'}}/>
            </div>
        </div>
    )
}