import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, FileCheck } from 'lucide-react';

export default function TermsConditions() {
  return (
    <div className="py-8 space-y-12">
      <div className="container max-w-4xl">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="font-semibold text-slate-800">Terms and Conditions</span>
        </div>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3.5 py-1 text-xs font-semibold text-primary">
            <FileCheck className="h-3.5 w-3.5" />
            <span>User Agreement</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
            Terms and Conditions
          </h1>
          <p className="text-xs text-muted-foreground">Last updated: October 2026</p>
        </div>
      </div>

      <div className="container max-w-4xl">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 shadow-xs space-y-6 text-sm text-slate-700 leading-relaxed">
          <p>
            Welcome to Trispark. These terms and conditions outline the rules and regulations for the use of Trispark's Website, located at https://www.patternshiring.com.
          </p>
          <p>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use Trispark if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h2 className="font-serif text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
            1. Staffing & Placement Services
          </h2>
          <p>
            Trispark functions as an intermediary talent agency connecting candidates with client organizations. Submission of an application, resume, or profile does not constitute a guarantee of employment, interview scheduling, or contractual engagement. All employment decisions remain the sole discretion of our partner employers.
          </p>

          <h2 className="font-serif text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
            2. Candidate Representations & Accuracy
          </h2>
          <p>
            You agree to provide true, current, and complete information regarding your qualifications, certifications, identity, and work history. Providing fraudulent resumes or impersonating other individuals constitutes grounds for immediate termination of representation and possible legal recourse.
          </p>

          <h2 className="font-serif text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
            3. Intellectual Property Rights
          </h2>
          <p>
            Unless otherwise stated, Trisparkand/or its licensors own the intellectual property rights for all material on Trispark. All intellectual property rights are reserved. You may view and print pages for personal candidate use subject to restrictions set in these terms.
          </p>

          <h2 className="font-serif text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
            4. Limitation of Liability
          </h2>
          <p>
            In no event shall Trispark LLC, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website or outcomes of employment contracts negotiated between candidates and client companies.
          </p>

          <h2 className="font-serif text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
            5. Governing Law
          </h2>
          <p>
            These Terms will be governed by and interpreted in accordance with the laws of the State of Delaware, United States, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Delaware for the resolution of any disputes.
          </p>
        </div>
      </div>
    </div>
  );
}
