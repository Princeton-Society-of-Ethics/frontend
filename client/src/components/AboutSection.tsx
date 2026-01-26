import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function AboutSection() {
  return (
    <section className="py-24 bg-amber-900 border-t-4 border-amber-900">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          
          <div className="relative bg-muted aspect-[4/5] rounded-sm overflow-hidden shadow-lg border-l-4 border-white/30">
             {/* Placeholder for image */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
               alt="Students discussing in a library" 
               className="w-full h-full object-cover"
             />
             <div className="absolute bottom-8 left-8 right-8 z-20 text-white">
               <p className="font-serif text-xl italic">
                 "The aim of the Society is to promote the discussion of ethical issues in a spirit of open inquiry."
               </p>
             </div>
          </div>
        </div>

          <div className="order-1 lg:order-2 space-y-8">
          <div className="mb-4">
            <span className="text-gray-300 font-serif italic text-sm mb-2 block">About Us</span>
            <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Cultivating <span className="text-gray-400">Moral Leadership</span>
            </h2>
          </div>
          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              Founded in 2004, the Princeton Undergraduate Society of Ethics (PUSE) serves as the university's premier forum for ethical discourse.
            </p>
            <p>
              We believe that the most pressing problems of our time are not merely technical or political, but fundamentally <span className="text-gray-300 font-semibold">ethical</span>. By equipping students with the tools of moral philosophy, we prepare them to lead with integrity in an increasingly complex world.
            </p>
            <p>
              Our membership includes students from diverse majors—from Philosophy to Computer Science, Public Policy to Molecular Biology—united by a shared commitment to examining the "why" behind the "what."
            </p>
          </div>

          <div className="pt-4">
            <Link href="/about">
              <Button className="bg-gray-400 text-amber-900 hover:bg-gray-500 rounded-sm px-8 h-12 text-base font-medium transition-all">
                READ OUR FULL HISTORY
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
