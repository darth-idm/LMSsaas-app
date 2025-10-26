import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src="/images/logo.svg" alt="Logo" width={46} height={44} />
        </div>
      </Link>

      <div className="flex items-center gap-8">
        <NavItems />
        <SignedOut>
          <Link href="/sign-in">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
              Sign In
            </button>
          </Link>
          <Link href="/sign-up">
            <button className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Sign Up
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
