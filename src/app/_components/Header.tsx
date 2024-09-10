import Image from 'next/image';
import Link from 'next/link';

import f3White from '../../../public/f3-white.webp';

export default function Header({ href }: { href: string }) {
  const pages = [
    // { href: "/", text: "HOME" },
    { href: '/fng', text: 'NEW TO F3' },
    { href: '/workouts', text: 'WORKOUT LOCATIONS' },
    { href: '/ContactUsForm', text: 'CONTACT US' },
    // { href: '/convergence', text: 'CONVERGENCE [HC]' },
  ];

  return (
    <header className="p-5 text-center">
      <Link href="/">
        <Image
          src={f3White}
          alt="F3 White"
          width={60}
          height={60}
          className="my-0 mx-auto"
        />
      </Link>
      <nav className="uppercase">
        <ul>
          {pages.map((p, i) => (
            <li key={i} className={i < pages.length ? 'pt-2' : ''}>
              <Link
                href={p.href}
                title={p.text}
                className={`font-medium ${href === p.href ? 'text-drp' : 'text-white'
                  }`}
              >
                {p.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
