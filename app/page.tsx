import Link from "next/link";

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
          className="group bg-slate-950 hover:bg-slate-800 transition-colors mt-4 font-mono text-xs font-semibold rounded-full px-8 py-3 text-white text-left"
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

      <p className="text-slate-700 text-lg mx-auto text-left font-normal mb-4 md:w-1/2 lg:w-1/2 xl:w-2/5 2xl:w-1/4 px-4 ">
        Below is a selection of projects that I&apos;ve worked on.
      </p>
    </section>
    </main>
    

    
  );
}