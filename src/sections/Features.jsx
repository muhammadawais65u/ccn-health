import { motion } from 'framer-motion';
import { Zap, Activity, Link2, FileText, BarChart3, Shield } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Automation',
    description: 'Automated workflows, patient onboarding, and billing codes. Reduce manual work by 80%.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Activity,
    title: 'Real-time Monitoring',
    description: '24/7 vital sign tracking with instant alerts. Cellular-connected devices require no WiFi.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Link2,
    title: 'EHR Integrations',
    description: 'Bidirectional sync with Epic, athenahealth, PointClickCare, and 5+ other platforms.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: FileText,
    title: 'Billing & Reporting',
    description: 'Automated CPT code capture and documentation. Maximize reimbursement with less effort.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Real-time insights into patient populations, device utilization, and program ROI.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: Shield,
    title: 'HIPAA Compliant',
    description: 'Enterprise-grade security with SOC 2 certification. End-to-end encryption for all data.',
    color: 'bg-teal-50 text-teal-600',
  },
];

export default function Features() {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-marketing">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-accent-blue bg-accent-blue/10 rounded-full mb-4">
            Platform Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy-900 tracking-tight mb-4">
            Everything you need to scale remote care
          </h2>
          <p className="text-lg text-navy-500">
            A complete platform that handles devices, data, billing, and compliance — all in one place.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-2xl bg-white border border-navy-100/80 shadow-sm hover:shadow-lg hover:border-accent-blue/20 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-navy-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
