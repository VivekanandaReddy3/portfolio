import Link from 'next/link';

interface ArticleLinkProps {
  href: string;
  title: string;
  summary: string;
  date: Date;
}

export function ArticleLink({ href, title, summary, date }: ArticleLinkProps) {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);

  return (
    <article className="py-6 first:pt-0 last:pb-0">
      <Link 
        href={href}
        className="group block hover:bg-gray-50 rounded-lg p-4 -m-4 transition-colors duration-200"
      >
        <div className="flex flex-col space-y-2">
          <h2 className="text-xl font-medium text-slate-950 group-hover:text-blue-600 transition-colors duration-200">
            {title}
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            {summary}
          </p>
          <time 
            dateTime={date.toISOString()}
            className="text-sm text-gray-500 font-medium"
          >
            {formattedDate}
          </time>
        </div>
      </Link>
    </article>
  );
}