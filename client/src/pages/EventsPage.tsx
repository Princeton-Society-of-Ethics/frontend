import DynamicNavigation from "@/components/DynamicNavigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Ethics in Artificial Intelligence",
      date: "February 15, 2026",
      time: "7:00 PM - 8:30 PM",
      location: "McCosh Hall, Room 50",
      speaker: "Dr. Sarah Chen",
      description: "Exploring the ethical implications of AI development and deployment in society.",
      category: "Seminar"
    },
    {
      id: 2,
      title: "Justice and Climate Change",
      date: "February 22, 2026",
      time: "6:30 PM - 8:00 PM",
      location: "Jadwin Hall, Auditorium",
      speaker: "Prof. James Mitchell",
      description: "Discussing the intersection of environmental ethics and climate justice.",
      category: "Lecture"
    },
    {
      id: 3,
      title: "Philosophy Discussion Group",
      date: "February 28, 2026",
      time: "5:00 PM - 6:30 PM",
      location: "Firestone Library, Study Room 3",
      speaker: "Student-Led",
      description: "Open discussion on contemporary ethical issues affecting students today.",
      category: "Discussion"
    },
    {
      id: 4,
      title: "Encompass Magazine Release Party",
      date: "March 8, 2026",
      time: "7:00 PM - 9:00 PM",
      location: "Prospect House",
      speaker: "Editorial Board",
      description: "Celebrate the launch of our latest issue with readings and refreshments.",
      category: "Event"
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: "Virtue Ethics Workshop",
      date: "January 25, 2026",
      speaker: "Prof. Elizabeth Warren"
    },
    {
      id: 6,
      title: "Student Research Presentations",
      date: "January 18, 2026",
      speaker: "Society Members"
    },
    {
      id: 7,
      title: "New Year Philosophy Forum",
      date: "January 10, 2026",
      speaker: "Faculty Panel"
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
            Explore moments from our community gatherings, seminars, lectures, and collaborative projects.
          </p>
        </div>
      </section>

      {/* Photo Gallery Section - Masonry Layout */}
      <section className="py-32 bg-gradient-to-b from-background to-secondary/10 animate-fade-in-up">
        <div className="container">
          {/* Masonry Gallery Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-max">
            {/* Large featured image - spans 2 cols */}
            <div className="md:col-span-2 lg:col-span-2 group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 stagger-item-1">
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
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 stagger-item-2">
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
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 stagger-item-3">
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
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 stagger-item-4">
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
            <div className="md:col-span-1 lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 stagger-item-5">
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
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 stagger-item-6">
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

      {/* Upcoming Events Section */}
      <section className="py-24 bg-background border-t border-border animate-fade-in-up">
        <div className="container">
          <div className="mb-16">
            <span className="text-primary font-serif italic text-sm mb-4 block stagger-item-1">Coming Soon</span>
            <h2 className="font-serif text-5xl font-bold text-foreground stagger-item-2">
              Upcoming Events
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div 
                key={event.id}
                className={`bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 stagger-item-${index + 3}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-primary text-sm font-semibold">{event.category}</span>
                    <h3 className="font-serif text-2xl font-bold text-foreground mt-2">
                      {event.title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {event.description}
                </p>

                <div className="space-y-3 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-foreground">Date:</span>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-foreground">Time:</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-foreground">Location:</span>
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-foreground">Speaker:</span>
                    <span>{event.speaker}</span>
                  </div>
                </div>

                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm h-11 font-serif">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-24 bg-gradient-to-b from-secondary/10 to-background border-t border-border animate-fade-in-up">
        <div className="container">
          <div className="mb-16">
            <span className="text-primary font-serif italic text-sm mb-4 block stagger-item-1">Archive</span>
            <h2 className="font-serif text-5xl font-bold text-foreground stagger-item-2">
              Past Events
            </h2>
          </div>

          <div className="space-y-4">
            {pastEvents.map((event, index) => (
              <div 
                key={event.id}
                className={`bg-card border border-border rounded-lg p-6 hover:bg-muted transition-colors duration-300 stagger-item-${index + 3} flex items-center justify-between`}
              >
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <div className="flex gap-6 text-sm text-muted-foreground">
                    <span>{event.date}</span>
                    <span>Speaker: {event.speaker}</span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="rounded-sm"
                >
                  View Details
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Want to see more? Browse our complete event archive.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm px-8 h-11 font-serif">
              View All Past Events
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </PageTransition>
  );
}
