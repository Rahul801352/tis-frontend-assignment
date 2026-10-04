import { NextRequest, NextResponse } from 'next/server';
import { createContact } from '@/lib/storage';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message, subject } = body;

    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter your name." },
        { status: 400 }
      );
    }

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "Please write a message with at least 5 characters." },
        { status: 400 }
      );
    }

    const record = createContact(
      name.trim(),
      email.trim(),
      phone ? phone.trim() : "Not provided",
      message.trim(),
      subject ? subject.trim() : "General Contact Inquiry"
    );

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent to TIS Admissions Office. We will respond promptly.",
        data: record
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("API /api/contact error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
