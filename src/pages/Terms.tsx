import { useScrollReveal } from '../hooks/useScrollReveal';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function Terms() {
  useScrollReveal();
  useDocumentMeta(
    'Terms of Service',
    'The terms that govern your use of the Crestpeak Digital Limited website and services.'
  );

  return (
    <div>
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label text-cyan-400 reveal">Legal</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 reveal reveal-delay-1">
            Terms of Service
          </h1>
          <p className="text-slate-400 reveal reveal-delay-2">Last updated: {new Date().getFullYear()}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal space-y-8 text-slate-600 leading-relaxed">
            <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
              This is placeholder terms text generated as a starting point. Please have it reviewed by
              a qualified solicitor before relying on it, and replace this notice once that review is complete.
            </p>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Acceptance of terms</h2>
              <p>
                By accessing this website, you agree to be bound by these terms of service. If you do not
                agree with any part of these terms, please do not use this website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Services</h2>
              <p>
                Any services described on this website (web and software development, digital marketing,
                IT consulting, data and analytics) are subject to a separate, signed engagement agreement
                between Crestpeak Digital Limited and the client. Nothing on this website constitutes a
                binding offer of services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. Intellectual property</h2>
              <p>
                All content on this website — text, graphics, logos, and case study material — is the
                property of Crestpeak Digital Limited or its clients and may not be reproduced without
                permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Limitation of liability</h2>
              <p>
                This website and its content are provided "as is" without warranties of any kind.
                Crestpeak Digital Limited is not liable for any damages arising from the use of this
                website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Governing law</h2>
              <p>
                These terms are governed by the laws of England and Wales.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. Contact</h2>
              <p>
                Questions about these terms can be sent to{' '}
                <a href="mailto:hello@crestpeak.digital" className="text-cyan-600 hover:text-cyan-500 font-medium">
                  hello@crestpeak.digital
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
