import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Users, Mic } from "lucide-react";
import { Link } from "wouter";

export default function Initiatives() {
  const initiatives = [
    {
      title: "Bioethics Forum",
      description: "Examining the moral implications of biological research and medical applications in the modern world.",
      icon: <Users className="h-10 w-10 text-primary" />,
      link: "/initiatives/bioethics"
    },
    {
      title: "The Journal",
      description: "A student-run publication featuring undergraduate papers on ethical theory and applied ethics.",
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      link: "/journal"
    },
    {
      title: "Speaker Series",
      description: "Hosting distinguished philosophers and public figures to discuss contemporary ethical challenges.",
      icon: <Mic className="h-10 w-10 text-primary" />,
      link: "/events"
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl font-bold mb-6 text-foreground">Our Initiatives</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We translate ethical theory into practice through three core pillars of engagement, 
            fostering a community of rigorous debate and intellectual friendship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((item, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300 group bg-background">
              <CardHeader className="pt-8 pb-4">
                <div className="mb-4 p-3 bg-primary/10 w-fit rounded-sm group-hover:bg-primary/20 transition-colors">
                  {item.icon}
                </div>
                <CardTitle className="font-serif text-2xl">{item.title}</CardTitle>
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
          ))}
        </div>
      </div>
    </section>
  );
}
