import DynamicNavigation from "@/components/DynamicNavigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function InitiativeMomentsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <DynamicNavigation />

        <section className="relative overflow-hidden pt-40 pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-fade-in">
          <div
            className="pointer-events-none absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl"
            aria-hidden
          />
          <div className="container relative">
            <Link href="/initiatives">
              <Button
                variant="ghost"
                className="mb-8 -ml-3 pl-3 text-white/90 hover:bg-white/10 hover:text-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden />
                Back to initiatives
              </Button>
            </Link>
            <h1 className="mb-3 font-serif text-5xl font-bold text-white md:text-6xl lg:text-7xl stagger-item-1">
              Moments from <span className="text-primary">our initiatives</span>
            </h1>
            <div className="mb-6 h-1 w-20 rounded-full bg-primary stagger-item-2" aria-hidden />
            <p className="max-w-2xl text-xl font-light text-white/80 stagger-item-2">
              Highlights from the 3rd Annual NJ Regional High School Ethics Bowl at Princeton and our
              broader ethics programming.
            </p>
          </div>
        </section>

        <section className="border-b border-border py-32 animate-fade-in-up">
          <div className="container">
            <div className="mb-16">
              <span className="mb-4 block font-serif text-sm italic text-primary stagger-item-1">
                3rd Annual NJ Regional High School Ethics Bowl
              </span>
              <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl stagger-item-2">
                Photo gallery
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-[24rem_24rem_24rem]">
              <div className="stagger-item-3 group relative min-h-64 overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl md:col-span-2 lg:col-span-2 lg:min-h-0">
                <img
                  src="/images/ethics-bowl-5.png"
                  alt="3rd Annual NJ High School Ethics Bowl"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="stagger-item-4 group relative min-h-64 overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl lg:min-h-0">
                <img
                  src="/images/ethics-bowl-2.png"
                  alt="Ethics Bowl presentation"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="stagger-item-5 group relative min-h-64 overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl lg:min-h-0">
                <img
                  src="/images/ethics-bowl-4.png"
                  alt="Team strategy session"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="stagger-item-6 group relative min-h-48 overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl lg:min-h-0">
                <img
                  src="/images/ethics-bowl-3.png"
                  alt="Team discussion"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="stagger-item-7 group relative min-h-64 overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl md:col-span-1 lg:col-span-2 lg:row-span-2 lg:min-h-0">
                <img
                  src="/images/ethics-bowl-1.png"
                  alt="Team collaboration at Ethics Bowl"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="stagger-item-8 group relative min-h-48 overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl lg:min-h-0">
                <img
                  src="/images/ethics-bowl-6.png"
                  alt="Students in discussion"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="stagger-item-8 group relative min-h-48 overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl lg:min-h-0">
                <img
                  src="/images/ethics-bowl-7.png"
                  alt="Team at work with supervisor"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="stagger-item-8 group relative min-h-56 overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl md:col-span-2 lg:min-h-0">
                <img
                  src="/images/ethics-bowl-8.png"
                  alt="Community gathering at Ethics Bowl"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-t-4 border-primary bg-primary py-24 text-primary-foreground animate-fade-in-up">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden opacity-10">
            <div className="absolute -left-[10%] -top-[50%] h-[200%] w-[50%] origin-center rotate-12 bg-white" />
          </div>
          <div className="container relative z-10 text-center">
            <Link href="/initiatives">
              <Button className="h-12 rounded-sm bg-background px-8 font-serif text-lg text-primary hover:bg-background/90">
                Return to all initiatives
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}
