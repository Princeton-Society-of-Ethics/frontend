import { Button } from "@/components/ui/button";
import DynamicNavigation from "@/components/DynamicNavigation";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "President",
      bio: "Senior majoring in Philosophy and Computer Science"
    },
    {
      name: "Marcus Johnson",
      role: "Vice President",
      bio: "Junior majoring in Public Policy and Ethics"
    },
    {
      name: "Elena Rodriguez",
      role: "Secretary",
      bio: "Senior majoring in Philosophy"
    },
    {
      name: "David Park",
      role: "Treasurer",
      bio: "Junior majoring in Economics and Philosophy"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <DynamicNavigation />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container">
          <h1 className="font-serif text-6xl md:text-7xl font-bold text-white mb-6">
            Our Story
          </h1>
          <p className="text-xl text-white/80 max-w-2xl font-light">
            Since 2004, the Princeton Undergraduate Society of Ethics has been a beacon for rigorous moral inquiry and intellectual discourse on campus.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <span className="text-primary font-serif italic text-sm mb-4 block">Our Mission</span>
            <h2 className="font-serif text-5xl font-bold text-foreground mb-8">
              Fostering Ethical Leadership
            </h2>
          </div>
          
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              The Princeton Undergraduate Society of Ethics exists to cultivate a community of students committed to serious ethical inquiry. We believe that the most pressing challenges of our time—from artificial intelligence to climate change, from social justice to global inequality—are fundamentally ethical in nature.
            </p>
            <p>
              Our organization brings together students from across the university, regardless of major or background, to engage in rigorous philosophical debate, attend lectures by leading ethicists, and collaborate on projects that apply ethical frameworks to real-world problems.
            </p>
            <p>
              We are dedicated to creating a space where difficult questions are asked without fear, where diverse perspectives are honored, and where students develop the moral reasoning skills necessary to lead with integrity in an increasingly complex world.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-secondary/20 border-t border-border">
        <div className="container max-w-4xl">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12">
            A Brief History
          </h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-primary pl-6 py-4">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">2004</h3>
              <p className="text-muted-foreground">
                Founded by a group of philosophy majors who recognized the need for a dedicated space for ethical discourse on campus.
              </p>
            </div>
            
            <div className="border-l-4 border-primary pl-6 py-4">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">2010</h3>
              <p className="text-muted-foreground">
                Launched our flagship publication, Encompass, to showcase student writing on ethical topics.
              </p>
            </div>
            
            <div className="border-l-4 border-primary pl-6 py-4">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">2015</h3>
              <p className="text-muted-foreground">
                Established our annual Speaker Series, bringing renowned ethicists and philosophers to campus.
              </p>
            </div>
            
            <div className="border-l-4 border-primary pl-6 py-4">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">2024</h3>
              <p className="text-muted-foreground">
                Celebrated 20 years of ethical inquiry with over 300 active members and a thriving community of student leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="mb-16">
            <span className="text-primary font-serif italic text-sm mb-4 block">Leadership</span>
            <h2 className="font-serif text-5xl font-bold text-foreground">
              Meet Our Team
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-card rounded-sm border border-border p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/20 rounded-full mb-6"></div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
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

      {/* Values Section */}
      <section className="py-24 bg-secondary/20 border-t border-border">
        <div className="container max-w-4xl">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12">
            Our Core Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Intellectual Rigor
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We approach ethical questions with the seriousness and depth they deserve, drawing on philosophical traditions and contemporary scholarship.
              </p>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Inclusive Dialogue
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We welcome diverse perspectives and backgrounds, believing that ethical inquiry is strengthened by a multiplicity of voices.
              </p>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Practical Application
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We don't just theorize—we work to apply ethical frameworks to real-world challenges and contribute to positive change.
              </p>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Community Building
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We foster a supportive community where students feel empowered to explore difficult questions and grow as moral thinkers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
