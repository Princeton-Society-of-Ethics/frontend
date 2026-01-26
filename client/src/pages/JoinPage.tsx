import { Button } from "@/components/ui/button";
import DynamicNavigation from "@/components/DynamicNavigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function JoinPage() {
  const benefits = [
    {
      title: "Community",
      description: "Connect with like-minded students passionate about ethics and moral inquiry."
    },
    {
      title: "Learning",
      description: "Engage with leading philosophers, ethicists, and thought leaders through seminars and lectures."
    },
    {
      title: "Publication",
      description: "Share your writing and ideas through Encompass magazine and our platforms."
    },
    {
      title: "Leadership",
      description: "Develop leadership skills through committee roles and project management."
    },
    {
      title: "Networking",
      description: "Build connections with faculty mentors and professionals in ethics-related fields."
    },
    {
      title: "Impact",
      description: "Contribute to real-world projects that apply ethical frameworks to pressing issues."
    }
  ];

  const faqs = [
    {
      question: "Do I need to be a philosophy major to join?",
      answer: "Absolutely not! We welcome students from all majors and backgrounds. Our members include philosophy majors, computer scientists, engineers, public policy students, and many others. What matters is your interest in ethical inquiry."
    },
    {
      question: "What is the time commitment?",
      answer: "Membership is flexible. You can attend as many or as few events as you'd like. Leadership positions require more commitment, typically 5-10 hours per week, but general membership has no minimum requirements."
    },
    {
      question: "How do I get involved with Encompass magazine?",
      answer: "You can submit articles, serve on our editorial board, or help with design and layout. All levels of writing experience are welcome. We also accept creative writing, visual essays, and other experimental forms."
    },
    {
      question: "Are there any membership fees?",
      answer: "No, membership is completely free. We're funded through Princeton's student activities budget and occasional grants."
    },
    {
      question: "When and where do you meet?",
      answer: "We hold weekly discussion seminars on Thursday evenings and monthly speaker events. Meeting locations vary, but are always on campus. Check our calendar for specific times and locations."
    },
    {
      question: "How can I get leadership experience?",
      answer: "We have several leadership positions available, including committee chairs for events, publications, outreach, and more. These roles are filled through an application process each spring and fall."
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
            Join Us
          </h1>
          <p className="text-xl text-white/80 max-w-2xl font-light">
            Become part of a community dedicated to ethical inquiry, moral leadership, and meaningful dialogue.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="mb-16">
            <span className="text-primary font-serif italic text-sm mb-4 block">Why Join</span>
            <h2 className="font-serif text-5xl font-bold text-foreground">
              What You'll Gain
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card rounded-sm border border-border p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/20 rounded-full mb-6 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section className="py-24 bg-secondary/20 border-t border-border">
        <div className="container max-w-3xl">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12">
            How to Get Started
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-serif font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  Attend an Event
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Come to one of our weekly discussion seminars or monthly speaker events. No registration required—just show up! Check our calendar for upcoming events.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-serif font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  Join Our Mailing List
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sign up for our newsletter to receive updates about events, article submissions, and opportunities. We send out one email per week with upcoming activities.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-serif font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  Get Involved
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Contribute to discussions, submit articles to Encompass, volunteer for events, or apply for a leadership position. There are many ways to participate at whatever level works for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container max-w-3xl">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-border pb-8 last:border-b-0">
                <h3 className="font-serif text-lg font-bold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary/20 border-t border-border">
        <div className="container max-w-3xl text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
            Ready to Join?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Reach out to us with any questions or to learn more about membership. We're always excited to welcome new members to our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm px-8 h-12 text-base font-serif">
              Contact Us
            </Button>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-sm px-8 h-12 text-base font-serif"
            >
              View Events
            </Button>
          </div>
        </div>
      </section>

        <Footer />
      </div>
    </PageTransition>
  );
}
