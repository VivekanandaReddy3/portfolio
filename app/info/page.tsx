import Link from "next/link"

export default function Information() {
  return (
    <main>
      <section className="px-2">
        <h1 className="mx-auto text-left font-medium text-4xl mb-4 text-slate-950 md:w-1/2 lg:w-1/2 xl:w-2/5 2xl:w-1/4">
        Information 
        <div className="h-px bg-slate-300 my-6" />
      </h1>
      <div className="mx-auto md:w-1/2 lg:w-1/2 xl:w-2/5 2xl:w-1/4 prose prose-lg text-slate-700 leading-loose space-y-7 font-normal text-lg">
        <p>
          Hey, I’m Vivekananda Reddy Godala, a computer and data science grad from India now chasing my master’s in Germany. I’m all about building tech that solves real problems, and I’m hungry to learn and grow in the process.
        </p>
        <p>
          Back at Malla Reddy University, I was the first president of the Technical Club, running 30+ events, including 9 national ones with 86% turnout. Leading teams taught me how to deliver while soaking up new skills.
        </p>

        <p>
          I’ve worked on a platform for real-time online bidding and a dashboard to help businesses spot sales trends and make better calls. I also freelanced, helping an education group launch their online presence.
        </p>

        <p>
          Currently, I’m building a full-stack application for startups to pitch ideas and team up, learning tons about collaboration and innovation every day.
        </p>

        <p>
          I’m pumped for Werkstudent roles in Germany to gain experience and contribute to cool projects. Got something for me? feel free to reach out
          to me here:{' '} <br/>
          <Link href="mailto:vivekanandareddygodala@gmail.com" className="font-normal underline text-slate-950">vivekanandareddygodala@gmail.com</Link>.
        </p>
      </div>

      <Link
      href="/resume.pdf"
      target="_blank"
      className="block my-8 text-slate-500 text-sm font-medium mx-auto md:w-1/2 lg:w-1/2 xl:w-2/5 2xl:w-1/4 "
      >
        Download resume →
      </Link>
      
      </section>
    </main>
  )
}