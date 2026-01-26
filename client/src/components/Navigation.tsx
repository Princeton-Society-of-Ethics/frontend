import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [location] = useLocation();

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/initiatives", label: "Initiatives" },
    { href: "/events", label: "Events" },
    { href: "/journal", label: "Journal" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative h-12 w-12 overflow-hidden">
            <img 
              src="/images/logo.png" 
              alt="Princeton Ethics Society Logo" 
              className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-semibold leading-none tracking-tight text-foreground">
              Princeton Undergraduate
            </span>
            <span className="font-serif text-lg font-light leading-none tracking-wide text-foreground/80">
              Society of Ethics
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location === item.href
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
              )}
            >
              {item.label.toUpperCase()}
            </Link>
          ))}
          <Link 
            href="/join"
            className="inline-flex h-10 items-center justify-center rounded-sm border border-primary bg-transparent px-6 py-2 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            JOIN US
          </Link>
        </div>
      </div>
    </nav>
  );
}
