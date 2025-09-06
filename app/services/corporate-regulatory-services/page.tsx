'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const serviceDetails = [
  {
    title: 'Company Incorporation & Structuring',
    description: 'Private, Public, LLP, Section 8, OPC company formation and structuring services.',
    icon: '🏢'
  },
  {
    title: 'MCA & ROC Compliance',
    description: 'Annual Filings, XBRL, Event-based Filings, and regulatory compliance management.',
    icon: '📋'
  },
  {
    title: 'Corporate Governance Advisory',
    description: 'Secretarial Audit, governance framework development, and compliance advisory.',
    icon: '⚖️'
  },
  {
    title: 'Drafting & Documentation',
    description: 'Resolutions, Minutes, Statutory Registers, and corporate documentation.',
    icon: '📝'
  },
  {
    title: 'NCLT Matters',
    description: 'Oppression & Mismanagement, Revival, Compromises, Winding-up proceedings.',
    icon: '🏛️'
  },
  {
    title: 'Corporate Restructuring',
    description: 'Mergers, Demergers, Slump Sale, Buy-back, Capital Reduction strategies.',
    icon: '🔄'
  },
  {
    title: 'FEMA & RBI Compliances',
    description: 'FDI, ODI, ECB, Compounding Applications, and cross-border regulations.',
    icon: '🌍'
  },
  {
    title: 'Shareholding & ESOP',
    description: 'ESOP Structuring, Strike-off/Revival of Companies, and share management.',
    icon: '📊'
  }
];

export default function CorporateRegulatoryServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar currentPage="/services/corporate-regulatory-services" />
      
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
              Corporate & Regulatory Services
            </motion.h1>
            <motion.p 
              className="text-xl mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive corporate compliance and regulatory services to ensure your business operates within legal frameworks.
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
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From company formation to ongoing compliance, we provide end-to-end corporate regulatory services.
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

      {/* Why Choose Us */}
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
              Why Choose Finleaf?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise in corporate law and regulatory compliance ensures your business stays ahead of requirements.
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
                  src="/case.png"
                  alt="Expertise"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-600">
                Seasoned professionals with deep understanding of corporate laws and regulations.
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
                  src="/clipboard.png"
                  alt="Compliance"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Proactive Compliance</h3>
              <p className="text-gray-600">
                Stay ahead of regulatory changes with our proactive compliance management approach.
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
                  src="/leader.png"
                  alt="Support"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock support for all your corporate regulatory needs and queries.
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
              Ready to Ensure Compliance?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our expert team help you navigate corporate regulations and maintain compliance.
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

