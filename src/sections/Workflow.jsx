import { motion } from 'framer-motion';
import { Link2, Truck, Activity, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Connect EHR',
    description: 'Bidirectional integration with your existing systems. Patient data syncs automatically in real-time.',
    icon: Link2,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    number: '02',
    title: 'Ship Devices',
    description: 'Pre-configured cellular devices shipped directly to patients. No WiFi setup required — just unpack and use.',
    icon: Truck,
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    number: '03',
    title: 'Monitor Patients',
    description: 'Your team monitors vitals, responds to alerts, and documents care — all from one dashboard.',
    icon: Activity,
    color: 'bg-purple-50 text-purple-600',
  },
];

export default function Workflow() {
  return (
    <section className="section-padding bg-white">
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
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy-900 tracking-tight mb-4">
            Launch your program in 48 hours
          </h2>
          <p className="text-lg text-navy-500">
            From integration to go-live, we handle the complexity so you can focus on patient care.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Lines (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-navy-200 to-transparent" />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 border border-navy-100 shadow-sm hover:shadow-lg transition-shadow relative z-10">
                {/* Step Number */}
                <div className="absolute -top-4 left-8 px-3 py-1 bg-navy-900 text-white text-xs font-bold rounded-full">
                  Step {step.number}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center mb-6 mt-2`}>
                  <step.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-navy-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-navy-500 leading-relaxed">
                  {step.description}
                </p>

                {/* Learn More Link */}
                <a href="#" className="inline-flex items-center gap-2 mt-4 text-accent-blue font-medium text-sm hover:text-accent-blue/80 transition-colors group">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-navy-50 rounded-2xl border border-navy-100">
            <p className="text-navy-600">
              <span className="font-semibold text-navy-900">Need a custom workflow?</span> We adapt to your existing processes.
            </p>
            <button className="px-6 py-2.5 bg-navy-900 text-white font-medium rounded-lg hover:bg-navy-800 transition-colors whitespace-nowrap">
              Talk to sales
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
