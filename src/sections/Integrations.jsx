import { motion } from 'framer-motion';
import { ArrowRight, Check, Database, Laptop } from 'lucide-react';

const ehrIntegrations = [
  { name: 'Epic', type: 'Enterprise', color: 'bg-red-50 text-red-600', icon: 'E' },
  { name: 'athenahealth', type: 'Practice', color: 'bg-purple-50 text-purple-600', icon: 'A' },
  { name: 'PointClickCare', type: 'Facility', color: 'bg-blue-50 text-blue-600', icon: 'P' },
  { name: 'Charm Health', type: 'Practice', color: 'bg-green-50 text-green-600', icon: 'C' },
  { name: 'MatrixCare', type: 'Post-Acute', color: 'bg-amber-50 text-amber-600', icon: 'M' },
  { name: 'August Health', type: 'Senior Care', color: 'bg-teal-50 text-teal-600', icon: 'A' },
];

const features = [
  'Bidirectional data sync',
  'Automated patient matching',
  'Real-time vitals in EHR',
  'Dual-facility data merge',
];

export default function Integrations() {
  return (
    <section id="integrations" className="section-padding bg-navy-50/30">
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
            EHR Integrations
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy-900 tracking-tight mb-4">
            Seamless integration with your existing systems
          </h2>
          <p className="text-lg text-navy-500">
            Connect to your EHR in hours, not months. Automatic data sync keeps everything in sync without manual work.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - EHR Logos Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {ehrIntegrations.map((ehr, index) => (
              <motion.div
                key={ehr.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-xl p-6 border border-navy-100 shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <div className={`w-12 h-12 ${ehr.color} rounded-xl flex items-center justify-center mb-4`}>
                  <span className="text-lg font-bold">{ehr.icon}</span>
                </div>
                <p className="font-semibold text-navy-900 mb-1">{ehr.name}</p>
                <p className="text-xs text-navy-500">{ehr.type} EHR</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Integration Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 border border-navy-100 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-blue to-accent-purple rounded-xl flex items-center justify-center">
                <Database className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-navy-900">8 EHR Platforms</p>
                <p className="text-sm text-navy-500">Bi-directional data exchange</p>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Check className="w-3 h-3 text-emerald-600" />
                  </div>
                  <span className="text-navy-600">{feature}</span>
                </div>
              ))}
            </div>

            <div className="p-4 bg-navy-50 rounded-xl mb-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shrink-0">
                  <Laptop className="w-4 h-4 text-accent-blue" />
                </div>
                <div>
                  <p className="text-sm font-medium text-navy-900 mb-1">Integration Timeline</p>
                  <p className="text-sm text-navy-500">Most integrations are live within 48 hours with dedicated technical support.</p>
                </div>
              </div>
            </div>

            <button className="w-full py-3 bg-navy-900 text-white font-medium rounded-lg hover:bg-navy-800 transition-colors inline-flex items-center justify-center gap-2">
              Explore all integrations
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: '8', label: 'EHR Platforms' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '< 1s', label: 'Sync Latency' },
            { value: '2 hrs', label: 'Avg. Setup Time' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-white rounded-xl border border-navy-100">
              <p className="text-2xl font-bold text-navy-900 mb-1">{stat.value}</p>
              <p className="text-sm text-navy-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
