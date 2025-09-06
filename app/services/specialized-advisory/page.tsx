'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const serviceDetails = [
  {
    title: 'Family Business Structuring',
    description: 'Strategic structuring and succession planning for family-owned businesses.',
    icon: '👨‍👩‍👧‍👦'
  },
  {
    title: 'Trusts & Charitable Institutions',
    description: 'Comprehensive advisory for trusts, foundations, and charitable organizations.',
    icon: '🤝'
  },
  {
    title: 'Cross-Border Transactions',
    description: 'International transaction structuring and regulatory compliance.',
    icon: '🌍'
  },
  {
    title: 'Startup Legal Support',
    description: 'Complete legal support for startups, funding, and compliance.',
    icon: '🚀'
  },
  {
    title: 'ESG & Sustainability Advisory',
    description: 'Environmental, Social, and Governance compliance and advisory services.',
    icon: '🌱'
  },
  {
    title: 'Regulatory Compliance',
    description: 'Specialized regulatory compliance for various business sectors.',
    icon: '⚖️'
  },
  {
    title: 'Risk Management',
    description: 'Comprehensive risk assessment and mitigation strategies.',
    icon: '⚠️'
  },
  {
    title: 'Strategic Planning',
    description: 'Long-term strategic planning and business advisory services.',
    icon: '📊'
  }
];

export default function SpecializedAdvisoryPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar currentPage="/services/specialized-advisory" />
      
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
              Specialized Advisory
            </motion.h1>
            <motion.p 
              className="text-xl mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Expert advisory services for specialized business needs and unique challenges.
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
              Our Specialized Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for unique business challenges and specialized requirements.
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

      {/* Key Focus Areas */}
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
              Key Focus Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized expertise in critical business areas and emerging trends.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Family Business & Succession</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-amber-600 text-sm font-bold">•</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Succession Planning</h4>
                    <p className="text-gray-600">Strategic planning for smooth business transitions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-amber-600 text-sm font-bold">•</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Governance Structure</h4>
                    <p className="text-gray-600">Professional governance frameworks for family businesses.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-amber-600 text-sm font-bold">•</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Conflict Resolution</h4>
                    <p className="text-gray-600">Family business conflict management and resolution.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">ESG & Sustainability</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-amber-600 text-sm font-bold">•</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">ESG Compliance</h4>
                    <p className="text-gray-600">Environmental, Social, and Governance compliance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-amber-600 text-sm font-bold">•</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sustainability Reporting</h4>
                    <p className="text-gray-600">Sustainability reporting and disclosure compliance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-amber-600 text-sm font-bold">•</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Green Finance</h4>
                    <p className="text-gray-600">Green finance and sustainable investment advisory.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Startup Support */}
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
              Startup Legal Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive legal support for startups at every stage of growth.
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
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Foundation</h3>
              <p className="text-gray-600 mb-4">
                Legal foundation and structure
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Company Formation</li>
                <li>• Founders Agreement</li>
                <li>• IP Protection</li>
                <li>• Compliance Setup</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg"
            >
              <div className="text-6xl mb-6">💰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Funding</h3>
              <p className="text-gray-600 mb-4">
                Investment and funding support
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Investment Agreements</li>
                <li>• Due Diligence</li>
                <li>• Regulatory Compliance</li>
                <li>• Investor Relations</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg"
            >
              <div className="text-6xl mb-6">📈</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Growth</h3>
              <p className="text-gray-600 mb-4">
                Scaling and expansion support
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• International Expansion</li>
                <li>• M&A Support</li>
                <li>• Corporate Governance</li>
                <li>• Exit Strategies</li>
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
              Need Specialized Advisory?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our specialized experts address your unique business challenges.
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

