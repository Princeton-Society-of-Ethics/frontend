import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function SponsorPartnerSection() {
  return (
    <section className="py-24 bg-background border-t-4 border-primary/20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-primary font-serif italic text-sm mb-2 block">
            Supporting our mission
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
            Our <span className="text-primary">sponsors</span> &amp; partners
          </h2>
          <p className="text-muted-foreground text-lg mt-6 font-light leading-relaxed">
            We are grateful to the organizations that help us host discussions, publish student
            work, and grow our community. Details about our current supporters will appear here
            soon.
          </p>
        </div>

        <div className="max-w-2xl mx-auto rounded-sm border border-primary/20 bg-primary/5 p-10 md:p-12 text-center">
          <p className="text-foreground/80 font-light leading-relaxed mb-8">
            Interested in partnering with the Princeton Undergraduate Society of Ethics? We would
            love to hear from you about collaborations, sponsorship, and shared programming.
          </p>
          <Link href="/contact">
            <Button variant="outline" className="rounded-sm border-2 px-8 h-12 font-serif">
              Get in touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
