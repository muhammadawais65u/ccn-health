import { useState, useRef, useEffect } from 'react';
import { ChevronDown, LogIn, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const devicesMenu = [
  { name: 'Blood Pressure Monitors', desc: 'FDA-cleared BP monitors', icon: 'gauge', color: 'bg-red-50 text-red-600' },
  { name: 'Blood Glucose Monitors', desc: 'Diabetes management meters', icon: 'droplet', color: 'bg-amber-50 text-amber-600' },
  { name: 'Pulse Oximeters', desc: 'SpO2 & heart rate', icon: 'monitor', color: 'bg-blue-50 text-blue-600' },
  { name: 'Weight Scales', desc: 'Connected digital scales', icon: 'scale', color: 'bg-teal-50 text-teal-600' },
  { name: 'Thermometers', desc: 'Temperature monitoring', icon: 'thermometer', color: 'bg-orange-50 text-orange-600' },
  { name: 'Continuous Glucose Monitors', desc: 'Dexcom & FreeStyle Libre', icon: 'activity', color: 'bg-green-50 text-green-600' },
];

const programsMenu = [
  { name: 'Remote Patient Monitoring (RPM)', desc: 'Real-time vital sign monitoring', icon: 'monitor', color: 'bg-blue-50 text-blue-600' },
  { name: 'Chronic Care Management (CCM)', desc: 'Care coordination for 2+ chronic conditions', icon: 'heart', color: 'bg-amber-50 text-amber-600' },
  { name: 'Remote Therapeutic Monitoring (RTM)', desc: 'Musculoskeletal & respiratory monitoring', icon: 'bone', color: 'bg-green-50 text-green-600' },
  { name: 'Principal Care Management (PCM)', desc: 'Single high-risk condition management', icon: 'activity', color: 'bg-purple-50 text-purple-600' },
  { name: 'Behavioral Health Integration (BHI)', desc: 'Mental health integration', icon: 'brain', color: 'bg-rose-50 text-rose-600' },
];

const integrationsMenu = [
  { name: 'PointClickCare', desc: 'Skilled nursing & long-term care', icon: 'database', color: 'bg-blue-50 text-blue-600' },
  { name: 'athenahealth', desc: 'Cloud-based practice EHR', icon: 'laptop', color: 'bg-purple-50 text-purple-600' },
  { name: 'Epic', desc: 'Enterprise health records', icon: 'laptop', color: 'bg-red-50 text-red-600' },
  { name: 'Charm Health', desc: 'Independent practices', icon: 'laptop', color: 'bg-green-50 text-green-600' },
  { name: 'MatrixCare', desc: 'Post-acute care software', icon: 'laptop', color: 'bg-amber-50 text-amber-600' },
];

const Icon = ({ name, className }) => {
  const icons = {
    gauge: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></svg>,
    droplet: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" /></svg>,
    monitor: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>,
    scale: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" /><path d="m19 8 3 8a5 5 0 0 1-6 0zV7" /><path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" /><path d="m5 8 3 8a5 5 0 0 1-6 0zV7" /><path d="M7 21h10" /></svg>,
    thermometer: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" /></svg>,
    activity: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" /></svg>,
    heart: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" /></svg>,
    bone: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z" /></svg>,
    brain: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18V5" /><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" /><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" /><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" /><path d="M18 18a4 4 0 0 0 2-7.464" /><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" /><path d="M6 18a4 4 0 0 1-2-7.464" /><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" /></svg>,
    database: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path d="M3 12A9 3 0 0 0 21 12" /></svg>,
    laptop: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="4" width="18" height="12" rx="2" ry="2" /><line x1="2" y1="20" x2="22" y2="20" /></svg>,
  };
  return icons[name] || null;
};

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Devices', href: '#devices', hasDropdown: true, menu: devicesMenu },
    { name: 'Programs', href: '#programs', hasDropdown: true, menu: programsMenu },
    { name: 'Integrations', href: '#integrations', hasDropdown: true, menu: integrationsMenu },
    { name: 'Articles', href: '#articles' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy-100/60 bg-white/80 backdrop-blur-xl">
      <nav className="container-marketing flex h-[72px] items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-6 xl:gap-10">
          <a href="/" className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-navy-900 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                </svg>
              </div>
              <span className="text-xl font-semibold text-navy-900 tracking-tight">CCN</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-0.5">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={link.href}
                  className="relative inline-flex items-center gap-1 px-3 xl:px-4 py-2 text-[0.875rem] xl:text-[0.9375rem] font-medium transition-colors text-navy-600 hover:text-navy-900"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200" />}
                </a>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.hasDropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 z-40 pt-2"
                    >
                      <div className="w-[480px] rounded-xl border border-navy-100/60 bg-white/95 backdrop-blur-xl shadow-xl shadow-black/5 overflow-hidden">
                        <div className="relative">
                          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue" />
                          <div className="p-4">
                            <div className="grid grid-cols-1 gap-1">
                              {link.menu.map((item) => (
                                <a
                                  key={item.name}
                                  href="#"
                                  className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-all hover:bg-gradient-to-r hover:from-navy-50 hover:to-blue-50/50"
                                >
                                  <div className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${item.color}`}>
                                    <Icon name={item.icon} className="h-[18px] w-[18px]" />
                                  </div>
                                  <div className="min-w-0">
                                    <p className="text-[0.8125rem] font-medium text-navy-900 transition-colors group-hover:text-accent-blue">
                                      {item.name}
                                    </p>
                                    <p className="mt-0.5 text-[0.75rem] leading-snug text-navy-500">
                                      {item.desc}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                          <div className="border-t border-navy-100/60 bg-gradient-to-r from-navy-50/50 to-transparent px-6 py-3">
                            <a href={link.href} className="group inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-accent-blue hover:text-accent-blue/80 transition-colors">
                              View all {link.name.toLowerCase()}
                              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <a href="#" className="inline-flex items-center gap-1.5 px-4 py-2 text-[0.875rem] font-medium text-navy-600 transition-colors hover:text-navy-900 rounded-lg hover:bg-navy-50">
            <LogIn className="h-4 w-4" />
            Login
          </a>
          <div className="h-5 w-px bg-navy-200" />
          <button className="btn-cta btn-cta-primary !py-2.5 !px-5 text-[0.8125rem]">
            Schedule a Demo
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center p-2.5 text-navy-600 hover:text-navy-900 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-navy-100 bg-white"
          >
            <div className="container-marketing py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-[0.9375rem] font-medium text-navy-600 hover:text-navy-900 hover:bg-navy-50 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-navy-100 space-y-2">
                <a href="#" className="block px-4 py-3 text-[0.9375rem] font-medium text-navy-600 hover:text-navy-900">
                  Login
                </a>
                <button className="w-full btn-cta btn-cta-primary">
                  Schedule a Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
