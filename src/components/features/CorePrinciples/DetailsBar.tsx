import { Mail } from 'react-feather';

export default function DetailsBar() {
  return (
    <div className="bg-[rgb(8,8,63)] rounded-lg relative p-8 flex flex-col items-center h-auto pb-24 md:pb-20 md:row-span-2">
      <div className="flex flex-col items-center">
        <p className="text-center text-white text-lg font-bold">
          Contact Information
        </p>
        <p className="text-center text-white text-sm leading-[18px]">
          Fill out the form and we will get back with you ASAP.
        </p>
      </div>
      <div>
        <a
          href="mailto:f3chicago@gmail.com"
          className="flex w-48 h-2.5 mt-12 cursor-pointer no-underline"
        >
          <Mail size={15} color="rgb(252, 113, 137)" />
          <div className="text-white text-base ml-2.5">f3chicago@gmail.com</div>
        </a>
      </div>
    </div>
  );
}
