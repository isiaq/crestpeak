import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Megaphone, Lightbulb, BarChart3, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const services = [
  {
    id: 'web-dev',
    icon: Code2,
    label: 'Web & Software Development',
    headline: 'Digital Products Built to Last',
    description:
      'We design and build web applications, APIs, and platforms that are fast, scalable, and maintainable. From greenfield builds to legacy modernisation, our engineers deliver code that stands up to scrutiny and grows with your business.',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-blue-500 to-cyan-500',
    deliverables: [
      'Custom web application development (React, Next.js, Vue)',
      'Backend APIs & microservices (Node.js, Python, Go)',
      'E-commerce & marketplace platforms',
      'Mobile-responsive progressive web apps',
      'Code audits and legacy system refactoring',
      'DevOps, CI/CD, and cloud infrastructure setup',
    ],
    process: [
      { step: '01', title: 'Discovery', desc: 'We map requirements, define architecture, and align on success metrics.' },
      { step: '02', title: 'Design', desc: 'Wireframes, prototypes, and component design reviewed with your stakeholders.' },
      { step: '03', title: 'Build', desc: 'Iterative sprints with demos every two weeks. No black boxes.' },
      { step: '04', title: 'Launch', desc: 'Staged deployment, QA, performance testing, and go-live support.' },
      { step: '05', title: 'Evolve', desc: 'Ongoing retainer for maintenance, feature development, and scaling.' },
    ],
  },
  {
    id: 'marketing',
    icon: Megaphone,
    label: 'Digital Marketing',
    headline: 'Growth That\'s Measurable, Not Magical',
    description:
      'We build and execute data-driven marketing strategies that attract the right audience and convert them at scale. From organic search to paid acquisition, every channel we touch is tracked, optimised, and tied to real business outcomes.',
    image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-cyan-500 to-teal-500',
    deliverables: [
      'SEO strategy, technical audits, and content programmes',
      'Google Ads & paid social (Meta, LinkedIn, TikTok)',
      'Email marketing and automation workflows',
      'Conversion rate optimisation (CRO)',
      'Brand strategy and messaging frameworks',
      'Monthly performance reporting and attribution',
    ],
    process: [
      { step: '01', title: 'Audit', desc: 'We assess your current digital presence, competitors, and market positioning.' },
      { step: '02', title: 'Strategy', desc: 'A channel-specific growth plan with KPIs and 90-day milestones.' },
      { step: '03', title: 'Execute', desc: 'Campaign build, creative production, and launch.' },
      { step: '04', title: 'Optimise', desc: 'Continuous A/B testing and budget allocation based on performance data.' },
      { step: '05', title: 'Report', desc: 'Monthly reviews with clear attribution and forward planning.' },
    ],
  },
  {
    id: 'consulting',
    icon: Lightbulb,
    label: 'IT Consulting',
    headline: 'Clarity From Complexity',
    description:
      'We help businesses make smart technology decisions — whether that\'s choosing the right cloud platform, designing a digital transformation roadmap, or conducting due diligence on a technology acquisition.',
    image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-teal-500 to-emerald-500',
    deliverables: [
      'Technology strategy and digital transformation roadmaps',
      'Cloud architecture reviews and migration planning (AWS, GCP, Azure)',
      'Vendor selection and procurement support',
      'Technology due diligence for M&A',
      'IT security reviews and policy development',
      'Process automation and tooling assessment',
    ],
    process: [
      { step: '01', title: 'Diagnose', desc: 'Current-state assessment of systems, processes, and technical debt.' },
      { step: '02', title: 'Define', desc: 'Target architecture and prioritised transformation roadmap.' },
      { step: '03', title: 'Plan', desc: 'Detailed implementation plan with dependencies, timelines, and risk register.' },
      { step: '04', title: 'Support', desc: 'Advisory support through implementation — we don\'t hand off and disappear.' },
      { step: '05', title: 'Review', desc: 'Post-implementation review to capture learnings and refine the roadmap.' },
    ],
  },
  {
    id: 'analytics',
    icon: BarChart3,
    label: 'Data & Analytics',
    headline: 'From Raw Data to Sharp Decisions',
    description:
      'We build the data infrastructure and analytics capabilities your business needs to compete on insight. Whether you\'re building a data warehouse from scratch or need a cleaner BI layer on top of existing systems, we deliver solutions that people actually use.',
    image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-emerald-500 to-green-500',
    deliverables: [
      'Data warehouse design and implementation (BigQuery, Snowflake, Redshift)',
      'ETL/ELT pipeline development and orchestration',
      'BI dashboards and self-service analytics (Looker, Power BI, Metabase)',
      'Data governance frameworks and quality monitoring',
      'Machine learning models for forecasting and classification',
      'Customer data platforms and segmentation',
    ],
    process: [
      { step: '01', title: 'Discover', desc: 'We audit your existing data sources, quality, and current reporting gaps.' },
      { step: '02', title: 'Model', desc: 'Data model design, schema definition, and governance framework.' },
      { step: '03', title: 'Build', desc: 'Pipeline development, warehouse setup, and dashboard creation.' },
      { step: '04', title: 'Validate', desc: 'Data quality testing, reconciliation, and stakeholder review.' },
      { step: '05', title: 'Enable', desc: 'Training, documentation, and ongoing support to drive adoption.' },
    ],
  },
];

