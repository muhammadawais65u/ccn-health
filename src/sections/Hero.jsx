import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-[#0d2d4d] to-navy-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(99,91,255,0.15),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(37,110,255,0.1),_transparent_50%)]" />

      <div className="container-marketing relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-16 lg:py-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-white/80">Your workflows are unique — we build around them</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold text-white tracking-tight leading-[1.1] mb-6">
              Remote Monitoring<br />
              Built for Growth
            </h1>

            <p className="text-lg text-white/60 leading-relaxed mb-8">
              The platform behind the highest-impact RPM, CCM, BHI, RTM, and PCM programs in the country.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-navy-900 font-medium rounded-lg hover:bg-white/90 transition-colors">
                Book a demo
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-colors">
                View features
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>

          {/* Right - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative transform perspective-1000 rotate-y-[-5deg] rotate-x-[5deg]">
              {/* Main Dashboard Card */}
              <div className="bg-white rounded-xl shadow-2xl shadow-black/20 overflow-hidden border border-white/10">
                {/* Header */}
                <div className="bg-navy-900 px-4 py-3 flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">CCN</span>
                    </div>
                    <span className="text-white text-sm font-medium">Patient Dashboard</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-5 space-y-4">
                  {/* Vitals Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-navy-50 rounded-lg p-3">
                      <p className="text-[10px] uppercase tracking-wider text-navy-500 mb-1">Blood Pressure</p>
                      <p className="text-lg font-semibold text-navy-900">120/80</p>
                      <p className="text-[10px] text-emerald-600">Normal</p>
                    </div>
                    <div className="bg-navy-50 rounded-lg p-3">
                      <p className="text-[10px] uppercase tracking-wider text-navy-500 mb-1">Heart Rate</p>
                      <p className="text-lg font-semibold text-navy-900">72</p>
                      <p className="text-[10px] text-emerald-600">BPM</p>
                    </div>
                    <div className="bg-navy-50 rounded-lg p-3">
                      <p className="text-[10px] uppercase tracking-wider text-navy-500 mb-1">SpO2</p>
                      <p className="text-lg font-semibold text-navy-900">98%</p>
                      <p className="text-[10px] text-emerald-600">Excellent</p>
                    </div>
                  </div>

                  {/* Chart Placeholder */}
                  <div className="bg-navy-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-xs font-medium text-navy-700">Glucose Trends</p>
                      <span className="text-[10px] text-navy-500">Last 7 days</span>
                    </div>
                    <div className="flex items-end gap-2 h-20">
                      {[40, 55, 45, 70, 50, 65, 60].map((h, i) => (
                        <div key={i} className="flex-1 bg-accent-blue/20 rounded-t" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>

                  {/* Patient List */}
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-navy-700">Recent Patients</p>
                    {['John Smith', 'Mary Johnson', 'Robert Brown'].map((name, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-navy-100 last:border-0">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-white text-[10px] font-medium">
                            {name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="text-xs text-navy-700">{name}</span>
                        </div>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full ${i === 0 ? 'bg-emerald-100 text-emerald-700' : i === 1 ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}`}>
                          {i === 0 ? 'Stable' : i === 1 ? 'Alert' : 'New'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Program Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-8 bg-white rounded-lg shadow-xl shadow-black/10 p-3 border border-navy-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center">
                    <span className="text-xs font-semibold text-accent-blue">RPM</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-navy-900">Active Patients</p>
                    <p className="text-lg font-semibold text-navy-900">1,247</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-4 -right-4 bg-white rounded-lg shadow-xl shadow-black/10 p-3 border border-navy-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-accent-purple/10 flex items-center justify-center">
                    <span className="text-xs font-semibold text-accent-purple">CCM</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-navy-900">Care Plans</p>
                    <p className="text-lg font-semibold text-navy-900">892</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
