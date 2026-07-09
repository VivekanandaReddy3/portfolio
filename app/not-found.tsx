import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-page flex flex-col items-start">
      <p
        className="reveal font-mono text-[11px] tracking-[0.2em] text-slate-400 uppercase"
        style={{ '--stagger': 0 } as React.CSSProperties}
      >
        404 — Not found
      </p>
      <h1
        className="reveal mt-3 text-4xl font-medium tracking-tight text-slate-950 md:text-5xl"
        style={{ '--stagger': 1 } as React.CSSProperties}
      >
        This page doesn’t exist.
        <span className="mt-2 block font-serif text-2xl font-normal tracking-normal text-slate-500 italic">
          maybe it never did, maybe it moved on.
        </span>
      </h1>
      <div
        className="reveal mt-8 flex flex-wrap gap-4"
        style={{ '--stagger': 2 } as React.CSSProperties}
      >
        <Link
          href="/"
          className="group rounded-full bg-slate-950 px-8 py-3 font-mono text-xs font-light text-white transition-all duration-300 hover:bg-slate-800 hover:shadow-card-hover"
        >
          Back home{' '}
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </Link>
        <Link
          href="/posts"
          className="link-underline self-center font-mono text-xs text-slate-500 transition-colors hover:text-slate-950"
        >
          or read something instead
        </Link>
      </div>
    </section>
  );
}
