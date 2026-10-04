import { NextRequest, NextResponse } from 'next/server';
import { createEnquiry } from '@/lib/storage';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, countryCode, classGrade, state, message, consent } = body;

    // Validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== 'string' || phone.replace(/\D/g, '').length < 8) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid 10-digit mobile contact number." },
        { status: 400 }
      );
    }

    if (!classGrade || classGrade.trim() === '') {
      return NextResponse.json(
        { success: false, error: "Please select the class for admission." },
        { status: 400 }
      );
    }

    if (!state || state.trim() === '') {
      return NextResponse.json(
        { success: false, error: "Please select your state/region." },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { success: false, error: "Please acknowledge consent to receive admission details." },
        { status: 400 }
      );
    }

    const record = createEnquiry({
      fullName: fullName.trim(),
      email: email ? email.trim() : undefined,
      phone: phone.trim(),
      countryCode: countryCode || '91',
      classGrade: classGrade.trim(),
      state: state.trim(),
      message: message ? message.trim() : undefined,
      consent: Boolean(consent)
    });

    return NextResponse.json(
      {
        success: true,
        message: `Thank you, ${fullName}! Your admission inquiry has been logged. Our admissions counselor will contact you within 24 hours.`,
        data: record
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("API /api/enquiry error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error processing admission enquiry." },
      { status: 500 }
    );
  }
}
