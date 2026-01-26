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
            Since 2004, the Princeton Undergraduate Society of Ethics has been a beacon for rigorous moral inquiry and intellectual discourse on campus.
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
              The Princeton Undergraduate Society of Ethics exists to cultivate a community of students committed to serious ethical inquiry. We believe that the most pressing challenges of our time—from artificial intelligence to climate change, from social justice to global inequality—are fundamentally ethical in nature.
            </p>
            <p className="stagger-item-4">
              Our organization brings together students from across the university, regardless of major or background, to engage in rigorous philosophical debate, attend lectures by leading ethicists, and collaborate on projects that apply ethical frameworks to real-world problems.
            </p>
            <p className="stagger-item-5">
              We are dedicated to creating a space where difficult questions are asked without fear, where diverse perspectives are honored, and where students develop the moral reasoning skills necessary to lead with integrity in an increasingly complex world.
            </p>
          </div>
        </div>
      </section>

      {/* History Section - Visual Timeline */}
      <section className="py-24 bg-gradient-to-b from-secondary/20 to-background border-t border-border animate-fade-in-up">
        <div className="container max-w-5xl">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-16 stagger-item-1 text-center">
            Our Journey
          </h2>
          
          {/* Timeline - Desktop */}
          <div className="hidden md:block relative">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary to-primary/30"></div>
            
            <div className="space-y-12">
              {/* 2004 */}
              <div className="flex gap-8 stagger-item-2">
                <div className="w-1/2 text-right pr-8">
                  <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="font-serif text-3xl font-bold text-primary mb-2">2004</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Founded by philosophy majors seeking a dedicated space for ethical discourse on campus.
                    </p>
                  </div>
                </div>
                <div className="w-1/2"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
              </div>
              
              {/* 2010 */}
              <div className="flex gap-8 stagger-item-3">
                <div className="w-1/2"></div>
                <div className="w-1/2 text-left pl-8">
                  <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="font-serif text-3xl font-bold text-primary mb-2">2010</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Launched Encompass, our flagship journal showcasing student writing on ethical topics.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
              </div>
              
              {/* 2015 */}
              <div className="flex gap-8 stagger-item-4">
                <div className="w-1/2 text-right pr-8">
                  <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="font-serif text-3xl font-bold text-primary mb-2">2015</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Established our annual Speaker Series featuring renowned ethicists and philosophers.
                    </p>
                  </div>
                </div>
                <div className="w-1/2"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
              </div>
              
              {/* 2024 */}
              <div className="flex gap-8 stagger-item-5">
                <div className="w-1/2"></div>
                <div className="w-1/2 text-left pl-8">
                  <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="font-serif text-3xl font-bold text-primary mb-2\">2024</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Celebrated 20 years with 300+ active members and a thriving community of student leaders.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
              </div>
            </div>
          </div>

          {/* Timeline - Mobile */}
          <div className="md:hidden space-y-6">
            <div className="border-l-4 border-primary pl-6 py-4 stagger-item-2">
              <h3 className="font-serif text-2xl font-bold text-primary mb-2">2004</h3>
              <p className="text-muted-foreground">Founded by philosophy majors seeking a dedicated space for ethical discourse on campus.</p>
            </div>
            <div className="border-l-4 border-primary pl-6 py-4 stagger-item-3">
              <h3 className="font-serif text-2xl font-bold text-primary mb-2">2010</h3>
              <p className="text-muted-foreground">Launched Encompass, our flagship journal showcasing student writing on ethical topics.</p>
            </div>
            <div className="border-l-4 border-primary pl-6 py-4 stagger-item-4">
              <h3 className="font-serif text-2xl font-bold text-primary mb-2">2015</h3>
              <p className="text-muted-foreground">Established our annual Speaker Series featuring renowned ethicists and philosophers.</p>
            </div>
            <div className="border-l-4 border-primary pl-6 py-4 stagger-item-5">
              <h3 className="font-serif text-2xl font-bold text-primary mb-2">2024</h3>
              <p className="text-muted-foreground">Celebrated 20 years with 300+ active members and a thriving community of student leaders.</p>
            </div>
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
