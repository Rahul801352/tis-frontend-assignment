import fs from 'fs';
import path from 'path';
import os from 'os';
import { EnquiryPayload, EnquiryRecord, ContactMessage, NewsletterSubscriber } from '../types';

interface DatabaseSchema {
  enquiries: EnquiryRecord[];
  contacts: ContactMessage[];
  newsletter: NewsletterSubscriber[];
}

// In serverless environments (Vercel/AWS Lambda), process.cwd() is read-only,
// but os.tmpdir() (/tmp) is writable and persists across function calls on the worker.
const TMP_DB = path.join(os.tmpdir(), 'tis_database_v2.json');
const LOCAL_DB = path.join(process.cwd(), 'data', 'db.json');

// In-memory global store to survive warm lambdas
let memoryStore: DatabaseSchema = {
  enquiries: [
    {
      id: "enq-init-1",
      referenceId: "TIS-2026-8921",
      fullName: "Vikram Malhotra",
      email: "vikram.malhotra@example.com",
      phone: "9876543210",
      countryCode: "91",
      classGrade: "Class IX",
      state: "Delhi",
      message: "Interested in boarding admission for Class 9 with basketball training.",
      consent: true,
      createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
      status: "CONTACTED"
    },
    {
      id: "enq-init-2",
      referenceId: "TIS-2026-9044",
      fullName: "Ananya Deshmukh",
      email: "deshmukh.family@example.com",
      phone: "9812345678",
      countryCode: "91",
      classGrade: "Class XI",
      state: "Maharashtra",
      message: "Looking for Science stream (PCM) with competitive JEE guidance.",
      consent: true,
      createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
      status: "PENDING"
    }
  ],
  contacts: [
    {
      id: "con-init-1",
      name: "Rajesh Singhania",
      email: "r.singhania@example.com",
      phone: "9823019283",
      subject: "Campus Tour Request",
      message: "We would like to visit the campus this coming Saturday at 11 AM.",
      createdAt: new Date(Date.now() - 3600000 * 48).toISOString()
    }
  ],
  newsletter: [
    {
      id: "sub-init-1",
      email: "parent.community@example.com",
      subscribedAt: new Date(Date.now() - 3600000 * 72).toISOString()
    }
  ]
};

function ensureDbExists(): DatabaseSchema {
  // 1. Try reading from TMP_DB (writable persistent location on Vercel)
  try {
    if (fs.existsSync(TMP_DB)) {
      const content = fs.readFileSync(TMP_DB, 'utf-8');
      const parsed = JSON.parse(content);
      if (parsed && Array.isArray(parsed.enquiries)) {
        memoryStore = parsed;
        return parsed;
      }
    }
  } catch (err) {
    console.warn("Could not read TMP_DB:", err);
  }

  // 2. Try reading bundled LOCAL_DB
  try {
    if (fs.existsSync(LOCAL_DB)) {
      const content = fs.readFileSync(LOCAL_DB, 'utf-8');
      const parsed = JSON.parse(content);
      if (parsed && Array.isArray(parsed.enquiries)) {
        memoryStore = parsed;
        // Copy to TMP_DB so future writes/reads use it
        try {
          fs.writeFileSync(TMP_DB, JSON.stringify(parsed, null, 2), 'utf-8');
        } catch (_) {}
        return parsed;
      }
    }
  } catch (err) {
    console.warn("Could not read LOCAL_DB:", err);
  }

  // 3. Fallback to memory store
  try {
    fs.writeFileSync(TMP_DB, JSON.stringify(memoryStore, null, 2), 'utf-8');
  } catch (_) {}
  return memoryStore;
}

function saveDb(data: DatabaseSchema): void {
  memoryStore = data;
  
  // Always write to TMP_DB (writable on Vercel)
  try {
    fs.writeFileSync(TMP_DB, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.warn("Could not write to TMP_DB:", err);
  }

  // Also try writing to LOCAL_DB for local dev
  try {
    const dataDir = path.dirname(LOCAL_DB);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(LOCAL_DB, JSON.stringify(data, null, 2), 'utf-8');
  } catch (_) {
    // Expected to fail on read-only serverless filesystems
  }
}

export function createEnquiry(payload: EnquiryPayload): EnquiryRecord {
  const db = ensureDbExists();
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const referenceId = `TIS-2026-${randomSuffix}`;
  
  const record: EnquiryRecord = {
    ...payload,
    id: `enq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    referenceId,
    createdAt: new Date().toISOString(),
    status: 'PENDING'
  };

  db.enquiries.unshift(record);
  saveDb(db);
  return record;
}

export function getAllEnquiries(): EnquiryRecord[] {
  const db = ensureDbExists();
  return db.enquiries;
}

export function createContact(name: string, email: string, phone: string, message: string, subject?: string): ContactMessage {
  const db = ensureDbExists();
  const record: ContactMessage = {
    id: `contact_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    name,
    email,
    phone,
    subject: subject || "General Inquiry",
    message,
    createdAt: new Date().toISOString()
  };

  db.contacts.unshift(record);
  saveDb(db);
  return record;
}

export function getAllContacts(): ContactMessage[] {
  const db = ensureDbExists();
  return db.contacts;
}

export function subscribeNewsletter(email: string): NewsletterSubscriber {
  const db = ensureDbExists();
  const existing = db.newsletter.find(n => n.email.toLowerCase() === email.toLowerCase());
  if (existing) {
    return existing;
  }

  const record: NewsletterSubscriber = {
    id: `sub_${Date.now()}`,
    email: email.toLowerCase(),
    subscribedAt: new Date().toISOString()
  };

  db.newsletter.unshift(record);
  saveDb(db);
  return record;
}

export function getStats() {
  const db = ensureDbExists();
  return {
    totalEnquiries: db.enquiries.length,
    totalContacts: db.contacts.length,
    newsletterSubscribers: db.newsletter.length,
    recentEnquiries: db.enquiries.slice(0, 5),
    systemStatus: "ONLINE",
    uptimeSeconds: Math.floor(process.uptime()),
    database: "Vercel /tmp + File Storage (Active)"
  };
}
