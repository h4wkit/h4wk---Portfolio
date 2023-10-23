import example from "@/public/avatar.jpg";
import ProjectItem from "./project-Item";

function Projects() {
  const projects = [
    {
      image: example.src,
      gif: "",
      label: "",
      date: "",
      desc: "",
      technologies: [
        {
          label: "React",
          img: "",
        },
      ],
      github: "",
      demoLink: "",
    },
  ];

  return (
    <section className="bg-gray-50 py-28 flex items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center space-y-10">
        <div className="text-center lg:text-left px-5 lg:px-0 max-w-[500px]">
          <h2 className="text-blue-500 font-extrabold text-lg">PORTFOLIO</h2>
          <h1 className="py-5 text-2xl font-bold text-black/80">
            Each project is a unique piece of development 🧩
          </h1>
        </div>
        {projects.map((project, index) => (
          <ProjectItem image={project.image} key={index} />
        ))}
      </div>
    </section>
  );
}
export default Projects;
