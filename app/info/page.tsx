import type { Metadata } from 'next';
import Link from 'next/link';

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
          Outside work I ship small, opinionated products — four of them are
          live on the <Link href="/">home page</Link> — and I have a soft
          spot for language engineering: a Racket{' '}
          <code>#lang</code> that makes LLM prompt templates compile-time
          checked, and a language server for a teaching language that’s
          being upstreamed into the softlang/yas repository.
        </p>
        <p>
          Before Germany: freelance work that shipped a school platform used
          by real parents and teachers, a software &amp; data internship, and
          founding my university’s technical club. If any of this sounds like
          your kind of engineering, say hallo:{' '}
          <Link
            href="mailto:vivekanandareddygodala@gmail.com"
            className="link-underline font-normal !no-underline text-slate-950"
          >
            vivekanandareddygodala@gmail.com
          </Link>
          .
        </p>
      </div>

      <div
        className="reveal mt-10"
        style={{ '--stagger': 2 } as React.CSSProperties}
      >
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
      </div>

      <div
        className="reveal mt-12"
        style={{ '--stagger': 3 } as React.CSSProperties}
      >
        <p className="mb-4 font-mono text-[11px] tracking-[0.2em] text-slate-400 uppercase">
          Now
        </p>
        <dl className="flex flex-col gap-3 text-base">
          <div className="flex flex-col gap-0.5 md:flex-row md:gap-6">
            <dt className="w-32 shrink-0 font-mono text-xs leading-6 text-slate-400">
              Working
            </dt>
            <dd className="text-slate-700">
              DevOps &amp; Cloud Automation at 1&amp;1 Mail &amp; Media,
              Karlsruhe
            </dd>
          </div>
          <div className="flex flex-col gap-0.5 md:flex-row md:gap-6">
            <dt className="w-32 shrink-0 font-mono text-xs leading-6 text-slate-400">
              Studying
            </dt>
            <dd className="text-slate-700">
              M.Sc. Web &amp; Data Science, University of Koblenz
            </dd>
          </div>
          <div className="flex flex-col gap-0.5 md:flex-row md:gap-6">
            <dt className="w-32 shrink-0 font-mono text-xs leading-6 text-slate-400">
              Building
            </dt>
            <dd className="text-slate-700">
              A small fleet of live products — Gründbar, Stromlinie,
              Fließband, Klartext
            </dd>
          </div>
        </dl>
      </div>

      <Link
        href="/resume.pdf"
        target="_blank"
        className="group reveal mt-10 mb-8 inline-block font-mono text-sm font-medium text-slate-500 transition-colors hover:text-slate-950"
        style={{ '--stagger': 4 } as React.CSSProperties}
      >
        Download resume{' '}
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Link>
    </section>
  );
}
