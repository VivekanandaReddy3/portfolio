import type { Metadata } from 'next';
import Link from 'next/link';
import { Title } from '../components/title';

export const metadata: Metadata = {
  title: 'Contact',
};

const contact: {
  method: string;
  link: string;
  label: string;
}[] = [
  {
    method: 'Email',
    link: 'mailto:vivekanandareddygodala@gmail.com',
    label: 'vivekanandareddygodala@gmail.com',
  },
  {
    method: 'X',
    link: 'https://x.com/vvkrdy',
    label: '@vvkrdy',
  },
  {
    method: 'Github',
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
    <section className="container-page">
      <h1
        className="reveal mb-4 text-4xl font-medium text-slate-950"
        style={{ '--stagger': 0 } as React.CSSProperties}
      >
        Contact
      </h1>
      <div
        className="reveal my-6 h-px bg-slate-200"
        style={{ '--stagger': 0 } as React.CSSProperties}
      />
      <p
        className="reveal mb-10 font-serif text-xl text-slate-500 italic md:text-2xl"
        style={{ '--stagger': 1 } as React.CSSProperties}
      >
        If you’d like to get in touch, you can reach me using the following
        methods.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {contact.map((contactMethod, i) => (
          <div
            className="reveal flex min-w-0 flex-col gap-1"
            key={contactMethod.method}
            style={{ '--stagger': i + 2 } as React.CSSProperties}
          >
            <Title as="h2" variant="tertiary">
              {contactMethod.method}
            </Title>
            <Link
              href={contactMethod.link}
              target={contactMethod.link.startsWith('http') ? '_blank' : undefined}
              rel={
                contactMethod.link.startsWith('http')
                  ? 'noopener noreferrer'
                  : undefined
              }
              className="link-underline self-start break-all font-light text-slate-700 transition-colors hover:text-slate-950"
            >
              {contactMethod.label}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
