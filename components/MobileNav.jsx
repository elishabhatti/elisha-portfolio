"use client";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "home", path: "#home" },
  { name: "services", path: "#services" },
  { name: "project", path: "#project" },
  { name: "resume", path: "#resume" },
  { name: "pricing", path: "#pricing" },
  { name: "contact", path: "#contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="xl:text-[32px] text-xl text-white" />
      </SheetTrigger>
      <SheetContent className="flex flex-col p-5">
        {/* Required for accessibility */}
        <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>

        <div className="mt-32 text-center text-2xl">
          <Link href="/">
            <h1 className="text-white">
              Elisha<span className="text-[#a238ff] text-2xl">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-4">
          {links.map((link, index) => (
            <Link
              href={link.path}
              className={`${
                link.path === pathname &&
                "text-white border-b-2 border-[#a238ff]"
              } text-md capitalize transition-all`}
              key={index}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
