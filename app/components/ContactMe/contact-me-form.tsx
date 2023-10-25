"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRight, MailPlus, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { cn } from "@/lib/utils";

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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [success, setSuccess] = useState<null | string>(null);

  const handleSend = async (formData: FormData, event: any) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post("/api/contact", formData);

      if (response.status >= 400) {
        setError(
          `Request failed with status: ${response.status} - ${response.statusText}`
        );
        return;
      }

      console.log(formData);
      setSuccess("The message has been successfully sent. Have a good day!");
      reset();
    } catch (error: any) {
      setError("Something went wrong, try again.");
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit((formData, event) => handleSend(formData, event))}
    >
      <p className="text-green-500 max-w-[360px]">{error}</p>
      <p className="text-green-500 max-w-[360px]">{success}</p>
      <div className="flex flex-col gap-5 mt-4">
        <input
          id="name"
          placeholder="Your Name"
          type="text"
          className={cn(
            "w-full rounded-xl max-w-[360px] h-[64px] border-black/20 border-2 p-5",
            loading ? "opacity-50" : ""
          )}
          {...register("name")}
          disabled={loading}
        />{" "}
        {errors.name && (
          <span className="test-sm text-red-500">This name is invalid.</span>
        )}
        <input
          id="email"
          placeholder="Email address"
          type="email"
          className={cn(
            "w-full rounded-xl max-w-[360px] h-[64px] border-black/20 border-2 p-5",
            loading ? "opacity-50" : ""
          )}
          {...register("email")}
          disabled={loading}
        />
        {errors.email && (
          <span className="test-sm text-red-500">This email is invalid.</span>
        )}
        <textarea
          id="message"
          placeholder="Message"
          className={cn(
            "w-full rounded-xl max-w-[360px] h-[176px] border-black/20 border-2 p-5",
            loading ? "opacity-50" : ""
          )}
          {...register("message")}
          disabled={loading}
        />
        {errors.message && (
          <span className="test-sm text-red-500">This message is invalid.</span>
        )}
        <button
          type="submit"
          className={cn(
            "max-w-[200px] h-[64px] bg-black/80 text-white font-bold rounded-xl flex items-center justify-center space-x-3 hover:cursor-pointer hover:bg-black",
            loading ? "opacity-50" : ""
          )}
          disabled={loading}
        >
          <p>Send Message</p>
          <Send />
        </button>
      </div>
    </form>
  );
};

export default ContactMeForm;
