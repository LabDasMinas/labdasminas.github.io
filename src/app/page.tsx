import Hero from "./components/Hero";
import Oficinas from "./components/Oficinas";
import Produtos from "./components/Produtos";
import Colaborar from "./components/Colaborar";
import OQueFazemos from "./components/OQueFazemos";


export default function Home() {


  return (
    <div className="bg-escuroLab min-h-screen h-full">
      <Hero />
      <OQueFazemos />
      <Oficinas />
      <Colaborar />
      <Produtos />
    </div>
  );
}
