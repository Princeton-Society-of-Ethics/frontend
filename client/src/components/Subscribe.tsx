import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Subscribe() {
  return (
    <section className="py-24 bg-foreground text-background relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto border-4 border-background p-8 md:p-16 relative">
          <div className="absolute top-0 left-0 bg-primary text-foreground px-4 py-1 font-mono font-bold text-sm uppercase transform -translate-y-1/2 translate-x-8 border-2 border-background">
            Signal_Input
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-serif text-5xl font-bold leading-none uppercase">
                JOIN THE <span className="text-primary">CONVERSATION</span>
              </h2>
              <p className="text-lg font-mono leading-relaxed border-l-4 border-primary pl-6">
                Subscribe to our newsletter. Receive updates. Engage in discourse. No spam.
              </p>
              <div className="flex items-center gap-3 text-sm font-bold font-mono bg-background/10 p-4 border border-background">
                <span className="flex h-3 w-3 bg-primary animate-pulse"></span>
                <span className="uppercase tracking-widest">Status: Active // Weekly Updates</span>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-xs font-mono font-bold uppercase tracking-widest text-primary">First Name</label>
                  <Input id="first-name" placeholder="IMMANUEL" className="bg-transparent border-2 border-background text-background placeholder:text-background/30 focus:border-primary focus:ring-0 h-12 rounded-none font-mono" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-xs font-mono font-bold uppercase tracking-widest text-primary">Last Name</label>
                  <Input id="last-name" placeholder="KANT" className="bg-transparent border-2 border-background text-background placeholder:text-background/30 focus:border-primary focus:ring-0 h-12 rounded-none font-mono" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-mono font-bold uppercase tracking-widest text-primary">Email Address</label>
                <Input id="email" type="email" placeholder="IKANT@PRINCETON.EDU" className="bg-transparent border-2 border-background text-background placeholder:text-background/30 focus:border-primary focus:ring-0 h-12 rounded-none font-mono" />
              </div>

              <Button type="submit" className="w-full bg-primary text-foreground hover:bg-background hover:text-foreground h-14 text-lg font-bold rounded-none border-2 border-transparent hover:border-primary transition-all mt-4 uppercase font-mono">
                [ Initiate_Subscription ]
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
