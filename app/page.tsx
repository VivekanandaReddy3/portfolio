import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/articles';
import { ScrollReveal } from './components/scroll-reveal';

const projects: {
  href?: string;
  title: string;
  description: string;
  image: string;
}[] = [
  {
    title: 'Gründbar',
    href: 'https://gruendbar.vivekreddy.de',
    description:
      'A startup idea directory — pitch in markdown, collect upvotes, find teammates. Next.js, Sanity, GitHub OAuth.',
    image: '/gruendbar.png',
  },
  {
    title: 'Stromlinie',
    href: 'https://stromlinie.vivekreddy.de',
    description:
      'Germany’s power grid, live — generation mix, day-ahead prices and renewable share from open data.',
    image: '/stromlinie.png',
  },
  {
    title: 'Fließband',
    href: 'https://fliessband.vivekreddy.de',
    description:
      'A data pipeline that monitors itself — GitHub Actions cron, SQLite-in-git, quality checks, freshness SLO.',
    image: '/fliessband.png',
  },
  {
    title: 'Klartext',
    href: 'https://klartext.vivekreddy.de',
    description:
      'OCR that never uploads your document — Tesseract WASM in the browser with a visible preprocessing pipeline.',
    image: '/klartext.png',
  },
];

const experience: {
  company: string;
  monogram: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
  tags: string[];
}[] = [
  {
    company: '1&1 Mail & Media',
    monogram: '1&1',
    role: 'Working Student — DevOps & Cloud Automation',
    location: 'Karlsruhe, Germany',
    period: 'Sep 2025 — Present',
    current: true,
    summary:
      'Automating cloud infrastructure and deployment workflows at one of Germany’s largest email providers.',
    tags: ['DevOps', 'Cloud', 'Automation'],
  },
  {
    company: 'SNT School',
    monogram: 'SNT',
    role: 'Freelance Software Development Engineer',
    location: 'Hyderabad, India',
    period: 'Mar 2024 — Oct 2024',
    summary:
      'Built a cross-platform school app with role-based access for parents, teachers and admins — React Native on the front, Node.js with Prisma and MySQL on AWS behind it.',
    tags: ['React Native', 'Node.js', 'AWS'],
  },
  {
    company: 'Sashi Infotech',
    monogram: 'SI',
    role: 'Software & Data Intern',
    location: 'Hyderabad, India',
    period: 'May 2023 — Mar 2024',
    summary:
      'Worked across frontend and backend of web applications and built automated data pipelines in Snowflake.',
    tags: ['Snowflake', 'SQL', 'Git'],
  },
  {
    company: 'Malla Reddy University',
    monogram: 'MRU',
    role: 'President, Technical Club',
    location: 'Hyderabad, India',
    period: '2022 — 2024',
    summary:
      'First president of the Technical Club — ran 30+ events including hackathons and coding contests, with a record 86% student participation.',
    tags: ['Leadership'],
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 font-mono text-[11px] tracking-[0.2em] text-slate-400 uppercase">
      {children}
    </p>
  );
}

function ExperienceEntry({
  job,
  isLast,
}: {
  job: (typeof experience)[number];
  isLast: boolean;
}) {
  return (
    <article className="relative flex gap-5">
      {!isLast && (
        <span
          aria-hidden
          className="absolute top-14 bottom-0 left-6 w-px bg-slate-200"
        />
      )}

      <div
        className={
          job.current
            ? 'flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-950 font-mono text-xs font-semibold text-white shadow-card'
            : 'flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white font-mono text-xs font-semibold text-slate-600 shadow-card'
        }
      >
        {job.monogram}
      </div>

      <div className={isLast ? 'min-w-0' : 'min-w-0 pb-12'}>
        <p className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-400">
          {job.period}
          {job.current && (
            <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] tracking-wider text-emerald-700 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Current
            </span>
          )}
        </p>
        <h3 className="mt-1.5 text-lg font-semibold tracking-tight text-slate-950">
          {job.role}
        </h3>
        <p className="text-base text-slate-500">
          {job.company} · {job.location}
        </p>
        <p className="mt-2 max-w-prose text-base leading-relaxed text-slate-600">
          {job.summary}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 px-2.5 py-0.5 font-mono text-[11px] text-slate-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function ProjectCard({
  project,
  index,
  priority,
}: {
  project: (typeof projects)[number];
  index: number;
  priority?: boolean;
}) {
  const cardContent = (
    <>
      <div className="flex aspect-video flex-col overflow-hidden rounded-lg border border-slate-200/80 bg-white">
        <div className="flex h-6 shrink-0 items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-2.5">
          <span className="h-2 w-2 rounded-full bg-slate-200" />
          <span className="h-2 w-2 rounded-full bg-slate-200" />
          <span className="h-2 w-2 rounded-full bg-slate-200" />
          <span className="ml-2 hidden truncate font-mono text-[9px] text-slate-300 sm:block">
            {project.href ? new URL(project.href).hostname : ''}
          </span>
        </div>
        <div className="relative flex-1 bg-slate-200">
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            sizes="(min-width: 640px) 28rem, 100vw"
            quality={90}
            priority={priority}
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        </div>
      </div>
      <div className="flex items-baseline justify-between px-1 pt-4">
        <h3 className="text-lg font-semibold tracking-tight text-slate-800">
          {project.title}
          {project.href && (
            <span className="ml-1 inline-block text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:text-slate-600">
              ↗
            </span>
          )}
        </h3>
        <span className="font-mono text-[11px] text-slate-400">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <p className="px-1 pb-1 text-base text-slate-500">
        {project.description}
      </p>
    </>
  );

  const cardClassName =
    'group flex h-full flex-col rounded-2xl bg-slate-100 p-3 shadow-card transition-all duration-300 hover:-translate-y-1 hover:bg-slate-50 hover:shadow-card-hover';

  return project.href ? (
    <Link
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cardClassName}
    >
      {cardContent}
    </Link>
  ) : (
    <div className={cardClassName}>{cardContent}</div>
  );
}

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));

