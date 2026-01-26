import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function DynamicNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const navItems = [
    { label: "ABOUT", href: "/about" },
    { label: "INITIATIVES", href: "/initiatives" },
    { label: "MAGAZINE", href: "/journal" },
    { label: "TEAM", href: "/team" },
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
                className={`object-contain transition-all duration-500 flex-shrink-0 ${
                  isScrolled ? "h-14 w-14" : "h-16 w-16"
                } ${isScrolled ? "" : "drop-shadow-lg"}`}
              />
              <div className="hidden sm:flex flex-col gap-0">
                <span
                  className={`font-serif font-semibold leading-tight tracking-tight transition-all duration-500 ${
                    isScrolled
                      ? "text-foreground text-sm"
                      : "text-white text-base drop-shadow-lg"
                  }`}
                >
                  Princeton Undergraduate
                </span>
                <span
                  className={`font-serif font-light leading-tight tracking-wide transition-all duration-500 ${
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

          {/* Right side container */}
          <div className="flex items-center gap-6 ml-auto">
            {/* Desktop Navigation - Only visible when scrolled */}
            <div
              className={`hidden lg:flex items-center gap-6 transition-all duration-500 ${
                isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <Link href="/about">
                <span className="text-foreground text-sm font-medium hover:text-primary transition-colors cursor-pointer">
                  ABOUT
                </span>
              </Link>
              <Link href="/initiatives">
                <span className="text-foreground text-sm font-medium hover:text-primary transition-colors cursor-pointer">
                  INITIATIVES
                </span>
              </Link>
              <Link href="/journal">
                <span className="text-foreground text-sm font-medium hover:text-primary transition-colors cursor-pointer">
                  MAGAZINE
                </span>
              </Link>
              <Link href="/join">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm px-6 h-10 text-sm font-serif">
                  JOIN US
                </Button>
              </Link>
            </div>

            {/* Hamburger Menu Button - Always visible on all devices */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`flex flex-col justify-center items-center w-12 h-12 gap-2 relative z-50 transition-all flex-shrink-0 ${
                isScrolled 
                  ? "text-foreground" 
                  : "text-white drop-shadow-lg"
              }`}
              aria-label="Toggle menu"
            >
              {!isMenuOpen ? (
                <>
                  {/* Top line */}
                  <span 
                    className={`block h-1 w-6 transition-all duration-300 ${
                      isScrolled ? "bg-foreground" : "bg-white"
                    }`}
                  />
                  {/* Middle line */}
                  <span 
                    className={`block h-1 w-6 transition-all duration-300 ${
                      isScrolled ? "bg-foreground" : "bg-white"
                    }`}
                  />
                  {/* Bottom line */}
                  <span 
                    className={`block h-1 w-6 transition-all duration-300 ${
                      isScrolled ? "bg-foreground" : "bg-white"
                    }`}
                  />
                </>
              ) : (
                <X className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Page Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className={`fixed inset-0 z-30 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 transition-opacity duration-300 opacity-100`}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Content */}
          <div
            className={`fixed inset-0 z-40 flex transition-all duration-500 ease-out`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Side - Menu Items */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-12 py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
              <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-12 text-white animate-fade-in`}>
                Menu
              </h2>
              <nav className="space-y-8">
                {navItems.map((item, index) => (
                  <Link key={item.href} href={item.href}>
                    <div
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-2xl md:text-3xl font-serif font-light text-white hover:text-primary transition-colors duration-200 cursor-pointer`}
                      style={{
                        animation: `slideInLeft 0.6s ease-out ${index * 0.1}s both`
                      }}
                    >
                      {item.label}
                    </div>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Right Side - Email Subscription */}
            <div className={`hidden md:flex w-1/2 flex-col justify-center items-center px-12 py-20 bg-foreground/10 backdrop-blur-sm`}
              style={{
                animation: `fadeIn 0.6s ease-out 0.2s both`
              }}
            >
              <div className="max-w-md">
                <h3 className={`text-3xl font-serif font-bold mb-4 text-white`}>
                  Stay Connected
                </h3>
                <p className={`text-lg mb-8 font-light text-white/80`}>
                  Subscribe to our newsletter for updates on events, articles, and initiatives.
                </p>
                
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email"
                    className={`w-full px-4 py-3 rounded-sm border-2 border-white/30 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-primary transition-colors font-serif`}
                  />
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm h-12 text-lg font-serif">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>

          <style>{`
            @keyframes slideInLeft {
              from {
                opacity: 0;
                transform: translateX(-30px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
          `}</style>
        </>
      )}
    </>
  );
}
