import Image from 'next/image';
import Link from 'next/link';

import f3White from '@/../public/f3-white.webp';
import { navigationConfig } from '@/config/navigation';

export default function Header({ href }: { href: string }) {
  const pages = navigationConfig.pages;

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
        <ul className="flex flex-row justify-center gap-4">
          {pages.map((p, i) => (
            <li key={i} className={` ${i < pages.length ? 'pt-2' : ''} inline-block`}>
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
