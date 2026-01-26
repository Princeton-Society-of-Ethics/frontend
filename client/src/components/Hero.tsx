import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-foreground via-foreground to-foreground/95 text-background pt-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-8 right-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Decorative Lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
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
        <div className="space-y-8 pt-20 animate-fade-in-up">
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight tracking-tight stagger-item-1">
            What do we owe <br/>
            <span className="text-primary italic">to each other?</span>
          </h1>
          
          <p className="text-lg md:text-xl text-background/80 max-w-xl leading-relaxed font-light stagger-item-2">
            The Princeton Undergraduate Society of Ethics is a student-run organization dedicated to fostering rigorous ethical inquiry and moral reflection.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4 stagger-item-3">
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

        <div className="relative hidden lg:block h-[600px] w-full pt-20 animate-slide-in-right">
          {/* Main Visual Container */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-lg overflow-hidden flex items-center justify-center top-0 stagger-item-4 border border-primary/20 shadow-2xl">
            <img 
              src="/images/socrates-hero.jpg" 
              alt="Socrates - Ancient Greek Philosopher" 
              className="h-[60%] w-[60%] object-contain opacity-80 drop-shadow-lg"
            />
          </div>
          
          {/* Floating Card 1 */}
          <div className="absolute top-24 right-8 bg-background text-foreground p-4 rounded-sm shadow-lg max-w-xs border-l-4 border-primary hidden lg:block z-20 stagger-item-5">
            <p className="font-serif italic text-sm mb-2">"The unexamined life is not worth living."</p>
            <p className="text-xs text-muted-foreground font-medium">— Socrates</p>
          </div>

          {/* Floating Card 2 */}
          <div className="absolute bottom-24 left-8 bg-background text-foreground p-4 rounded-sm shadow-lg max-w-xs border-l-4 border-primary hidden lg:block z-20 stagger-item-6">
            <p className="font-serif italic text-sm mb-2">"Ethics is knowing the difference between what you have a right to do and what is right to do."</p>
            <p className="text-xs text-muted-foreground font-medium">— Potter Stewart</p>
          </div>
        </div>
      </div>
    </section>
  );
}
