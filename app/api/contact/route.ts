import { type NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { z } from "zod";

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

  //   const { name, email, zipcode, subcribe } = response.data;

  return NextResponse.json(response.data);
}
