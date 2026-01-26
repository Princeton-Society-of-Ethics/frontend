import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
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
      {/* Hero Section Navigation - Blended */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background border-b border-border shadow-md"
            : "bg-transparent backdrop-blur-0"
        }`}
      >
        <div className="container flex items-center justify-between h-20">
          {/* Logo and Title - Always visible */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
              <img
                src="/Princeton-SocietyofEthics-logo.png"
                alt="Princeton Ethics Society Logo"
                className={`object-contain transition-all duration-500 ${
                  isScrolled ? "h-10 w-10" : "h-12 w-12"
                } ${isScrolled ? "" : "brightness-200 invert"}`}
              />
              <div className="flex flex-col">
                <span
                  className={`font-serif font-semibold leading-none tracking-tight transition-all duration-500 ${
                    isScrolled
                      ? "text-foreground text-sm"
                      : "text-background text-base"
                  }`}
                >
                  Princeton Undergraduate
                </span>
                <span
                  className={`font-serif font-light leading-none tracking-wide transition-all duration-500 ${
                    isScrolled
                      ? "text-foreground/60 text-xs"
                      : "text-background/80 text-sm"
                  }`}
                >
                  Society of Ethics
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Only visible when scrolled */}
          <div
            className={`hidden md:flex items-center gap-8 transition-all duration-500 ${
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors ${
              isScrolled ? "text-foreground" : "text-background"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

          {/* Mobile Menu - Dropdown */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden transition-all duration-300 ${
              isScrolled
                ? "bg-background border-b border-border"
                : "bg-foreground/90 backdrop-blur-md"
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
                        : "text-background hover:text-primary"
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

      {/* No spacer - navigation is fixed and overlays content */}
    </>
  );
}
