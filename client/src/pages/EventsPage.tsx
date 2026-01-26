import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import DynamicNavigation from "@/components/DynamicNavigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function EventsPage() {
  const mainEvents = [
    {
      id: 1,
      title: "Annual Speaker Series",
      season: "Fall Semester",
      description: "Our flagship event featuring renowned ethicists, philosophers, and thought leaders discussing pressing moral issues of our time. Students have the opportunity to engage directly with speakers through Q&A sessions and informal discussions.",
      highlights: [
        "Guest lectures from leading academics",
        "Interactive Q&A sessions",
        "Networking opportunities",
        "Free refreshments"
      ]
    },
    {
      id: 2,
      title: "Encompass Magazine Launch",
      season: "Spring Semester",
      description: "Celebrate the publication of our annual ethics journal featuring student writing, research, and artistic contributions. This event showcases the intellectual work of our community and provides a platform for student voices on ethical topics.",
      highlights: [
        "Student reading selections",
        "Editorial board presentations",
        "Networking with contributors",
        "Magazine distribution"
      ]
    },
    {
      id: 3,
      title: "Philosophy Symposium",
      season: "Spring Semester",
      description: "A full-day symposium bringing together students, faculty, and external scholars for in-depth discussions on ethics, philosophy, and their real-world applications. Features panel discussions, workshops, and collaborative problem-solving sessions.",
      highlights: [
        "Multi-panel discussions",
        "Student research presentations",
        "Faculty workshops",
        "Collaborative projects showcase"
      ]
    }
  ];

  return (
    <PageTransition>
    <div className="min-h-screen bg-background">
      <DynamicNavigation />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-fade-in">
        <div className="container">
          <h1 className="font-serif text-6xl md:text-7xl font-bold text-white mb-6 stagger-item-1">
            Our Events
          </h1>
          <p className="text-xl text-white/80 max-w-2xl font-light stagger-item-2">
            Throughout the year, we host three major events that bring our community together to explore ethics, share ideas, and celebrate student scholarship.
          </p>
        </div>
      </section>

      {/* Main Events Section */}
      <section className="py-24 bg-background border-b border-border animate-fade-in-up">
        <div className="container">
          <div className="mb-16">
            <span className="text-primary font-serif italic text-sm mb-4 block stagger-item-1">Annual Events</span>
            <h2 className="font-serif text-5xl font-bold text-foreground stagger-item-2">
              Our Three Pillars
            </h2>
          </div>

          <div className="space-y-16">
            {mainEvents.map((event, index) => (
              <div 
                key={event.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:grid-cols-2 md:[&>*:nth-child(1)]:order-2 md:[&>*:nth-child(2)]:order-1" : ""
                } stagger-item-${index + 3}`}
              >
                {/* Content */}
                <div>
                  <span className="text-primary text-sm font-semibold tracking-wide">{event.season}</span>
                  <h3 className="font-serif text-4xl font-bold text-foreground mt-3 mb-6">
                    {event.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {event.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold text-foreground mb-4">Event Highlights</h4>
                    <ul className="space-y-3">
                      {event.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className="text-primary font-bold mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm px-8 h-11 font-serif">
                    Learn More
                  </Button>
                </div>

                {/* Visual Element */}
                <div className="relative h-80 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg border border-primary/20 flex items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-6xl mb-4 font-serif font-bold text-primary/40">
                      {event.id}
                    </div>
                    <p className="text-foreground/60 font-medium">{event.season}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section - Masonry Layout */}
      <section className="py-32 bg-gradient-to-b from-background to-secondary/10 border-b border-border animate-fade-in-up">
        <div className="container">
          <div className="mb-16">
            <span className="text-primary font-serif italic text-sm mb-4 block stagger-item-1">Community Moments</span>
            <h2 className="font-serif text-5xl font-bold text-foreground stagger-item-2">
              Moments from Our Events
            </h2>
          </div>

          {/* Masonry Gallery Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-max">
            {/* Large featured image - spans 2 cols */}
            <div className="md:col-span-2 lg:col-span-2 group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 stagger-item-3">
              <img 
                src="/images/gallery-1.jpg" 
                alt="Discussion Seminar" 
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-serif text-lg font-bold">Discussion Seminar</p>
              </div>
            </div>
            
            {/* Medium image */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 stagger-item-4">
              <img 
                src="/images/gallery-2.jpg" 
                alt="Speaker Series" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-serif text-sm font-bold">Speaker Series</p>
              </div>
            </div>
            
            {/* Medium image */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 stagger-item-5">
              <img 
                src="/images/gallery-3.jpg" 
                alt="Research Collaboration" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-serif text-sm font-bold">Research</p>
              </div>
            </div>
            
            {/* Small image */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 stagger-item-6">
              <img 
                src="/images/gallery-4.jpg" 
                alt="Community Event" 
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-serif text-xs font-bold">Community</p>
              </div>
            </div>
            
            {/* Large featured image - spans 2 rows */}
            <div className="md:col-span-1 lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 stagger-item-7">
              <img 
                src="/images/gallery-5.jpg" 
                alt="Publication Work" 
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-serif text-lg font-bold">Encompass Magazine</p>
              </div>
            </div>
            
            {/* Small image */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 stagger-item-8">
              <img 
                src="/images/gallery-3.jpg" 
                alt="Mentorship" 
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-serif text-xs font-bold">Mentorship</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden border-t-4 border-primary animate-fade-in-up">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-[50%] -left-[10%] w-[50%] h-[200%] bg-white rotate-12 transform origin-center"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary-foreground stagger-item-1">
              Don't Miss Out on Our Events
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed stagger-item-2">
              Join our community to stay updated on all upcoming events, seminars, and celebrations. Be part of the conversation that shapes ethical thinking at Princeton.
            </p>
            <Link href="/join">
              <Button className="bg-background text-primary hover:bg-background/90 px-8 h-12 text-lg font-serif rounded-sm stagger-item-3">
                Join Our Community
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </PageTransition>
  );
}
