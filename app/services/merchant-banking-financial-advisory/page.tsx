'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const serviceDetails = [
  {
    title: 'Merchant Banker Liaison',
    description: 'Direct liaison with Category I/II/III Merchant Bankers for regulatory compliance.',
    icon: '🏦'
  },
  {
    title: 'Due Diligence Reports',
    description: 'Comprehensive preparation of due diligence reports and regulatory disclosures.',
    icon: '🔍'
  },
  {
    title: 'Valuation Support',
    description: 'Expert valuation services and fairness opinions for corporate transactions.',
    icon: '💰'
  },
  {
    title: 'Corporate Finance Compliance',
    description: 'Complete compliance documentation for corporate finance transactions.',
    icon: '📋'
  },
  {
    title: 'IPO Support Services',
    description: 'End-to-end support for Initial Public Offerings and listing processes.',
    icon: '📈'
  },
  {
    title: 'Private Placements',
    description: 'Structuring and compliance for private placement transactions.',
    icon: '🔒'
  },
  {
    title: 'M&A Advisory',
    description: 'Strategic advisory for mergers, acquisitions, and corporate restructuring.',
    icon: '🤝'
  },
  {
    title: 'Regulatory Reporting',
    description: 'Ongoing regulatory reporting and compliance monitoring.',
    icon: '⚖️'
  }
];

export default function MerchantBankingFinancialAdvisoryPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar currentPage="/services/merchant-banking-financial-advisory" />
      
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
              Merchant Banking & Financial Advisory
            </motion.h1>
            <motion.p 
              className="text-xl mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive merchant banking services and financial advisory for corporate growth and compliance.
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
              End-to-end merchant banking solutions from regulatory compliance to strategic advisory.
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

      {/* Merchant Banking Categories */}
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
              Merchant Banking Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the different categories of merchant banking services and their scope.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center"
            >
              <div className="text-6xl mb-6">🏦</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Category I</h3>
              <p className="text-gray-600 mb-4">
                Issue Management & Underwriting
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• IPO Management</li>
                <li>• Underwriting Services</li>
                <li>• Issue Management</li>
                <li>• Book Building</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center"
            >
              <div className="text-6xl mb-6">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Category II</h3>
              <p className="text-gray-600 mb-4">
                Advisory & Consultancy
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• M&A Advisory</li>
                <li>• Financial Restructuring</li>
                <li>• Project Appraisal</li>
                <li>• Investment Advisory</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 text-center"
            >
              <div className="text-6xl mb-6">💼</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Category III</h3>
              <p className="text-gray-600 mb-4">
                Specialized Services
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Credit Syndication</li>
                <li>• Project Finance</li>
                <li>• Working Capital</li>
                <li>• Bridge Finance</li>
              </ul>
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
              Our expertise in merchant banking and financial advisory ensures successful transactions.
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
                  src="/bank.png"
                  alt="Expertise"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEBI Expertise</h3>
              <p className="text-gray-600">
                Deep understanding of SEBI merchant banking regulations and compliance requirements.
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
                Successfully completed numerous merchant banking transactions and advisory projects.
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
                  src="/presentation.png"
                  alt="Support"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">End-to-End Support</h3>
              <p className="text-gray-600">
                Complete support from transaction planning to post-completion compliance and reporting.
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
              Ready for Financial Success?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our merchant banking experts guide you through complex financial transactions.
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

