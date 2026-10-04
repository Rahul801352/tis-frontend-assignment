import { NextRequest, NextResponse } from 'next/server';
import { subscribeNewsletter } from '@/lib/storage';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || !email.includes('@') || !email.includes('.')) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const sub = subscribeNewsletter(email.trim());

    return NextResponse.json(
      {
        success: true,
        message: "You have subscribed to the TIS Monthly Newsletter & Admissions Bulletin.",
        data: sub
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API /api/newsletter error:", error);
    return NextResponse.json(
      { success: false, error: "Newsletter subscription failed." },
      { status: 500 }
    );
  }
}
