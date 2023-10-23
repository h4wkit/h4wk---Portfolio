import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectItemProps {
  image: string;
  gif: string;
  label: string;
  date: string;
  desc: string;
  technologies: Technology[];
  github: string;
  demoLink: string;
  reversed: boolean;
}

interface Technology {
  label: string;
  color: string;
}

function ProjectItem({
  reversed,
  image,
  gif,
  label,
  date,
  desc,
  technologies,
  github,
  demoLink,
}: ProjectItemProps) {
  return (
    <article
      className={cn(
        "rounded-2xl shadow-md max-w-[990px] bg-white w-full flex flex-col p-5 justify-center lg:justify-between items-center",
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      )}
    >
      <Image
        src={image}
        width={0}
        height={200}
        alt="gif"
        style={{ width: "auto" }}
      />

      <div className="max-w-[350px] space-y-5 py-5 text-center">
        <h1 className="font-bold text-black/80 text-lg">
          CAR RENTAL <span className="text-sm">(FEBUARY 2023)</span>
        </h1>
        <p className=" text-black/50 text-md">
          A car rental website is an online platform that allows users to rent
          cars for personal or business use. The website provides an interface
          for searching, comparing, and reserving cars.
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {technologies.map((technology, index) => (
            <div
              className="rounded-md text-white shadow-sm px-3 py-2"
              style={{ backgroundColor: technology.color }}
              key={index}
            >
              {technology.label}
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-6">
          <Link
            href={github}
            className="flex hover:text-blue-500 transition duration-200 space-x-2 text-black/80"
            target="_blank"
          >
            <p>Code</p>
            <Github />
          </Link>{" "}
          <Link
            href={demoLink}
            className="flex hover:text-blue-500 transition duration-200 space-x-2 text-black/80"
            target="_blank"
          >
            <p>Live Demo</p>
            <ExternalLink />
          </Link>
        </div>
      </div>
    </article>
  );
}
export default ProjectItem;
