import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import DynamicNavigation from "@/components/DynamicNavigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function AboutPage() {
  return (
    <PageTransition>
    <div className="min-h-screen bg-background">
      <DynamicNavigation />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-fade-in">
        <div className="container">
          <h1 className="font-serif text-6xl md:text-7xl font-bold text-white mb-6 stagger-item-1">
            Our Story
          </h1>
          <p className="text-xl text-white/80 max-w-2xl font-light stagger-item-2">
            Founded in 2023 by Joel Ibabao, the Princeton Undergraduate Society of Ethics serves as the university's premier forum for ethical discourse and rigorous moral inquiry on campus.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background animate-fade-in-up">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <span className="text-primary font-serif italic text-sm mb-4 block stagger-item-1">Our Mission</span>
            <h2 className="font-serif text-5xl font-bold text-foreground mb-8 stagger-item-2">
              Fostering Ethical Leadership
            </h2>
          </div>
          
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p className="stagger-item-3">
              We believe that the most pressing issues of our time are not merely technical or empirical, but fundamental questions of value. How should self-driving cars make decisions when harm is unavoidable? Should prisons prioritize in-person visitation over phone or video calls, even when doing so is more costly or difficult to administer? Do animals deserve the same moral consideration as humans when their suffering is at stake?
            </p>
            <p className="stagger-item-4">
              By equipping students with the tools of moral philosophy, we prepare students to think, act, and lead with integrity in an increasingly complex and noisy world. Our work draws on the talents of students from diverse majors, including Physics, Computer Science, Public Policy, and Molecular Biology.
            </p>
            <p className="stagger-item-5">
              Each member brings not only a distinct set of skills, but also experiences that enrich our conversations in substantive ways. We strive to forge a community that explores the many frontiers of ethics, where every voice has value.
            </p>
          </div>
        </div>
      </section>

      {/* Join Us CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden border-t-4 border-primary animate-fade-in-up">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-[50%] -left-[10%] w-[50%] h-[200%] bg-white rotate-12 transform origin-center"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary-foreground stagger-item-1">
              Ready to Join the Conversation?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed stagger-item-2">
              Whether you're a philosophy major or simply curious about ethics, there's a place for you in our community. Join us as we explore the questions that matter most.
            </p>
            <Link href="/join">
              <Button className="bg-background text-primary hover:bg-background/90 px-8 h-12 text-lg font-serif rounded-sm stagger-item-3">
                Learn More About Joining
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </PageTransition>
  );
}
