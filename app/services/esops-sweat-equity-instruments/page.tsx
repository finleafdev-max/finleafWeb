'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const serviceDetails = [
  {
    title: 'ESOP Structuring & Implementation',
    description: 'Comprehensive Employee Stock Option Plans design and implementation services.',
    icon: '👥'
  },
  {
    title: 'Sweat Equity Issuances',
    description: 'Strategic sweat equity structuring for founders and key employees.',
    icon: '💧'
  },
  {
    title: 'Compulsorily Convertible Preference Shares',
    description: 'CCPS structuring and compliance for investment and financing.',
    icon: '📊'
  },
  {
    title: 'Compulsorily Convertible Debentures',
    description: 'CCD structuring with conversion mechanisms and compliance.',
    icon: '📜'
  },
  {
    title: 'Non-Convertible Debentures',
    description: 'NCD structuring and regulatory compliance for debt instruments.',
    icon: '💰'
  },
  {
    title: 'Private Placements',
    description: 'Private placement structuring and SEBI compliance.',
    icon: '🔒'
  },
  {
    title: 'Rights Issue',
    description: 'Rights issue planning and implementation for existing shareholders.',
    icon: '📈'
  },
  {
    title: 'Regulatory Compliance',
    description: 'Ongoing compliance with SEBI, Companies Act, and other regulations.',
    icon: '⚖️'
  }
];

export default function EsopsSweatEquityInstrumentsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar currentPage="/services/esops-sweat-equity-instruments" />
      
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
              ESOPs, Sweat Equity & Instruments
            </motion.h1>
            <motion.p 
              className="text-xl mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Strategic equity structuring and employee incentive programs for business growth and talent retention.
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
              Comprehensive equity structuring solutions for employee incentives and business financing.
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

      {/* Benefits Section */}
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
              Benefits of Equity Structuring
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic advantages of implementing ESOPs and equity instruments in your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Companies</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  Attract and retain top talent
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  Align employee interests with company goals
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  Improve cash flow through equity-based compensation
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  Enhance company valuation and investor appeal
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Employees</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">✓</span>
                  Share in company success and growth
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">✓</span>
                  Long-term wealth creation opportunities
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">✓</span>
                  Sense of ownership and commitment
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">✓</span>
                  Tax-efficient compensation structure
                </li>
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
              Ready to Structure Your Equity?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our experts help you design and implement effective equity incentive programs.
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

