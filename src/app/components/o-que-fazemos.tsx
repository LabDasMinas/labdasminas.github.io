import Image from "next/image";

const content = [
  {
    title: "Titulo p ajudar",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting"
  },
  {
    title: "Titulo p ajudar",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting"
  },
  {
    title: "Titulo p ajudar",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting"
  }
]


export default function OqueFazemosSection() {
  return (
    <section className="w-full flex flex-col items-center ">

        <Image src="/dina-arduino.png" alt="" 
          width={400}
          height={283}
          className="-mb-16 z-10"
          style={{ transform: 'rotate(1deg)' }} 
          />

      <section className="flex flex-col gap-y-20 py-40 relative  bg-[#F1EFEF]">
        
        <h2 className="font-bold text-4xl text-escuroLab text-center drop-shadow">Como colaborar?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 px-8 lg:px-24">
          {
            content.map((item, idx) => (
              <article className="flex gap-x-4 items-start justify-start">
                <div><em className="text-[#F1EFEF] drop-shadow flex not-italic font-bold justify-center items-center text-center bg-roxoLab text-2xl rounded-full w-10 h-10 mt-1">{idx + 1}</em></div>
                <div className="text-lg">
                  <p className="font-semibold">
                    {item.title}
                  </p>
                  <p>
                    {item.description}
                  </p>
                </div>
              </article>
            ))
          }
        </div>


      </section>
    </section>
  );
}
