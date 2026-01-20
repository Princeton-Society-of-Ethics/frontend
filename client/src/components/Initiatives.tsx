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
    <section className="py-24 bg-background border-b-4 border-foreground">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b-4 border-foreground pb-8">
          <div className="max-w-3xl">
            <span className="bg-foreground text-background px-2 py-1 font-mono font-bold uppercase text-xs mb-4 inline-block">
              CORE_OPERATIONS
            </span>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground leading-none uppercase">
              THEORY INTO <span className="text-primary underline decoration-4 underline-offset-4">PRACTICE</span>
            </h2>
          </div>
          <Link href="/initiatives">
            <Button variant="outline" className="rounded-none border-4 border-foreground px-8 h-14 font-mono font-bold hover:bg-foreground hover:text-background uppercase">
              [ View All ]
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-foreground">
          {initiatives.map((item, index) => (
            <Card key={index} className={`border-none rounded-none bg-background p-8 group hover:bg-primary transition-colors duration-0 ${index !== initiatives.length - 1 ? 'md:border-r-4 border-b-4 md:border-b-0 border-foreground' : ''}`}>
              <CardHeader className="p-0 mb-6">
                <div className="mb-6 text-foreground group-hover:text-background transition-colors">
                  {item.icon}
                </div>
                <CardTitle className="font-serif text-3xl font-bold uppercase group-hover:text-background">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mb-8">
                <CardDescription className="text-base font-mono text-foreground leading-relaxed group-hover:text-background">
                  {item.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="p-0">
                <Link href={item.link}>
                  <div className="flex items-center text-foreground font-bold text-sm uppercase tracking-widest border-b-2 border-foreground pb-1 group-hover:text-background group-hover:border-background cursor-pointer">
                    ACCESS_MODULE <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
