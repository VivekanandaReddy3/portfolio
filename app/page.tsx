import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";



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
    image: '/comingsoon.png',
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
    href: 'https://github.com/VivekanandaReddy3/AdmitPit',
    description: 'Admin dashboard with charts and management tools.',
    image: '/adminpit.png',
  },
];



export default function Page() {
  return (
    <main>
      <section className="px-4" >
      <h1 className="mx-auto text-left font-medium text-4xl mb-4 text-slate-950 md:w-1/2 lg:w-1/2 xl:w-2/5 2xl:w-1/4">
        Hallo, I’m Vivek.
        <span className="block text-slate-500 font-light text-2xl">
          A Web and Data Science Student in Germany.
        </span>
      </h1>

      <p className="text-slate-700 text-lg md:text-xl leading-normal mx-auto text-left font-normal mb-4 md:w-1/2 lg:w-1/2 xl:w-2/5 2xl:w-1/4">
        Driven by data, I want to build solutions that matter. I’ve worked on a wide range of projects - some I’ve contributed to, others I’ve led. Now, as I pursue a Masters, I’m looking to translate my learning into real world impact.
      </p>
      
      <div className="mx-auto md:w-1/2 lg:w-1/2 xl:w-2/5 2xl:w-1/4 flex">
        <Link
          href="/info"
          className="group bg-slate-950 hover:bg-slate-800 transition-colors mt-4 font-mono text-xs font-light rounded-full px-8 py-3 text-white text-left"
        >
          More Information{' '}
          <span className="inline-block group-hover:translate-x-2 transition-transform">
            →
          </span>
        </Link>
        {/* <div className="w-full h-px bg-gray-300" /> */}
      </div>
      <div className="mx-auto md:w-1/2 lg:w-1/2 xl:w-2/5 2xl:w-1/4">
  <div className="h-px bg-slate-300 my-12" />
</div>
    </section>
    <section>
      <h4 className="mx-auto text-left font-medium text-2xl mb-4 text-slate-950 md:w-1/2 lg:w-1/2 xl:w-2/5 2xl:w-1/4 px-4">
        Personal Projects
      </h4>

      <p className="text-slate-700 text-lg mx-auto text-left font-light mb-4 md:w-1/2 lg:w-1/2 xl:w-2/5 2xl:w-1/4 px-4 ">
        Below is a selection of projects that I&apos;ve worked on.
      </p>

      
     <div className="grid sm:w-4/5 2xl:w-[40%] xl:w-[70%] w-2/3 mx-auto md:grid-cols-2 grid-cols-1 gap-8 pt-12" >
       {projects.map((project) => {
            const isLink = !!project.href;
            const WrappingComponent = isLink ? Link : 'div';

            return (
              <WrappingComponent
                href={project.href ?? '/'}
                key={project.title}
                className={clsx(
                  'flex flex-col justify-center bg-slate-100 hover:bg-slate-200/70 transition-colors rounded-xl p-8'
                )}
              >
                <div className="relative rounded-xl mb-4 shadow-project">
                  <Image
                    width={450}
                    height={240}
                    quality={90}
                    src={project.image}
                    alt=""
                    className="rounded-xl bg-cover"
                  />
                </div>
                <h3 className="text-slate-700 font-semibold tracking-tight text-xl">
                  {project.title}
                </h3>
                <h3 className="text-slate-500 text-base">
                  {project.description}
                </h3>
              </WrappingComponent>
            );
          })}
     </div>
     <div className="mx-auto md:w-1/2 lg:w-1/2 xl:w-2/5 2xl:w-1/4 flex mt-5 px-4">
        <Link
          href="https://github.com/VivekanandaReddy3?tab=repositories"
          className="group bg-slate-950 hover:bg-slate-800 transition-colors mt-4 font-mono text-xs font-light rounded-full px-8 py-3 text-white text-left"
        >
          More Projects{' '}
          <span className="inline-block group-hover:translate-x-2 transition-transform">
            →
          </span>
        </Link>
        {/* <div className="w-full h-px bg-gray-300" /> */}
      </div>
     

    </section>
    </main>
    

    
  );
}