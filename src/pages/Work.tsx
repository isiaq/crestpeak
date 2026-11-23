import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, TrendingUp, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export const projects = [
  {
    slug: 'ecommerce-platform-rebuild',
    title: 'E-Commerce Platform Rebuild',
    client: 'Norwood Group',
    category: 'Web Development',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    result: '+142% conversion rate',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumbnail: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    problem:
      'Norwood Group operated an ageing e-commerce platform built on a decade-old stack. Page load times averaged 6.2 seconds, the mobile experience was broken on modern devices, and the checkout flow had a 78% abandonment rate.',
    solution:
      'We performed a complete platform rebuild using a modern React front-end, a Node.js microservices API, and PostgreSQL hosted on AWS RDS. We redesigned the checkout flow end-to-end, implemented server-side rendering for SEO performance, and introduced a headless CMS for the marketing team.',
    result_detail:
      'Within three months of launch, conversion rate increased by 142%, average page load time dropped to 1.1 seconds, and mobile revenue grew by 310%. The new platform handles 5x peak traffic with no degradation.',
    metrics: [
      { label: 'Conversion Rate', value: '+142%' },
      { label: 'Page Load Time', value: '1.1s' },
      { label: 'Mobile Revenue', value: '+310%' },
      { label: 'Uptime SLA', value: '99.98%' },
    ],
  },
  {
    slug: 'growth-marketing-overhaul',
    title: 'Growth Marketing Overhaul',
    client: 'Vantage Labs',
    category: 'Digital Marketing',
    tags: ['SEO', 'PPC', 'Content', 'Analytics'],
    result: '3.4x ROI in 6 months',
    image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumbnail: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=600',
    problem:
      'Vantage Labs was spending £40k/month on digital advertising with poor attribution, declining organic traffic, and no clear picture of which channels actually drove pipeline. Marketing and sales were misaligned on lead quality.',
    solution:
      'We conducted a full channel audit, rebuilt the Google Ads account structure, launched a targeted LinkedIn campaign, and overhauled their technical SEO. We also implemented a multi-touch attribution model that gave visibility into the full buyer journey.',
    result_detail:
      'After six months, blended marketing ROI increased from 0.9x to 3.4x. Organic traffic grew 180%, cost per qualified lead fell by 55%, and monthly pipeline contribution from marketing doubled.',
    metrics: [
      { label: 'Marketing ROI', value: '3.4x' },
      { label: 'Organic Traffic', value: '+180%' },
      { label: 'Cost Per Lead', value: '-55%' },
      { label: 'Pipeline Growth', value: '2x' },
    ],
  },
  {
    slug: 'data-warehouse-modernisation',
    title: 'Data Warehouse Modernisation',
    client: 'Orion Finance',
    category: 'Data & Analytics',
    tags: ['BigQuery', 'dbt', 'Looker', 'Python'],
    result: '60% faster reporting',
    image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumbnail: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600',
    problem:
      'Orion Finance\'s reporting relied on a brittle combination of spreadsheets and a legacy SQL Server warehouse. Monthly reports took three days to produce, data was inconsistent across departments, and analysts spent 70% of their time on data wrangling instead of analysis.',
    solution:
      'We migrated their data infrastructure to BigQuery, implemented a dbt modelling layer with full data lineage, and built a Looker BI layer with self-service dashboards for the finance, operations, and product teams.',
    result_detail:
      'Monthly reporting time dropped from three days to less than four hours — a 60% reduction. Analyst productivity improved dramatically with self-service access to clean, documented data. The platform now supports 150+ daily active users.',
    metrics: [
      { label: 'Reporting Time', value: '-60%' },
      { label: 'Data Sources', value: '23 unified' },
      { label: 'Daily Users', value: '150+' },
      { label: 'Query Speed', value: '10x faster' },
    ],
  },
  {
    slug: 'cloud-migration-strategy',
    title: 'Cloud Migration Strategy',
    client: 'Meridian Tech',
    category: 'IT Consulting',
    tags: ['AWS', 'Terraform', 'Docker', 'Kubernetes'],
    result: '40% infra cost reduction',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumbnail: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600',
    problem:
      'Meridian Tech was running all infrastructure on-premise with significant capital expenditure and an inability to scale quickly. They wanted to move to cloud but had no clear migration strategy and were concerned about data sovereignty.',
    solution:
      'We developed a phased migration roadmap, containerised their key applications with Docker, and migrated to AWS using Terraform-managed infrastructure. We also implemented a CI/CD pipeline to enable faster, safer deployments.',
    result_detail:
      'Infrastructure costs fell by 40% in the first year. Deployment frequency increased from fortnightly to daily. The team can now scale infrastructure in minutes, and they have full disaster recovery capability for the first time.',
    metrics: [
      { label: 'Cost Reduction', value: '40%' },
      { label: 'Deploy Frequency', value: 'Daily' },
      { label: 'Scale Time', value: 'Minutes' },
      { label: 'Recovery Time', value: '<1 hour' },
    ],
  },
  {
    slug: 'brand-digital-relaunch',
    title: 'Brand & Digital Relaunch',
    client: 'BlueSky Media',
    category: 'Web Development',
    tags: ['Next.js', 'Sanity CMS', 'Vercel', 'TypeScript'],
    result: '220% increase in inbound leads',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumbnail: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600',
    problem:
      'BlueSky Media\'s website hadn\'t been updated in four years. It was slow, not mobile-optimised, and failed to communicate their premium positioning. Inbound leads were declining month-on-month.',
    solution:
      'We led a full brand refresh and rebuilt the site on Next.js with a headless Sanity CMS. We focused on showcasing their portfolio, streamlined the navigation, and implemented structured content for SEO.',
    result_detail:
      'Inbound leads increased by 220% within six months of relaunch. Bounce rate dropped by 45%, average session duration increased by 3.2 minutes, and the site now ranks on page 1 for 18 target keywords.',
    metrics: [
      { label: 'Inbound Leads', value: '+220%' },
      { label: 'Bounce Rate', value: '-45%' },
      { label: 'Session Duration', value: '+3.2 min' },
      { label: 'Page 1 Keywords', value: '18' },
    ],
  },
  {
    slug: 'customer-data-platform',
    title: 'Customer Data Platform',
    client: 'Helix Retail',
    category: 'Data & Analytics',
    tags: ['Segment', 'BigQuery', 'Python', 'Braze'],
    result: '28% uplift in retention',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
    problem:
      'Helix Retail had customer data spread across seven disconnected systems with no unified view of the customer. Personalisation was non-existent and churn was increasing.',
    solution:
      'We implemented a customer data platform using Segment for data collection, BigQuery for storage and analysis, and Braze for personalised marketing automation. We built predictive churn models and lifecycle segments.',
    result_detail:
      'Customer retention improved by 28% in the first year. Personalised campaigns achieved 4x higher click-through rates than broadcast emails. Churn prediction model accuracy reached 82%, enabling proactive intervention.',
    metrics: [
      { label: 'Retention Uplift', value: '+28%' },
      { label: 'Campaign CTR', value: '4x higher' },
      { label: 'Churn Model Accuracy', value: '82%' },
      { label: 'Data Sources Unified', value: '7' },
    ],
  },
];

