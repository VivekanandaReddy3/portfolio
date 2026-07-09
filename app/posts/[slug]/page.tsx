import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import {
  getAllPostPaths,
  getAllPosts,
  getPostBySlug,
  getReadingTime,
} from '@/lib/articles';
import { KvCacheDemo } from '@/app/components/kv-cache-demo';

const mdxComponents = { KvCacheDemo };

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostPaths();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.meta.title,
    description: post.meta.summary,
    openGraph: {
      title: post.meta.title,
      description: post.meta.summary,
      type: 'article',
      publishedTime: post.date,
      url: post.href,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.meta.title,
      description: post.meta.summary,
    },
  };
}

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const posts = await getAllPosts({});
  const index = posts.findIndex((p) => p.slug === slug);
  const newer = index > 0 ? posts[index - 1] : null;
  const older = index < posts.length - 1 ? posts[index + 1] : null;

  return (
    <article className="container-page">
      <Link
        href="/posts"
        className="group reveal mb-8 inline-block font-mono text-xs text-slate-500 transition-colors hover:text-slate-950"
        style={{ '--stagger': 0 } as React.CSSProperties}
      >
        <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
          ←
        </span>{' '}
        Writing
      </Link>

      <header
        className="reveal mb-10"
        style={{ '--stagger': 1 } as React.CSSProperties}
      >
        <p className="font-mono text-xs text-slate-400">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="mx-2">·</span>
          {getReadingTime(post.content)} min read
        </p>
        <h1 className="mt-2 text-4xl font-medium tracking-tight text-slate-950">
          {post.meta.title}
        </h1>
        {post.meta.summary && (
          <p className="mt-3 font-serif text-xl text-slate-500 italic md:text-2xl">
            {post.meta.summary}
          </p>
        )}
        <div className="mt-8 h-px bg-slate-200" />
      </header>

      <div
        className="reveal prose prose-slate prose-lg max-w-none prose-headings:font-medium prose-headings:tracking-tight prose-a:underline prose-a:decoration-slate-300 prose-a:underline-offset-4 hover:prose-a:decoration-slate-950 prose-code:rounded prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-pre:rounded-xl prose-pre:bg-slate-950"
        style={{ '--stagger': 2 } as React.CSSProperties}
      >
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>

      {(older || newer) && (
        <nav
          aria-label="More posts"
          className="mt-16 grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2"
        >
          {older ? (
            <Link href={older.href} className="group flex flex-col gap-1">
              <span className="font-mono text-[11px] tracking-widest text-slate-400 uppercase">
                <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>{' '}
                Older
              </span>
              <span className="font-medium tracking-tight text-slate-950">
                {older.meta.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {newer && (
            <Link
              href={newer.href}
              className="group flex flex-col gap-1 sm:text-right"
            >
              <span className="font-mono text-[11px] tracking-widest text-slate-400 uppercase">
                Newer{' '}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
              <span className="font-medium tracking-tight text-slate-950">
                {newer.meta.title}
              </span>
            </Link>
          )}
        </nav>
      )}
    </article>
  );
}
