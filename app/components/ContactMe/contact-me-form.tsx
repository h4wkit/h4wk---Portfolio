"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRight, MailPlus, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type FormData = z.infer<typeof formValidationSchema>;
const formValidationSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
  message: z.string().min(1),
});

const ContactMeForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formValidationSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const handleSubscribe = (formData: FormData) => {
    console.log({
      title: "Thank you for signing up!",
      description: `Please check your email to confirm: ${formData.email}`,
    });
    return reset();
  };

  return (
    <form onSubmit={handleSubmit(handleSubscribe)}>
      <div className="flex flex-col gap-5">
        <input
          id="name"
          placeholder="Your Name"
          type="text"
          className="w-full rounded-xl max-w-[360px] h-[64px] border-black/20 border-2 p-5"
          {...register("name")}
        />{" "}
        {errors.name && (
          <span className="test-sm text-red-500">This name is invalid.</span>
        )}
        <input
          id="email"
          placeholder="Email address"
          type="email"
          className="w-full rounded-xl max-w-[360px] h-[64px] border-black/20 border-2 p-5"
          {...register("email")}
        />
        {errors.email && (
          <span className="test-sm text-red-500">This email is invalid.</span>
        )}
        <textarea
          id="message"
          placeholder="Message"
          className="w-full rounded-xl max-w-[360px] h-[176px] border-black/20 border-2 p-5"
          {...register("message")}
        />
        {errors.message && (
          <span className="test-sm text-red-500">This message is invalid.</span>
        )}
        <button
          type="submit"
          className="max-w-[200px] h-[64px] bg-black/80 text-white font-bold rounded-xl flex items-center justify-center space-x-3 hover:cursor-pointer hover:bg-black"
        >
          <p>Send Message</p>
          <Send />
        </button>
      </div>
    </form>
  );
};

export default ContactMeForm;
