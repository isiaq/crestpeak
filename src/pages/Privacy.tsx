import { useScrollReveal } from '../hooks/useScrollReveal';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function Privacy() {
  useScrollReveal();
  useDocumentMeta(
    'Privacy Policy',
    'How Crestpeak Digital Limited collects, uses, and protects your personal data.'
  );

  return (
    <div>
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label text-cyan-400 reveal">Legal</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 reveal reveal-delay-1">
            Privacy Policy
          </h1>
          <p className="text-slate-400 reveal reveal-delay-2">Last updated: {new Date().getFullYear()}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate">
          <div className="reveal space-y-8 text-slate-600 leading-relaxed">
            <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
              This is placeholder policy text generated as a starting point. Please have it reviewed by
              a qualified solicitor before relying on it, and replace this notice once that review is complete.
            </p>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Who we are</h2>
              <p>
                Crestpeak Digital Limited ("Crestpeak", "we", "us") is a digital services company based in
                London, United Kingdom. This policy explains what personal data we collect when you use this
                website or contact us, and how we use it.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Information we collect</h2>
              <p>
                When you submit our contact form we collect your name, email address, company name (optional),
                the service you're interested in, and your message. We do not collect payment information
                through this website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. How we use your information</h2>
              <p>
                We use the information you submit solely to respond to your enquiry, and to provide the
                services you request. We do not sell your data to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Data retention</h2>
              <p>
                We retain enquiry data for as long as necessary to respond to you and maintain business
                records, after which it is securely deleted.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Your rights</h2>
              <p>
                Under UK GDPR you have the right to access, correct, or request deletion of your personal
                data. To exercise these rights, contact us at{' '}
                <a href="mailto:hello@crestpeak.digital" className="text-cyan-600 hover:text-cyan-500 font-medium">
                  hello@crestpeak.digital
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. Contact</h2>
              <p>
                Questions about this policy can be sent to{' '}
                <a href="mailto:hello@crestpeak.digital" className="text-cyan-600 hover:text-cyan-500 font-medium">
                  hello@crestpeak.digital
                </a>{' '}
                or 12 Finsbury Square, London EC2A 1AR, United Kingdom.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
