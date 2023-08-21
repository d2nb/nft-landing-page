import Image from 'next/image';

const Brands = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 place-items-center mt-[80px] md:mt-[160px] dark:hidden">
      <Image
        src="/images/logo-1.png"
        width={130}
        height={26}
        alt="brand"
        className="md:scale-125"
      />
      <Image
        src="/images/logo-2.png"
        width={130}
        height={33}
        alt="brand"
        className="md:scale-125"
      />
      <Image
        src="/images/logo-3.png"
        width={130}
        height={24}
        alt="brand"
        className="md:scale-125"
      />
      <Image
        src="/images/logo-4.png"
        width={130}
        height={33}
        alt="brand"
        className="md:scale-125"
      />
      <Image
        src="/images/logo-5.png"
        width={130}
        height={35}
        alt="brand"
        className="col-span-2 md:col-span-1 md:scale-125"
      />
    </div>
  );
};

export default Brands;
