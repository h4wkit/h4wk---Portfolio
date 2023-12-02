import mokarico from "@/public/mokarico.webp";
import peak_performance from "@/public/peak-performance.webp";
import ProjectItem from "./project-Item";

function Projects() {
  const projects = [
    {
      image: peak_performance.src,
      label: "Peak Performance",
      date: "NOVEMBER 2023",
      desc: "Peak Performance stands as a groundbreaking web application that empowers users to craft personalized training plans tailored to their unique fitness goals. Using React, NextJS, and ShadcnUI for a sleek interface, the app seamlessly integrates Contentful for fetching articles. Leveraging Incremental Static Regeneration (ISR), Peak Performance ensures a lightning-fast user experience. ",
      technologies: [
        {
          label: "React",
          color: "blue",
        },
        {
          label: "Supabase",
          color: "green",
        },
        {
          label: "NextJS",
          color: "black",
        },
        {
          label: "ShadcnUI",
          color: "black",
        },
        {
          label: "TailwindCSS",
          color: "pink",
        },
        {
          label: "Contentful",
          color: "orange",
        },
      ],
      github: "https://github.com/kasin-it/peak-performance",
      demoLink: "https://peak-performance-phi.vercel.app",
    },
    {
      image: mokarico.src,
      label: "Clone Mokarico-Coffee",
      date: "OCTOBER 2023",
      desc: "A clone of a website selling coffee. To build this site, I used nextJS to take advantage of server-side rendering. On the other hand, I used Supabase as the backend because it simplifies a lot of things, such as user authentication and data fetching. I built this site because I liked the look of it.",
      technologies: [
        {
          label: "React",
          color: "blue",
        },
        {
          label: "Supabase",
          color: "green",
        },
        {
          label: "NextJS",
          color: "black",
        },
        {
          label: "TailwindCSS",
          color: "pink",
        },
      ],
      github: "https://github.com/kasin-it/mokarico-coffee",
      demoLink: "https://mokarico-caffe.vercel.app/",
    },
  ];

  return (
    <section
      className="bg-gray-50 py-28 flex items-center justify-center w-full"
      id="projects"
    >
      <div className="flex flex-col items-center justify-center space-y-10 px-2">
        <div className="text-center px-5 lg:px-0 max-w-[500px]">
          <h2 className="text-blue-500 font-extrabold text-lg">PORTFOLIO</h2>
          <h1 className="py-5 text-2xl font-bold text-black/80">
            Each project is a unique piece of development 🧩
          </h1>
        </div>
        {projects.map((project, index) => (
          <ProjectItem {...project} key={index} reversed={index % 2 == 0} />
        ))}
      </div>
    </section>
  );
}
export default Projects;
