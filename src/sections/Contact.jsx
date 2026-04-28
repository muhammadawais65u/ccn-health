import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-marketing">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium text-accent-blue bg-accent-blue/10 rounded-full mb-4">
              Contact Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-navy-900 tracking-tight mb-4">
              Get in touch
            </h2>
            <p className="text-lg text-navy-500 mb-8">
              Ready to transform your remote care program? Our team is here to help you every step of the way.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'hello@ccnhealth.com' },
                { icon: Phone, label: 'Phone', value: '+1 (805) 519-7314' },
                { icon: MapPin, label: 'Location', value: 'Los Angeles, CA' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-navy-600" />
                  </div>
                  <div>
                    <p className="text-xs text-navy-400 uppercase tracking-wider">{item.label}</p>
                    <p className="font-medium text-navy-900">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-navy-50/50 rounded-2xl p-8 border border-navy-100">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-navy-200 bg-white text-navy-900 focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue transition-colors"
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-navy-200 bg-white text-navy-900 focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue transition-colors"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="company" className="block text-sm font-medium text-navy-700 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-navy-200 bg-white text-navy-900 focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue transition-colors"
                  placeholder="Healthcare Organization Name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-navy-200 bg-white text-navy-900 focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue transition-colors resize-none"
                  placeholder="Tell us about your remote care program needs..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-navy-900 text-white font-medium rounded-lg hover:bg-navy-800 transition-colors inline-flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>

              <p className="mt-4 text-xs text-navy-400 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
