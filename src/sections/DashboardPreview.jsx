import { motion } from 'framer-motion';
import { TrendingUp, Users, Activity, Bell } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section className="section-padding bg-navy-900 overflow-hidden">
      <div className="container-marketing">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-white/70 bg-white/10 rounded-full mb-4">
            Clinical Dashboard
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
            Everything your team needs, in one place
          </h2>
          <p className="text-lg text-white/60">
            Real-time patient data, smart alerts, and actionable insights — designed for clinical workflows.
          </p>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Dashboard Header */}
            <div className="bg-navy-50 px-6 py-4 border-b border-navy-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-navy-900 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">CCN</span>
                  </div>
                  <span className="font-semibold text-navy-900">Clinical Dashboard</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Bell className="w-5 h-5 text-navy-500" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">3</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-white text-xs font-medium">
                  DR
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6">
              {/* Stats Row */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                {[
                  { label: 'Total Patients', value: '1,247', change: '+12%', icon: Users },
                  { label: 'Active Alerts', value: '8', change: '-3', icon: Bell, warning: true },
                  { label: 'Readings Today', value: '3,842', change: '+156', icon: Activity },
                  { label: 'Avg. Response', value: '1.2m', change: '-0.3m', icon: TrendingUp },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl bg-navy-50/50 border border-navy-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-navy-500">{stat.label}</span>
                      <stat.icon className="w-4 h-4 text-navy-400" />
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-navy-900">{stat.value}</span>
                      <span className={`text-xs ${stat.warning ? 'text-red-500' : 'text-emerald-600'}`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-3 gap-4">
                {/* Patient List */}
                <div className="col-span-2 bg-white rounded-xl border border-navy-100 p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-navy-900">Priority Patients</h3>
                    <span className="text-xs text-accent-blue cursor-pointer">View all</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { name: 'John Smith', status: 'Alert', bp: '145/95', hr: '88', risk: 'High', color: 'red' },
                      { name: 'Mary Johnson', status: 'Review', bp: '130/85', hr: '78', risk: 'Medium', color: 'amber' },
                      { name: 'Robert Brown', status: 'Stable', bp: '118/78', hr: '72', risk: 'Low', color: 'emerald' },
                      { name: 'Sarah Davis', status: 'Stable', bp: '122/82', hr: '70', risk: 'Low', color: 'emerald' },
                    ].map((patient) => (
                      <div key={patient.name} className="flex items-center justify-between p-3 rounded-lg bg-navy-50/50 hover:bg-navy-50 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full bg-${patient.color}-500`} />
                          <span className="font-medium text-navy-900 text-sm">{patient.name}</span>
                        </div>
                        <div className="flex items-center gap-6 text-sm">
                          <span className="text-navy-500">BP: {patient.bp}</span>
                          <span className="text-navy-500">HR: {patient.hr}</span>
                          <span className={`px-2 py-0.5 rounded text-xs ${
                            patient.risk === 'High' ? 'bg-red-100 text-red-700' :
                            patient.risk === 'Medium' ? 'bg-amber-100 text-amber-700' :
                            'bg-emerald-100 text-emerald-700'
                          }`}>
                            {patient.risk}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Vitals Chart */}
                <div className="bg-white rounded-xl border border-navy-100 p-4">
                  <h3 className="font-semibold text-navy-900 mb-4">Glucose Trends</h3>
                  <div className="h-40 flex items-end gap-2">
                    {[45, 65, 50, 80, 60, 75, 55, 70, 85, 60, 50, 65].map((h, i) => (
                      <div key={i} className="flex-1 bg-accent-blue/20 rounded-t hover:bg-accent-blue/30 transition-colors" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] text-navy-400">
                    <span>6AM</span>
                    <span>12PM</span>
                    <span>6PM</span>
                    <span>12AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
