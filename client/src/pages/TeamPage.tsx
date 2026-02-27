import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import DynamicNavigation from "@/components/DynamicNavigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function TeamPage() {
  const executiveBoard = [
    { name: "Joel Ibabao", role: "President" },
    { name: "Sabrina Wang", role: "Print Manager" },
    { name: "James Han", role: "Chief Marketing Officer" },
    { name: "Jianyi", role: "Treasurer" },
    { name: "Ethan Grover", role: "Community Officer" },
    { name: "TBD", role: "Technology Director" },
    { name: "TBD", role: "Strategic Outreach Officer" }
  ];

  const ethicsBowl = [
    { name: "Navneeth Gurachar", role: "Captain of Team 1" },
    { name: "Quest Starkey", role: "Captain of Team 2" },
    { name: "Matthew Newman", role: "Coach" }
  ];

  const ethicsOlympiad = [
    { name: "Tenzin Namgyal", role: "Coach" },
    { name: "Patrick Jimenez", role: "Coach" },
    { name: "Professor Alexandra Oprea", role: "Consultant" }
  ];

  const telos = [
    { name: "Jacqueline Zhou", role: "Editor-in-Chief" },
    { name: "Doris Lee", role: "Creative Director" },
    { name: "Professor Peter Singer", role: "Advisor" },
    { name: "Professor Gideon A. Rosen", role: "Advisor" }
  ];

  return (
    <PageTransition>
    <div className="min-h-screen bg-background">
      <DynamicNavigation />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-fade-in">
        <div className="container">
          <h1 className="font-serif text-6xl md:text-7xl font-bold text-white mb-6 stagger-item-1">
            Our Team
          </h1>
          <p className="text-xl text-white/80 max-w-2xl font-light stagger-item-2">
            Meet the dedicated students leading the Princeton Undergraduate Society of Ethics.
          </p>
        </div>
      </section>

      {/* Executive Board Section */}
      <section className="py-24 bg-background animate-fade-in-up">
        <div className="container">
          <div className="mb-16">
            <span className="text-primary font-serif italic text-sm mb-4 block stagger-item-1">Leadership</span>
            <h2 className="font-serif text-5xl font-bold text-foreground stagger-item-2">
              Executive Board
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {executiveBoard.map((member, index) => {
              const staggerClass = `stagger-item-${Math.min(index + 3, 8)}`;
              return (
              <div key={`${member.name}-${member.role}-${index}`} className={`group relative bg-card rounded-lg border border-border p-10 hover:border-primary hover:shadow-2xl transition-all duration-300 overflow-hidden ${staggerClass}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full mb-6 flex items-center justify-center border-2 border-primary/20 group-hover:border-primary transition-colors">
                    <span className="text-4xl font-serif font-bold text-primary">{member.name === "TBD" ? "?" : member.name.charAt(0)}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm uppercase tracking-widest">
                    {member.role}
                  </p>
                </div>
              </div>
            );
            })
          }
          </div>
        </div>
      </section>

      {/* Ethics Bowl Section */}
      <section className="py-24 bg-secondary/20 border-t border-border animate-fade-in-up">
        <div className="container">
          <div className="mb-16">
            <span className="text-primary font-serif italic text-sm mb-4 block stagger-item-1">Competition</span>
            <h2 className="font-serif text-5xl font-bold text-foreground stagger-item-2">
              Ethics Bowl
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ethicsBowl.map((member, index) => {
              const staggerClass = `stagger-item-${Math.min(index + 3, 8)}`;
              return (
                <div key={`${member.name}-${index}`} className={`group relative bg-card rounded-lg border border-border p-8 hover:border-primary hover:shadow-lg transition-all duration-300 text-center ${staggerClass}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full mb-6 flex items-center justify-center border-2 border-primary/20 group-hover:border-primary transition-colors mx-auto">
                      <span className="text-2xl font-serif font-bold text-primary">{member.name === "TBD" ? "?" : member.name.charAt(0)}</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                    <p className="text-primary font-medium text-xs uppercase tracking-widest">{member.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ethics Olympiad Section */}
      <section className="py-24 bg-background border-t border-border animate-fade-in-up">
        <div className="container">
          <div className="mb-16">
            <span className="text-primary font-serif italic text-sm mb-4 block stagger-item-1">Competition</span>
            <h2 className="font-serif text-5xl font-bold text-foreground stagger-item-2">
              Ethics Olympiad
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ethicsOlympiad.map((member, index) => {
              const staggerClass = `stagger-item-${Math.min(index + 3, 8)}`;
              return (
                <div key={`${member.name}-${index}`} className={`group relative bg-card rounded-lg border border-border p-8 hover:border-primary hover:shadow-lg transition-all duration-300 text-center ${staggerClass}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full mb-6 flex items-center justify-center border-2 border-primary/20 group-hover:border-primary transition-colors mx-auto">
                      <span className="text-2xl font-serif font-bold text-primary">{member.name.charAt(0)}</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                    <p className="text-primary font-medium text-xs uppercase tracking-widest">{member.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Telos Section */}
      <section className="py-24 bg-secondary/20 border-t border-border animate-fade-in-up">
        <div className="container">
          <div className="mb-16">
            <span className="text-primary font-serif italic text-sm mb-4 block stagger-item-1">Publication</span>
            <h2 className="font-serif text-5xl font-bold text-foreground stagger-item-2">
              <span className="text-primary">Telos</span> Magazine
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {telos.map((member, index) => {
              const staggerClass = `stagger-item-${Math.min(index + 3, 8)}`;
              return (
                <div key={`${member.name}-${index}`} className={`group relative bg-card rounded-lg border border-border p-8 hover:border-primary hover:shadow-lg transition-all duration-300 text-center ${staggerClass}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full mb-6 flex items-center justify-center border-2 border-primary/20 group-hover:border-primary transition-colors mx-auto">
                      <span className="text-2xl font-serif font-bold text-primary">{member.name.charAt(0)}</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                    <p className="text-primary font-medium text-xs uppercase tracking-widest">{member.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-24 bg-background animate-fade-in-up">
        <div className="container max-w-3xl text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6 stagger-item-1">
            Interested in Leadership?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed stagger-item-2">
            We're always looking for passionate students to join our leadership team. Leadership applications open twice a year—in the fall and spring. Whether you're interested in event planning, publications, outreach, or operations, there's a role for you.
          </p>
          <Link href="/join">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm px-8 h-12 text-base font-serif stagger-item-3">
              Join Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
    </PageTransition>
  );
}
