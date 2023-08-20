import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';

const Heading = () => {
  return (
    <div className="mt-20 md:flex md:justify-between md:items-center">
      <div className="text-center md:text-left md:w-[520px]">
        <h1 className="text-[40px] md:text-[70px] font-bold md:leading-tight">
          High Quality NFT Collection
        </h1>
        <p className="mt-6 text-desc text-lg md:text-2xl font-light">
          A 890 piece custom Nerko&apos;s collection is joining the NFT space on
          Opensea.
        </p>
        <Button className="rounded-full w-[226px] md:w-[266px] h-[52px] md:h-[66px] text-white text-base md:text-lg font-medium bg-gradient-to-tr from-[#2600FC] to-[#FF00EA] mt-9">
          View in OPENSEA
          <ArrowTopRightIcon className="w-6 h-6 ml-1" />
        </Button>
        <div className="flex justify-center md:justify-normal items-center mt-11 md:mt-16">
          <div className="flex">
            <Image
              src="/images/avatar-1.png"
              width={48}
              height={48}
              alt="avatar"
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <Image
              src="/images/avatar-2.png"
              width={48}
              height={48}
              alt="avatar"
              className="w-12 h-12 rounded-full border-2 border-white -ml-5"
            />
            <Image
              src="/images/avatar-3.png"
              width={48}
              height={48}
              alt="avatar"
              className="w-12 h-12 rounded-full border-2 border-white -ml-5"
            />
          </div>
          <div className="text-left ml-5">
            <div className="text-3xl font-bold">47k+</div>
            <div className="text-desc text-xs font-light">
              Community members
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/images/main-banner.png"
        width={325}
        height={320}
        alt="avatar"
        className="md:hidden mx-auto mt-8"
      />
      <Image
        src="/images/main-banner.png"
        width={650}
        height={640}
        alt="avatar"
        className="hidden md:block"
      />
    </div>
  );
};

export default Heading;