export default function Services() {
  useScrollReveal();
  useDocumentMeta(
    'Services',
    'End-to-end digital services from Crestpeak: web & software development, digital marketing, IT consulting, and data & analytics.'
  );

  return (
    <div>
      {/* Page hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/3 w-80 h-80 bg-teal-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label text-cyan-400 reveal">What We Offer</span>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 reveal reveal-delay-1">
            End-to-End Digital Services
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto reveal reveal-delay-2">
            Four core practices, one cohesive team. We cover the full digital lifecycle — from strategy through to live systems.
          </p>
        </div>
      </section>

      {/* Service anchors */}
      <div className="sticky top-16 lg:top-20 z-40 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-cyan-500 hover:bg-cyan-50 transition-all whitespace-nowrap"
              >
                <s.icon size={14} />
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Service sections */}
      {services.map((service, sIdx) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 ${sIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className={`grid lg:grid-cols-2 gap-14 items-center mb-16 ${sIdx % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={sIdx % 2 !== 0 ? 'lg:col-start-2' : ''}>
                <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${service.color} text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4 reveal`}>
                  <service.icon size={13} />
                  {service.label}
                </div>
                <h2 className="section-title mb-5 reveal reveal-delay-1">{service.headline}</h2>
                <p className="text-lg text-slate-500 leading-relaxed mb-6 reveal reveal-delay-2">
                  {service.description}
                </p>
                <Link to="/contact" className="btn-primary reveal reveal-delay-3">
                  Discuss Your Project <ArrowRight size={16} />
                </Link>
              </div>
              <div className={`reveal reveal-delay-2 ${sIdx % 2 !== 0 ? 'lg:col-start-1' : ''}`}>
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                  <img src={service.image} alt={service.label} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Deliverables + Process */}
            <div className="grid md:grid-cols-2 gap-10">
              {/* Deliverables */}
              <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm reveal">
                <h3 className="font-bold text-slate-900 mb-5 text-lg">What You Get</h3>
                <ul className="space-y-3">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-600">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm reveal reveal-delay-2">
                <h3 className="font-bold text-slate-900 mb-5 text-lg">How We Work</h3>
                <div className="space-y-4">
                  {service.process.map((p) => (
                    <div key={p.step} className="flex gap-4">
                      <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-cyan-600">{p.step}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-slate-900 mb-0.5">{p.title}</div>
                        <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-cyan-500 to-teal-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 reveal">
            Not Sure Where to Start?
          </h2>
          <p className="text-cyan-50 text-lg mb-8 reveal reveal-delay-1">
            Book a free 30-minute consultation. We'll help you identify the highest-impact areas for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-cyan-600 hover:bg-cyan-50 font-bold px-8 py-4 rounded-lg transition-all shadow-xl hover:-translate-y-0.5 reveal reveal-delay-2"
          >
            Book a Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
