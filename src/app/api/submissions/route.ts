import { NextResponse } from 'next/server';
import { getAllEnquiries, getAllContacts, getStats } from '@/lib/storage';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const enquiries = getAllEnquiries();
    const contacts = getAllContacts();
    const stats = getStats();

    return NextResponse.json({
      success: true,
      data: {
        enquiries,
        contacts,
        stats
      }
    });
  } catch (error) {
    console.error("API /api/submissions error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch submissions." },
      { status: 500 }
    );
  }
}
