'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const features = [
  {
    title: 'NBFC Registration',
    description: 'Complete assistance in NBFC registration process with RBI, including documentation and compliance requirements.',
    icon: '🏦'
  },
  {
    title: 'Compliance Management',
    description: 'Ongoing compliance monitoring and management to ensure adherence to RBI regulations and guidelines.',
    icon: '📋'
  },
  {
    title: 'Regulatory Updates',
    description: 'Stay updated with latest RBI notifications and regulatory changes affecting NBFC operations.',
    icon: '📢'
  },
  {
    title: 'Audit Support',
    description: 'Comprehensive audit support and preparation for RBI inspections and statutory requirements.',
    icon: '🔍'
  }
];

const benefits = [
  'Expert guidance through complex registration process',
  'Proactive compliance management',
  'Reduced regulatory risks',
  'Timely regulatory updates',
  'Professional audit support',
  'Ongoing advisory services'
];

export default function NBFCIncorporationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar currentPage="/services" />
      
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
              NBFC Incorporation & Compliances
            </motion.h1>
            <motion.p 
              className="text-xl mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Stay Ahead of Regulatory Changes with Proactive Compliance Management to Ensure Ongoing Legal Adherence.
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-amber-100 text-amber-700 font-semibold px-4 py-2 rounded-full text-sm mb-6">
                Regulatory Compliance
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Complete NBFC Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our NBFC incorporation and compliance services provide comprehensive support for Non-Banking Financial Companies. 
                From initial registration with RBI to ongoing compliance management, we ensure your NBFC operates smoothly 
                within regulatory frameworks.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With deep expertise in RBI regulations and NBFC operations, our team helps you navigate complex compliance 
                requirements while focusing on your core business objectives.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-700 transition-colors duration-300"
              >
                Get Started Today
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
                <Image
                  src="/mobile-banking.png"
                  alt="NBFC Incorporation & Compliances"
                  width={400}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our NBFC Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive NBFC solutions for registration, compliance, and ongoing support
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Why Choose Our NBFC Services?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-600 to-yellow-500 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-lg mb-6 opacity-90">
                Contact our expert team today to discuss your NBFC requirements and get a personalized solution.
              </p>
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="block w-full bg-white text-amber-600 text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                >
                  Contact Us
                </Link>
                <Link
                  href="/make-appointment"
                  className="block w-full bg-transparent border-2 border-white text-white text-center py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors duration-300"
                >
                  Schedule Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
