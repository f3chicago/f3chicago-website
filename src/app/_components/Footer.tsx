import Image from 'next/image';

import fb from '../../../public/fb.svg';
import x from '../../../public/twitter-x.svg';
import ig from '../../../public/instagram.svg';
import yt from '../../../public/yt_logo_mono_dark.png'
import th from '../../../public/Threads-Brand-Resource-Center/01 White/Logo/threads-logo-white.svg'

import en from '../../locales/en.json'

export default function Footer() {
  return (
    <footer className="bg-body-tertiary text-center py-10 px-4">
      <address>
        &copy; Copyright {new Date().getFullYear()} | {en.region_name} | All Rights
        Reserved | Powered by the PAX
      </address>
      <nav className="flex items-center mx-auto container justify-center space-x-y mb-4">
        <a href={en.region_facebook} target="_blank" className="btn btn-outline btn-floating m-1" role="button">
          <Image
            src={fb.src}
            alt="Facebook"
            width={35}
            height={35}
            className="my-0 mx-auto mt-5"
          />
        </a>
        <a href={en.region_x} target="_blank" className="btn btn-outline btn-floating m-1" role="button">
          <Image
            src={x.src}
            alt="X"
            width={28}
            height={28}
            className="my-0 mx-auto mt-5"
          />
        </a>
        <a href={en.region_instagram} target="_blank" className="btn btn-outline btn-floating m-1" role="button">
          <Image
            src={ig.src}
            alt="Instagram"
            width={35}
            height={35}
            className="my-0 mx-auto mt-5"
          />
        </a>
        <a href={en.region_threads} target="_blank" className="btn btn-outline btn-floating m-1" role="button">
          <Image
            src={th.src}
            alt="Threads"
            width={27}
            height={27}
            className="my-0 mx-auto mt-5"
          />
        </a>
        <a href={en.region_youtube} target="_blank" className="btn btn-outline btn-floating m-1" role="button">
          <Image
            src={yt.src}
            alt="YouTube"
            width={90}
            height={90}
            className="my-0 mx-auto mt-5"
          />
        </a>
      </nav>
    </footer >
  );
}