const categories = ['All', 'Web Development', 'Digital Marketing', 'Data & Analytics', 'IT Consulting'];

function WorkGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  useScrollReveal();
  useDocumentMeta(
    'Our Work',
    'Real projects, real results — browse Crestpeak\'s case studies across web development, digital marketing, data & analytics, and IT consulting.'
  );

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Page hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-cyan-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label text-cyan-400 reveal">Our Portfolio</span>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 reveal reveal-delay-1">
            Work We're Proud Of
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto reveal reveal-delay-2">
            Real projects, real results. Browse our case studies and see the impact we've delivered for clients.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-10 bg-white border-b border-slate-100 sticky top-16 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((project, i) => (
              <Link
                key={project.slug}
                to={`/work/${project.slug}`}
                className={`card overflow-hidden group reveal reveal-delay-${(i % 3) + 1}`}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-cyan-500 uppercase tracking-wide">{project.category}</span>
                    <span className="text-slate-300">·</span>
                    <span className="text-xs text-slate-400">{project.client}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-3 leading-snug">{project.title}</h3>
                  <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    <TrendingUp size={11} />
                    {project.result}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 reveal">Ready to Be Our Next Case Study?</h2>
          <p className="text-slate-500 mb-7 reveal reveal-delay-1">Let's talk about what we can build together.</p>
          <Link to="/contact" className="btn-primary reveal reveal-delay-2">
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);
  useScrollReveal();
  useDocumentMeta(
    project ? `${project.title} — ${project.client}` : 'Case Study Not Found',
    project ? `${project.result} — how Crestpeak delivered ${project.title.toLowerCase()} for ${project.client}.` : undefined
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Case Study Not Found</h2>
          <Link to="/work" className="btn-primary">Back to Work</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-0 bg-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-0">
          <button
            onClick={() => navigate('/work')}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={15} /> Back to Work
          </button>
          <div className="grid lg:grid-cols-2 gap-12 items-end pb-0">
            <div className="pb-12">
              <span className="inline-block bg-cyan-500/20 text-cyan-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                {project.category} — {project.client}
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">{project.title}</h1>
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 text-sm font-semibold px-4 py-2 rounded-full">
                <TrendingUp size={14} />
                {project.result}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="flex flex-wrap gap-2 pb-12 justify-end">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-white/10 text-slate-300 text-xs font-medium px-3 py-1.5 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="aspect-[21/7] overflow-hidden mt-0">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60" />
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-white py-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.metrics.map((m) => (
              <div key={m.label} className="text-center reveal">
                <div className="text-3xl font-bold text-cyan-500 mb-1">{m.value}</div>
                <div className="text-xs text-slate-500 font-medium">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-14">
            <div className="reveal">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-red-50 border-2 border-red-200 flex items-center justify-center">
                  <span className="text-red-500 text-xs font-bold">!</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900">The Problem</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">{project.problem}</p>
            </div>

            <div className="reveal">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-cyan-50 border-2 border-cyan-200 flex items-center justify-center">
                  <span className="text-cyan-500 text-xs font-bold">→</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900">The Solution</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">{project.solution}</p>
            </div>

            <div className="reveal">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center">
                  <TrendingUp size={13} className="text-emerald-500" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">The Result</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">{project.result_detail}</p>
            </div>
          </div>

          <div className="mt-14 pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 reveal">
            <div>
              <p className="font-semibold text-slate-900">Interested in similar results?</p>
              <p className="text-sm text-slate-500">Let's talk about what we can build for you.</p>
            </div>
            <Link to="/contact" className="btn-primary">
              Get in Touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Other projects */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-slate-900 mb-7">More Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.slug !== project.slug)
              .slice(0, 3)
              .map((p, i) => (
                <Link key={p.slug} to={`/work/${p.slug}`} className={`card overflow-hidden group reveal reveal-delay-${i + 1}`}>
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={p.thumbnail} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-cyan-500 font-semibold mb-1">{p.category}</div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{p.title}</h4>
                    <div className="flex items-center gap-1 text-emerald-600 text-xs font-medium">
                      <TrendingUp size={10} /> {p.result}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
          <div className="mt-8 text-center reveal">
            <Link to="/work" className="btn-secondary text-sm">
              View All Work <ExternalLink size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Work() {
  const { slug } = useParams<{ slug?: string }>();
  return slug ? <CaseStudy /> : <WorkGrid />;
}
