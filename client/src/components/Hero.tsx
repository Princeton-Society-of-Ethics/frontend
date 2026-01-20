import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background text-foreground border-b-4 border-foreground">
      {/* Brutalist Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch border-x-4 border-foreground bg-background">
        <div className="space-y-12 p-12 border-b-4 lg:border-b-0 lg:border-r-4 border-foreground flex flex-col justify-center">
          <div className="inline-block bg-foreground text-background px-4 py-2 transform -rotate-2 w-fit">
            <span className="font-serif text-sm font-bold tracking-widest uppercase">
              EST. 2004 // PRINCETON
            </span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-none tracking-tighter uppercase">
            WHAT DO WE OWE<br/>
            <span className="bg-primary text-foreground px-2">TO EACH OTHER?</span>
          </h1>
          
          <p className="text-xl font-mono border-l-4 border-primary pl-6 py-2 max-w-md">
            The Princeton Undergraduate Society of Ethics: Rigorous inquiry. Moral reflection. No compromise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-0 border-4 border-foreground w-fit shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Link href="/initiatives">
              <Button size="lg" className="bg-primary text-foreground hover:bg-primary/80 rounded-none px-8 h-16 text-lg font-bold border-r-4 border-foreground">
                EXPLORE INITIATIVES
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost" size="lg" className="bg-background text-foreground hover:bg-foreground hover:text-background rounded-none px-8 h-16 text-lg font-bold">
                OUR MISSION
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative hidden lg:flex flex-col">
          <div className="flex-1 bg-foreground text-background p-12 flex items-center justify-center border-b-4 border-foreground">
             <img 
              src="/logo.svg" 
              alt="The Thinker" 
              className="h-64 w-64 object-contain invert brightness-0"
            />
          </div>
          <div className="flex-1 bg-primary p-12 flex flex-col justify-center relative overflow-hidden">
            <p className="font-serif text-4xl font-bold leading-tight relative z-10">
              "THE UNEXAMINED LIFE IS NOT WORTH LIVING."
            </p>
            <p className="font-mono text-sm mt-4 font-bold uppercase tracking-widest relative z-10">— SOCRATES</p>
            <div className="absolute -bottom-10 -right-10 text-9xl font-serif font-bold opacity-20 rotate-12">?</div>
          </div>
        </div>
      </div>
    </section>
  );
}
