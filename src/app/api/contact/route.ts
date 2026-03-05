import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  vehicle: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  _gotcha: z.string().optional(), // Honeypot
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Server-side validation
    const result = contactSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid data", details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { _gotcha, ...data } = result.data;

    // Honeypot check
    if (_gotcha) {
      // Silently succeed to fool bots
      return NextResponse.json({ success: true });
    }

    // In a real production app, you would send an email here using Nodemailer, Resend, SendGrid, etc.
    // For this build, we will simulate the success state after a slight delay.
    console.log("Received form submission:", data);
    
    // Simulate email service delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}