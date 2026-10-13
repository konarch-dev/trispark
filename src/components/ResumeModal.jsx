import React, { useState } from 'react';
import { useModal } from '../context/ModalContext';
import { X, UploadCloud, CheckCircle2, Loader2, FileText } from 'lucide-react';

export default function ResumeModal() {
  const { isResumeModalOpen, closeResumeModal, showToast } = useModal();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: 'Medical Solutions',
    experience: '3-5 years',
    smsConsent: true,
    termsConsent: true,
  });
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isResumeModalOpen) return null;

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      showToast('Please fill out all required fields.', 'error');
      return;
    }
    if (!formData.termsConsent) {
      showToast('Please accept the Terms & Privacy Policy.', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      showToast('Resume submitted successfully! A recruiter will contact you shortly.');
      setTimeout(() => {
        setSubmitted(false);
        setFile(null);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          role: 'Medical Solutions',
          experience: '3-5 years',
          smsConsent: true,
          termsConsent: true,
        });
        closeResumeModal();
      }, 2500);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 modal-backdrop animate-fade-in">
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-100">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 bg-slate-50/50">
          <div>
            <h3 className="font-serif text-xl font-bold text-slate-900">Submit Your Resume</h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Connect with top employers across 11 key industry sectors
            </p>
          </div>
          <button
            onClick={closeResumeModal}
            className="rounded-full p-1.5 text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-slate-900">Application Received!</h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Thank you for submitting your resume to <span className="font-semibold text-primary">Trispark</span>. Our specialized talent acquisition team will review your qualifications and reach out with matched opportunities.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="sarah@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Target Industry Role <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm bg-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="Medical Solutions">Medical Solutions & Healthcare</option>
                  <option value="IT Services">IT & Software Engineering</option>
                  <option value="BFSI">Banking, Financial Services & Insurance</option>
                  <option value="Pharma & Biotech">Pharma, Biotech & Medical Devices</option>
                  <option value="Supply Chain">Supply Chain & Logistics</option>
                  <option value="Automobile Industry">Automobile Industry</option>
                  <option value="Construction & Utility">Construction, Energy & Utility</option>
                  <option value="Food & Beverage">Food & Beverage</option>
                  <option value="Telecommunication">Telecommunication</option>
                  <option value="Production Solutions">Production & Manufacturing</option>
                  <option value="Allied Service">Allied Services</option>
                </select>
              </div>
            </div>

            {/* Resume File Upload */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Upload Resume (PDF, DOC, DOCX)
              </label>
              <div className="mt-1 flex justify-center rounded-xl border-2 border-dashed border-slate-200 px-6 pt-5 pb-6 hover:border-primary transition cursor-pointer relative bg-slate-50/50">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="space-y-1 text-center">
                  {file ? (
                    <div className="flex items-center justify-center gap-2 text-primary font-medium">
                      <FileText className="h-6 w-6" />
                      <span className="text-sm truncate max-w-xs">{file.name}</span>
                    </div>
                  ) : (
                    <>
                      <UploadCloud className="mx-auto h-8 w-8 text-primary" />
                      <div className="flex text-xs text-slate-600 justify-center">
                        <span className="font-semibold text-primary">Click to upload</span>
                        <span className="pl-1">or drag and drop</span>
                      </div>
                      <p className="text-[11px] text-slate-400">PDF, DOC, DOCX up to 10MB</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Consents */}
            <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.smsConsent}
                  onChange={(e) => setFormData({ ...formData, smsConsent: e.target.checked })}
                  className="mt-0.5 rounded border-slate-300 text-primary focus:ring-primary"
                />
                <span>
                  I agree to receive automated SMS/text messages from Trispark regarding job openings, interview schedules, and application updates. Message and data rates may apply.
                </span>
              </label>

              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.termsConsent}
                  onChange={(e) => setFormData({ ...formData, termsConsent: e.target.checked })}
                  className="mt-0.5 rounded border-slate-300 text-primary focus:ring-primary"
                />
                <span>
                  I agree to the <a href="/terms-and-conditions" className="text-primary underline">Terms & Conditions</a> and <a href="/privacy-policy" className="text-primary underline">Privacy Policy</a> of Trispark.
                </span>
              </label>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={closeResumeModal}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 rounded-lg hover:bg-slate-100 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Resume'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
