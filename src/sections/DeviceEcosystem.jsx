import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const devices = [
  { name: 'Blood Pressure', category: 'Vitals', color: 'bg-red-50 text-red-600' },
  { name: 'Weight Scale', category: 'Vitals', color: 'bg-emerald-50 text-emerald-600' },
  { name: 'Pulse Oximeter', category: 'Vitals', color: 'bg-blue-50 text-blue-600' },
  { name: 'Thermometer', category: 'Vitals', color: 'bg-orange-50 text-orange-600' },
  { name: 'Glucose Meter', category: 'Diabetes', color: 'bg-amber-50 text-amber-600' },
  { name: 'CGM', category: 'Diabetes', color: 'bg-green-50 text-green-600' },
  { name: 'Sleep Analyzer', category: 'Sleep', color: 'bg-purple-50 text-purple-600' },
  { name: 'Contactless Monitor', category: 'Advanced', color: 'bg-indigo-50 text-indigo-600' },
];

export default function DeviceEcosystem() {
  return (
    <section id="devices" className="section-padding bg-white overflow-hidden">
      <div className="container-marketing">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent-purple">
                Device Ecosystem
              </span>
              <span className="px-2 py-0.5 text-[10px] font-medium bg-accent-blue/10 text-accent-blue rounded-full">
                NEW Contactless Monitor
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-semibold text-navy-900 tracking-tight mb-4">
              Works with the devices<br />you already use
            </h2>

            <p className="text-lg text-navy-500 mb-8 leading-relaxed">
              FDA-cleared devices from Tenovi, Xandar Kardian, and other trusted manufacturers — cellular-connected, no WiFi required.
            </p>

            {/* Device Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {devices.map((device, index) => (
                <motion.span
                  key={device.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium border ${device.color} border-current/20 cursor-pointer hover:scale-105 transition-transform`}
                >
                  {device.name}
                </motion.span>
              ))}
            </div>

            <a href="#" className="inline-flex items-center gap-2 text-accent-blue font-medium hover:text-accent-blue/80 transition-colors group">
              See all devices
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right - Device Grid Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Device Card 1 - BP Monitor */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 border border-red-100 shadow-sm"
              >
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                  </svg>
                </div>
                <p className="font-semibold text-navy-900">Blood Pressure</p>
                <p className="text-sm text-navy-500">Automatic readings</p>
              </motion.div>

              {/* Device Card 2 - Weight Scale */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-6 border border-emerald-100 shadow-sm"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
                    <path d="M3 7h18" />
                  </svg>
                </div>
                <p className="font-semibold text-navy-900">Weight Scale</p>
                <p className="text-sm text-navy-500">Digital cellular</p>
              </motion.div>

              {/* Device Card 3 - Glucose */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-6 border border-amber-100 shadow-sm"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
                  </svg>
                </div>
                <p className="font-semibold text-navy-900">Glucose Meter</p>
                <p className="text-sm text-navy-500">Instant sync</p>
              </motion.div>

              {/* Device Card 4 - Pulse Ox */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100 shadow-sm"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <circle cx="12" cy="12" r="10" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                  </svg>
                </div>
                <p className="font-semibold text-navy-900">Pulse Oximeter</p>
                <p className="text-sm text-navy-500">SpO2 & heart rate</p>
              </motion.div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-navy-100"
            >
              <p className="text-xs text-navy-500 mb-1">FDA-Cleared Devices</p>
              <p className="text-2xl font-bold text-navy-900">25+</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
