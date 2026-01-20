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
    <section className="py-24 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">What We Do</span>
            <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
              Translating theory into <span className="text-primary">practice</span>.
            </h2>
          </div>
          <Link href="/initiatives">
            <Button variant="outline" className="rounded-full border-2 px-6">View All Initiatives</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((item, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 group bg-secondary/30 hover:bg-white rounded-2xl overflow-hidden">
              <CardHeader className="pt-8 pb-4">
                <div className="mb-6 p-4 bg-white w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500 text-primary">
                  {item.icon}
                </div>
                <CardTitle className="font-serif text-2xl font-bold">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-muted-foreground font-medium">
                  {item.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="pt-4 pb-8">
                <Link href={item.link}>
                  <div className="flex items-center text-primary font-bold text-sm group-hover:translate-x-2 transition-transform cursor-pointer">
                    LEARN MORE <ArrowRight className="ml-2 h-4 w-4" />
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
