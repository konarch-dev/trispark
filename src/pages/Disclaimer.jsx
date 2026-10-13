import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, AlertCircle } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div className="py-8 space-y-12">
      <div className="container max-w-4xl">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="font-semibold text-slate-800">Disclaimer</span>
        </div>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3.5 py-1 text-xs font-semibold text-primary">
            <AlertCircle className="h-3.5 w-3.5" />
            <span>Disclaimers</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
            Disclaimers for Trispark
          </h1>
          <p className="text-xs text-muted-foreground">Last updated: October 2026</p>
        </div>
      </div>

      <div className="container max-w-4xl">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 shadow-xs space-y-6 text-sm text-slate-700 leading-relaxed">
          <p>
            If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at info@patternshiring.com.
          </p>

          <h2 className="font-serif text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
            General Disclaimer
          </h2>
          <p>
            All the information on this website — https://www.patternshiring.com — is published in good faith and for general information purpose only. Trispark does not make any warranties about the completeness, reliability, and accuracy of this information. Any action you take upon the information you find on this website is strictly at your own risk. Trispark will not be liable for any losses and/or damages in connection with the use of our website.
          </p>

          <h2 className="font-serif text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
            External Links
          </h2>
          <p>
            From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone bad.
          </p>

          <h2 className="font-serif text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
            Consent
          </h2>
          <p>
            By using our website, you hereby consent to our disclaimer and agree to its terms.
          </p>

          <h2 className="font-serif text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
            Update
          </h2>
          <p>
            Should we update, amend or make any changes to this document, those changes will be prominently posted here.
          </p>
        </div>
      </div>
    </div>
  );
}
