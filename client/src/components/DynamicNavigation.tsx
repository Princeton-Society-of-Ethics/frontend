import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function DynamicNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuAnimating, setIsMenuAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      setIsMenuAnimating(true);
    } else {
      document.body.style.overflow = "unset";
      setIsMenuAnimating(false);
    }
  }, [isMenuOpen]);

  const navItems = [
    { label: "ABOUT", href: "/about" },
    { label: "INITIATIVES", href: "/initiatives" },
    { label: "EVENTS", href: "/events" },
    { label: "JOURNAL", href: "/journal" },
    { label: "JOIN US", href: "/join" }
  ];

  return (
    <>
      {/* Fixed Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-background border-b border-border shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className={`container flex items-center justify-between transition-all duration-500 px-4 md:px-0 ${
          isScrolled ? "h-20" : "h-32"
        }`}>
          {/* Logo and Title - Always visible */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
              <img
                src="/Princeton-SocietyofEthics-logo.png"
                alt="Princeton Ethics Society Logo"
                className={`object-contain transition-all duration-500 ${
                  isScrolled ? "h-14 w-14" : "h-16 w-16"
                } ${isScrolled ? "" : "drop-shadow-lg"}`}
              />
              <div className="hidden sm:flex flex-col">
                <span
                  className={`font-serif font-semibold leading-none tracking-tight transition-all duration-500 ${
                    isScrolled
                      ? "text-foreground text-sm"
                      : "text-white text-base drop-shadow-lg"
                  }`}
                >
                  Princeton Undergraduate
                </span>
                <span
                  className={`font-serif font-light leading-none tracking-wide transition-all duration-500 ${
                    isScrolled
                      ? "text-foreground/60 text-xs"
                      : "text-white/80 text-sm drop-shadow-lg"
                  }`}
                >
                  Society of Ethics
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Only visible when scrolled */}
          <div
            className={`hidden lg:flex items-center gap-8 transition-all duration-500 ${
              isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span className="text-foreground text-sm font-medium hover:text-primary transition-colors cursor-pointer">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Hamburger Menu Button - Always visible on all devices */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`flex flex-col justify-center items-center w-14 h-14 gap-2 relative z-50 transition-all ${
              isScrolled 
                ? "text-foreground" 
                : "text-white drop-shadow-lg"
            }`}
            aria-label="Toggle menu"
          >
            {/* Top line */}
            <span 
              className={`block h-1 w-8 transition-all duration-300 ${
                isScrolled ? "bg-foreground" : "bg-white"
              } ${isMenuOpen ? "rotate-45 translate-y-3" : ""}`}
            />
            {/* Middle line */}
            <span 
              className={`block h-1 w-8 transition-all duration-300 ${
                isScrolled ? "bg-foreground" : "bg-white"
              } ${isMenuOpen ? "opacity-0" : ""}`}
            />
            {/* Bottom line */}
            <span 
              className={`block h-1 w-8 transition-all duration-300 ${
                isScrolled ? "bg-foreground" : "bg-white"
              } ${isMenuOpen ? "-rotate-45 -translate-y-3" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Full-Page Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop with fade animation */}
          <div
            className={`fixed inset-0 z-30 transition-opacity duration-700 ${
              isMenuAnimating ? "opacity-100" : "opacity-0"
            } ${
              isScrolled
                ? "bg-background"
                : "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
            }`}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Content with slide animation */}
          <div
            className={`fixed inset-0 z-30 pointer-events-none`}
            onClick={() => setIsMenuOpen(false)}
          >
            <div
              className={`h-full flex pointer-events-auto transition-all duration-700 ease-out`}
              onClick={(e) => e.stopPropagation()}
              style={{
                transform: isMenuAnimating ? "translateX(0)" : "translateX(100%)",
              }}
            >
              {/* Left Side - Menu Items with staggered fade-in */}
              <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-12 py-20">
                <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-12 transition-all duration-700 ${
                  isMenuAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                } ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}>
                  Menu
                </h2>
                <nav className="space-y-6">
                  {navItems.map((item, index) => (
                    <Link key={item.href} href={item.href}>
                      <div
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-2xl md:text-3xl font-serif font-light transition-colors duration-200 cursor-pointer hover:text-primary ${
                          isMenuAnimating 
                            ? "opacity-100 translate-x-0" 
                            : "opacity-0 -translate-x-8"
                        } ${
                          isScrolled
                            ? "text-foreground"
                            : "text-white"
                        }`}
                        style={{
                          transitionDelay: isMenuAnimating ? `${(index + 1) * 100}ms` : "0ms"
                        }}
                      >
                        {item.label}
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Right Side - Email Subscription with fade-in */}
              <div className={`hidden md:flex w-1/2 flex-col justify-center items-center px-12 py-20 transition-all duration-700 ${
                isMenuAnimating ? "opacity-100" : "opacity-0"
              } ${
                isScrolled
                  ? "bg-muted"
                  : "bg-foreground/10 backdrop-blur-sm"
              }`}>
                <div className="max-w-md">
                  <h3 className={`text-3xl font-serif font-bold mb-4 ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}>
                    Stay Connected
                  </h3>
                  <p className={`text-lg mb-8 font-light ${
                    isScrolled ? "text-foreground/70" : "text-white/80"
                  }`}>
                    Subscribe to our newsletter for updates on events, articles, and initiatives.
                  </p>
                  
                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder="Your email"
                      className={`w-full px-4 py-3 rounded-sm border-2 transition-colors font-serif ${
                        isScrolled
                          ? "border-border bg-background text-foreground placeholder-foreground/50"
                          : "border-white/30 bg-white/10 text-white placeholder-white/60"
                      } focus:outline-none focus:border-primary`}
                    />
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm h-12 text-lg font-serif">
                      Subscribe
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
