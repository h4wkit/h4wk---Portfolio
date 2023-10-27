import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";

import cv_icon from "@/public/cv-icon.png";
import avatar from "@/public/avatar.png";
import hand from "@/public/hand.png";

function Home() {
  const skills = [
    {
      src: "https://skillicons.dev/icons?i=js",
      alt: "JavaScript",
      text: "JavaScript",
      color: "darkorange",
    },
    {
      src: "https://skillicons.dev/icons?i=ts",
      alt: "TypeScript",
      text: "TypeScript",
      color: "MediumSlateBlue ",
    },
    {
      src: "https://skillicons.dev/icons?i=py",
      alt: "Python",
      text: "Python",
      color: "MediumTurquoise ",
    },
    {
      src: "https://skillicons.dev/icons?i=supabase",
      alt: "Supabase",
      text: "Supabase",
      color: "green",
    },
    {
      src: "https://skillicons.dev/icons?i=nestjs",
      alt: "NestJS",
      text: "NestJS",
      color: "red",
    },
    {
      src: "https://skillicons.dev/icons?i=django",
      alt: "Django",
      text: "Django",
      color: "green",
    },
    {
      src: "https://skillicons.dev/icons?i=nextjs",
      alt: " Nextjs",
      text: "NextJS",
      color: "gray",
    },
    {
      src: "https://skillicons.dev/icons?i=react",
      alt: "React",
      text: "React",
      color: "lightblue",
    },
    {
      src: "https://skillicons.dev/icons?i=tailwind",
      alt: "Tailwind",
      text: "TailwindCSS",
      color: "darkcyan",
    },
    {
      src: "https://skillicons.dev/icons?i=prisma",
      alt: "Prisma",
      text: "Prisma",
      color: "violet",
    },
  ];

  return (
    <div className="min-h-full bg-gray-50 pb-24 lg:py-36">
      <section
        id="home"
        className="w-full flex flex-col items-center px-3 pt-36 space-y-24"
      >
        <article className="max-w-[950px] flex w-full flex-col-reverse lg:flex-row items-center justify-between">
          <article className="flex flex-col space-y-10 mt-10 lg:mt-0 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-black/80">
              Fullstack Web
              <br /> Developer{" "}
              <span className="wave">
                <Image src={hand} alt="hand" width={60} height={60} />
              </span>
            </h1>
            <p className="max-w-[500px] text-black/50">
              Hi, Im Kacper Siniło. A passionate Fullstack Developer, who is
              also a gym rat, and a coffee enjoyer. 💪☕
            </p>
            <div className="flex space-x-4 text-black/50 justify-center lg:justify-start">
              <Link href={"https://github.com/kacper3123"} target="_blank">
                <Github className="h-8 w-8 text-black/50 hover:text-black hover:cursor-pointer" />
              </Link>
              <Link
                href={
                  "https://drive.google.com/file/d/1r7DxqplO8fSZpTXW9tBzlpi-LQtnF9Xa/view?usp=sharing"
                }
                target="blank"
              >
                <Image
                  src={cv_icon.src}
                  width={32}
                  height={32}
                  alt={"cv"}
                  className="opacity-50 hover:opacity-100 cursor-pointer"
                />
              </Link>
            </div>
          </article>

          <div
            className="overflow-hidden border-4 border-blue-500/50 radius-animation w-80 h-80 relative"
            style={{
              position: "relative",
            }}
          >
            <Image
              src={avatar.src}
              alt={""}
              width={avatar.height}
              height={avatar.width}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              loading="eager"
              quality={100}
              priority={true}
            />
          </div>
        </article>
        <div className="flex items-center space-y-4 md:space-y-0 md:space-x-2 flex-col md:flex-row mt-10 flex-wrap overflow-hidden">
          <p className="border-b-2 md:border-b-0 md:border-r-2 p-5">
            Tech Stack
          </p>
          <div className="grid grid-cols-5 gap-3 md:flex">
            {skills.map((skill, index) => (
              <div key={index} className="relative mx-2">
                <img
                  // type="image/svg+xml"
                  src={skill.src}
                  className="hover:scale-105 transition duration-200 peer hover:cursor-help"
                  width={50}
                  alt={skill.alt}
                />

                {skill.text && (
                  <div
                    className="peer hidden absolute peer-hover:block rounded-full px-2 py-1 text-white -left-10 -bottom-12 min-w-[130px] text-center font-bold z-50"
                    style={{ backgroundColor: skill.color }}
                  >
                    {skill.text}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
