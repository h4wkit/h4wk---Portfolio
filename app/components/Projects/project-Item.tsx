import Image from "next/image";

interface ProjectItemProps {
  image: string;
  gif?: string;
  label?: string;
  date?: string;
  desc?: string;
  technologies?: [
    {
      label: string;
    }
  ];
  github?: string;
  demoLink?: string;
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
    <article className="rounded-2xl shadow-md max-w-[990px] bg-white w-full flex p-5 space-x-6">
      <div className="w-[530px] bg-black/10 h-[350px] rounded-2xl" />

      <div className="max-w-[350px] space-y-5 py-5 text-center">
        <h1 className="font-bold text-black/80 text-md">
          CAR RENTAL <span className="text-sm">(FEBUARY 2023)</span>
        </h1>
        <p className="max-w-[280px] text-black/50 text-md">
          A car rental website is an online platform that allows users to rent
          cars for personal or business use. The website provides an interface
          for searching, comparing, and reserving cars.
        </p>
        {technologies?.map((technology) => (
          <div className="rounded-md bg-white shadow-sm">
            {technology.label}
          </div>
        ))}
      </div>
    </article>
  );
}
export default ProjectItem;
