import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

export default function Journal() {
  const volumes = [
    {
      volume: "Volume XIX",
      year: "Spring 2025",
      theme: "Ethics of Emerging Technologies",
      articles: [
        { title: "Algorithmic Bias and the Rawlsian Veil of Ignorance", author: "Jennifer Wu '25" },
        { title: "The Moral Status of Neural Organoids", author: "Michael Chang '26" },
        { title: "Privacy in the Age of Surveillance Capitalism", author: "Sarah Johnson '25" }
      ]
    },
    {
      volume: "Volume XVIII",
      year: "Spring 2024",
      theme: "Global Health Justice",
      articles: [
        { title: "Vaccine Nationalism and Cosmopolitan Duty", author: "Robert Smith '24" },
        { title: "Resource Allocation in Crisis Standards of Care", author: "Emily Davis '24" },
        { title: "The Ethics of Medical Voluntourism", author: "David Kim '25" }
      ]
    }
  ];

  return (
    <Layout>
      <div className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <h1 className="font-serif text-5xl font-bold mb-6">The Journal</h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl leading-relaxed">
            The Princeton Journal of Bioethics is an undergraduate publication dedicated to the open exchange of ideas regarding the ethical challenges of our time.
          </p>
        </div>
      </div>

      <div className="container py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-16">
          {volumes.map((vol, index) => (
            <div key={index} className="space-y-6">
              <div className="flex items-baseline justify-between border-b border-border pb-4">
                <h2 className="font-serif text-3xl font-bold text-foreground">{vol.volume}</h2>
                <span className="text-muted-foreground font-medium">{vol.year}</span>
              </div>
              
              <div className="bg-secondary/30 p-6 rounded-sm">
                <p className="text-sm font-bold uppercase tracking-wider text-primary mb-4">Theme: {vol.theme}</p>
                <ul className="space-y-4">
                  {vol.articles.map((article, i) => (
                    <li key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 group cursor-pointer">
                      <span className="font-serif text-lg font-medium group-hover:text-primary transition-colors">{article.title}</span>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">by {article.author}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex gap-4">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Download className="mr-2 h-4 w-4" /> Download Full PDF
                </Button>
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                  View Editorial Board
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <div className="bg-secondary p-8 rounded-sm shadow-sm">
            <h3 className="font-serif text-2xl font-bold mb-4">Submit Your Work</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We accept submissions from undergraduates at any university. Papers should be 3,000-5,000 words and address a topic in normative or applied ethics.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <FileText className="h-4 w-4 text-primary" />
                <span>Chicago Style Citations</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <FileText className="h-4 w-4 text-primary" />
                <span>Blind Review Process</span>
              </div>
            </div>
            <Button className="w-full mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
              Submission Guidelines
            </Button>
          </div>

          <div className="bg-muted p-8 rounded-sm">
            <h3 className="font-serif text-xl font-bold mb-4">Faculty Advisors</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>Prof. Peter Singer</li>
              <li>Prof. Elizabeth Harman</li>
              <li>Prof. Johann Frick</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
