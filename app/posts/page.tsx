import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, getReadingTime } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Notes on things I build, learn and think about.',
};

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));

export default async function Writing() {
  const posts = await getAllPosts({});

  return (
    <section className="container-page">
      <h1
        className="reveal mb-4 text-4xl font-medium text-slate-950"
        style={{ '--stagger': 0 } as React.CSSProperties}
      >
        Writing
        <span className="mt-2 block font-serif text-xl font-normal text-slate-500 italic md:text-2xl">
          notes on things I build, learn and think about.
        </span>
      </h1>

      <div
        className="reveal my-8 h-px bg-slate-200"
        style={{ '--stagger': 1 } as React.CSSProperties}
      />

      {posts.length === 0 ? (
        <p
          className="reveal text-lg text-slate-500"
          style={{ '--stagger': 2 } as React.CSSProperties}
        >
          Nothing here yet — the first post is on its way.
        </p>
      ) : (
        <div className="flex flex-col">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={post.href}
              className="group reveal -mx-4 flex flex-col gap-1 rounded-xl px-4 py-6 transition-colors duration-300 hover:bg-slate-100"
              style={{ '--stagger': i + 2 } as React.CSSProperties}
            >
              <p className="font-mono text-xs text-slate-400">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span className="mx-2">·</span>
                {getReadingTime(post.content)} min read
              </p>
              <h2 className="text-xl font-medium tracking-tight text-slate-950">
                {post.meta.title}
                <span className="ml-2 inline-block text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-slate-600">
                  →
                </span>
              </h2>
              {post.meta.summary && (
                <p className="text-base leading-relaxed text-slate-500">
                  {post.meta.summary}
                </p>
              )}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
