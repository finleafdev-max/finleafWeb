'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const serviceDetails = [
  {
    title: 'AIF Structuring & Registration',
    description: 'Category I, II & III AIF structuring and SEBI registration services.',
    icon: '🏗️'
  },
  {
    title: 'Trust Deeds & Documentation',
    description: 'Drafting of Trust Deeds, PPM, IMAs and regulatory documentation.',
    icon: '📋'
  },
  {
    title: 'SEBI Compliance',
    description: 'Compliance with SEBI AIF regulations and reporting obligations.',
    icon: '⚖️'
  },
  {
    title: 'Fund Manager Advisory',
    description: 'Comprehensive advisory to Fund Managers, Trustees & Investors.',
    icon: '👨‍💼'
  },
  {
    title: 'Category I AIFs',
    description: 'Venture Capital, SME, Infrastructure, and Social Venture Funds.',
    icon: '🚀'
  },
  {
    title: 'Category II AIFs',
    description: 'Private Equity, Debt, and Fund of Funds structuring.',
    icon: '💰'
  },
  {
    title: 'Category III AIFs',
    description: 'Hedge Funds and Trading Funds with leverage strategies.',
    icon: '📊'
  },
  {
    title: 'Ongoing Support',
    description: 'Continuous compliance monitoring and regulatory updates.',
    icon: '🔄'
  }
];

export default function AlternativeInvestmentFundsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar currentPage="/services/alternative-investment-funds" />
      
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
              Alternative Investment Funds (AIFs)
            </motion.h1>
            <motion.p 
              className="text-xl mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Expert AIF structuring, registration, and compliance services for fund managers and investors.
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
              AIF Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for all categories of Alternative Investment Funds.
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

      {/* AIF Categories */}
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
              AIF Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the different types of Alternative Investment Funds and their requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center"
            >
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Category I</h3>
              <p className="text-gray-600 mb-4">
                Venture Capital, SME, Infrastructure, and Social Venture Funds
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Venture Capital Funds</li>
                <li>• SME Funds</li>
                <li>• Infrastructure Funds</li>
                <li>• Social Venture Funds</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center"
            >
              <div className="text-6xl mb-6">💰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Category II</h3>
              <p className="text-gray-600 mb-4">
                Private Equity, Debt, and Fund of Funds
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Private Equity Funds</li>
                <li>• Debt Funds</li>
                <li>• Fund of Funds</li>
                <li>• Real Estate Funds</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 text-center"
            >
              <div className="text-6xl mb-6">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Category III</h3>
              <p className="text-gray-600 mb-4">
                Hedge Funds and Trading Funds
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Hedge Funds</li>
                <li>• Trading Funds</li>
                <li>• Leverage Strategies</li>
                <li>• Complex Instruments</li>
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
              Ready to Launch Your AIF?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our experts help you structure and register your Alternative Investment Fund.
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

