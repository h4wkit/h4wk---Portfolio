import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import avatar from "@/public/avatar.png";

function Home() {
  return (
    <div className="min-h-full bg-gray-50 pb-24 lg:py-36">
      <section
        id="home"
        className="w-full flex flex-col items-center justify-center px-10 pt-36"
      >
        <article className="max-w-[950px] flex w-full flex-col-reverse lg:flex-row items-center">
          <article className="flex flex-col space-y-10 mt-10 lg:mt-0 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-black/80">
              Fullstack Web
              <br /> Developer <span className="">👋🏻</span>
            </h1>
            <p className="max-w-[500px] text-black/80">
              Hi, I'm Stefan Topalovic. A passionate Front-end React Developer
              based in Belgrade, Serbia. 📍
            </p>
          </article>
          <div
            className="overflow-hidden border-2 radius-animation w-80 h-80 relative"
            style={{
              backgroundImage: `url(${avatar.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </article>
        <div className="flex items-center space-y-4 md:space-y-0 md:space-x-5 flex-col md:flex-row mt-10 ">
          <p className="border-b-2 md:border-b-0 md:border-r-2 p-5">
            Tech Stack
          </p>
          <img
            src={"https://skillicons.dev/icons?i=js,ts,py"}
            alt={"js ts py"}
            className="hover:scale-105 transition duration-200"
          />
          <img
            src={"https://skillicons.dev/icons?i=supabase,nestjs,django"}
            className="hover:scale-105 transition duration-200"
            alt={"d"}
          />
          <img
            src={"https://skillicons.dev/icons?i=react,nextjs"}
            className="hover:scale-105 transition duration-200"
            alt={"react nextjs"}
          />
          <img
            src={"https://skillicons.dev/icons?i=tailwind"}
            className="hover:scale-105 transition duration-200"
            alt={"tailwind"}
          />
          <img
            src={"https://skillicons.dev/icons?i=prisma"}
            className="hover:scale-105 transition duration-200"
            alt={"prisma"}
          />
        </div>
      </section>
    </div>
  );
}
export default Home;
