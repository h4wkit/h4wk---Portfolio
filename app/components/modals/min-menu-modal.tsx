"use client";

import { useMinMenuModal } from "@/app/hooks/use-min-menu-modal";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Link from "next/link";

function MinMenuModal() {
  const minMenu = useMinMenuModal();

  const handleClose = () => {
    minMenu.onClose();
  };

  return (
    <div
      className={cn(
        "transition-all duration-500 h-screen fixed z-[99] bg-white flex items-center justify-center top-0",
        minMenu.isOpen ? "left-0 w-full" : "-left-[100%] w-full"
      )}
    >
      <X
        className="absolute top-10 right-10 hover:text-blue-500 transition duration-200 cursor-pointer h-12 w-12 p-2"
        onClick={handleClose}
      />
      <nav>
        <ul className="flex flex-col gap-y-12 text-center text-black/80">
          <Link
            href={"#"}
            className="hover:text-blue-500 transition duration-200 cursor-pointer text-2xl"
          >
            Home
          </Link>
          <Link
            href={"#"}
            className="hover:text-blue-500 transition duration-200 cursor-pointer text-2xl"
          >
            About
          </Link>
          <Link
            href={"#"}
            className="hover:text-blue-500 transition duration-200 cursor-pointer text-2xl"
          >
            Projects
          </Link>
          <Link
            href={"#"}
            className="hover:text-blue-500 transition duration-200 cursor-pointer text-2xl"
          >
            Contact
          </Link>
        </ul>
      </nav>
    </div>
  );
}
export default MinMenuModal;
