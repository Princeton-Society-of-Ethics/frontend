import DynamicNavigation from "@/components/DynamicNavigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mic } from "lucide-react";

type PodcastEpisode = {
  id: string;
  title: string;
  /** Optional guest or speaker line */
  guest?: string;
  date?: string;
  description: string;
  /** Path under site root, e.g. /audio/interviews/your-file.mp3 (file in client/public/audio/interviews/) */
  audioSrc?: string;
};

// Add an entry per episode after uploading MP3/M4A files to client/public/audio/interviews/
const episodes: PodcastEpisode[] = [
  // {
  //   id: "1",
  //   title: "Episode title",
  //   guest: "Dr. Name",
  //   date: "April 2026",
  //   description: "What this conversation covers.",
  //   audioSrc: "/audio/interviews/episode-01.mp3",
  // },
];

export default function InterviewSeriesPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <DynamicNavigation />

        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pb-24 pt-40 animate-fade-in">
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
            <div className="mb-6 flex items-center gap-3 text-primary stagger-item-1">
              <Mic className="h-10 w-10 shrink-0" aria-hidden />
              <span className="font-serif text-sm font-semibold uppercase tracking-[0.2em]">
                Podcast
              </span>
            </div>
            <h1 className="mb-3 font-serif text-5xl font-bold text-white md:text-6xl lg:text-7xl stagger-item-1">
              Interview <span className="text-primary">Series</span>
            </h1>
            <div className="mb-6 h-1 w-20 rounded-full bg-primary stagger-item-2" aria-hidden />
            <p className="max-w-2xl text-xl font-light text-white/80 stagger-item-2">
              Conversations with leading philosophers and ethicists—the ideas that define who we are
              and what we owe each other.
            </p>
          </div>
        </section>

        <section className="border-b border-border py-20 animate-fade-in-up">
          <div className="container max-w-3xl">
            {episodes.length === 0 ? (
              <div className="rounded-lg border border-dashed border-primary/30 bg-primary/[0.03] px-8 py-14 text-center">
                <Mic className="mx-auto mb-4 h-12 w-12 text-primary/60" aria-hidden />
                <p className="font-serif text-xl font-semibold text-foreground">Episodes on the way</p>
                <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                  Upload audio files to{" "}
                  <code className="rounded bg-muted px-1.5 py-0.5 text-sm">public/audio/interviews/</code>{" "}
                  and list each episode in this page&apos;s{" "}
                  <code className="rounded bg-muted px-1.5 py-0.5 text-sm">episodes</code> array.
                </p>
              </div>
            ) : (
              <ul className="space-y-12">
                {episodes.map((ep) => (
                  <li
                    key={ep.id}
                    className="border-l-4 border-primary bg-card/50 py-8 pl-8 pr-6 animate-fade-in-up"
                  >
                    <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                      {ep.title}
                    </h2>
                    {ep.guest ? (
                      <p className="mt-2 font-sans text-sm font-medium text-primary">{ep.guest}</p>
                    ) : null}
                    {ep.date ? (
                      <p className="mt-1 font-sans text-sm text-muted-foreground">{ep.date}</p>
                    ) : null}
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {ep.description}
                    </p>
                    {ep.audioSrc ? (
                      <audio
                        controls
                        preload="metadata"
                        className="mt-6 h-12 w-full max-w-xl rounded-sm"
                        src={ep.audioSrc}
                      >
                        Your browser does not support embedded audio.
                      </audio>
                    ) : (
                      <p className="mt-6 text-sm italic text-muted-foreground">Audio coming soon.</p>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}
