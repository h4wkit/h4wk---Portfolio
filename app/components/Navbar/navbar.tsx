"use client";

import { useMinMenuModal } from "@/app/hooks/use-min-menu-modal";
import { Menu } from "lucide-react";
import Link from "next/link";

function Navbar() {
  const minMenu = useMinMenuModal();

  const handleMenuToggle = () => {
    minMenu.toggle();
  };

  return (
    <div className="w-full h-20 flex justify-between px-10 items-center shadow-lg shadow-gray-100 fixed top-0 z-50 bg-white">
      <Link href={"body"} className="text-xl font-black">
        Kacper.dev
      </Link>
      <nav className="hidden md:block">
        <ul className="flex gap-x-6">
          <Link
            href={"#"}
            className="hover:text-blue-500 transition duration-200 cursor-pointer"
          >
            Home
          </Link>
          <Link
            href={"#"}
            className="hover:text-blue-500 transition duration-200 cursor-pointer"
          >
            About
          </Link>
          <Link
            href={"#"}
            className="hover:text-blue-500 transition duration-200 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            href={"#"}
            className="hover:text-blue-500 transition duration-200 cursor-pointer"
          >
            Contact
          </Link>
        </ul>
      </nav>
      <nav className="block md:hidden">
        <Menu
          className="h-8 w-8 text-black hover:text-blue-500 transition duration-200 cursor-pointer"
          onClick={handleMenuToggle}
        />
      </nav>
    </div>
  );
}
export default Navbar;
