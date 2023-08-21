import Image from 'next/image';
import Hero from '@/components/hero';
import Brands from '@/components/brands';
import Collection from '@/components/collection';

const Divider = () => {
  return (
    <Image
      src="/images/divider.png"
      width={72}
      height={18}
      alt="divider"
      className="mx-auto my-20"
    />
  );
};

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Divider />
      <Collection />
    </>
  );
}
