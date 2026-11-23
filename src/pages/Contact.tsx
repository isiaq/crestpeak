import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, Send, Loader2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

// Set in your .env file (and in your host's environment variables for production):
// VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

const services = [
  'Web & Software Development',
  'Digital Marketing',
  'IT Consulting',
  'Data & Analytics Solutions',
  'Other / Not Sure Yet',
];

type FormData = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Name is required.';
  if (!data.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!data.service) errors.service = 'Please select a service.';
  if (!data.message.trim()) {
    errors.message = 'Message is required.';
  } else if (data.message.trim().length < 20) {
    errors.message = 'Please provide a bit more detail (at least 20 characters).';
  }
  return errors;
}

export default function Contact() {
  useScrollReveal();
  useDocumentMeta(
    'Contact',
    "Get in touch with Crestpeak Digital. Book a free 30-minute discovery call or send us a message — we'll respond within one business day."
  );
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    if (!FORMSPREE_ENDPOINT) {
      setSubmitError(
        'This form is not yet connected to a backend. Set VITE_FORMSPREE_ENDPOINT in your environment to enable submissions.'
      );
      return;
    }

    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          service: form.service,
          message: form.message,
        }),
      });

      if (!res.ok) {
        throw new Error(`Form submission failed with status ${res.status}`);
      }

      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        "Something went wrong sending your message. Please try again, or email us directly at hello@crestpeak.digital."
      );
      console.error('Contact form submission failed:', err);
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass = (field: keyof FormData) =>
    `w-full bg-white border rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors ${
      errors[field]
        ? 'border-red-400 focus:border-red-500 bg-red-50'
        : 'border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100'
    }`;

  return (
    <div>
      {/* Page hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-1/4 w-80 h-80 bg-cyan-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label text-cyan-400 reveal">Get in Touch</span>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 reveal reveal-delay-1">
            Let's Start a Conversation
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto reveal reveal-delay-2">
            Whether you have a clear brief or just an idea, we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="reveal">
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Contact Details</h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Reach us directly or fill in the form and we'll get back to you within one business day.
                </p>
              </div>

              <div className="space-y-5 reveal reveal-delay-1">
                {[
                  { icon: Mail, label: 'Email', value: 'hello@crestpeak.digital', href: 'mailto:hello@crestpeak.digital' },
                  { icon: Phone, label: 'Phone', value: '+44 20 7946 0000', href: 'tel:+442079460000' },
                  { icon: MapPin, label: 'Address', value: '12 Finsbury Square, London EC2A 1AR, United Kingdom', href: 'https://maps.google.com', external: true },
                ].map(({ icon: Icon, label, value, href, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500 transition-colors">
                      <Icon size={16} className="text-cyan-500 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{label}</div>
                      <div className="text-slate-800 text-sm mt-0.5">{value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="reveal reveal-delay-3">
                <div className="rounded-2xl overflow-hidden border border-slate-200 aspect-[4/3] bg-slate-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex flex-col items-center justify-center text-center p-6">
                    <MapPin size={28} className="text-slate-400 mb-2" />
                    <p className="text-slate-500 text-sm font-medium">12 Finsbury Square</p>
                    <p className="text-slate-400 text-xs">London EC2A 1AR</p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 text-xs text-cyan-600 hover:text-cyan-500 font-semibold underline"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 reveal reveal-delay-1">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={32} className="text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-500 max-w-sm mx-auto">
                      Thanks for reaching out. We'll review your message and get back to you within one business day.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', service: '', message: '' }); }}
                      className="mt-6 text-sm text-cyan-500 hover:text-cyan-600 font-semibold"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">
                            Full Name <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Jane Smith"
                            className={inputClass('name')}
                          />
                          {errors.name && (
                            <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                              <AlertCircle size={11} /> {errors.name}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">
                            Email Address <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="jane@company.com"
                            className={inputClass('email')}
                          />
                          {errors.email && (
                            <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                              <AlertCircle size={11} /> {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Acme Ltd"
                          className={inputClass('company')}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                          Service Interested In <span className="text-red-400">*</span>
                        </label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className={`${inputClass('service')} appearance-none`}
                        >
                          <option value="">Select a service…</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        {errors.service && (
                          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle size={11} /> {errors.service}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                          Message <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Tell us about your project, goals, and any relevant timelines or constraints…"
                          className={`${inputClass('message')} resize-none`}
                        />
                        {errors.message && (
                          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle size={11} /> {errors.message}
                          </p>
                        )}
                      </div>

                      {submitError && (
                        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 flex items-start gap-2">
                          <AlertCircle size={15} className="flex-shrink-0 mt-0.5" /> {submitError}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full btn-primary justify-center py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {submitting ? (
                          <>
                            <Loader2 size={16} className="animate-spin" /> Sending…
                          </>
                        ) : (
                          <>
                            Send Message <Send size={16} />
                          </>
                        )}
                      </button>

                      <p className="text-xs text-slate-400 text-center">
                        We'll respond within one business day. No spam, ever.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom FAQ strip */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-slate-900 mb-8 text-center reveal">Common Questions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: 'How quickly do you respond?', a: 'We aim to respond to all enquiries within one business day, often sooner.' },
              { q: 'Do you work with startups?', a: 'Yes — we work with businesses of all sizes, from early-stage startups to large enterprises.' },
              { q: 'Can you work with an existing team?', a: 'Absolutely. We\'re comfortable integrating with in-house teams or working as your complete digital partner.' },
              { q: 'What does the engagement process look like?', a: 'Discovery call → proposal → engagement kick-off. Most projects begin within 2–3 weeks of initial contact.' },
            ].map((faq, i) => (
              <div key={faq.q} className={`reveal reveal-delay-${i + 1}`}>
                <h4 className="font-semibold text-slate-900 mb-1.5 text-sm">{faq.q}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
