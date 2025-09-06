'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const serviceDetails = [
  {
    title: 'IPO Legal Due Diligence',
    description: 'Comprehensive legal due diligence for Initial Public Offerings and listing processes.',
    icon: '🔍'
  },
  {
    title: 'DRHP/RHP Drafting',
    description: 'Expert drafting and vetting of Draft Red Herring Prospectus and Red Herring Prospectus.',
    icon: '📄'
  },
  {
    title: 'Pre-IPO Restructuring',
    description: 'Strategic restructuring from Private to Public Company before IPO launch.',
    icon: '🔄'
  },
  {
    title: 'SEBI (ICDR) Compliance',
    description: 'Full compliance with SEBI Issue of Capital and Disclosure Requirements regulations.',
    icon: '⚖️'
  },
  {
    title: 'Stock Exchange Listing',
    description: 'Complete support for stock exchange listing and compliance requirements.',
    icon: '📈'
  },
  {
    title: 'Post-Listing Advisory',
    description: 'Ongoing advisory and compliance support after successful listing.',
    icon: '📊'
  },
  {
    title: 'Regulatory Filings',
    description: 'All regulatory filings and compliance documentation for IPO process.',
    icon: '📋'
  },
  {
    title: 'Investor Relations',
    description: 'Support for investor relations and post-IPO communication strategies.',
    icon: '🤝'
  }
];

export default function IpoListingServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar currentPage="/services/ipo-listing-services" />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-amber-600 via-amber-500 to-yellow-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <motion.h1 
              className="text-6xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              IPO & Listing Services
            </motion.h1>
            <motion.p 
              className="text-xl mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              End-to-end support for Initial Public Offerings, from pre-IPO restructuring to post-listing compliance.
            </motion.p>
            <motion.div 
              className="w-24 h-1 bg-white mx-auto"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            ></motion.div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our IPO Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IPO support from initial planning to successful listing and beyond.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceDetails.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IPO Process Flow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              IPO Process Flow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Step-by-step guidance through the complete IPO journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pre-IPO Planning</h3>
              <p className="text-sm text-gray-600">Strategic planning and restructuring for IPO readiness.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h3>
              <p className="text-sm text-gray-600">DRHP drafting, legal due diligence, and compliance.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEBI Approval</h3>
              <p className="text-sm text-gray-600">Regulatory filings and SEBI approval process.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Listing & Beyond</h3>
              <p className="text-sm text-gray-600">Stock exchange listing and post-IPO support.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Why Choose Finleaf?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise in IPO and listing services ensures successful public offerings.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Image
                  src="/presentation.png"
                  alt="Expertise"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEBI Expertise</h3>
              <p className="text-gray-600">
                Deep understanding of SEBI regulations and IPO compliance requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Image
                  src="/financial-advisor-1.png"
                  alt="Experience"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Track Record</h3>
              <p className="text-gray-600">
                Successfully completed numerous IPOs and listing processes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Image
                  src="/clipboard.png"
                  alt="Support"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">End-to-End Support</h3>
              <p className="text-gray-600">
                Complete support from pre-IPO planning to post-listing compliance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Go Public?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our IPO experts guide you through the listing process successfully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Contact Us
              </Link>
              <Link
                href="/make-appointment"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-amber-600 transition-colors duration-300"
              >
                Make an Appointment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

