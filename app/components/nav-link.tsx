'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: Props) {
  const pathname = usePathname();
  const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <Link
      href={href}
      data-active={isActive}
      className="link-underline font-mono text-sm font-medium tracking-tight text-slate-950"
    >
      {children}
    </Link>
  );
}
