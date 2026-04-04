import { Button } from "@/components/ui/button";
import DynamicNavigation from "@/components/DynamicNavigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function InitiativesPage() {
  const initiatives = [
    {
      title: "The Intercollegiate Ethics Bowl",
      description: "A national ethics competition where undergraduates discuss real-world moral issues and defend their team's positions.",
      details: "The Intercollegiate Ethics Bowl is a national ethics competition where undergraduates discuss real-world moral issues and defend their team's positions. Judges look for clear reasoning, an understanding of different perspectives, and thoughtful, respectful dialogue rather than quick point-scoring.",
      ctaHref: "/initiatives/moments",
      ctaLabel: "View moments & gallery"
    },
    {
      title: "Telos",
      description: "An ethics magazine that enriches, expands, and sustains the conversation about values.",
      details: "Telos is an ethics magazine that enriches, expands, and sustains the conversation about values—the most important conversation any culture and society can have. We publish essays by undergraduate students who engage critically and creatively with questions of ethics and morality.",
      ctaHref: "/journal",
      ctaLabel: "Explore Telos"
    },
    {
      title: "NJ Regional High School Ethics Bowl",
      description: "A team-based academic competition where students analyze and discuss complex moral questions about real-world issues.",
      details: "The National High School Ethics Bowl (NHSEB) is a team-based academic competition where students analyze and discuss complex moral questions about real-world issues. We organized the 3rd Annual NJ Regional High School Ethics Bowl at Princeton University, held on January 31, 2026, at the Friend Center, with over 100 participants and 16 competing teams.",
      ctaHref: "/join",
      ctaLabel: "Get involved"
    },
    {
      title: "Interview Series",
      description: "Conversations with leading philosophers and ethicists on the ideas that define who we are.",
      details: "An interview series with leading philosophers and ethicists, exploring the ideas that define who we are and what we owe each other.",
      ctaHref: "/initiatives/interview-series",
      ctaLabel: "Listen to episodes"
    }
  ];

  return (
    <PageTransition>
    <div className="min-h-screen bg-background">
      <DynamicNavigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-40 pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-fade-in">
        <div
          className="pointer-events-none absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl"
          aria-hidden
        />
        <div className="container relative">
          <h1 className="mb-3 font-serif text-6xl font-bold text-white md:text-7xl stagger-item-1">
            Our <span className="text-primary">Initiatives</span>
          </h1>
          <div className="mb-6 h-1 w-20 rounded-full bg-primary stagger-item-2" aria-hidden />
          <p className="max-w-2xl text-xl font-light text-white/80 stagger-item-2">
            We engage the campus community through diverse programs and projects that advance ethical inquiry and moral leadership.
          </p>
        </div>
      </section>

      {/* Initiatives Grid - Professional Layout */}
      <section className="py-32 bg-background animate-fade-in-up">
        <div className="container">
          <div className="space-y-16">
            {initiatives.map((initiative, index) => {
              const isEven = index % 2 === 0;
              const staggerClass = `stagger-item-${Math.min(index + 1, 8)}`;
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${staggerClass}`}>
                  {/* Content */}
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-serif text-3xl font-bold text-foreground mb-3">
                          {initiative.title === "Telos" ? (
                            <><span className="text-primary">Telos</span> Magazine</>
                          ) : (
                            initiative.title
                          )}
                        </h3>
                        <p className="text-lg text-muted-foreground font-medium mb-4">
                          {initiative.description}
                        </p>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {initiative.details}
                      </p>
                      <Link
                        href={initiative.ctaHref}
                        className="group mt-4 inline-flex items-center gap-2 font-serif text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:text-primary/80"
                      >
                        {initiative.ctaLabel}
                        <ArrowRight
                          className="h-4 w-4 transition-transform group-hover:translate-x-1"
                          aria-hidden
                        />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Visual Element */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative h-80 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20 flex items-center justify-center overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {/* Decorative accent */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                      <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -ml-20 -mb-20"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden border-t-4 border-primary animate-fade-in-up">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-[50%] -left-[10%] w-[50%] h-[200%] bg-white rotate-12 transform origin-center"></div>
        </div>

        <div className="container max-w-3xl text-center relative z-10">
          <h2 className="font-serif text-5xl font-bold mb-6 text-primary-foreground stagger-item-1">
            Ready to Explore Ethical Questions?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-10 leading-relaxed stagger-item-2">
            Whether you're a philosophy major or a computer scientist, an experienced ethicist or someone just beginning to explore these questions, there's a place for you in our community.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row stagger-item-3">
            <Link href="/join">
              <Button className="h-12 rounded-sm bg-background px-8 font-serif text-base text-primary hover:bg-background/90">
                Join Our Community
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
