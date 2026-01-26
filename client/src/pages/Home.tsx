import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Initiatives from "@/components/Initiatives";
import AboutSection from "@/components/AboutSection";
import Magazine from "@/components/Magazine";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <Navigation />
      
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <Magazine />
        <Initiatives />
        <Subscribe />
      </main>
      
      <Footer />
    </div>
  );
}
