'use client';

import { FC, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const collectionList = [
  {
    cover: '/images/category-cover-1.jpeg',
    title: '#Metaverse',
    desc: 'By TheSalvare',
  },
  {
    cover: '/images/category-cover-2.jpeg',
    title: '#Polly Doll',
    desc: 'By TheNative',
  },
  {
    cover: '/images/category-cover-3.jpeg',
    title: '#Alec Art',
    desc: 'By GeorgZvic',
  },
  {
    cover: '/images/category-cover-4.jpeg',
    title: '#Toxic Poeth',
    desc: 'By YazoiLup',
  },
];

const Arrow: FC<{
  left?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}> = (props) => {
  const Icon = props.left ? ChevronLeftIcon : ChevronRightIcon;
  return (
    <div
      className={`absolute top-[40%] ${props.left ? '-left-2' : '-right-2'} ${
        props.disabled ? 'opacity-50' : 'opacity-100'
      } w-10 h-10 bg-white border rounded-full flex justify-center items-center`}
      onClick={props.onClick}
    >
      <Icon className="w-6 h-6 text-desc" />
    </div>
  );
};

export const MobileSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    created() {
      setLoaded(true);
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <div className="relative md:hidden">
      <div ref={sliderRef} className="keen-slider">
        {collectionList.map((item) => (
          <div key={item.cover} className="keen-slider__slide text-center">
            <Image
              src={item.cover}
              width={360}
              height={480}
              alt="cover"
              className="rounded-2xl"
            />
            <h3 className="text-2xl font-medium mt-6 mb-2">{item.title}</h3>
            <p className="text-sm font-light">{item.desc}</p>
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            disabled={currentSlide === 0}
            onClick={() => instanceRef.current?.prev()}
          />
          <Arrow
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
            onClick={() => instanceRef.current?.next()}
          />
        </>
      )}
    </div>
  );
};

export const PCSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 4,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const length = instanceRef.current?.track.details.maxIdx;

  return (
    <div className="hidden relative md:block">
      <div ref={sliderRef} className="keen-slider">
        {collectionList.map((item) => (
          <div key={item.cover} className="keen-slider__slide text-center">
            <Image
              src={item.cover}
              width={264}
              height={352}
              alt="cover"
              className="rounded-2xl mx-auto"
            />
            <h3 className="text-2xl font-medium mt-6 mb-2">{item.title}</h3>
            <p className="text-sm font-light">{item.desc}</p>
          </div>
        ))}
      </div>
      <>
        <Arrow
          left
          disabled={currentSlide === 0}
          onClick={() => instanceRef.current?.prev()}
        />
        <Arrow
          disabled={length ? currentSlide === length : false}
          onClick={() => instanceRef.current?.next()}
        />
      </>
    </div>
  );
};
