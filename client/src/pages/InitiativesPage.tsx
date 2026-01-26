import { Button } from "@/components/ui/button";
import DynamicNavigation from "@/components/DynamicNavigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function InitiativesPage() {
  const initiatives = [
    {
      title: "Speaker Series",
      description: "Bringing leading ethicists and philosophers to Princeton for public lectures and discussions.",
      details: "Our annual speaker series features renowned scholars, practitioners, and thought leaders who engage with students on pressing ethical questions. Past speakers include bioethicists, environmental philosophers, and experts in AI ethics."
    },
    {
      title: "Encompass Magazine",
      description: "A student-run publication showcasing original writing on ethics, philosophy, and moral inquiry.",
      details: "Encompass publishes peer-reviewed essays, creative writing, and research from Princeton undergraduates exploring ethical themes. We accept submissions on any topic related to ethics, from traditional philosophy to applied ethics in technology and society."
    },
    {
      title: "Discussion Seminars",
      description: "Weekly facilitated discussions on contemporary ethical issues and philosophical texts.",
      details: "Our seminars provide a space for students to engage deeply with ethical texts and current events. Topics range from classical philosophy to modern dilemmas in bioethics, environmental ethics, and social justice."
    },
    {
      title: "Ethics in Action",
      description: "Applied ethics projects that tackle real-world problems through philosophical frameworks.",
      details: "We collaborate with campus organizations and community partners to apply ethical analysis to pressing issues. Recent projects have focused on AI governance, climate justice, and educational equity."
    },
    {
      title: "Mentorship Program",
      description: "Connecting experienced student leaders with newer members to foster intellectual growth.",
      details: "Our mentorship program pairs experienced members with students new to ethical inquiry, providing guidance on coursework, research, and personal development. Mentors help mentees navigate ethical questions and develop leadership skills."
    },
    {
      title: "Research Collaborations",
      description: "Supporting student-led research projects in applied ethics and moral philosophy.",
      details: "We provide resources and mentorship for students conducting original research on ethical topics. Recent projects have explored algorithmic bias, climate ethics, and social justice frameworks."
    }
  ];

  return (
    <PageTransition>
    <div className="min-h-screen bg-background">
      <DynamicNavigation />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-fade-in">
        <div className="container">
          <h1 className="font-serif text-6xl md:text-7xl font-bold text-white mb-6 stagger-item-1">
            Our Initiatives
          </h1>
          <p className="text-xl text-white/80 max-w-2xl font-light stagger-item-2">
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
                          {initiative.title}
                        </h3>
                        <p className="text-lg text-muted-foreground font-medium mb-4">
                          {initiative.description}
                        </p>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {initiative.details}
                      </p>
                      
                      <div className="pt-4">
                        <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors">
                          Learn more about this initiative
                          <span>→</span>
                        </a>
                      </div>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center stagger-item-3">
            <Button className="bg-background text-primary hover:bg-background/90 rounded-sm px-8 h-12 text-base font-serif">
              Join Our Community
            </Button>
            <Button className="bg-background text-primary hover:bg-background/90 rounded-sm px-8 h-12 text-base font-serif">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </PageTransition>
  );
}
