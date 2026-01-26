import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function DynamicNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "ABOUT", href: "/about" },
    { label: "INITIATIVES", href: "/initiatives" },
    { label: "EVENTS", href: "/events" },
    { label: "JOURNAL", href: "/journal" }
  ];

  return (
    <>
      {/* Fixed Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background border-b border-border shadow-md"
            : "bg-transparent md:bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-20 px-4 md:px-0">
          {/* Logo and Title - Always visible */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
              <img
                src="/Princeton-SocietyofEthics-logo.png"
                alt="Princeton Ethics Society Logo"
                className={`object-contain transition-all duration-500 ${
                  isScrolled ? "h-10 w-10" : "h-12 w-12"
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

          {/* Desktop Navigation - Only visible when scrolled and on larger screens */}
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
            <Link href="/join">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm px-6 h-10 text-sm font-serif">
                JOIN US
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button - Always visible on mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 relative z-50 transition-all ${
              isScrolled 
                ? "text-foreground" 
                : "text-white drop-shadow-lg"
            }`}
            aria-label="Toggle menu"
          >
            {/* Top line */}
            <span 
              className={`block h-0.5 w-6 transition-all duration-300 ${
                isScrolled ? "bg-foreground" : "bg-white"
              } ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            {/* Middle line */}
            <span 
              className={`block h-0.5 w-6 transition-all duration-300 ${
                isScrolled ? "bg-foreground" : "bg-white"
              } ${isMobileMenuOpen ? "opacity-0" : ""}`}
            />
            {/* Bottom line */}
            <span 
              className={`block h-0.5 w-6 transition-all duration-300 ${
                isScrolled ? "bg-foreground" : "bg-white"
              } ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Menu - Dropdown (Always can be opened) */}
        {isMobileMenuOpen && (
          <div
            className={`lg:hidden transition-all duration-300 ${
              isScrolled
                ? "bg-background border-b border-border"
                : "bg-foreground/95 backdrop-blur-md"
            }`}
          >
            <div className="container py-4 space-y-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <div
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm font-medium transition-colors cursor-pointer ${
                      isScrolled
                        ? "text-foreground hover:text-primary"
                        : "text-white hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}
              <Link href="/join">
                <Button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm h-10 text-sm font-serif"
                >
                  JOIN US
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
