import Link from 'next/link';
import { Orbitron } from 'next/font/google';
import {
  TwitterLogoIcon,
  DiscordLogoIcon,
  InstagramLogoIcon,
  HamburgerMenuIcon,
} from '@radix-ui/react-icons';

const orbitron = Orbitron({ subsets: ['latin'] });

const TopNav = () => {
  return (
    <div className="flex justify-between items-center px-4 h-9 mt-6">
      <div
        className={`${orbitron.className} text-2xl font-extrabold text-black`}
      >
        NFTHub
      </div>
      <div className="flex gap-x-5">
        <Link href="/">
          <TwitterLogoIcon className="w-5 h-5" />
        </Link>
        <Link href="/">
          <DiscordLogoIcon className="w-5 h-5" />
        </Link>
        <Link href="/">
          <InstagramLogoIcon className="w-5 h-5" />
        </Link>
        <div>
          <HamburgerMenuIcon className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
