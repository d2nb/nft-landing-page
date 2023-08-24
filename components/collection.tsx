import { MobileSlider, PCSlider } from '@/components/slider';

const Collection = () => {
  return (
    <>
      <h1 className="text-center text-[42px] font-bold leading-tight mb-16">
        <span className="md:mr-4">Nerko&apos;s</span>
        <br className="md:hidden" />
        <span className="bg-clip-text text-transparent bg-gradient-12 from-[#2600FC] to-[#FF00EA]">
          collection
        </span>
      </h1>

      <MobileSlider />
      <PCSlider />
    </>
  );
};

export default Collection;
