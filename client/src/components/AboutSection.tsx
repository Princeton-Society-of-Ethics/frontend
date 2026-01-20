import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function AboutSection() {
  return (
    <section className="py-24 bg-background border-b-4 border-foreground">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-0 border-4 border-foreground">
        <div className="order-2 lg:order-1 relative border-t-4 lg:border-t-0 lg:border-r-4 border-foreground p-8 bg-secondary">
          <div className="relative aspect-[4/5] overflow-hidden filter grayscale contrast-125 border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
             <img 
               src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
               alt="Students discussing in a library" 
               className="w-full h-full object-cover"
             />
             <div className="absolute bottom-0 left-0 right-0 bg-primary p-6 border-t-4 border-foreground">
               <p className="font-mono text-sm font-bold uppercase leading-tight text-foreground">
                 // "Promoting the discussion of ethical issues in a spirit of open inquiry."
               </p>
             </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 p-12 space-y-8 flex flex-col justify-center bg-background">
          <div className="inline-block bg-foreground text-background px-2 py-1 w-fit">
            <span className="font-mono text-xs font-bold uppercase">IDENTITY_MATRIX</span>
          </div>
          
          <h2 className="font-serif text-5xl font-bold text-foreground leading-none uppercase">
            CULTIVATING <br/><span className="bg-foreground text-background px-2">MORAL LEADERSHIP</span>
          </h2>
          
          <div className="space-y-6 text-lg font-mono text-foreground leading-relaxed border-l-4 border-foreground pl-6">
            <p>
              Founded in 2004, the Princeton Undergraduate Society of Ethics (PUSE) serves as the university's premier forum for ethical discourse.
            </p>
            <p>
              We believe that the most pressing problems of our time are not merely technical or political, but fundamentally ethical.
            </p>
            <p>
              Our membership includes students from diverse majors—from Philosophy to Computer Science—united by a shared commitment to examining the "why" behind the "what."
            </p>
          </div>

          <div className="pt-8">
            <Link href="/about">
              <Button className="bg-foreground text-background hover:bg-primary hover:text-foreground rounded-none px-8 h-14 text-lg font-bold border-4 border-transparent hover:border-foreground transition-all">
                READ_FULL_HISTORY_LOG
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
