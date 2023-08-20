import Link from 'next/link';
import { Orbitron } from 'next/font/google';
import {
  TwitterLogoIcon,
  DiscordLogoIcon,
  InstagramLogoIcon,
  HamburgerMenuIcon,
} from '@radix-ui/react-icons';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from '@/components/ui/sheet';

const orbitron = Orbitron({ subsets: ['latin'] });

const navLinks = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Collection',
    href: '/',
  },
  {
    name: 'Choose',
    href: '/',
  },
  {
    name: 'About',
    href: '/',
  },
  {
    name: 'Roadmap',
    href: '/',
  },
  {
    name: 'Blog',
    href: '/',
  },
];

const TopNav = () => {
  return (
    <div className="flex justify-between items-center h-9 md:h-20 mx-auto">
      <div
        className={`${orbitron.className} text-2xl md:text-3xl font-extrabold cursor-pointer select-none`}
      >
        NFTHub
      </div>
      <div className="hidden md:flex gap-x-5 lg:gap-x-8 lg:text-lg font-bold">
        {navLinks.map((link) => (
          <Link href={link.href} key={link.name}>
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex gap-x-5">
        <Link href="/">
          <TwitterLogoIcon className="w-5 md:w-6 h-5 md:h-6" />
        </Link>
        <Link href="/">
          <DiscordLogoIcon className="w-5 h-5" />
        </Link>
        <Link href="/">
          <InstagramLogoIcon className="w-5 h-5" />
        </Link>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <HamburgerMenuIcon className="w-5 h-5" />
            </SheetTrigger>
            <SheetContent>
              <div
                className={`${orbitron.className} my-2 text-2xl font-extrabold`}
              >
                NFTHub
              </div>
              <div className="font-medium">
                {navLinks.map((link) => (
                  <SheetClose key={link.name} asChild>
                    <Link
                      href={link.href}
                      className="flex items-center h-12 border-b"
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
