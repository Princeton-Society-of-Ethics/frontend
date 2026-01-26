import { Button } from "@/components/ui/button";
import DynamicNavigation from "@/components/DynamicNavigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function TeamPage() {
  const executiveBoard = [
    {
      name: "Sarah Chen",
      role: "President",
      bio: "Senior majoring in Philosophy and Computer Science. Sarah leads our organization's strategic direction and oversees all major initiatives. She's passionate about AI ethics and has published work on algorithmic bias.",
      email: "schen@princeton.edu"
    },
    {
      name: "Marcus Johnson",
      role: "Vice President",
      bio: "Junior majoring in Public Policy and Ethics. Marcus manages day-to-day operations and coordinates our speaker series. He's interested in environmental ethics and climate policy.",
      email: "mjohnson@princeton.edu"
    },
    {
      name: "Elena Rodriguez",
      role: "Secretary",
      bio: "Senior majoring in Philosophy. Elena oversees our communications and manages our social media presence. She's focused on bioethics and medical decision-making.",
      email: "erodriguez@princeton.edu"
    },
    {
      name: "David Park",
      role: "Treasurer",
      bio: "Junior majoring in Economics and Philosophy. David manages our budget and fundraising efforts. He's interested in economic justice and business ethics.",
      email: "dpark@princeton.edu"
    }
  ];

  const committeeLead = [
    {
      name: "Jasmine Patel",
      role: "Encompass Editor-in-Chief",
      bio: "Senior majoring in English and Philosophy. Jasmine leads our magazine and oversees the editorial process."
    },
    {
      name: "Thomas Wright",
      role: "Events Coordinator",
      bio: "Junior majoring in Philosophy. Thomas organizes our weekly seminars and speaker events."
    },
    {
      name: "Aisha Williams",
      role: "Outreach Director",
      bio: "Senior majoring in Sociology. Aisha builds partnerships with other campus organizations and the broader community."
    },
    {
      name: "Kai Chen",
      role: "Research Lead",
      bio: "Junior majoring in Philosophy and Biology. Kai oversees our research initiatives and grant programs."
    }
  ];

  return (
    <PageTransition>
    <div className="min-h-screen bg-background">
      <DynamicNavigation />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container">
          <h1 className="font-serif text-6xl md:text-7xl font-bold text-white mb-6">
            Our Team
          </h1>
          <p className="text-xl text-white/80 max-w-2xl font-light">
            Meet the dedicated students leading the Princeton Undergraduate Society of Ethics.
          </p>
        </div>
      </section>

      {/* Executive Board Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="mb-16">
            <span className="text-primary font-serif italic text-sm mb-4 block">Leadership</span>
            <h2 className="font-serif text-5xl font-bold text-foreground">
              Executive Board
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {executiveBoard.map((member) => (
              <div key={member.name} className="bg-card rounded-sm border border-border p-10 hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-primary/20 rounded-full mb-6"></div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {member.bio}
                </p>
                <a 
                  href={`mailto:${member.email}`}
                  className="text-primary hover:text-primary/80 text-sm font-medium"
                >
                  {member.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committee Leads Section */}
      <section className="py-24 bg-secondary/20 border-t border-border">
        <div className="container">
          <div className="mb-16">
            <span className="text-primary font-serif italic text-sm mb-4 block">Leadership</span>
            <h2 className="font-serif text-5xl font-bold text-foreground">
              Committee Leads
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {committeeLead.map((member) => (
              <div key={member.name} className="bg-card rounded-sm border border-border p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/20 rounded-full mb-6"></div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-24 bg-background">
        <div className="container max-w-3xl text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
            Interested in Leadership?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We're always looking for passionate students to join our leadership team. Leadership applications open twice a year—in the fall and spring. Whether you're interested in event planning, publications, outreach, or operations, there's a role for you.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm px-8 h-12 text-base font-serif">
            Learn About Leadership Roles
          </Button>
        </div>
      </section>

      <Footer />
    </div>
    </PageTransition>
  );
}
