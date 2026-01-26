import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-foreground text-background">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            What do we owe <br/>
            <span className="text-primary italic">to each other?</span>
          </h1>
          
          <p className="text-lg md:text-xl text-background/80 max-w-xl leading-relaxed font-light">
            The Princeton Undergraduate Society of Ethics is a student-run organization dedicated to fostering rigorous ethical inquiry and moral reflection.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/initiatives">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm px-8 h-14 text-lg font-serif">
                Explore Initiatives
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="border-background/30 text-background hover:bg-background/10 hover:text-background rounded-sm px-8 h-14 text-lg font-serif">
                Our Mission
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative hidden lg:block h-[600px] w-full">
          {/* Placeholder for a high-quality image - using a generated style div for now */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-sm overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
               <img 
                src="/logo.svg" 
                alt="The Thinker" 
                className="h-[80%] w-[80%] object-contain opacity-20 invert brightness-0 mix-blend-overlay"
              />
            </div>
          </div>
          
          {/* Floating Card 1 */}
          <div className="absolute top-20 right-10 bg-background text-foreground p-6 rounded-sm shadow-xl max-w-xs border-l-4 border-primary">
            <p className="font-serif italic text-lg mb-2">"The unexamined life is not worth living."</p>
            <p className="text-sm text-muted-foreground font-medium">— Socrates</p>
          </div>

          {/* Floating Card 2 */}
          <div className="absolute bottom-20 left-10 bg-background text-foreground p-6 rounded-sm shadow-xl max-w-xs border-l-4 border-primary">
            <p className="font-serif italic text-lg mb-2">"Ethics is knowing the difference between what you have a right to do and what is right to do."</p>
            <p className="text-sm text-muted-foreground font-medium">— Potter Stewart</p>
          </div>
        </div>
      </div>
    </section>
  );
}
