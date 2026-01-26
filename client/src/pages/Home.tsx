import { Button } from "@/components/ui/button";
import DynamicNavigation from "@/components/DynamicNavigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Initiatives from "@/components/Initiatives";
import AboutSection from "@/components/AboutSection";
import Magazine from "@/components/Magazine";
import Subscribe from "@/components/Subscribe";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-primary/20 selection:text-primary">
        <DynamicNavigation />
        
        <main className="flex-grow">
          <Hero />
          <Initiatives />
          <AboutSection />
          <Magazine />
          <Subscribe />
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
}
