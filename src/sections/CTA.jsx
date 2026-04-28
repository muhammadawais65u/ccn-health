import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users, CheckCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />

      <div className="container-marketing relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6">
            Start monitoring patients<br />in 48 hours
          </h2>

          <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto">
            Join hundreds of healthcare organizations already using CCN Health to deliver better care at scale.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            {[
              { icon: Clock, value: '48 hrs', label: 'To Go Live' },
              { icon: Users, value: '50K+', label: 'Patients Monitored' },
              { icon: CheckCircle, value: '99.9%', label: 'Uptime' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <stat.icon className="w-5 h-5 text-accent-blue" />
                <div className="text-left">
                  <p className="text-white font-semibold">{stat.value}</p>
                  <p className="text-white/40 text-xs">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-navy-900 font-semibold rounded-lg hover:bg-white/90 transition-colors">
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-colors">
              Contact Sales
            </button>
          </div>

          <p className="mt-6 text-sm text-white/40">
            No credit card required. Free pilot available for qualified organizations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
