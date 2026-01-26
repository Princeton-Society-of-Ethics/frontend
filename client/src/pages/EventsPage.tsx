import DynamicNavigation from "@/components/DynamicNavigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function EventsPage() {
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

      <Footer />
    </div>
    </PageTransition>
  );
}
