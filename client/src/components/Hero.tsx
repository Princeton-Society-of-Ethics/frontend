import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background text-foreground">
      {/* Soft Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-background pointer-events-none"></div>
      
      {/* Decorative Circle */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <span className="h-2 w-2 rounded-full bg-primary"></span>
            <span className="text-primary text-sm font-bold tracking-wide uppercase">
              Est. 2004
            </span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-foreground">
            What do we owe <br/>
            <span className="text-primary">to each other?</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-medium">
            The Princeton Undergraduate Society of Ethics is a student-run organization dedicated to fostering rigorous ethical inquiry and moral reflection.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/initiatives">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-14 text-lg font-bold shadow-lg shadow-primary/20 transition-transform hover:scale-105">
                Explore Initiatives
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="border-2 border-foreground/10 text-foreground hover:bg-secondary hover:text-foreground rounded-full px-8 h-14 text-lg font-bold transition-transform hover:scale-105">
                Our Mission
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative hidden lg:block h-[600px] w-full">
          {/* Modern Image Grid Layout */}
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="space-y-4 mt-12">
              <div className="bg-secondary h-64 rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-500">
                 <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <img src="/logo.svg" className="w-24 h-24 opacity-20" alt="Logo" />
                 </div>
              </div>
              <div className="bg-foreground h-48 rounded-2xl overflow-hidden shadow-lg p-6 flex flex-col justify-center text-background transform hover:-translate-y-2 transition-transform duration-500 delay-100">
                 <p className="font-serif text-lg font-bold mb-2">"The unexamined life is not worth living."</p>
                 <p className="text-sm opacity-70">— Socrates</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white h-48 rounded-2xl overflow-hidden shadow-lg p-6 flex flex-col justify-center border border-border transform hover:-translate-y-2 transition-transform duration-500 delay-200">
                 <p className="font-serif text-lg font-bold mb-2 text-foreground">"Ethics is knowing the difference..."</p>
                 <p className="text-sm text-muted-foreground">— Potter Stewart</p>
              </div>
              <div className="bg-secondary h-64 rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-500 delay-300">
                 <div className="w-full h-full bg-gradient-to-tl from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="font-serif text-6xl font-bold text-primary/20">?</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
