import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Heart, Bone, Activity, Brain, ArrowRight } from 'lucide-react';

const programs = [
  {
    id: 'rpm',
    name: 'RPM',
    fullName: 'Remote Patient Monitoring',
    icon: Monitor,
    color: 'bg-blue-50 text-blue-600 border-blue-200',
    accent: 'blue',
    description: 'Real-time vital sign monitoring with FDA-cleared cellular devices.',
    details: 'Turnkey RPM program with automatic data capture, clinical monitoring, and Medicare billing under CPT codes 99453, 99454, 99457, 99458.',
    stats: [
      { label: 'Patients Monitored', value: '50K+' },
      { label: 'Device Types', value: '25+' },
      { label: 'Avg. Response Time', value: '< 2 min' },
    ],
    cptCodes: ['99453', '99454', '99457', '99458'],
  },
  {
    id: 'ccm',
    name: 'CCM',
    fullName: 'Chronic Care Management',
    icon: Heart,
    color: 'bg-amber-50 text-amber-600 border-amber-200',
    accent: 'amber',
    description: 'Care coordination for patients with 2+ chronic conditions.',
    details: 'Non-face-to-face care coordination that improves outcomes and generates recurring revenue. Billed under CPT codes 99490, 99491, 99439.',
    stats: [
      { label: 'Care Plans Created', value: '12K+' },
      { label: 'Avg. Revenue/Patient', value: '$2,400' },
      { label: 'Patient Satisfaction', value: '94%' },
    ],
    cptCodes: ['99490', '99491', '99439'],
  },
  {
    id: 'rtm',
    name: 'RTM',
    fullName: 'Remote Therapeutic Monitoring',
    icon: Bone,
    color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    accent: 'emerald',
    description: 'Musculoskeletal and respiratory therapy monitoring.',
    details: 'Track therapy adherence and patient-reported outcomes remotely. Billed under CPT codes 98975, 98976, 98977, 98980, 98981.',
    stats: [
      { label: 'Therapy Plans', value: '8K+' },
      { label: 'Adherence Rate', value: '87%' },
      { label: 'Avg. Billing', value: '$200/mo' },
    ],
    cptCodes: ['98975', '98976', '98977', '98980', '98981'],
  },
  {
    id: 'pcm',
    name: 'PCM',
    fullName: 'Principal Care Management',
    icon: Activity,
    color: 'bg-purple-50 text-purple-600 border-purple-200',
    accent: 'purple',
    description: 'Focused management of a single high-risk condition.',
    details: 'For patients with one complex chronic condition requiring focused care management. Billed under CPT codes 99424, 99425, 99426, 99427.',
    stats: [
      { label: 'Conditions Managed', value: '25+' },
      { label: 'Monthly Revenue', value: '$331' },
      { label: 'Care Time', value: '30 min' },
    ],
    cptCodes: ['99424', '99425', '99426', '99427'],
  },
  {
    id: 'bhi',
    name: 'BHI',
    fullName: 'Behavioral Health Integration',
    icon: Brain,
    color: 'bg-rose-50 text-rose-600 border-rose-200',
    accent: 'rose',
    description: 'Mental health screening and collaborative care.',
    details: 'Integrate behavioral health into primary care workflows. Billed under CPT codes 99484, 99492, 99493, 99494.',
    stats: [
      { label: 'Screenings Completed', value: '35K+' },
      { label: 'PHQ-9 Average', value: '8.2' },
      { label: 'Improvement Rate', value: '76%' },
    ],
    cptCodes: ['99484', '99492', '99493', '99494'],
  },
];

export default function Programs() {
  const [activeProgram, setActiveProgram] = useState(programs[0]);

  return (
    <section id="programs" className="section-padding bg-navy-50/50">
      <div className="container-marketing">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-accent-purple bg-accent-purple/10 rounded-full mb-4">
            Medicare Programs
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy-900 tracking-tight mb-4">
            Five programs. One platform.
          </h2>
          <p className="text-lg text-navy-500">
            Support multiple care management programs from a single dashboard. Scale without adding complexity.
          </p>
        </motion.div>

        {/* Program Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {programs.map((program) => (
            <button
              key={program.id}
              onClick={() => setActiveProgram(program)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                activeProgram.id === program.id
                  ? `${program.color} ring-2 ring-offset-2 ring-${program.accent}-500`
                  : 'bg-white border border-navy-200 text-navy-600 hover:border-navy-300 hover:bg-navy-50'
              }`}
            >
              <program.icon className="w-4 h-4" />
              {program.name}
            </button>
          ))}
        </div>

        {/* Active Program Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProgram.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            {/* Content */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-navy-100">
              <div className={`w-14 h-14 rounded-2xl ${activeProgram.color} flex items-center justify-center mb-6`}>
                <activeProgram.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold text-navy-900 mb-2">
                {activeProgram.fullName}
              </h3>
              <p className="text-lg text-navy-600 mb-4">
                {activeProgram.description}
              </p>
              <p className="text-navy-500 mb-6 leading-relaxed">
                {activeProgram.details}
              </p>

              {/* CPT Codes */}
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-navy-400 mb-2">CPT Codes</p>
                <div className="flex flex-wrap gap-2">
                  {activeProgram.cptCodes.map((code) => (
                    <span key={code} className="px-2 py-1 bg-navy-100 text-navy-700 text-xs font-medium rounded">
                      {code}
                    </span>
                  ))}
                </div>
              </div>

              <button className="inline-flex items-center gap-2 text-accent-blue font-medium hover:text-accent-blue/80 transition-colors">
                Learn more about {activeProgram.name}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid gap-4">
              {activeProgram.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-navy-100 flex items-center justify-between"
                >
                  <span className="text-navy-500">{stat.label}</span>
                  <span className="text-2xl font-bold text-navy-900">{stat.value}</span>
                </motion.div>
              ))}

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-xl p-6 text-white">
                <p className="text-lg font-medium mb-2">Start with {activeProgram.name}</p>
                <p className="text-white/60 text-sm mb-4">
                  See how {activeProgram.fullName} can work for your organization.
                </p>
                <button className="w-full py-2.5 bg-white text-navy-900 font-medium rounded-lg hover:bg-white/90 transition-colors">
                  Schedule a consultation
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
