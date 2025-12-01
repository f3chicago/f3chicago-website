import { CheckCircle } from 'react-feather';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function SuccessPage() {
  return (
    <>
      <Header href="/success" />
      <div className="mt-[150px] flex flex-col items-center justify-center animate-fadeInUp">
        <CheckCircle
          color="rgb(8, 8, 63)"
          width={50}
          height={50}
          className="mb-4"
        />
        <h2 className="text-2xl text-[rgb(8,8,63)] md:text-lg">
          INFO SENT SUCCESSFULLY
        </h2>
      </div>
      <Footer />
    </>
  );
}
