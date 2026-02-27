import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function Magazine() {
  const articles = [
    {
      id: 1,
      title: "The Ethics of Artificial Intelligence",
      author: "Sarah Chen",
      date: "January 2025",
      excerpt: "Exploring the moral implications of AI development and deployment in society.",
      category: "Technology",
      link: "/journal/ai-ethics"
    },
    {
      id: 2,
      title: "Justice and Climate Change",
      author: "Marcus Johnson",
      date: "December 2024",
      excerpt: "How intergenerational justice shapes our response to environmental crises.",
      category: "Environment",
      link: "/journal/climate-justice"
    },
    {
      id: 3,
      title: "The Virtue of Intellectual Humility",
      author: "Dr. Elena Rodriguez",
      date: "November 2024",
      excerpt: "Understanding how admitting what we don't know strengthens ethical reasoning.",
      category: "Philosophy",
      link: "/journal/intellectual-humility"
    }
  ];

  return (
    <section className="py-24 bg-background border-t-4 border-primary/20">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-serif italic text-sm mb-2 block">Featured Publication</span>
            <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
              <span className="text-primary">Telos</span> Magazine
            </h2>
            <p className="text-muted-foreground text-lg mt-4 font-light max-w-xl">
              A student-led magazine exploring contemporary ethical questions through rigorous analysis and diverse perspectives.
            </p>
          </div>
          <Link href="/journal">
            <Button variant="outline" className="rounded-sm border-2 px-6 h-12 font-serif">
              View All Issues
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="border-t-4 border-primary shadow-sm hover:shadow-lg transition-all duration-500 group bg-background hover:bg-primary/5 rounded-sm overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 px-2 py-1 rounded-sm">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">
                    {article.date}
                  </span>
                </div>
                <CardTitle className="font-serif text-xl font-bold leading-snug text-foreground">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-sm font-medium text-primary/70">
                  By {article.author}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-base text-foreground/70 leading-relaxed font-light">
                  {article.excerpt}
                </p>
                <Link href={article.link}>
                  <div className="flex items-center text-primary font-serif font-semibold text-sm group-hover:translate-x-1 transition-transform cursor-pointer">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
