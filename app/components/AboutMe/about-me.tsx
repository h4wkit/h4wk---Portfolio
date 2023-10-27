import laptop from "@/public/laptop.webp";
import Image from "next/image";

import text from "@/public/text.png";
import emoji from "@/public/working-emoji.png";

function AboutMe() {
  return (
    <section
      className="bg-white py-28 flex items-center justify-center w-full px-5"
      id="about"
    >
      <div className="flex flex-col lg:flex-row max-w-[1070px] space-y-12 lg:space-y-0 lg:space-x-20 justify-center items-center">
        <div className="relative px-10 lg:px-0 lg:w-1/2 flex justify-center">
          <Image
            src={laptop}
            width={laptop.width / 2.5}
            height={0}
            style={{ height: "auto" }}
            alt="laptop"
            className="rounded-xl"
          />
          <div className="absolute rounded-full w-[200px] h-[200px] items-center justify-center bg-white -right-16 -bottom-24  hidden lg:flex">
            <Image
              src={text}
              width={180}
              height={180}
              alt="rotating text"
              className="animate-spin-slow absolute"
            />
            <Image src={emoji} width={70} height={70} alt="working emoji" />
          </div>
        </div>
        <div className="lg:w-1/2 text-center lg:text-left px-5 lg:px-0 max-w-[500px]">
          <h2 className="text-blue-500 font-extrabold text-lg">ABOUT ME</h2>
          <h1 className="py-5 text-2xl font-bold text-black/80">
            A dedicated Fullstack Developer based in Poland 😎
          </h1>
          <p className="text-black/50">
            As a Fullstack Developer, I possess an impressive arsenal of skills
            in HTML, CSS, JavaScript, Python, React and Tailwind. I excel in
            designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </div>
      </div>
    </section>
  );
}
export default AboutMe;
