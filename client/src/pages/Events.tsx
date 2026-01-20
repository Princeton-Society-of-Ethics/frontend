import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";

export default function Events() {
  const upcomingEvents = [
    {
      title: "The Ethics of Artificial Intelligence",
      speaker: "Dr. Sarah Connor, MIT",
      date: "October 15, 2026",
      time: "4:30 PM - 6:00 PM",
      location: "McCosh Hall, Room 50",
      description: "A discussion on the alignment problem and the moral status of future digital minds.",
      type: "Lecture"
    },
    {
      title: "Bioethics Forum: Gene Editing",
      speaker: "Student Led Discussion",
      date: "October 20, 2026",
      time: "7:00 PM - 8:30 PM",
      location: "East Pyne, Room 211",
      description: "Weekly discussion group focusing on the implications of CRISPR technology in human embryos.",
      type: "Discussion"
    },
    {
      title: "Effective Altruism Workshop",
      speaker: "Princeton EA Chapter",
      date: "October 25, 2026",
      time: "2:00 PM - 5:00 PM",
      location: "Frist Campus Center",
      description: "A practical workshop on career planning for high-impact ethical careers.",
      type: "Workshop"
    }
  ];

  const pastEvents = [
    {
      title: "Climate Justice and Global Responsibility",
      speaker: "Prof. James Green",
      date: "September 28, 2026"
    },
    {
      title: "The Moral Limits of Markets",
      speaker: "Panel Discussion",
      date: "September 14, 2026"
    },
    {
      title: "Welcome Back Social",
      speaker: "PUSE Board",
      date: "September 5, 2026"
    }
  ];

  return (
    <Layout>
      <div className="bg-secondary/30 py-20">
        <div className="container">
          <h1 className="font-serif text-5xl font-bold mb-6 text-foreground">Events</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Join us for lectures, workshops, and discussions on the most pressing ethical issues of our time.
          </p>
        </div>
      </div>

      <div className="container py-20">
        <h2 className="font-serif text-3xl font-bold mb-10 text-foreground border-b pb-4">Upcoming Events</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="flex flex-col h-full border-none shadow-md hover:shadow-xl transition-all duration-300 bg-background group">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="inline-block px-3 py-1 border border-primary/30 rounded-full bg-primary/5">
                    <span className="text-primary text-xs font-bold tracking-wider uppercase">{event.type}</span>
                  </div>
                  <div className="text-center bg-secondary p-2 rounded-sm min-w-[60px]">
                    <span className="block text-xs font-bold uppercase text-muted-foreground">{event.date.split(' ')[0]}</span>
                    <span className="block text-xl font-serif font-bold text-foreground">{event.date.split(' ')[1].replace(',', '')}</span>
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold leading-tight group-hover:text-primary transition-colors">{event.title}</h3>
                <p className="text-muted-foreground font-medium mt-2">{event.speaker}</p>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
                <div className="space-y-2 text-sm text-muted-foreground/80 pt-2 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-4 pb-6">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  RSVP Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <h2 className="font-serif text-3xl font-bold mb-10 text-foreground border-b pb-4">Past Events</h2>
        <div className="space-y-4">
          {pastEvents.map((event, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-secondary/20 rounded-sm hover:bg-secondary/40 transition-colors">
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground">{event.title}</h3>
                <p className="text-muted-foreground">{event.speaker}</p>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                <Calendar className="h-4 w-4" />
                <span>{event.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
