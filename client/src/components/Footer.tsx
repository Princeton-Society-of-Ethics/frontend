import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 mt-auto">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <img 
              src="/images/logo.png" 
              alt="Princeton Ethics Society Logo" 
              className="h-12 w-12 object-contain brightness-0 invert"
            />
            <div className="flex flex-col">
              <span className="font-serif text-lg font-semibold leading-none tracking-tight">
                Princeton Undergraduate
              </span>
              <span className="font-serif text-lg font-light leading-none tracking-wide opacity-80">
                Society of Ethics
              </span>
            </div>
          </div>
          <p className="text-background/70 max-w-md font-light leading-relaxed">
            Fostering rigorous ethical inquiry and moral reflection within the Princeton community. 
            We seek to cultivate a space where students can wrestle with life's most important questions.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-lg font-semibold mb-6 text-primary">Connect</h3>
          <ul className="space-y-4">
            <li>
              <Link href="/contact" className="text-background/70 hover:text-primary transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/subscribe" className="text-background/70 hover:text-primary transition-colors">
                Subscribe to Newsletter
              </Link>
            </li>
            <li>
              <a href="https://www.instagram.com/princetonethics" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-primary transition-colors">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg font-semibold mb-6 text-primary">Resources</h3>
          <ul className="space-y-4">
            <li>
              <Link href="/journal" className="text-background/70 hover:text-primary transition-colors">
                The Journal
              </Link>
            </li>
            <li>
              <Link href="/fellowships" className="text-background/70 hover:text-primary transition-colors">
                Fellowships
              </Link>
            </li>
            <li>
              <a href="https://ethics.princeton.edu" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-primary transition-colors">
                University Center for Human Values
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center text-sm text-background/50">
        <p>&copy; {new Date().getFullYear()} Princeton Undergraduate Society of Ethics. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed with intellectual gravity.</p>
      </div>
    </footer>
  );
}
