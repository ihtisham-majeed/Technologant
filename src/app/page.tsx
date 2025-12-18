import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Quote from "@/components/Quote";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Quote />
      <Contact />
      <ScrollToTop />
    </div>
  );
}
