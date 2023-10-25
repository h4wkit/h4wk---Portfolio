import { Mail } from "lucide-react";
import ContactMeForm from "./contact-me-form";
import Link from "next/link";

function ContactMe() {
  return (
    <section
      className="bg-white py-28 flex flex-col items-center justify-center w-full px-5 text-center"
      id="contact"
    >
      <h2 className="text-blue-500 font-extrabold text-lg">ABOUT ME</h2>
      <h1 className="py-5 text-2xl font-bold text-black/80">
        Dont be shy! Hit me up! 👇
      </h1>
      <div className="flex md:flex-row flex-col md:space-x-16 w-full justify-center items-center space-y-10">
        <div className="w-full max-w-[240px] h-[100px] bg-gray-50 shadow-lg rounded-xl flex flex-col items-center justify-center space-y-2">
          <div className="flex items-center space-x-1">
            <Mail className="h-8 w-8 text-blue-500" />
            <p className="text-blue-500 font-bold">MAIL</p>
          </div>
          <Link
            href={"mailto:ksiniloit@gmail.com"}
            className="text-black/50 hover:text-blue-500 cursor-pointer"
          >
            ksiniloit@gmail.com
          </Link>
        </div>

        <div className="flex flex-col space-y-12 lg:space-y-0 items-left text-left items-center">
          <ContactMeForm />
        </div>
      </div>
    </section>
  );
}
export default ContactMe;
