import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield } from 'lucide-react';
import privacyData from '../data/privacyPolicy.json';

export default function PrivacyPolicy() {
  return (
    <div className="py-8 space-y-12">
      <div className="container max-w-4xl">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="font-semibold text-slate-800">Privacy Policy</span>
        </div>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3.5 py-1 text-xs font-semibold text-primary">
            <Shield className="h-3.5 w-3.5" />
            <span>Legal Notice</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
            Privacy Policy
          </h1>
          <p className="text-xs text-muted-foreground">Last updated: October 2026</p>
        </div>
      </div>

      <div className="container max-w-4xl">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 shadow-xs space-y-6 text-sm text-slate-700 leading-relaxed">
          <p>
            At Trispark ("Trispark", "we", "our", or "us"), we prioritize your privacy and are committed to protecting the personal information you share with us. This Privacy Policy details our practices regarding the collection, use, and disclosure of personal data when you use our website and talent recruitment services.
          </p>

          <h2 className="font-serif text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
            1. Information We Collect
          </h2>
          <p>
            We collect personal information that you provide voluntarily when submitting a resume, applying for jobs, filling out contact forms, or communicating with our team. This data includes:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Contact details: Full Name, email address, physical address, and telephone number.</li>
            <li>Professional profile: Resumes, CVs, employment history, certifications, academic credentials, and references.</li>
            <li>Job preferences: Desired salary, geographic availability, work authorization status, and target industry sector.</li>
          </ul>

          <h2 className="font-serif text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
            2. SMS / Text Messaging Policy
          </h2>
          <p>
            When you opt-in to SMS text messaging, Trispark uses mobile numbers solely to communicate regarding job applications, interview reminders, placement status, and recruitment inquiries.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>We do not sell, rent, or share your mobile phone number with third parties for affiliate marketing or unsolicited promotional purposes.</li>
            <li>You may reply "STOP" at any time to opt out of future SMS messages. Message and data rates may apply.</li>
          </ul>

          <h2 className="font-serif text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
            3. How We Use Your Data
          </h2>
          <p>
            We utilize collected personal data to match candidates with prospective employers, conduct necessary background and license verifications, improve our recruitment platform, comply with labor laws, and fulfill contractual obligations with client companies.
          </p>

          <h2 className="font-serif text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
            4. Data Security & Retention
          </h2>
          <p>
            Trispark implements administrative, technical, and physical safeguards designed to protect personal information against unauthorized access, destruction, loss, alteration, or misuse. We retain candidate records for as long as necessary to provide recruitment opportunities and comply with federal and state regulations.
          </p>

          <h2 className="font-serif text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
            5. Contact Us Regarding Your Rights
          </h2>
          <p>
            If you have questions about this Privacy Policy or wish to request the deletion or correction of your profile data, please contact our privacy compliance officer at:
          </p>
          <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 text-xs">
            <p className="font-semibold text-slate-900">Trispark LLC</p>
            <p>2093 Philadelphia Pike, #9086 Claymont, Delaware 19703, USA</p>
            <p>Email: <a href="mailto:info@patternshiring.com" className="text-primary underline">info@patternshiring.com</a></p>
            <p>Phone: business@tecnoprism.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
