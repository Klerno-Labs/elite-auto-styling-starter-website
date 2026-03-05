import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, vehicle, service, message, _gotcha } = body;

    // Honeypot check for bots
    if (_gotcha) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Basic Validation
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and Phone are required." },
        { status: 400 }
      );
    }

    // In a real production environment, you would send an email here
    // using a service like Resend, SendGrid, or Nodemailer.
    // For this demo, we will log the data and return success.
    
    console.log("=== NEW LEAD SUBMISSION ===");
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Vehicle:", vehicle);
    console.log("Service:", service);
    console.log("Message:", message);
    console.log("==========================");

    // Example of how to integrate an email service (commented out):
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'contact@eliteautostyling.com',
    //   subject: `New Lead from ${name}`,
    //   html: `<p><strong>Name:</strong> ${name}</p><p><strong>Phone:</strong> ${phone}</p>...`
    // });

    return NextResponse.json(
      { success: true, message: "Message received successfully" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}