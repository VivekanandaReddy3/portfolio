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
  const latestPosts = (await getAllPosts({})).slice(0, 3);

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
              a software engineer based in Karlsruhe, Germany.
            </span>
          </h1>

          <p
            className="reveal mb-4 max-w-2xl text-lg leading-relaxed text-slate-700 md:text-xl"
            style={{ '--stagger': 2 } as React.CSSProperties}
          >
            I like building things end to end — data, backends, interfaces
            and the infrastructure underneath. Right now I’m at 1&amp;1
            Mail &amp; Media, where I work with the team running log
            pipelines and Kubernetes platforms behind one of Germany’s
            largest mail providers, alongside my master’s in Web &amp; Data
            Science. Before that, I freelanced and shipped a school platform
            that parents and teachers still use.
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
          <SectionLabel>Selected work</SectionLabel>
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

        <div className="mt-10 flex flex-col">
          <ScrollReveal>
            <Link
              href="https://github.com/VivekanandaReddy3/sle-prompt-pattern"
              target="_blank"
              rel="noopener noreferrer"
              className="group -mx-4 flex flex-col gap-1 rounded-xl px-4 py-4 transition-colors duration-300 hover:bg-slate-100"
            >
              <h3 className="font-mono text-sm font-semibold text-slate-800">
                prompt-pattern
                <span className="ml-1.5 inline-block text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-slate-600">
                  ↗
                </span>
              </h3>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-500">
                A Racket #lang that makes LLM prompt templates compile-time
                checked — an undeclared slot fails the build.
              </p>
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <Link
              href="https://github.com/VivekanandaReddy3/sle-bipl-lsp"
              target="_blank"
              rel="noopener noreferrer"
              className="group -mx-4 flex flex-col gap-1 rounded-xl px-4 py-4 transition-colors duration-300 hover:bg-slate-100"
            >
              <h3 className="font-mono text-sm font-semibold text-slate-800">
                bipl-lsp
                <span className="ml-1.5 inline-block text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-slate-600">
                  ↗
                </span>
              </h3>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-500">
                A language server with live type checking for a teaching
                language — being upstreamed into softlang/yas.
              </p>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {latestPosts.length > 0 && (
        <section className="container-page mt-16">
          <ScrollReveal>
            <SectionLabel>Writing</SectionLabel>
            <h2 className="mb-2 text-2xl font-medium tracking-tight text-slate-950">
              Recent notes
            </h2>
          </ScrollReveal>

          <div className="mt-4 flex flex-col">
            {latestPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 80}>
                <Link
                  href={post.href}
                  className="group -mx-4 flex flex-col gap-1 rounded-xl px-4 py-5 transition-colors duration-300 hover:bg-slate-100"
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
                  {post.meta.summary && (
                    <p className="max-w-2xl text-sm leading-relaxed text-slate-500">
                      {post.meta.summary}
                    </p>
                  )}
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
