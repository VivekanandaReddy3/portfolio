import type { Metadata } from 'next';
import Link from 'next/link';
import { ScrollReveal } from '../components/scroll-reveal';

export const metadata: Metadata = {
  title: 'Information',
};

const dailyStack = [
  'Kubernetes',
  'RKE2',
  'Terraform',
  'Harvester',
  'Ansible',
  'ArgoCD',
  'Vault',
  'External Secrets',
  'cert-manager',
  'Prometheus',
  'Grafana',
  'Alertmanager',
  'OpenSearch',
  'OpenTelemetry',
  'GitLab CI',
  'Ceph',
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
      'Building log-ingestion pipelines and the Kubernetes platform they run on — standing up RKE2 clusters end to end, from Terraform’d VMs to GitOps-managed workloads with full observability.',
    tags: ['Kubernetes', 'Terraform', 'Ansible', 'ArgoCD', 'Observability'],
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

export default function Information() {
  return (
    <section className="container-page">
      <h1
        className="reveal mb-4 text-4xl font-medium text-slate-950"
        style={{ '--stagger': 0 } as React.CSSProperties}
      >
        Information
      </h1>
      <div
        className="reveal my-6 h-px bg-slate-200"
        style={{ '--stagger': 0 } as React.CSSProperties}
      />

      <div
        className="reveal prose prose-slate prose-lg max-w-none text-lg leading-loose font-normal text-slate-700"
        style={{ '--stagger': 1 } as React.CSSProperties}
      >
        <p>
          I’m Vivekananda Reddy Godala — a DevOps working student at 1&amp;1
          Mail &amp; Media in Karlsruhe and an M.Sc. Web &amp; Data Science
          student at the University of Koblenz. I moved to Germany from
          Hyderabad in 2024, and I’ve been building things nonstop since.
        </p>
        <p>
          At work I help build log-ingestion pipelines and the Kubernetes
          platform underneath them. In practice that means standing up RKE2
          clusters end to end — Terraform’d VMs on Harvester, Ansible for
          cluster bring-up, Vault with External Secrets and cert-manager for
          the trust layer, ArgoCD for GitOps, Ceph for storage — and wiring
          the observability that keeps it all honest: Prometheus,
          Alertmanager, Grafana, OpenSearch and OpenTelemetry pipelines.
        </p>
        <p>
          Outside work I ship small, opinionated products — they live on the{' '}
          <Link href="/">home page</Link> — and I have a soft spot for
          language engineering: a Racket <code>#lang</code> that makes LLM
          prompt templates compile-time checked, and a language server for a
          teaching language that’s being upstreamed into the softlang/yas
          repository.
        </p>
        <p>
          If any of this sounds like your kind of engineering, say hallo:{' '}
          <Link
            href="mailto:vivekanandareddygodala@gmail.com"
            className="link-underline font-normal !no-underline text-slate-950"
          >
            vivekanandareddygodala@gmail.com
          </Link>
          .
        </p>
      </div>

      <div className="mt-14">
        <ScrollReveal>
          <p className="mb-6 font-mono text-[11px] tracking-[0.2em] text-slate-400 uppercase">
            Where I’ve worked
          </p>
        </ScrollReveal>
        <div>
          {experience.map((job, i) => (
            <ScrollReveal key={job.company} delay={i * 80}>
              <ExperienceEntry job={job} isLast={i === experience.length - 1} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      <ScrollReveal className="mt-14">
        <p className="mb-4 font-mono text-[11px] tracking-[0.2em] text-slate-400 uppercase">
          Daily stack
        </p>
        <div className="flex flex-wrap gap-2">
          {dailyStack.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-slate-200 px-3 py-1 font-mono text-[11px] text-slate-600"
            >
              {tool}
            </span>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal className="mt-12">
        <Link
          href="/resume.pdf"
          target="_blank"
          className="group mb-8 inline-block font-mono text-sm font-medium text-slate-500 transition-colors hover:text-slate-950"
        >
          Download resume{' '}
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </ScrollReveal>
    </section>
  );
}
