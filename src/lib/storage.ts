import fs from 'fs';
import path from 'path';
import { EnquiryPayload, EnquiryRecord, ContactMessage, NewsletterSubscriber } from '../types';

interface DatabaseSchema {
  enquiries: EnquiryRecord[];
  contacts: ContactMessage[];
  newsletter: NewsletterSubscriber[];
}

const DATA_DIR = path.join(process.cwd(), 'data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

// In-memory fallback in case of read-only serverless environment
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
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DB_FILE)) {
      fs.writeFileSync(DB_FILE, JSON.stringify(memoryStore, null, 2), 'utf-8');
      return memoryStore;
    }
    const content = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(content);
  } catch (err) {
    console.warn("Storage falling back to in-memory:", err);
    return memoryStore;
  }
}

function saveDb(data: DatabaseSchema): void {
  memoryStore = data;
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.warn("Could not write to disk, saved in memory:", err);
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
    database: "JSON-File / In-Memory (Persistent)"
  };
}
