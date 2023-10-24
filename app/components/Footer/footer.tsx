import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="py-24 bg-black/80 flex flex-col sm:flex-row  justify-center sm:justify-between px-10 items-center space-y-5 sm:space-y-0">
      <p className="text-white font-bold text-md">
        Copyright © 2023. All rights are reserved
      </p>

      <div className="flex space-x-4 text-white">
        <Link href={"https://github.com/kacper3123"} target="_blank">
          <Github className="h-8 w-8 hover:cursor-pointer hover:scale-125 transition duration-300" />
        </Link>
        {/* <Link href={""}>
          <Linkedin className="h-8 w-8 hover:cursor-pointer hover:scale-125 transition duration-300" />
        </Link> */}
      </div>
    </footer>
  );
}
export default Footer;
