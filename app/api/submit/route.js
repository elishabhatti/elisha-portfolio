import Contact from "@/models/Contact";
import connectToDatabase from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectToDatabase();
    const { firstName, lastName, email, phone, service, message } =
      await request.json();
    const newContact = new Contact({
      firstName,
      lastName,
      email,
      phone,
      service,
      message,
    });
    await newContact.save();
    return NextResponse.json({
      message: "Contact Submitted Will You contact you soon as possible",
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({ error: "Error in Server", status: 500 });
  }
}
