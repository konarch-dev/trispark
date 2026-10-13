import React from 'react';
import { useModal } from '../context/ModalContext';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function Toast() {
  const { toastMessage, showToast } = useModal();

  if (!toastMessage) return null;

  const isSuccess = toastMessage.type === 'success';

  return (
    <div className="fixed bottom-6 right-6 z-[100] max-w-md animate-slide-down">
      <div
        className={`flex items-start gap-3 rounded-xl border p-4 shadow-xl backdrop-blur-md ${
          isSuccess
            ? 'border-emerald-200 bg-white/95 text-slate-800'
            : 'border-red-200 bg-white/95 text-slate-800'
        }`}
      >
        <div className="mt-0.5 shrink-0">
          {isSuccess ? (
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
          ) : (
            <AlertCircle className="h-5 w-5 text-red-600" />
          )}
        </div>
        <div className="flex-1 text-sm font-medium leading-relaxed">
          {toastMessage.message}
        </div>
        <button
          onClick={() => showToast(null)}
          className="shrink-0 text-slate-400 hover:text-slate-600 cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
