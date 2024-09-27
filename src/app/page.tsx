
import Example from "./components/Example";
import Hero from "./components/Hero";
import Oficinas from "./components/Oficinas";
import Produtos from "./components/Produtos";

import OQueFazemos from "./components/OQueFazemos";
import ComoColaborar from "./components/ComoColaborar";


export default function Home() {


  return (
    <div className="bg-escuroLab min-h-screen h-full">
      <OQueFazemos />
      <ComoColaborar />
      <Hero/>
      <Oficinas/>
      <Produtos/>
    </div>
  );
}
