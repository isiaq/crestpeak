import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Rocket } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const team = [
  {
    name: 'Alexandra Reid',
    role: 'CEO & Co-Founder',
    bio: 'Former VP of Engineering at a FTSE 250 firm, Alexandra brings 15 years of technology leadership to Crestpeak\'s strategic vision.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Marcus Chen',
    role: 'CTO & Co-Founder',
    bio: 'Full-stack architect with a background in fintech. Marcus has shipped products used by millions of users across three continents.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Priya Nair',
    role: 'Head of Digital Marketing',
    bio: 'A data-obsessed marketer who spent six years scaling growth at two Y Combinator startups before joining Crestpeak.',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Tom Williams',
    role: 'Lead Data Engineer',
    bio: 'Previously at a leading management consultancy, Tom specialises in data platform architecture and business intelligence.',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

const values = [
  {
    icon: Target,
    title: 'Precision',
    description: 'We are exacting in our standards. Every line of code, every campaign, every data model is held to the highest bar.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'No jargon, no hidden fees, no surprises. You always know exactly what we\'re doing and why.',
  },
  {
    icon: Heart,
    title: 'Partnership',
    description: 'We invest in understanding your business as deeply as you do. Your goals become our goals.',
  },
  {
    icon: Rocket,
    title: 'Ambition',
    description: 'We push for outcomes that are genuinely impressive — not just adequate. Mediocrity is not our baseline.',
  },
  {
    icon: Target,
    title: 'Accountability',
    description: 'We own our commitments fully. When things don\'t go to plan, we\'re the first to raise a hand and course-correct.',
  },
  {
    icon: Eye,
    title: 'Continuous Learning',
    description: 'Technology evolves fast. We dedicate real time to staying at the frontier so our clients always benefit from best practice.',
  },
];

const milestones = [
  { year: '2016', event: 'Founded in London by Alexandra Reid and Marcus Chen.' },
  { year: '2018', event: 'Expanded to a team of 15 and launched our Data & Analytics practice.' },
  { year: '2020', event: 'Crossed 50 client engagements and opened a second office in Manchester.' },
  { year: '2022', event: 'Recognised as a Top 10 Digital Agency in the UK by TechRadar.' },
  { year: '2024', event: 'Reached 40+ team members and 120 completed projects globally.' },
];

export default function About() {
  useScrollReveal();
  useDocumentMeta(
    'About Us',
    'Founded in London in 2016, Crestpeak Digital is a 40-person team of senior engineers, marketers, consultants, and data specialists building digital products for ambitious businesses.'
  );

  return (
    <div>
      {/* Page hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-1/3 w-80 h-80 bg-cyan-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label text-cyan-400 reveal">Our Story</span>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 reveal reveal-delay-1">
            Built by Practitioners,<br />Driven by Results
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto reveal reveal-delay-2">
            Crestpeak was founded on a simple premise: exceptional digital work requires exceptional people who genuinely care about client outcomes.
          </p>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label reveal">Our Mission</span>
              <h2 className="section-title reveal reveal-delay-1 mb-6">Empowering Businesses Through Intelligent Technology</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p className="reveal reveal-delay-2">
                  Crestpeak Digital Limited was founded in London in 2016 by Alexandra Reid and Marcus Chen — two technologists frustrated by the gap between what agencies promised and what they actually delivered.
                </p>
                <p className="reveal reveal-delay-3">
                  We set out to build the kind of digital partner we'd always wanted: senior talent, honest conversations, measurable results. Eight years later, that ethos remains at the core of everything we do.
                </p>
                <p className="reveal reveal-delay-4">
                  Today, our 40-person team spans software engineering, digital marketing, IT consulting, and data science — united by a commitment to quality and a genuine enthusiasm for the work.
                </p>
              </div>
              <div className="mt-8 reveal reveal-delay-4">
                <Link to="/contact" className="btn-primary">
                  Work With Us <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex gap-5 reveal reveal-delay-${i + 1}`}>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-cyan-50 border-2 border-cyan-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-cyan-600">{m.year.slice(2)}</span>
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-px flex-1 bg-slate-200 mt-2" />
                    )}
                  </div>
                  <div className="pb-6">
                    <div className="text-sm font-bold text-cyan-500 mb-1">{m.year}</div>
                    <p className="text-slate-600 text-sm leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label reveal">Leadership</span>
            <h2 className="section-title reveal reveal-delay-1">The People Behind Crestpeak</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto reveal reveal-delay-2">
              Senior practitioners with real-world experience and a passion for delivering exceptional work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {team.map((member, i) => (
              <div key={member.name} className={`card overflow-hidden group reveal reveal-delay-${i + 1}`}>
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 mb-0.5">{member.name}</h3>
                  <div className="text-xs font-semibold text-cyan-500 uppercase tracking-wide mb-3">{member.role}</div>
                  <p className="text-xs text-slate-500 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label reveal">Our Values</span>
            <h2 className="section-title reveal reveal-delay-1">What We Stand For</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={v.title + i} className={`bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-cyan-200 hover:bg-cyan-50/30 transition-all duration-300 reveal reveal-delay-${(i % 4) + 1}`}>
                <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center mb-4">
                  <v.icon size={18} className="text-cyan-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 reveal">
            Want to be Part of the Story?
          </h2>
          <p className="text-slate-400 mb-8 reveal reveal-delay-1">
            Whether you're a potential client or a talented professional looking to join us, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal reveal-delay-2">
            <Link to="/contact" className="btn-primary">
              Get in Touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
