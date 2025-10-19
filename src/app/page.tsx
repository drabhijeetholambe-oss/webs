import Image from "next/image";
import Hero from "./ui/hero";
import About from "./ui/about";
import Services from "./ui/services";
import Contact from "./ui/contact";

export default function Home() {
  return (
    <div>

<main>
  <section>
    <Hero/>
    <About/>
    <Services/>

  </section>
</main>
    </div>

  );
}
