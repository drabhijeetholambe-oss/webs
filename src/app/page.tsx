import Image from "next/image";
import Hero from "./ui/hero";
import About from "./ui/about";
import Services from "./ui/services";
import Contact from "./ui/contact";
import BookAppointment from "./ui/book-appointment";

export default function Home() {
  return (
    <div>
      
<main>
  <section>
    <Hero/>
    <About/>
    <Services/>
    <BookAppointment/>

  </section>
</main>
    </div>
    
  );
}
