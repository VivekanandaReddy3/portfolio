import { PageHeader } from "../components/pageheader";
import { Title } from "../components/title";
const contact: {
  method: string;
  link: string;
  label: string;
}[] = [
  {
    method: 'Email',
    link: 'mailto:vivekanandareddygodala@gmail.com',
    label: 'vivekanadnareddygodala@gmail.com',
  },
  {
    method: '',
    link: 'https://x.com/vvkrdy',
    label: '@vvkrdy',
  },
  {
    method: 'GitHub',
    link: 'https://github.com/vivekanandareddy3',
    label: 'git/vivekanandareddy',
  },
  {
    method: 'LinkedIn',
    link: 'https://www.linkedin.com/in/vivekananda-reddy/',
    label: 'in/vivekananda-reddy',
  },
];
export default function Contact() {
  return (
    
    <main>
      <h1 className="mx-auto text-left font-medium text-4xl mb-4 text-slate-950 md:w-1/2 lg:w-1/2 xl:w-2/5 2xl:w-1/4">
        Contact
        <div className="h-px bg-slate-300 my-6" />
        <span className="block text-slate-700 font-light text-xl">
          If you'd like to get in touch, you can reach me using the following methods. 
        </span>
      </h1>
      
      
    </main>
  )
}