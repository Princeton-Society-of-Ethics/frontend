import { Button } from "@/components/ui/button";
import DynamicNavigation from "@/components/DynamicNavigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function InitiativesPage() {
  const initiatives = [
    {
      title: "Speaker Series",
      description: "Bringing leading ethicists and philosophers to Princeton for public lectures and discussions.",
      details: "Our annual speaker series features renowned scholars, practitioners, and thought leaders who engage with students on pressing ethical questions. Past speakers include bioethicists, environmental philosophers, and experts in AI ethics.",
      icon: "🎤"
    },
    {
      title: "Encompass Magazine",
      description: "A student-run publication showcasing original writing on ethics, philosophy, and moral inquiry.",
      details: "Encompass publishes peer-reviewed essays, creative writing, and research from Princeton undergraduates exploring ethical themes. We accept submissions on any topic related to ethics, from traditional philosophy to applied ethics in technology and society.",
      icon: "📖"
    },
    {
      title: "Discussion Seminars",
      description: "Weekly facilitated discussions on contemporary ethical issues and philosophical texts.",
      details: "Our seminars provide a space for students to engage deeply with ethical texts and current events. Topics range from classical philosophy to modern dilemmas in bioethics, environmental ethics, and social justice.",
      icon: "💬"
    },
    {
      title: "Ethics in Action",
      description: "Applied ethics projects that tackle real-world problems through philosophical frameworks.",
      details: "We collaborate with campus organizations and community partners to apply ethical analysis to pressing issues. Recent projects have focused on AI governance, climate justice, and educational equity.",
      icon: "⚡"
    },
    {
      title: "Mentorship Program",
      description: "Connecting experienced student leaders with newer members to foster intellectual growth.",
      details: "Our mentorship program pairs experienced members with students new to ethical inquiry, providing guidance on coursework, research, and personal development. Mentors help mentees navigate ethical questions and develop leadership skills.",
      icon: "🤝"
    },
    {
      title: "Research Collaborations",
      description: "Supporting student-led research projects in applied ethics and moral philosophy.",
      details: "We provide resources and mentorship for students conducting original research on ethical topics. Recent projects have explored algorithmic bias, climate ethics, and social justice frameworks.",
      icon: "🔬"
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

      {/* Initiatives Grid */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/10 animate-fade-in-up">
        <div className="container">
          <div className="mb-16 text-center stagger-item-1">
            <span className="text-primary font-serif italic text-sm mb-4 block">What We Do</span>
            <h2 className="font-serif text-5xl font-bold text-foreground">Our Initiatives</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => {
              const staggerClass = `stagger-item-${Math.min(index + 1, 8)}`;
              return (
              <div key={index} className={`group relative border border-border rounded-lg p-8 hover:border-primary hover:shadow-xl transition-all duration-300 bg-card hover:bg-card/80 ${staggerClass}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{initiative.icon}</div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {initiative.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 font-medium">
                    {initiative.description}
                  </p>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    {initiative.details}
                  </p>
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <a href="#" className="text-primary hover:text-primary/80 text-sm font-medium inline-flex items-center gap-2">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary/20 border-t border-border animate-fade-in-up">
        <div className="container max-w-3xl">
          <div className="text-center">
            <h2 className="font-serif text-5xl font-bold text-foreground mb-6 stagger-item-1">
              Get Involved
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed stagger-item-2">
              Whether you're a philosophy major or a computer scientist, an experienced ethicist or someone just beginning to explore these questions, there's a place for you in our community. Join us for our next event or reach out to learn more about membership.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm px-8 h-12 text-base font-serif stagger-item-3">
              Join Our Community
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </PageTransition>
  );
}
