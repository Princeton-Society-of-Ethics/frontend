import { Button } from "@/components/ui/button";
import DynamicNavigation from "@/components/DynamicNavigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function MagazinePage() {
  const issues = [
    {
      volume: "Volume 14",
      issue: "Issue 2",
      title: "The Ethics of Artificial Intelligence",
      date: "Fall 2024",
      description: "Exploring the moral implications of AI development, deployment, and governance.",
      articles: [
        "AI Governance: Who Decides?",
        "Algorithmic Bias and Justice",
        "The Future of Human-AI Collaboration"
      ]
    },
    {
      volume: "Volume 14",
      issue: "Issue 1",
      title: "Climate Justice and Intergenerational Ethics",
      date: "Spring 2024",
      description: "Examining our moral obligations to future generations and the ethics of environmental action.",
      articles: [
        "Climate Change as an Ethical Crisis",
        "Indigenous Knowledge and Environmental Ethics",
        "Individual Action vs. Systemic Change"
      ]
    },
    {
      volume: "Volume 13",
      issue: "Issue 2",
      title: "Bioethics in the Modern Age",
      date: "Fall 2023",
      description: "Investigating ethical questions in medicine, genetics, and biotechnology.",
      articles: [
        "CRISPR and the Ethics of Gene Editing",
        "Healthcare Access as a Moral Right",
        "Pandemic Ethics: Lessons Learned"
      ]
    }
  ];

  const featuredArticles = [
    {
      title: "The Trolley Problem in Autonomous Vehicles",
      author: "Jessica Martinez",
      date: "December 2024",
      category: "Applied Ethics",
      excerpt: "When self-driving cars must make split-second decisions, how should we program their moral choices? This article explores the philosophical implications of algorithmic ethics."
    },
    {
      title: "Reparations and Restorative Justice",
      author: "James Chen",
      date: "November 2024",
      category: "Social Justice",
      excerpt: "An examination of how restorative justice frameworks can address historical wrongs and build more equitable communities."
    },
    {
      title: "The Ethics of Artificial Beauty",
      author: "Sofia Patel",
      date: "October 2024",
      category: "Aesthetics",
      excerpt: "Exploring what we value in beauty, authenticity, and the role of technology in shaping our aesthetic standards."
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
            Encompass
          </h1>
          <p className="text-xl text-white/80 max-w-2xl font-light">
            A student-run journal of ethical inquiry, featuring original writing on philosophy, ethics, and moral questions.
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="mb-16">
            <span className="text-primary font-serif italic text-sm mb-4 block">Latest Articles</span>
            <h2 className="font-serif text-5xl font-bold text-foreground">
              Featured Writing
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredArticles.map((article, index) => (
              <article key={index} className="bg-card rounded-sm border border-border p-8 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <span className="inline-block bg-primary/20 text-primary text-xs font-medium px-3 py-1 rounded-sm mb-3">
                    {article.category}
                  </span>
                  <p className="text-muted-foreground text-sm">{article.date}</p>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3 leading-tight">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">By {article.author}</span>
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary/80 p-0 h-auto font-medium"
                  >
                    Read →
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Past Issues */}
      <section className="py-24 bg-secondary/20 border-t border-border">
        <div className="container">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12">
            Past Issues
          </h2>
          
          <div className="space-y-8">
            {issues.map((issue, index) => (
              <div key={index} className="bg-card rounded-sm border border-border p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="mb-3">
                      <span className="text-primary font-serif italic text-sm">
                        {issue.volume} • {issue.issue}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                      {issue.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{issue.date}</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {issue.description}
                    </p>
                    <div className="mb-6">
                      <p className="text-sm font-medium text-foreground mb-3">Featured Articles:</p>
                      <ul className="space-y-2">
                        {issue.articles.map((article, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">
                            • {article}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-sm px-6 h-10 text-sm font-medium transition-all"
                    >
                      Read Full Issue
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Section */}
      <section className="py-24 bg-background">
        <div className="container max-w-3xl text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
            Submit Your Work
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Encompass welcomes submissions from all Princeton undergraduates. We accept essays, creative writing, research papers, and other forms of ethical inquiry. Submissions are peer-reviewed and published on a rolling basis.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm px-8 h-12 text-base font-serif">
            Submit an Article
          </Button>
        </div>
      </section>

      <Footer />
    </div>
    </PageTransition>
  );
}
