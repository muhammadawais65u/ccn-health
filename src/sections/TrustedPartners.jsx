import { motion } from 'framer-motion';

const partners = [
  { name: 'PointClickCare', category: 'EHR' },
  { name: 'athenahealth', category: 'EHR' },
  { name: 'Epic', category: 'EHR' },
  { name: 'Tenovi', category: 'Device' },
  { name: 'Omron', category: 'Device' },
  { name: 'Dexcom', category: 'Device' },
  { name: 'MatrixCare', category: 'EHR' },
  { name: 'Charm Health', category: 'EHR' },
  { name: 'FreeStyle Libre', category: 'Device' },
  { name: 'August Health', category: 'EHR' },
];

const LogoPlaceholder = ({ name }) => (
  <div className="flex items-center justify-center w-40 md:w-48 h-16 rounded-xl bg-white border border-navy-100/80 shadow-sm px-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
    <span className="text-sm font-semibold text-navy-600">{name}</span>
  </div>
);

export default function TrustedPartners() {
  return (
    <section className="py-12 bg-white border-b border-navy-100">
      <div className="container-marketing mb-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-semibold uppercase tracking-widest text-navy-400"
        >
          Integration & Technology Partners
        </motion.p>
      </div>

      {/* Top Row - Left to Right */}
      <div className="marquee-mask overflow-hidden mb-4">
        <div className="flex gap-4 animate-marquee">
          {[...partners, ...partners].map((partner, i) => (
            <LogoPlaceholder key={`top-${i}`} name={partner.name} />
          ))}
        </div>
      </div>

      {/* Bottom Row - Right to Left */}
      <div className="marquee-mask overflow-hidden">
        <div className="flex gap-4 animate-marquee-reverse">
          {[...partners.reverse(), ...partners].map((partner, i) => (
            <LogoPlaceholder key={`bottom-${i}`} name={partner.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
