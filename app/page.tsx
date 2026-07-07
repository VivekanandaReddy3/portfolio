import Link from 'next/link';
import Image from 'next/image';

const projects: {
  href?: string;
  title: string;
  description: string;
  image: string;
}[] = [
  {
    title: 'Startup Directory',
    href: 'https://github.com/VivekanandaReddy3/SU_Directory',
    description: 'Pitch and explore startup ideas collaboratively.',
    image: '/sud.png',
  },
  {
    title: 'Quotient',
    href: 'https://github.com/VivekanandaReddy3/Quotient',
    description: 'Modern admin dashboard with GraphQL and Refine.',
    image: '/quotient.png',
  },
  {
    title: 'SalesLytic',
    href: 'https://github.com/VivekanandaReddy3/Saleslytic',
    description: 'Sales insights dashboard using Tableau and SQL.',
    image: '/saleslytic.png',
  },
  {
    title: 'AdminPit',
    href: 'https://github.com/VivekanandaReddy3/AdminPit',
    description: 'Admin dashboard with charts and management tools.',
    image: '/adminpit.png',
  },
];

function ProjectCard({
  project,
  stagger,
  priority,
}: {
  project: (typeof projects)[number];
  stagger: number;
  priority?: boolean;
}) {
  const cardContent = (
    <>
      <div className="relative aspect-video overflow-hidden rounded-lg bg-slate-200">
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
      <div className="px-1 pt-4 pb-1">
        <h3 className="text-lg font-semibold tracking-tight text-slate-800">
          {project.title}
          {project.href && (
            <span className="ml-1 inline-block text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:text-slate-600">
              ↗
            </span>
          )}
        </h3>
        <p className="text-base text-slate-500">{project.description}</p>
      </div>
    </>
  );

  const cardClassName =
    'group reveal flex flex-col rounded-2xl bg-slate-100 p-3 shadow-card transition-all duration-300 hover:-translate-y-1 hover:bg-slate-50 hover:shadow-card-hover';

  return project.href ? (
    <Link
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cardClassName}
      style={{ '--stagger': stagger } as React.CSSProperties}
    >
      {cardContent}
    </Link>
  ) : (
    <div
      className={cardClassName}
      style={{ '--stagger': stagger } as React.CSSProperties}
    >
      {cardContent}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <section className="container-page">
        <h1
          className="reveal mb-4 text-4xl font-medium text-slate-950"
          style={{ '--stagger': 0 } as React.CSSProperties}
        >
          Hallo, I’m Vivek.
          <span className="mt-1 block text-2xl font-light text-slate-500">
            A Web and Data Science Student in Germany.
          </span>
        </h1>

        <p
          className="reveal mb-4 text-lg leading-normal text-slate-700 md:text-xl"
          style={{ '--stagger': 1 } as React.CSSProperties}
        >
          Driven by data, I want to build solutions that matter. I’ve worked on
          a wide range of projects — some I’ve contributed to, others I’ve led.
          Now, as I pursue a Masters, I’m looking to translate my learning into
          real world impact.
        </p>

        <div
          className="reveal flex"
          style={{ '--stagger': 2 } as React.CSSProperties}
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
          className="reveal my-12 h-px bg-slate-200"
          style={{ '--stagger': 3 } as React.CSSProperties}
        />
      </section>

      <section>
        <div className="container-page">
          <h2
            className="reveal mb-2 text-2xl font-medium text-slate-950"
            style={{ '--stagger': 3 } as React.CSSProperties}
          >
            Personal Projects
          </h2>
          <p
            className="reveal text-lg font-light text-slate-700"
            style={{ '--stagger': 4 } as React.CSSProperties}
          >
            Below is a selection of projects that I&apos;ve worked on.
          </p>
        </div>

        <div className="container-wide grid grid-cols-1 gap-6 pt-10 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              stagger={i + 5}
              priority={i < 4}
            />
          ))}
        </div>

        <div
          className="container-page reveal mt-8 flex"
          style={{ '--stagger': 8 } as React.CSSProperties}
        >
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
        </div>
      </section>
    </>
  );
}
