import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Subscribe() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Modern Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-bottom-right pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-black/5 -skew-x-12 transform origin-top-left pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-16 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-orange-400 to-primary"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-4xl font-extrabold text-foreground leading-tight">
                Join the <span className="text-primary">Conversation</span>
              </h2>
              <p className="text-lg text-muted-foreground font-medium">
                Subscribe to our newsletter to receive updates on upcoming events, recent journal publications, and opportunities for fellowship.
              </p>
              <div className="flex items-center gap-3 text-sm font-bold text-foreground bg-secondary/50 p-4 rounded-xl">
                <span className="flex h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
                <span>Weekly updates during term time</span>
              </div>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">First Name</label>
                  <Input id="first-name" placeholder="Immanuel" className="bg-secondary/30 border-transparent focus:border-primary focus:bg-white h-12 rounded-xl transition-all" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Last Name</label>
                  <Input id="last-name" placeholder="Kant" className="bg-secondary/30 border-transparent focus:border-primary focus:bg-white h-12 rounded-xl transition-all" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Email Address</label>
                <Input id="email" type="email" placeholder="ikant@princeton.edu" className="bg-secondary/30 border-transparent focus:border-primary focus:bg-white h-12 rounded-xl transition-all" />
              </div>

              <Button type="submit" className="w-full bg-foreground text-background hover:bg-primary hover:text-white h-14 text-lg font-bold rounded-xl shadow-lg transition-all mt-2">
                Subscribe Now
              </Button>
              
              <p className="text-xs text-muted-foreground text-center mt-4 font-medium">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
