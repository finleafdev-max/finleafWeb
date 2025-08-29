'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const services = [
  {
    title: 'E-Drafting & Vetting Service',
    description: 'Effective documentation is crucial for businesses and organizations to maintain efficient operations and compliance.',
    image: '/clipboard.png',
    href: '/services/e-drafting-vetting-service'
  },
  {
    title: 'NBFC incorporation & Compliances',
    description: 'Stay Ahead of Regulatory Changes with Proactive Compliance Management to Ensure Ongoing Legal Adherence.',
    image: '/mobile-banking.png',
    href: '/services/nbfc-incorporation-compliances'
  },
  {
    title: 'IRDAI incorporation & Compliances',
    description: 'Ensuring the trust, integrity, and resilience of India\'s insurance sector for secure and reliable services.',
    image: '/save-money.png',
    href: '/services/irdai-incorporation-compliances'
  },
  {
    title: 'FEMA Compliances & Advisory Services',
    description: 'Effortless cross-border transactions with comprehensive FEMA compliance services for smooth and secure international dealings.',
    image: '/financial-advisor-1.png',
    href: '/services/fema-compliances-advisory-services'
  },
  {
    title: 'Insolvency Resolution Services - NCLT',
    description: 'Restructuring pathways for a fresh start, enabling debt repayment, and restoring long-term financial stability effectively.',
    image: '/insolvency.png',
    href: '/services/insolvency-resolution-services-nclt'
  },
  {
    title: 'Mergers & Amalgamation Services',
    description: 'Mergers and Acquisitions: Catalyzing Growth, Expanding Market Reach, and Shaping a New Era of Collaboration.',
    image: '/handshake-3.png',
    href: '/services/mergers-and-amalgamation-services'
  },
  {
    title: 'Fintech Advisory Services',
    description: 'Fintech: Pioneering Financial Solutions For The Digital Age For Unlocking Financial Potential Through Cutting-edge Technology.',
    image: '/presentation.png',
    href: '/services/fintech-advisory-services'
  },
  {
    title: 'Corporate Litigation and Representation',
    description: 'Providing Comprehensive Corporate Legal Services With Expertise In Various Aspects Of Business Law.',
    image: '/leader.png',
    href: '/services/corporate-litigation-and-representation'
  }
];

export default function ServicesPage() {
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
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Finleaf Where Expertise Meets Ambition & Henceforth Remarkable Achievements Becomes Achievable & Possible.
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

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Finleaf Top Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to meet your business needs with expertise and precision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={service.href}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 overflow-hidden">
                    <div className="p-6">
                      <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={32}
                          height={32}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center text-amber-600 font-medium text-sm group-hover:text-amber-700 transition-colors duration-300">
                        Learn More
                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our expert team help you navigate the complexities of business compliance and legal services.
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
