import { motion } from 'framer-motion';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const footerLinks = {
  Product: [
    { name: 'Features', href: '#features' },
    { name: 'Devices', href: '#devices' },
    { name: 'Programs', href: '#programs' },
    { name: 'Integrations', href: '#integrations' },
    { name: 'Pricing', href: '#' },
  ],
  Company: [
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#articles' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  Resources: [
    { name: 'Documentation', href: '#' },
    { name: 'Help Center', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'Webinars', href: '#' },
    { name: 'Events', href: '#' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'HIPAA Compliance', href: '#' },
    { name: 'Security', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-50/50 border-t border-navy-100">
      <div className="container-marketing py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-navy-900 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                </svg>
              </div>
              <span className="text-xl font-semibold text-navy-900">CCN</span>
            </div>
            <p className="text-sm text-navy-500 mb-6 max-w-xs">
              Remote patient monitoring and care management platform for healthcare organizations.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-white border border-navy-200 flex items-center justify-center text-navy-400 hover:text-navy-600 hover:border-navy-300 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-navy-900 mb-4 text-sm">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-navy-500 hover:text-navy-700 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-navy-400">
            © {new Date().getFullYear()} CCN Health. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-navy-400">HIPAA Compliant</span>
            <span className="text-xs text-navy-400">SOC 2 Certified</span>
            <span className="text-xs text-navy-400">FDA Registered</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
