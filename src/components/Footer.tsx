import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const services = [
  { label: 'Web & Software Development', to: '/services#web-dev' },
  { label: 'Digital Marketing', to: '/services#marketing' },
  { label: 'IT Consulting', to: '/services#consulting' },
  { label: 'Data & Analytics', to: '/services#analytics' },
];

const company = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Work', to: '/work' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  }

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                Crestpeak<span className="text-cyan-400">.</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              We partner with ambitious businesses to build, grow, and optimise their digital presence.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.to}>
                  <Link to={s.to} className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Company</h4>
            <ul className="space-y-2.5">
              {company.map((c) => (
                <li key={c.to}>
                  <Link to={c.to} className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Mail size={13} className="text-cyan-500 flex-shrink-0" />
                hello@crestpeak.digital
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Phone size={13} className="text-cyan-500 flex-shrink-0" />
                +44 20 7946 0000
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin size={13} className="text-cyan-500 flex-shrink-0" />
                London, United Kingdom
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Stay Updated</h4>
            <p className="text-sm text-slate-400 mb-4">
              Digital insights and company news, delivered monthly.
            </p>
            {subscribed ? (
              <p className="text-cyan-400 text-sm font-medium">Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  Subscribe <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Crestpeak Digital Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
