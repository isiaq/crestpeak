import { Link } from 'react-router-dom';
import {
  ArrowRight, Code2, Megaphone, Lightbulb, BarChart3,
  CheckCircle2, Star, ChevronRight, Shield, Zap, Users, TrendingUp
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const services = [
  {
    icon: Code2,
    title: 'Web & Software Development',
    description: 'Bespoke web applications, APIs, and software solutions engineered for performance, scalability, and long-term maintainability.',
    href: '/services#web-dev',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Data-led campaigns across SEO, PPC, and social — designed to attract, engage, and convert your ideal customers.',
    href: '/services#marketing',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Lightbulb,
    title: 'IT Consulting',
    description: 'Strategic technology guidance that aligns your infrastructure, processes, and tooling with your business goals.',
    href: '/services#consulting',
    color: 'from-teal-500 to-emerald-500',
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    description: 'Turn raw data into actionable intelligence with dashboards, data pipelines, and analytics frameworks.',
    href: '/services#analytics',
    color: 'from-emerald-500 to-green-500',
  },
];

const differentiators = [
  {
    icon: Shield,
    title: 'Reliability You Can Count On',
    description: 'We deliver on time and on spec. Our structured delivery process ensures transparent communication at every milestone.',
  },
  {
    icon: Zap,
    title: 'Technical Depth',
    description: 'Our engineers and strategists bring senior-level expertise across the full technology stack — no juniors learning on your budget.',
  },
  {
    icon: Users,
    title: 'Client-First Approach',
    description: 'Your success is our metric. We build lasting partnerships, not transactional relationships — your growth drives ours.',
  },
  {
    icon: TrendingUp,
    title: 'Outcome-Driven',
    description: 'Every decision we make is tied to measurable outcomes. We set clear KPIs and hold ourselves accountable to them.',
  },
];

const caseStudies = [
  {
    title: 'E-Commerce Platform Rebuild',
    category: 'Web Development',
    result: '+142% conversion rate',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Node.js', 'Postgres'],
  },
  {
    title: 'Growth Marketing Overhaul',
    category: 'Digital Marketing',
    result: '3.4x ROI in 6 months',
    image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['SEO', 'PPC', 'Analytics'],
  },
  {
    title: 'Data Warehouse Modernisation',
    category: 'Data & Analytics',
    result: '60% faster reporting',
    image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['BigQuery', 'dbt', 'Looker'],
  },
];

const testimonials = [
  {
    quote: "Crestpeak transformed our digital presence completely. They understood our vision and delivered a product that exceeded every expectation.",
    name: 'Sarah Mitchell',
    role: 'CEO, Norwood Group',
    initials: 'SM',
  },
  {
    quote: "Their analytics work gave us clarity we never had before. Decision-making has become so much sharper — we can actually see what's working.",
    name: 'James Okafor',
    role: 'Head of Product, Vantage Labs',
    initials: 'JO',
  },
  {
    quote: "The marketing team at Crestpeak doesn't just execute campaigns — they think strategically. Our pipeline has never been stronger.",
    name: 'Priya Sharma',
    role: 'Marketing Director, Helix Retail',
    initials: 'PS',
  },
];

const clients = ['Norwood Group', 'Vantage Labs', 'Helix Retail', 'Orion Finance', 'Meridian Tech', 'BlueSky Media'];

export default function Home() {
  useScrollReveal();
  useDocumentMeta(
    'Digital Services & Technology Partner',
    'Crestpeak Digital partners with forward-thinking businesses to design, build, and grow digital products — from first concept to full-scale operation.'
  );

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-teal-500 rounded-full blur-3xl" />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-cyan-300 text-sm font-medium px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Digital Services &amp; Technology Partner
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            We Build Digital<br />
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Experiences That Scale
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Crestpeak Digital partners with forward-thinking businesses to design, build, and grow digital products — from first concept to full-scale operation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Get a Quote <ArrowRight size={18} />
            </Link>
            <Link to="/work" className="btn-outline text-base px-8 py-4">
              View Our Work
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { value: '120+', label: 'Projects Delivered' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '8+', label: 'Years of Expertise' },
              { value: '40+', label: 'Team Members' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label reveal">What We Do</span>
            <h2 className="section-title reveal reveal-delay-1">Services Built for<br />Modern Business</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto reveal reveal-delay-2">
              End-to-end digital services — from strategic consulting to hands-on delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`card p-6 group reveal reveal-delay-${i + 1}`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <service.icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 leading-snug">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{service.description}</p>
                <Link
                  to={service.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-500 hover:gap-2 transition-all"
                >
                  Learn more <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Crestpeak */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label reveal">Why Crestpeak</span>
              <h2 className="section-title reveal reveal-delay-1 mb-6">
                The Right Partner for<br />Your Digital Journey
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed reveal reveal-delay-2 mb-8">
                We combine deep technical expertise with strategic thinking to deliver outcomes that actually move the needle — not just deliverables that look good in a deck.
              </p>
              <div className="space-y-3 reveal reveal-delay-3">
                {['ISO-aligned delivery processes', 'Senior-only talent — no juniors', 'Transparent pricing, no surprises', 'Dedicated project management'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-cyan-500 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 reveal reveal-delay-4">
                <Link to="/about" className="btn-primary">
                  Meet the Team <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {differentiators.map((d, i) => (
                <div key={d.title} className={`bg-white rounded-2xl p-5 border border-slate-100 shadow-sm reveal reveal-delay-${i + 1}`}>
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center mb-3">
                    <d.icon size={18} className="text-cyan-500" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">{d.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{d.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-4">
            <div>
              <span className="section-label reveal">Featured Work</span>
              <h2 className="section-title reveal reveal-delay-1">Results That Speak<br />for Themselves</h2>
            </div>
            <Link to="/work" className="btn-secondary reveal reveal-delay-2 text-sm">
              View All Work <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {caseStudies.map((cs, i) => (
              <Link
                to="/work"
                key={cs.title}
                className={`group card overflow-hidden reveal reveal-delay-${i + 1}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-cyan-500 uppercase tracking-wide">{cs.category}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{cs.title}</h3>
                  <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    <TrendingUp size={11} />
                    {cs.result}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cs.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label reveal text-cyan-400">Client Voices</span>
            <h2 className="section-title text-white reveal reveal-delay-1">Trusted by Growing<br />Businesses</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`bg-white/5 border border-white/10 rounded-2xl p-6 reveal reveal-delay-${i + 1}`}>
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-5 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-white text-xs font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{t.name}</div>
                    <div className="text-slate-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Client logos */}
          <div className="border-t border-white/10 pt-10">
            <p className="text-center text-slate-500 text-sm mb-6 uppercase tracking-widest">Trusted by</p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {clients.map((client) => (
                <span key={client} className="text-slate-500 font-semibold text-sm hover:text-slate-300 transition-colors">
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-cyan-500 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 reveal">
            Ready to Get Started?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 reveal reveal-delay-1">
            Let's Build Something<br />Remarkable Together
          </h2>
          <p className="text-xl text-cyan-50 mb-10 reveal reveal-delay-2">
            Book a free 30-minute discovery call. No obligation, just a conversation about your goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal reveal-delay-3">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-cyan-600 hover:bg-cyan-50 font-bold px-8 py-4 rounded-lg transition-all shadow-xl hover:-translate-y-0.5 text-base">
              Book a Call <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 border-2 border-white/40 text-white hover:border-white font-semibold px-8 py-4 rounded-lg transition-all text-base">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
