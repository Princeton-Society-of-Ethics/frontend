import type { ReactNode } from "react";
import { Link } from "wouter";
import { ArrowRight, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import DynamicNavigation from "@/components/DynamicNavigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

type StudentMember = {
  name: string;
  role: string;
  /** Omit or null for TBD / no public profile yet */
  linkedinUrl?: string | null;
  imageSrc?: string;
  imageAlt?: string;
};

function memberInitial(name: string) {
  if (name === "TBD") return "?";
  const withoutTitle = name.replace(/^Professor\s+/i, "");
  return withoutTitle.charAt(0);
}

function StudentTeamCard({ member }: { member: StudentMember }) {
  const showLinkedIn =
    member.linkedinUrl != null &&
    member.linkedinUrl !== "" &&
    member.name !== "TBD" &&
    !/^professor\s+/i.test(member.name);

  return (
    <div className="group flex w-[168px] flex-col items-center text-center sm:w-[188px]">
      <div className="relative mb-5 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-2 border-primary/25 bg-muted transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10 group-hover:shadow-[0_0_24px_-4px] group-hover:shadow-primary/35 sm:h-36 sm:w-36">
        {member.imageSrc ? (
          <img
            src={member.imageSrc}
            alt={member.imageAlt ?? `Photo of ${member.name}`}
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className="font-sans text-4xl font-semibold text-muted-foreground/85 transition-colors duration-300 group-hover:text-primary sm:text-5xl">
            {memberInitial(member.name)}
          </span>
        )}
      </div>
      <h3 className="font-sans text-base font-bold leading-snug text-foreground transition-colors duration-300 group-hover:text-primary">
        {member.name}
      </h3>
      <p className="mt-1.5 font-sans text-sm leading-snug text-muted-foreground transition-colors duration-300 group-hover:text-primary/75">
        {member.role}
      </p>
      {showLinkedIn ? (
        <a
          href={member.linkedinUrl!}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 font-sans text-sm font-medium text-primary opacity-50 transition-opacity group-hover:opacity-80 hover:opacity-100"
        >
          <Linkedin className="h-4 w-4 shrink-0" aria-hidden />
          <span>LinkedIn</span>
          <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
        </a>
      ) : null}
    </div>
  );
}

function TeamSection({
  eyebrow,
  title,
  description,
  tintedBg,
  children
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Warm orange wash behind the section */
  tintedBg?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      className={`border-b border-primary/10 py-20 last:border-b-0 ${tintedBg ? "bg-primary/[0.045]" : ""}`}
    >
      <div className="container max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          {eyebrow ? (
            <span className="mb-3 block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {title}
          </h2>
          <div
            className="mx-auto mt-5 h-1 w-14 rounded-full bg-primary/80"
            aria-hidden
          />
          {description ? (
            <p className="mt-5 font-sans text-base font-light leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export default function TeamPage() {
  const advisors = [
    {
      name: "Professor Peter Singer",
      role: "Advisor",
      imageSrc: "/images/advisors/peter-singer.png",
      imageAlt: "Portrait of Professor Peter Singer"
    },
    {
      name: "Professor Gideon A. Rosen",
      role: "Advisor",
      imageSrc: "/images/advisors/gideon-rosen.png",
      imageAlt: "Portrait of Professor Gideon A. Rosen"
    }
  ];

  // Replace each linkedinUrl with the member's public profile when you have it.
  const executiveBoard: StudentMember[] = [
    {
      name: "Joel Ibabao",
      role: "President",
      linkedinUrl: "https://www.linkedin.com/in/joel-ibabao",
      imageSrc: "/images/team/joel-ibabao.png",
      imageAlt: "Portrait of Joel Ibabao"
    },
    {
      name: "Sabrina Wang",
      role: "Print Manager",
      linkedinUrl: "https://www.linkedin.com/in/sabrina-wang",
      imageSrc: "/images/team/sabrina-wang.png",
      imageAlt: "Portrait of Sabrina Wang"
    },
    { name: "James Han", role: "Chief Marketing Officer", linkedinUrl: "https://www.linkedin.com/in/james-han" },
    { name: "Jianyi", role: "Treasurer", linkedinUrl: "https://www.linkedin.com/in/jianyi" },
    { name: "Ethan Grover", role: "Community Officer", linkedinUrl: "https://www.linkedin.com/in/ethan-grover" },
    {
      name: "Maribel Crespo",
      role: "Technology Director",
      linkedinUrl: "https://www.linkedin.com/in/maribel-crespo-134a33284/",
      imageSrc: "/images/team/maribel-crespo.png",
      imageAlt: "Portrait of Maribel Crespo"
    },
    {
      name: "Hallie Graham",
      role: "Strategic Outreach Officer",
      linkedinUrl: "https://www.linkedin.com/in/hallie-graham27/",
      imageSrc: "/images/team/hallie-graham.png",
      imageAlt: "Portrait of Hallie Graham"
    }
  ];

  const ethicsBowl: StudentMember[] = [
    {
      name: "Navneeth Gurachar",
      role: "Captain of Team 1",
      linkedinUrl: "https://www.linkedin.com/in/navneeth-gurachar",
      imageSrc: "/images/team/navneeth-gurachar.png",
      imageAlt: "Portrait of Navneeth Gurachar"
    },
    { name: "Quest Starkey", role: "Captain of Team 2", linkedinUrl: "https://www.linkedin.com/in/quest-starkey" },
    { name: "Matthew Newman", role: "Coach", linkedinUrl: "https://www.linkedin.com/in/matthew-newman" }
  ];

  const ethicsOlympiad: StudentMember[] = [
    { name: "Tenzin Namgyal", role: "Coach", linkedinUrl: "https://www.linkedin.com/in/tenzin-namgyal" },
    { name: "Patrick Jimenez", role: "Coach", linkedinUrl: "https://www.linkedin.com/in/patrick-jimenez" },
    { name: "Professor Alexandra Oprea", role: "Consultant", linkedinUrl: null }
  ];

  const telos: StudentMember[] = [
    { name: "Jacqueline Zhou", role: "Editor-in-Chief", linkedinUrl: "https://www.linkedin.com/in/jacqueline-zhou" },
    { name: "Doris Lee", role: "Creative Director", linkedinUrl: "https://www.linkedin.com/in/doris-lee" }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background font-sans">
        <DynamicNavigation />

        <section className="relative overflow-hidden pt-40 pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-fade-in">
          <div
            className="pointer-events-none absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl"
            aria-hidden
          />
          <div className="container relative">
            <h1 className="font-serif text-6xl md:text-7xl font-bold text-white mb-3 stagger-item-1">
              Our <span className="text-primary">Team</span>
            </h1>
            <div className="mb-6 h-1 w-20 rounded-full bg-primary stagger-item-2" aria-hidden />
            <p className="text-xl text-white/80 max-w-2xl font-light stagger-item-2">
              Meet the dedicated students and faculty who make the Princeton Undergraduate Society of
              Ethics possible.
            </p>
          </div>
        </section>

        <main>
          <TeamSection
            eyebrow="Faculty"
            title="Advisors"
            description="Our work is guided by distinguished scholars in ethics and philosophy."
          >
            <div className="flex flex-wrap justify-center gap-14 md:gap-20">
              {advisors.map((member, index) => (
                <div
                  key={`${member.name}-${index}`}
                  className="group flex max-w-[260px] flex-col items-center text-center"
                >
                  <div className="mb-6 h-44 w-44 overflow-hidden rounded-full border-2 border-primary/30 bg-muted shadow-sm transition-all duration-300 group-hover:border-primary group-hover:shadow-[0_0_28px_-6px] group-hover:shadow-primary/40">
                    <img
                      src={member.imageSrc}
                      alt={member.imageAlt}
                      className="h-full w-full object-cover object-center"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="font-sans text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {member.name}
                  </h3>
                  <p className="mt-1.5 font-sans text-sm text-muted-foreground transition-colors duration-300 group-hover:text-primary/75">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </TeamSection>

          <TeamSection eyebrow="Leadership" title="Executive board" tintedBg>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-14 sm:gap-x-14">
              {executiveBoard.map((member, index) => (
                <StudentTeamCard key={`${member.name}-${member.role}-${index}`} member={member} />
              ))}
            </div>
          </TeamSection>

          <TeamSection eyebrow="Competition" title="Ethics Bowl">
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-14 sm:gap-x-14">
              {ethicsBowl.map((member, index) => (
                <StudentTeamCard key={`${member.name}-${index}`} member={member} />
              ))}
            </div>
          </TeamSection>

          <TeamSection eyebrow="Competition" title="Ethics Olympiad" tintedBg>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-14 sm:gap-x-14">
              {ethicsOlympiad.map((member, index) => (
                <StudentTeamCard key={`${member.name}-${index}`} member={member} />
              ))}
            </div>
          </TeamSection>

          <TeamSection eyebrow="Publication" title="Telos Magazine">
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-14 sm:gap-x-14">
              {telos.map((member, index) => (
                <StudentTeamCard key={`${member.name}-${index}`} member={member} />
              ))}
            </div>
          </TeamSection>

          <section className="relative overflow-hidden border-t-4 border-primary bg-primary py-24 text-primary-foreground animate-fade-in-up">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden opacity-10">
              <div className="absolute -left-[10%] -top-[50%] h-[200%] w-[50%] origin-center rotate-12 bg-white" />
            </div>
            <div className="container relative z-10">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="mb-6 font-serif text-4xl font-bold text-primary-foreground md:text-5xl stagger-item-1">
                  Interested in Leadership?
                </h2>
                <p className="mb-8 text-lg leading-relaxed text-primary-foreground/90 stagger-item-2">
                  Leadership applications open twice a year—in the fall and spring. Whether you care
                  about events, publications, outreach, or operations, there&apos;s a place to lead
                  in our community.
                </p>
                <Link href="/join">
                  <Button className="h-12 rounded-sm bg-background px-8 font-serif text-lg text-primary hover:bg-background/90 stagger-item-3">
                    Learn More About Joining
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
}
