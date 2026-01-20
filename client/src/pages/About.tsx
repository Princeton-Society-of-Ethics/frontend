import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const leadership = [
    {
      name: "Elena Rodriguez",
      role: "President",
      class: "Class of 2026",
      major: "Philosophy",
      bio: "Elena focuses on normative ethics and political philosophy. She founded the campus-wide 'Ethics in AI' initiative."
    },
    {
      name: "David Chen",
      role: "Vice President",
      class: "Class of 2027",
      major: "Public Policy",
      bio: "David is interested in the intersection of ethics and economics. He organizes the society's guest speaker series."
    },
    {
      name: "Sarah Miller",
      role: "Editor-in-Chief",
      class: "Class of 2026",
      major: "English",
      bio: "Sarah oversees the Princeton Journal of Bioethics. Her research explores narrative ethics in contemporary literature."
    },
    {
      name: "James Wilson",
      role: "Treasurer",
      class: "Class of 2028",
      major: "Economics",
      bio: "James manages the society's finances and funding. He is passionate about effective altruism and global health."
    }
  ];

  return (
    <Layout>
      <div className="bg-secondary/30 py-20">
        <div className="container">
          <h1 className="font-serif text-5xl font-bold mb-6 text-foreground">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            The Princeton Undergraduate Society of Ethics is dedicated to fostering a community of rigorous ethical inquiry. We believe that the most pressing problems of our time require not just technical solutions, but deep moral reflection.
          </p>
        </div>
      </div>

      <div className="container py-20 space-y-20">
        {/* Mission Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold text-primary">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to provide a forum for students to engage with ethical questions across disciplines. From bioethics to political theory, from environmental justice to the ethics of technology, we seek to cultivate a habit of mind that asks "what should we do?" alongside "what can we do?"
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are committed to open inquiry, intellectual charity, and the belief that reasonable people can disagree on fundamental questions.
            </p>
          </div>
          <div className="bg-muted aspect-video rounded-sm flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
             <p className="font-serif text-2xl italic text-muted-foreground/50 p-8 text-center">
               "To educate citizens and leaders for our society."
             </p>
          </div>
        </section>

        {/* History Section */}
        <section className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">Our History</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Founded in 2004 by a group of students inspired by the University Center for Human Values, the society has grown from a small reading group into one of the most active intellectual organizations on campus. Over the past two decades, we have hosted dozens of speakers, published annual journals, and sent delegations to ethics bowls across the country.
          </p>
        </section>

        {/* Leadership Section */}
        <section>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-12 text-center">Student Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow bg-background">
                <div className="aspect-square bg-secondary w-full relative overflow-hidden">
                  {/* Placeholder for headshot */}
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/5 text-primary font-serif text-4xl font-bold opacity-20">
                    {leader.name.charAt(0)}
                  </div>
                </div>
                <CardContent className="pt-6">
                  <h3 className="font-serif text-xl font-bold mb-1">{leader.name}</h3>
                  <p className="text-primary font-medium text-sm mb-1">{leader.role}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">{leader.class} • {leader.major}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {leader.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
