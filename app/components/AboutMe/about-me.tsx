import laptop from "@/public/laptop.webp";
import Image from "next/image";

import text from "@/public/text.png";
import emoji from "@/public/working-emoji.png";

function AboutMe() {
  return (
    <div className="bg-white py-28 flex items-center justify-center">
      <div className="relative">
        <Image
          src={laptop}
          width={laptop.width / 3}
          height={laptop.height / 3}
          alt="laptop"
          className="rounded-xl"
        />
        <div className="absolute rounded-full w-[200px] h-[200px] flex items-center justify-center bg-white -right-24 -bottom-36">
          <Image
            src={text}
            width={180}
            height={180}
            alt="rotating text"
            className="animate-spin-slow absolute"
          />
          <Image src={emoji} width={50} height={50} alt="working emoji" />
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
