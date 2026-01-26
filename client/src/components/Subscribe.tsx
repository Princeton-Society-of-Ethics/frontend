import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Subscribe() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden border-t-4 border-primary">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-[50%] -left-[10%] w-[50%] h-[200%] bg-white rotate-12 transform origin-center"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto bg-background text-foreground rounded-sm shadow-2xl p-8 md:p-12 border-l-4 border-primary">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-4 text-foreground">Join the <span className="text-primary">Conversation</span></h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter to receive updates on upcoming events, recent Encompass publications, and opportunities for fellowship.
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <span className="flex h-2 w-2 rounded-full bg-primary"></span>
                <span>Weekly updates during term time</span>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">First Name</label>
                  <Input id="first-name" placeholder="Immanuel" className="bg-secondary/50 border-border focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Last Name</label>
                  <Input id="last-name" placeholder="Kant" className="bg-secondary/50 border-border focus:border-primary" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email Address</label>
                <Input id="email" type="email" placeholder="ikant@princeton.edu" className="bg-secondary/50 border-border focus:border-primary" />
              </div>

              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-medium mt-2">
                SUBSCRIBE
              </Button>
              
              <p className="text-xs text-muted-foreground text-center mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
