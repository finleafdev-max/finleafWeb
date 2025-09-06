'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const serviceDetails = [
  {
    title: 'Legal Due Diligence',
    description: 'Comprehensive legal due diligence for buy-side and sell-side transactions.',
    icon: '🔍'
  },
  {
    title: 'Transaction Structuring',
    description: 'Strategic structuring of complex business transactions and deals.',
    icon: '🏗️'
  },
  {
    title: 'M&A Support',
    description: 'Complete support for mergers, acquisitions, and corporate restructuring.',
    icon: '🤝'
  },
  {
    title: 'Share Purchase Agreements',
    description: 'Drafting and negotiation of share purchase and sale agreements.',
    icon: '📄'
  },
  {
    title: 'Shareholders Agreements',
    description: 'Comprehensive shareholders agreements and corporate governance.',
    icon: '👥'
  },
  {
    title: 'Joint Ventures',
    description: 'Strategic joint venture structuring and partnership agreements.',
    icon: '🤲'
  },
  {
    title: 'Strategic Alliances',
    description: 'Business alliance structuring and collaboration agreements.',
    icon: '🌟'
  },
  {
    title: 'Risk Assessment',
    description: 'Comprehensive risk assessment and mitigation strategies.',
    icon: '⚠️'
  }
];

export default function DueDiligenceTransactionSupportPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar currentPage="/services/due-diligence-transaction-support" />
      
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
              Due Diligence & Transaction Support
            </motion.h1>
            <motion.p 
              className="text-xl mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive due diligence and transaction support services for successful business deals.
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
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end due diligence and transaction support for complex business deals.
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

      {/* Due Diligence Process */}
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
              Due Diligence Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematic approach to comprehensive due diligence and risk assessment.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-sm text-gray-600">Scope definition and due diligence planning.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Investigation</h3>
              <p className="text-sm text-gray-600">Comprehensive investigation and data collection.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Analysis</h3>
              <p className="text-sm text-gray-600">Risk analysis and issue identification.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reporting</h3>
              <p className="text-sm text-gray-600">Comprehensive reporting and recommendations.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transaction Types */}
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
              Transaction Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Support for various types of business transactions and corporate deals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg"
            >
              <div className="text-6xl mb-6">🤝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mergers & Acquisitions</h3>
              <p className="text-gray-600 mb-4">
                Complete support for M&A transactions
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Due Diligence</li>
                <li>• Transaction Structuring</li>
                <li>• Agreement Drafting</li>
                <li>• Regulatory Compliance</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg"
            >
              <div className="text-6xl mb-6">👥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Joint Ventures</h3>
              <p className="text-gray-600 mb-4">
                Strategic partnership structuring
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Partnership Agreements</li>
                <li>• Governance Structure</li>
                <li>• Risk Allocation</li>
                <li>• Exit Strategies</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg"
            >
              <div className="text-6xl mb-6">🌟</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Alliances</h3>
              <p className="text-gray-600 mb-4">
                Business collaboration support
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Alliance Agreements</li>
                <li>• Performance Metrics</li>
                <li>• Dispute Resolution</li>
                <li>• Termination Clauses</li>
              </ul>
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
              Ready for Transaction Success?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our experts ensure your business transactions are successful and risk-free.
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

