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

  const recentArticles = [
    {
      title: "The Moral Status of Sentient AI",
      author: "Marcus Johnson",
      date: "January 2025",
      category: "Philosophy",
      excerpt: "As AI systems become more sophisticated, we must ask: do they deserve moral consideration?"
    },
    {
      title: "Environmental Justice and Indigenous Rights",
      author: "Aisha Okonkwo",
      date: "December 2024",
      category: "Social Ethics",
      excerpt: "How can we balance environmental protection with the rights of indigenous communities?"
    },
    {
      title: "The Ethics of Wealth Inequality",
      author: "David Lee",
      date: "November 2024",
      category: "Political Ethics",
      excerpt: "Examining philosophical frameworks for addressing global economic disparities."
    }
  ];

  return (
    <PageTransition>
    <div className="min-h-screen bg-background">
      <DynamicNavigation />
      
      {/* Newspaper-style Header */}
      <section className="pt-32 pb-12 bg-background border-b-4 border-primary">
        <div className="container">
          <div className="text-center mb-8 stagger-item-1 animate-fade-in">
            <p className="text-primary font-serif italic text-sm mb-2">Est. 2010</p>
            <h1 className="font-serif text-7xl md:text-8xl font-bold text-foreground mb-2 tracking-tight">
              ENCOMPASS
            </h1>
            <div className="h-1 w-24 bg-primary mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground font-light italic">
              A Student Journal of Ethical Inquiry
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid - Newspaper Layout */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Column - Featured Article */}
            <div className="lg:col-span-2">
              <div className="mb-12 animate-fade-in-up stagger-item-1">
                <div className="border-b-2 border-primary pb-4 mb-6">
                  <span className="text-primary font-serif italic text-xs font-bold tracking-widest mb-3 block">FEATURED</span>
                  <h2 className="font-serif text-5xl font-bold text-foreground mb-4 leading-tight">
                    {featuredArticles[0].title}
                  </h2>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span>By {featuredArticles[0].author}</span>
                    <span>•</span>
                    <span>{featuredArticles[0].date}</span>
                    <span>•</span>
                    <span className="text-primary font-medium">{featuredArticles[0].category}</span>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {featuredArticles[0].excerpt}
                </p>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm px-6 h-10 text-sm font-serif">
                  Read Full Article →
                </Button>
              </div>

              {/* Secondary Featured Articles - Two Column */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {featuredArticles.slice(1).map((article, index) => (
                  <div key={index} className={`border border-border p-6 hover:shadow-md transition-shadow animate-fade-in-up stagger-item-${index + 2}`}>
                    <span className="text-primary font-serif italic text-xs font-bold tracking-widest mb-2 block">
                      {article.category.toUpperCase()}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3 leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      By {article.author} • {article.date}
                    </p>
                    <p className="text-muted-foreground text-sm mb-4">
                      {article.excerpt}
                    </p>
                    <a href="#" className="text-primary hover:text-primary/80 text-sm font-medium">
                      Read →
                    </a>
                  </div>
                ))}
              </div>

              {/* Recent Articles List */}
              <div className="animate-fade-in-up stagger-item-4">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6 pb-4 border-b border-border">
                  Latest Articles
                </h3>
                <div className="space-y-6">
                  {recentArticles.map((article, index) => (
                    <article key={index} className="pb-6 border-b border-border/50 last:border-b-0">
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <h4 className="font-serif text-lg font-bold text-foreground hover:text-primary transition-colors cursor-pointer">
                          {article.title}
                        </h4>
                      </div>
                      <p className="text-xs text-primary font-bold tracking-widest mb-2">
                        {article.category.toUpperCase()}
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        By {article.author} • {article.date}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {article.excerpt}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Current Issue */}
              <div className="bg-secondary/30 border border-border p-6 mb-8 animate-fade-in-up stagger-item-2">
                <h3 className="font-serif text-xl font-bold text-foreground mb-4 pb-3 border-b border-border">
                  Current Issue
                </h3>
                <div className="mb-4">
                  <p className="text-xs text-primary font-bold tracking-widest mb-2">
                    {issues[0].volume.toUpperCase()} • {issues[0].issue.toUpperCase()}
                  </p>
                  <h4 className="font-serif text-lg font-bold text-foreground mb-2">
                    {issues[0].title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {issues[0].date}
                  </p>
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm h-10 text-sm font-serif">
                  Read Issue
                </Button>
              </div>

              {/* Categories */}
              <div className="bg-secondary/30 border border-border p-6 mb-8 animate-fade-in-up stagger-item-3">
                <h3 className="font-serif text-lg font-bold text-foreground mb-4 pb-3 border-b border-border">
                  Categories
                </h3>
                <div className="space-y-2">
                  {["Applied Ethics", "Social Justice", "Philosophy", "Political Ethics", "Aesthetics"].map((cat) => (
                    <a key={cat} href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                      {cat}
                    </a>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <div className="bg-primary/10 border border-primary p-6 animate-fade-in-up stagger-item-4">
                <h3 className="font-serif text-lg font-bold text-foreground mb-3">
                  Submit Your Work
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Have an article about ethics? We'd love to read it.
                </p>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm h-10 text-sm font-serif">
                  Submit Article
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Issues Archive */}
      <section className="py-16 bg-secondary/20 border-t border-border">
        <div className="container">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 pb-4 border-b-2 border-primary">
            Archive
          </h2>
          
          <div className="space-y-6">
            {issues.map((issue, index) => (
              <div key={index} className={`border-l-4 border-primary pl-6 py-4 hover:bg-secondary/20 transition-colors cursor-pointer animate-fade-in-up stagger-item-${Math.min(index + 1, 8)}`}>
                <div className="flex justify-between items-start gap-4 mb-2">
                  <div>
                    <p className="text-xs text-primary font-bold tracking-widest mb-1">
                      {issue.volume.toUpperCase()} • {issue.issue.toUpperCase()}
                    </p>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                      {issue.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {issue.date}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-3">
                  {issue.description}
                </p>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-sm px-4 h-8 text-xs font-medium"
                >
                  View Issue
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </PageTransition>
  );
}
