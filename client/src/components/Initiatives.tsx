import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Award, BookOpen, GraduationCap, Mic } from "lucide-react";
import { Link } from "wouter";

export default function Initiatives() {
  const initiatives = [
    {
      title: "The Intercollegiate Ethics Bowl",
      description: "A national ethics competition where undergraduates discuss real-world moral issues and defend their team's positions through clear reasoning and thoughtful, respectful dialogue.",
      icon: <Award className="h-10 w-10 text-primary" />,
      link: "/initiatives"
    },
    {
      title: "Telos",
      description: "An ethics magazine that enriches, expands, and sustains the conversation about values. We publish essays by undergraduates who engage critically and creatively with questions of ethics and morality.",
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      link: "/journal"
    },
    {
      title: "NJ Regional High School Ethics Bowl",
      description: "We organized the 3rd Annual NJ Regional High School Ethics Bowl at Princeton, with over 100 participants and 16 competing teams analyzing and discussing complex moral questions.",
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
      link: "/initiatives"
    },
    {
      title: "Interview Series",
      description: "An interview series with leading philosophers and ethicists, exploring the ideas that define who we are and what we owe each other.",
      icon: <Mic className="h-10 w-10 text-primary" />,
      link: "/initiatives"
    }
  ];

  return (
    <section className="py-24 bg-background border-t-4 border-primary">
      <div className="container">
        <div className="mb-16 animate-fade-in-up">
          <span className="text-primary font-serif italic text-sm mb-2 block stagger-item-1">What We Do</span>
          <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-foreground leading-tight stagger-item-2">Our <span className="text-primary">Initiatives</span></h2>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4 max-w-2xl stagger-item-3">
            We translate ethical theory into practice through four core pillars of engagement, fostering a community of rigorous debate and intellectual friendship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((item, index) => {
            const staggerClass = `stagger-item-${index + 4}`;
            return (
              <Card key={index} className={`border-l-4 border-primary shadow-md hover:shadow-xl transition-all duration-300 group bg-background hover:bg-primary/5 rounded-sm ${staggerClass}`}>
              <CardHeader className="pt-8 pb-4">
                <div className="mb-4 p-3 bg-primary/20 w-fit rounded-sm group-hover:bg-primary/30 transition-colors">
                  {item.icon}
                </div>
                <CardTitle className="font-serif text-2xl text-foreground">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="pt-4">
                <Link href={item.link}>
                  <Button variant="ghost" className="p-0 hover:bg-transparent text-primary hover:text-primary/80 font-medium group-hover:translate-x-1 transition-all">
                    LEARN MORE <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
