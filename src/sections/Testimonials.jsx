import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Partnering with CCN Health has been a game-changer — they're everything we look for in an RPM vendor: highly organized, reliable, and incredibly fast at scaling.",
    author: 'Steve Wheeler',
    role: 'VP of Partnerships',
    company: 'Tenovi',
    initials: 'SW',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    quote: "This company is amazing! So easy to work with and very responsive to all requests. It's great to have all our patient vitals flowing directly into their charts.",
    author: 'Stephanie Bryant-Lipp',
    role: 'Senior Quality Manager',
    company: 'Village Medical',
    initials: 'SB',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    quote: "Heart failure admissions have decreased noticeably. Over the last three years, we've seen fewer heart attacks and hospitalizations, significantly due to our monitoring efforts with CCN Health.",
    author: 'Dr. Dawn Atwal, MD',
    role: 'Cardiologist',
    company: 'Laguna Cardiology',
    initials: 'DA',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    quote: "CCN Health's Caregiver App transformed our care delivery. It empowered our nursing teams to monitor numerous patients using minimal equipment, significantly reducing overhead costs.",
    author: 'Facility Manager',
    role: 'Operations',
    company: 'Access Healthcare Associates',
    initials: 'FM',
    color: 'bg-emerald-50 text-emerald-600',
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-navy-50/50">
      <div className="container-marketing">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-accent-blue bg-accent-blue/10 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy-900 tracking-tight mb-4">
            What our partners say
          </h2>
          <p className="text-lg text-navy-500">
            Trusted by healthcare organizations across the country.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-xl p-6 border border-navy-100 shadow-sm hover:shadow-md transition-all"
            >
              {/* Quote Mark */}
              <div className="text-5xl font-serif text-accent-blue/20 mb-2 leading-none">"</div>

              {/* Quote */}
              <p className="text-navy-600 leading-relaxed mb-6 -mt-4">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-navy-100">
                <div className={`w-10 h-10 ${testimonial.color} rounded-full flex items-center justify-center font-semibold text-sm`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">{testimonial.author}</p>
                  <p className="text-xs text-navy-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