export default async function Page() {
  const latestPosts = (await getAllPosts({})).slice(0, 2);

  return (
    <>
      <section className="container-page">
        <p
          className="reveal mb-6 flex items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] text-slate-500 uppercase"
          style={{ '--stagger': 0 } as React.CSSProperties}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          DevOps &amp; Cloud @ 1&amp;1 Mail &amp; Media
        </p>

        <h1
          className="reveal mb-5 text-5xl font-medium tracking-tight text-slate-950 md:text-6xl"
          style={{ '--stagger': 1 } as React.CSSProperties}
        >
          Hallo, I’m Vivek.
          <span className="mt-3 block font-serif text-2xl font-normal tracking-normal text-slate-500 italic md:text-3xl">
            a web &amp; data science student in Germany.
          </span>
        </h1>

        <p
          className="reveal mb-4 max-w-prose text-lg leading-relaxed text-slate-700 md:text-xl"
          style={{ '--stagger': 2 } as React.CSSProperties}
        >
          Driven by data, I want to build solutions that matter. I’ve worked on
          a wide range of projects — some I’ve contributed to, others I’ve led.
          Now, as I pursue a Masters, I’m looking to translate my learning into
          real world impact.
        </p>

        <div
          className="reveal flex"
          style={{ '--stagger': 3 } as React.CSSProperties}
        >
          <Link
            href="/info"
            className="group mt-4 rounded-full bg-slate-950 px-8 py-3 font-mono text-xs font-light text-white transition-all duration-300 hover:bg-slate-800 hover:shadow-card-hover"
          >
            More Information{' '}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>

        <div
          className="reveal my-14 h-px bg-slate-200"
          style={{ '--stagger': 4 } as React.CSSProperties}
        />
      </section>

      <section className="container-page">
        <ScrollReveal>
          <SectionLabel>01 — Experience</SectionLabel>
          <h2 className="mb-2 text-2xl font-medium tracking-tight text-slate-950">
            Where I’ve worked
          </h2>
          <p className="text-lg font-light text-slate-600">
            From freelance builds to DevOps in Karlsruhe.
          </p>
        </ScrollReveal>

        <div className="mt-10">
          {experience.map((job, i) => (
            <ScrollReveal key={job.company} delay={i * 80}>
              <ExperienceEntry job={job} isLast={i === experience.length - 1} />
            </ScrollReveal>
          ))}
        </div>

        <div className="my-14 h-px bg-slate-200" />
      </section>

      <section>
        <ScrollReveal className="container-page">
          <SectionLabel>02 — Selected Projects</SectionLabel>
          <h2 className="mb-2 text-2xl font-medium tracking-tight text-slate-950">
            Things I’ve built
          </h2>
          <p className="text-lg font-light text-slate-600">
            A selection of projects that I’ve worked on.
          </p>
        </ScrollReveal>

        <div className="container-wide grid grid-cols-1 gap-6 pt-10 md:grid-cols-2">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={(i % 2) * 100}>
              <ProjectCard project={project} index={i} priority={i < 2} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="container-page mt-8 flex">
          <Link
            href="https://github.com/VivekanandaReddy3?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full bg-slate-950 px-8 py-3 font-mono text-xs font-light text-white transition-all duration-300 hover:bg-slate-800 hover:shadow-card-hover"
          >
            More Projects{' '}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </ScrollReveal>
      </section>

      {latestPosts.length > 0 && (
        <section className="container-page mt-20">
          <ScrollReveal>
            <SectionLabel>03 — Writing</SectionLabel>
            <h2 className="mb-2 text-2xl font-medium tracking-tight text-slate-950">
              Recent notes
            </h2>
          </ScrollReveal>

          <div className="mt-4 flex flex-col">
            {latestPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 100}>
                <Link
                  href={post.href}
                  className="group -mx-4 flex flex-col gap-1 rounded-xl px-4 py-5 transition-colors duration-300 hover:bg-slate-100"
                >
                  <time
                    dateTime={post.date}
                    className="font-mono text-xs text-slate-400"
                  >
                    {formatDate(post.date)}
                  </time>
                  <h3 className="text-lg font-medium tracking-tight text-slate-950">
                    {post.meta.title}
                    <span className="ml-2 inline-block text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-slate-600">
                      →
                    </span>
                  </h3>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-4">
            <Link
              href="/posts"
              className="link-underline font-mono text-xs text-slate-500 transition-colors hover:text-slate-950"
            >
              All posts →
            </Link>
          </ScrollReveal>
        </section>
      )}
    </>
  );
}
