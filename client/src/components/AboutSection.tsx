import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function AboutSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t-4 border-slate-800">
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
            <span className="text-orange-400 font-serif italic text-sm mb-2 block">About Us</span>
            <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Cultivating <span className="text-orange-500">Moral Leadership</span>
            </h2>
          </div>
          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              Founded in 2023 by Joel Ibabao, the Princeton Undergraduate Society of Ethics serves as the university's premier forum for ethical discourse. We believe that the most pressing issues of our time are not merely technical or empirical, but fundamental questions of value. How should self-driving cars make decisions when harm is unavoidable? Should prisons prioritize in-person visitation over phone or video calls, even when doing so is more costly or difficult to administer? Do animals deserve the same moral consideration as humans when their suffering is at stake?
            </p>
            <p>
              By equipping students with the tools of moral philosophy, we prepare students to think, act, and lead with integrity in an increasingly complex and noisy world.
            </p>
            <p>
              Our work draws on the talents of students from diverse majors, including Physics, Computer Science, Public Policy, and Molecular Biology. Each member brings not only a distinct set of skills, but also experiences that enrich our conversations in substantive ways. We strive to forge a community that explores the many frontiers of ethics, where every voice has value.
            </p>
          </div>

          <div className="pt-4">
            <Link href="/about">
              <Button className="bg-orange-500 text-white hover:bg-orange-600 rounded-sm px-8 h-12 text-base font-medium transition-all">
                READ OUR FULL HISTORY
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
