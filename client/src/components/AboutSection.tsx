import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function AboutSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          
          <div className="relative bg-white p-4 rounded-3xl shadow-xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
             <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
               <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent z-10"></div>
               <img 
                 src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
                 alt="Students discussing in a library" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute bottom-8 left-8 right-8 z-20 text-white">
                 <p className="font-serif text-2xl font-bold leading-tight">
                   "Promoting the discussion of ethical issues in a spirit of open inquiry."
                 </p>
               </div>
             </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
            <span className="text-primary text-sm font-bold tracking-wide uppercase">Who We Are</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
            Cultivating <span className="text-primary">Moral Leadership</span>
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-medium">
            <p>
              Founded in 2004, the Princeton Undergraduate Society of Ethics (PUSE) serves as the university's premier forum for ethical discourse.
            </p>
            <p>
              We believe that the most pressing problems of our time are not merely technical or political, but fundamentally ethical. By equipping students with the tools of moral philosophy, we prepare them to lead with integrity in an increasingly complex world.
            </p>
            <p>
              Our membership includes students from diverse majors—from Philosophy to Computer Science, Public Policy to Molecular Biology—united by a shared commitment to examining the "why" behind the "what."
            </p>
          </div>

          <div className="pt-4">
            <Link href="/about">
              <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 h-12 text-base font-bold shadow-lg transition-transform hover:scale-105">
                Read Our Full History
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
