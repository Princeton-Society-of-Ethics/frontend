import { Button } from "@/components/ui/button";
import DynamicNavigation from "@/components/DynamicNavigation";
import Footer from "@/components/Footer";

export default function AboutPage() {


  return (
    <div className="min-h-screen bg-background">
      <DynamicNavigation />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-fade-in">
        <div className="container">
          <h1 className="font-serif text-6xl md:text-7xl font-bold text-white mb-6 stagger-item-1">
            Our Story
          </h1>
          <p className="text-xl text-white/80 max-w-2xl font-light stagger-item-2">
            Since 2004, the Princeton Undergraduate Society of Ethics has been a beacon for rigorous moral inquiry and intellectual discourse on campus.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background animate-fade-in-up">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <span className="text-primary font-serif italic text-sm mb-4 block stagger-item-1">Our Mission</span>
            <h2 className="font-serif text-5xl font-bold text-foreground mb-8 stagger-item-2">
              Fostering Ethical Leadership
            </h2>
          </div>
          
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p className="stagger-item-3">
              The Princeton Undergraduate Society of Ethics exists to cultivate a community of students committed to serious ethical inquiry. We believe that the most pressing challenges of our time—from artificial intelligence to climate change, from social justice to global inequality—are fundamentally ethical in nature.
            </p>
            <p className="stagger-item-4">
              Our organization brings together students from across the university, regardless of major or background, to engage in rigorous philosophical debate, attend lectures by leading ethicists, and collaborate on projects that apply ethical frameworks to real-world problems.
            </p>
            <p className="stagger-item-5">
              We are dedicated to creating a space where difficult questions are asked without fear, where diverse perspectives are honored, and where students develop the moral reasoning skills necessary to lead with integrity in an increasingly complex world.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-secondary/20 border-t border-border animate-fade-in-up">
        <div className="container max-w-4xl">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 stagger-item-1">
            A Brief History
          </h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-primary pl-6 py-4 stagger-item-2">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">2004</h3>
              <p className="text-muted-foreground">
                Founded by a group of philosophy majors who recognized the need for a dedicated space for ethical discourse on campus.
              </p>
            </div>
            
            <div className="border-l-4 border-primary pl-6 py-4 stagger-item-3">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">2010</h3>
              <p className="text-muted-foreground">
                Launched our flagship publication, Encompass, to showcase student writing on ethical topics.
              </p>
            </div>
            
            <div className="border-l-4 border-primary pl-6 py-4 stagger-item-4">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">2015</h3>
              <p className="text-muted-foreground">
                Established our annual Speaker Series, bringing renowned ethicists and philosophers to campus.
              </p>
            </div>
            
            <div className="border-l-4 border-primary pl-6 py-4 stagger-item-5">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">2024</h3>
              <p className="text-muted-foreground">
                Celebrated 20 years of ethical inquiry with over 300 active members and a thriving community of student leaders.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Values Section */}
      <section className="py-24 bg-secondary/20 border-t border-border animate-fade-in-up">
        <div className="container max-w-4xl">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 stagger-item-1">
            Our Core Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="stagger-item-2">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Intellectual Rigor
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We approach ethical questions with the seriousness and depth they deserve, drawing on philosophical traditions and contemporary scholarship.
              </p>
            </div>
            
            <div className="stagger-item-3">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Inclusive Dialogue
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We welcome diverse perspectives and backgrounds, believing that ethical inquiry is strengthened by a multiplicity of voices.
              </p>
            </div>
            
            <div className="stagger-item-4">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Practical Application
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We don't just theorize—we work to apply ethical frameworks to real-world challenges and contribute to positive change.
              </p>
            </div>
            
            <div className="stagger-item-5">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Community Building
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We foster a supportive community where students feel empowered to explore difficult questions and grow as moral thinkers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
