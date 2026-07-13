import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts, getReadingTime } from '@/lib/articles';
import { ScrollReveal } from './components/scroll-reveal';

const projects: {
  href: string;
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
  role: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
  tags: string[];
}[] = [
  {
    company: '1&1 Mail & Media',
    role: 'Working Student — DevOps & Cloud Automation',
    location: 'Karlsruhe',
    period: 'Sep 2025 — now',
    current: true,
    summary:
      'Log-ingestion pipelines and the Kubernetes platform they run on — from Terraform’d VMs to RKE2 clusters with GitOps, secrets management and full observability.',
    tags: ['Kubernetes', 'Terraform', 'Ansible', 'ArgoCD', 'Observability'],
  },
  {
    company: 'SNT School',
    role: 'Freelance Software Development Engineer',
    location: 'Hyderabad',
    period: 'Mar — Oct 2024',
    summary:
      'Cross-platform school app with role-based access — React Native front, Node.js/Prisma/MySQL on AWS behind it.',
    tags: ['React Native', 'Node.js', 'AWS'],
  },
  {
    company: 'Sashi Infotech',
    role: 'Software & Data Intern',
    location: 'Hyderabad',
    period: 'May 2023 — Mar 2024',
    summary:
      'Frontend and backend work on web applications, plus automated data pipelines in Snowflake.',
    tags: ['Snowflake', 'SQL'],
  },
  {
    company: 'Malla Reddy University',
    role: 'President, Technical Club',
    location: 'Hyderabad',
    period: '2022 — 2024',
    summary:
      'First president — ran 30+ technical events with a record 86% student participation.',
    tags: ['Leadership'],
  },
];

const languageWork: {
  href: string;
  title: string;
  description: string;
}[] = [
  {
    title: 'prompt-pattern',
    href: 'https://github.com/VivekanandaReddy3/sle-prompt-pattern',
    description:
      'A Racket #lang where LLM prompt templates are compile-time checked — an undeclared slot fails the build, not the 2 a.m. API call.',
  },
  {
    title: 'BIPL language server',
    href: 'https://github.com/VivekanandaReddy3/sle-bipl-lsp',
    description:
      'A language server and VS Code client for BIPL, a small imperative language — live type checking and use-before-assignment analysis over LSP (Python + pygls). Being upstreamed into the softlang/yas language zoo.',
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 font-mono text-[11px] tracking-[0.2em] text-slate-400 uppercase">
      {children}
    </p>
  );
}

function ProjectCard({
  project,
  priority,
}: {
  project: (typeof projects)[number];
  priority?: boolean;
}) {
  return (
    <Link
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-2xl bg-slate-100 p-3 shadow-card transition-all duration-300 hover:-translate-y-1 hover:bg-slate-50 hover:shadow-card-hover"
    >
      <div className="flex aspect-video flex-col overflow-hidden rounded-lg border border-slate-200/80 bg-white">
        <div className="flex h-6 shrink-0 items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-2.5">
          <span className="h-2 w-2 rounded-full bg-slate-200" />
          <span className="h-2 w-2 rounded-full bg-slate-200" />
          <span className="h-2 w-2 rounded-full bg-slate-200" />
          <span className="ml-2 hidden truncate font-mono text-[9px] text-slate-300 sm:block">
            {new URL(project.href).hostname}
          </span>
        </div>
        <div className="relative flex-1 bg-slate-200">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 640px) 34rem, 100vw"
            quality={90}
            priority={priority}
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        </div>
      </div>
      <div className="px-1 pt-4 pb-1">
        <h3 className="text-lg font-semibold tracking-tight text-slate-800">
          {project.title}
          <span className="ml-1 inline-block text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:text-slate-600">
            ↗
          </span>
        </h3>
        <p className="text-base text-slate-500">{project.description}</p>
      </div>
    </Link>
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
        <div className="max-w-3xl">
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
              I keep clusters healthy by day and ship products by night.
            </span>
          </h1>

          <p
            className="reveal mb-4 max-w-2xl text-lg leading-relaxed text-slate-700 md:text-xl"
            style={{ '--stagger': 2 } as React.CSSProperties}
          >
            DevOps working student at 1&amp;1, M.Sc. Web &amp; Data Science at
            Koblenz — and builder of four live products you can click below.
          </p>

          <div
            className="reveal flex flex-wrap items-center gap-5"
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
            <Link
              href="/contact"
              className="link-underline mt-4 font-mono text-xs text-slate-500 transition-colors hover:text-slate-950"
            >
              or say hallo →
            </Link>
          </div>
        </div>
      </section>

      <section className="container-wide mt-16">
        <ScrollReveal>
          <SectionLabel>Selected work — all live</SectionLabel>
          <h2 className="mb-2 text-2xl font-medium tracking-tight text-slate-950">
            Things I’ve built
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={(i % 2) * 100}>
              <ProjectCard project={project} priority={i < 2} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="container-wide mt-16">
        <ScrollReveal>
          <SectionLabel>Experience</SectionLabel>
          <h2 className="text-2xl font-medium tracking-tight text-slate-950">
            Where I’ve worked
          </h2>
        </ScrollReveal>

        <div className="mt-6">
          {experience.map((job, i) => (
            <ScrollReveal key={job.company} delay={i * 60}>
              <article className="grid gap-1 border-t border-slate-200 py-5 md:grid-cols-[11rem_1fr_auto] md:gap-6">
                <p className="font-mono text-xs leading-6 text-slate-400">
                  {job.period}
                  {job.current && (
                    <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] tracking-wider text-emerald-700 uppercase">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      now
                    </span>
                  )}
                </p>
                <div className="min-w-0">
                  <h3 className="font-semibold tracking-tight text-slate-950">
                    {job.role}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {job.company} · {job.location}
                  </p>
                  <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-slate-600">
                    {job.summary}
                  </p>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5 md:mt-0 md:max-w-[14rem] md:justify-end">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="h-fit rounded-full border border-slate-200 px-2.5 py-0.5 font-mono text-[10px] text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="container-wide mt-16">
        <ScrollReveal>
          <SectionLabel>Language engineering</SectionLabel>
          <h2 className="text-2xl font-medium tracking-tight text-slate-950">
            Small languages, real tooling
          </h2>
        </ScrollReveal>

        <div className="mt-2 grid gap-x-10 md:grid-cols-2">
          {languageWork.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 80}>
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group -mx-4 flex h-full flex-col gap-1 rounded-xl px-4 py-5 transition-colors duration-300 hover:bg-slate-100"
              >
                <h3 className="font-mono text-sm font-semibold text-slate-950">
                  {item.title}
                  <span className="ml-1.5 inline-block text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-slate-600">
                    ↗
                  </span>
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {latestPosts.length > 0 && (
        <section className="container-wide mt-16">
          <ScrollReveal>
            <SectionLabel>Writing</SectionLabel>
            <h2 className="text-2xl font-medium tracking-tight text-slate-950">
              Recent notes
            </h2>
          </ScrollReveal>

          <div className="mt-2 grid gap-x-10 md:grid-cols-2">
            {latestPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 80}>
                <Link
                  href={post.href}
                  className="group -mx-4 flex h-full flex-col gap-1 rounded-xl px-4 py-5 transition-colors duration-300 hover:bg-slate-100"
                >
                  <p className="font-mono text-xs text-slate-400">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span className="mx-2">·</span>
                    {getReadingTime(post.content)} min read
                  </p>
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
