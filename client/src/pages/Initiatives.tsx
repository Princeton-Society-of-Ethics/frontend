import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Initiatives() {
  return (
    <Layout>
      <div className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <h1 className="font-serif text-5xl font-bold mb-6">Our Initiatives</h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl leading-relaxed">
            We translate ethical theory into practice through three core pillars of engagement, fostering a community of rigorous debate and intellectual friendship.
          </p>
        </div>
      </div>

      <div className="container py-20 space-y-32">
        {/* Bioethics Forum */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <div className="inline-block px-3 py-1 border border-primary/30 rounded-full bg-primary/5">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Weekly Discussion</span>
            </div>
            <h2 className="font-serif text-4xl font-bold text-foreground">Bioethics Forum</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Bioethics Forum is our flagship weekly discussion group. We examine the moral implications of biological research and medical applications in the modern world. Topics range from CRISPR and genetic editing to end-of-life care and resource allocation in pandemics.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5"></span>
                <span>Weekly meetings on Tuesdays at 7:00 PM in McCosh Hall</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5"></span>
                <span>Open to all undergraduates, no prior experience required</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5"></span>
                <span>Guest lectures from Princeton faculty and medical professionals</span>
              </li>
            </ul>
            <div className="pt-4">
              <Link href="/join">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Join the Forum
                </Button>
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 bg-secondary aspect-[4/3] rounded-sm relative overflow-hidden shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
               <span className="text-muted-foreground/30 font-serif text-6xl font-bold">Bioethics</span>
            </div>
          </div>
        </section>

        {/* The Journal */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="bg-secondary aspect-[4/3] rounded-sm relative overflow-hidden shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
               <span className="text-muted-foreground/30 font-serif text-6xl font-bold">Journal</span>
            </div>
          </div>
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 border border-primary/30 rounded-full bg-primary/5">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Annual Publication</span>
            </div>
            <h2 className="font-serif text-4xl font-bold text-foreground">The Princeton Journal of Bioethics</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 1998, the Princeton Journal of Bioethics is the oldest undergraduate bioethics journal in the country. We publish an annual volume featuring high-quality undergraduate papers on ethical theory and applied ethics from students around the world.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our editorial board is composed entirely of Princeton undergraduates who work closely with faculty advisors to select and edit submissions.
            </p>
            <div className="pt-4">
              <Link href="/journal">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group">
                  Read the Latest Issue <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Speaker Series */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <div className="inline-block px-3 py-1 border border-primary/30 rounded-full bg-primary/5">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Public Events</span>
            </div>
            <h2 className="font-serif text-4xl font-bold text-foreground">Distinguished Speaker Series</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We host distinguished philosophers, public figures, and thought leaders to discuss contemporary ethical challenges. Past speakers have included Peter Singer, Cornel West, and Judith Butler.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              These events are free and open to the public, designed to bridge the gap between academic philosophy and public discourse.
            </p>
            <div className="pt-4">
              <Link href="/events">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group">
                  View Upcoming Events <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 bg-secondary aspect-[4/3] rounded-sm relative overflow-hidden shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
               <span className="text-muted-foreground/30 font-serif text-6xl font-bold">Speakers</span>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
