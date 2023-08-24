import {
  TwitterLogoIcon,
  DiscordLogoIcon,
  InstagramLogoIcon,
} from '@radix-ui/react-icons';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'] });

const Footer = () => {
  return (
    <div className="container px-4 md:px-8 border-t pt-20 pb-5">
      <div className="md:flex">
        <div className="md:w-[380px] md:mr-auto">
          <span
            className={`${orbitron.className} text-[32px] font-bold bg-clip-text text-transparent bg-gradient-12 from-[#2600FC] to-[#FF00EA]`}
          >
            NFTHub
          </span>
          <div className="text-desc mt-6">
            Join our Discord channel or follow us on Twitter to keep up to date
            with our latest work and announcements.
          </div>
          <div className="flex gap-x-5 mt-6">
            <TwitterLogoIcon className="w-5 h-5" />
            <DiscordLogoIcon className="w-5 h-5" />
            <InstagramLogoIcon className="w-5 h-5" />
          </div>
        </div>

        <div className="mt-12 md:mt-0 md:mr-[100px]">
          <div className="text-xl font-bold">Quick Link</div>
          <div className="text-lg text-desc mt-3">About</div>
          <div className="text-lg text-desc mt-3">Collection</div>
          <div className="text-lg text-desc mt-3">Roadmap</div>
          <div className="text-lg text-desc mt-3">FAQs</div>
        </div>

        <div className="mt-12 md:mt-0">
          <div className="text-xl font-bold">Community</div>
          <div className="text-lg text-desc mt-3">How it works!</div>
          <div className="text-lg text-desc mt-3">Blockchain</div>
          <div className="text-lg text-desc mt-3">Get in touch</div>
        </div>
      </div>

      <div className="text-center md:text-left text-desc mt-12">
        This beatiful UI is design by&nbsp;
        <a
          href="https://www.figma.com/community/file/1268100719044054170"
          target="_blank"
          className="text-sky-500"
        >
          UI-UX Expert
        </a>
      </div>
    </div>
  );
};

export default Footer;
