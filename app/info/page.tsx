import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Information',
};

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
          Hey, I’m Vivekananda Reddy Godala, a computer and data science grad
          from India now chasing my master’s in Germany. I’m all about building
          tech that solves real problems, and I’m hungry to learn and grow in
          the process.
        </p>
        <p>
          Back at Malla Reddy University, I was the first president of the
          Technical Club, running 30+ events, including 9 national ones with
          86% turnout. Leading teams taught me how to deliver while soaking up
          new skills.
        </p>
        <p>
          I’ve worked on a platform for real-time online bidding and a
          dashboard to help businesses spot sales trends and make better calls.
          I also freelanced, helping an education group launch their online
          presence.
        </p>
        <p>
          Currently, I’m building a full-stack application for startups to
          pitch ideas and team up, learning tons about collaboration and
          innovation every day.
        </p>
        <p>
          Since September 2025, I’m a working student at 1&amp;1 Mail &amp;
          Media in Karlsruhe, doing DevOps and cloud automation — learning how
          software runs reliably at real scale. Got something interesting?
          Feel free to reach out to me here: <br />
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
        className="reveal mt-12"
        style={{ '--stagger': 2 } as React.CSSProperties}
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
        style={{ '--stagger': 3 } as React.CSSProperties}
      >
        Download resume{' '}
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Link>
    </section>
  );
}
