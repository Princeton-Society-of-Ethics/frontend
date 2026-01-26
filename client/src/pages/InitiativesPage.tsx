import { Button } from "@/components/ui/button";
import DynamicNavigation from "@/components/DynamicNavigation";
import Footer from "@/components/Footer";

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
      description: "Connecting students interested in ethics with faculty advisors and experienced peers.",
      details: "Our mentorship program pairs new members with experienced society leaders and faculty mentors who guide their ethical development and career exploration.",
      icon: "🤝"
    },
    {
      title: "Research Grants",
      description: "Funding student research projects that explore ethical questions and contribute to the field.",
      details: "We provide grants to support student-led research in ethics, philosophy, and related fields. Projects can be theoretical, applied, or creative in nature.",
      icon: "🔬"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <DynamicNavigation />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container">
          <h1 className="font-serif text-6xl md:text-7xl font-bold text-white mb-6">
            Our Initiatives
          </h1>
          <p className="text-xl text-white/80 max-w-2xl font-light">
            We engage the campus community through diverse programs and projects that advance ethical inquiry and moral leadership.
          </p>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {initiatives.map((initiative, index) => (
              <div 
                key={index}
                className="bg-card rounded-sm border border-border p-10 hover:shadow-lg transition-shadow group"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                  {initiative.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  {initiative.title}
                </h3>
                <p className="text-primary font-medium text-sm mb-4">
                  {initiative.description}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {initiative.details}
                </p>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-sm px-6 h-10 text-sm font-medium transition-all"
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-secondary/20 border-t border-border">
        <div className="container max-w-3xl text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
            Get Involved
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Whether you're a philosophy major or a computer scientist, an experienced ethicist or someone just beginning to explore these questions, there's a place for you in our community. Join us for our next event or reach out to learn more about membership.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm px-8 h-12 text-base font-serif">
            Join Our Community
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
