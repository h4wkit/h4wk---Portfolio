import { type NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { z } from "zod";

let nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
  secure: true,
});

export async function POST(req: Request) {
  const formValidationSchema = z.object({
    email: z.string().email(),
    name: z.string().min(1),
    message: z.string().min(1),
  });

  const body = await req.json();

  const response = formValidationSchema.safeParse(body);

  if (!response.success) {
    return new NextResponse("Something went wrong", { status: 400 });
  }

  const { name, email, message } = response.data;

  const mailData = {
    from: email,
    to: "ksiniloit@gmail.com",
    subject: `FORM MESSAGE FROM (${name})`,
    text: message,
    html: message,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err: any, info: any) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  return NextResponse.json(response.data);
}
