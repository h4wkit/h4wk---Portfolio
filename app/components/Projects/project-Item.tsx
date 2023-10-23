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
}

interface Technology {
  label: string;
  color: string;
}

function ProjectItem({
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
    <article className="rounded-2xl shadow-md max-w-[990px] bg-white w-full flex flex-col lg:flex-row p-5 space-x-6 justify-center items-center">
      <div className="max-w-[530px] w-full bg-black/10 h-[350px] rounded-2xl" />

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
          >
            <p>Code</p>
            <Github />
          </Link>{" "}
          <Link
            href={github}
            className="flex hover:text-blue-500 transition duration-200 space-x-2 text-black/80"
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
