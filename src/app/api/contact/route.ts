import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, vehicle, service, message, _gotcha } = body;

    // Honeypot check
    if (_gotcha) {
      return NextResponse.json({ message: "Spam detected" }, { status: 200 });
    }

    // Basic validation
    if (!name || !phone || !email) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // In a real app, you would send an email here using Nodemailer, SendGrid, or Resend
    // For this demo, we will simulate a successful submission
    console.log("Form submission received:", { name, phone, email, vehicle, service, message });

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}