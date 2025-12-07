'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const services = [
  {
    title: 'Corporate & Regulatory Services',
    description: 'Company incorporation, MCA compliance, corporate governance, and regulatory advisory services for comprehensive business support.',
    image: '/bank.png',
    href: '/services/corporate-regulatory-services'
  },
  {
    title: 'Corporate Litigation & Dispute Resolution',
    description: 'Expert representation before NCLT, NCLAT, High Courts, and Supreme Court with comprehensive dispute resolution strategies.',
    image: '/leader.png',
    href: '/services/corporate-litigation-and-representation'
  },
  {
    title: 'Capital Markets & SEBI Advisory',
    description: 'IPO services, SEBI compliance, merchant banking support, and capital market advisory for successful public offerings.',
    image: '/presentation.png',
    href: '/services/capital-markets-sebi-advisory'
  },
  {
    title: 'Mergers, Acquisitions & Transaction Advisory',
    description: 'Legal due diligence, M&A advisory, joint ventures, and transaction structuring for successful business combinations.',
    image: '/handshake-3.png',
    href: '/services/mergers-and-amalgamation-services'
  },
  {
    title: 'Alternative Investment Funds (AIFs)',
    description: 'AIF structuring, registration, compliance, and advisory services for fund managers, trustees, and investors.',
    image: '/financial-advisor-1.png',
    href: '/services/alternative-investment-funds'
  },
  {
    title: 'Merchant Banking & Financial Advisory',
    description: 'Due diligence reports, valuation support, fairness opinions, and compliance documentation for corporate finance transactions.',
    image: '/mobile-banking.png',
    href: '/services/merchant-banking-financial-advisory'
  },
  {
    title: 'IPO & Listing Services',
    description: 'IPO legal due diligence, DRHP drafting, pre-IPO restructuring, and ongoing post-listing advisory services.',
    image: '/case.png',
    href: '/services/ipo-listing-services'
  },
  {
    title: 'Due Diligence & Transaction Support',
    description: 'Comprehensive legal due diligence, transaction structuring, and advisory for mergers, acquisitions, and strategic alliances.',
    image: '/clipboard.png',
    href: '/services/due-diligence-transaction-support'
  },
  {
    title: 'Drafting & B2B Contractual Advisory',
    description: 'Customized agreement drafting, shareholders agreements, employment contracts, and general corporate advisory services.',
    image: '/consultation.png',
    href: '/services/e-drafting-vetting-service'
  },
  {
    title: 'ESOPs, Sweat Equity & Instruments',
    description: 'ESOP structuring, sweat equity issuances, convertible instruments, and private placement advisory services.',
    image: '/team.png',
    href: '/services/esops-sweat-equity-instruments'
  },
  {
    title: 'Taxation Advisory & Litigation',
    description: 'GST advisory, tax litigation, direct and indirect tax structuring, and international taxation advisory services.',
    image: '/save-money.png',
    href: '/services/taxation-advisory-litigation'
  },
  {
    title: 'Labour & Employment Laws',
    description: 'Employment contracts, HR policies, POSH compliance, labour law audits, and representation before tribunals.',
    image: '/proven.png',
    href: '/services/labour-employment-laws'
  },
  {
    title: 'Intellectual Property & Digital Laws',
    description: 'Trademark, copyright, patent services, IP litigation, data protection advisory, and cyber law compliance.',
    image: '/copyright.png',
    href: '/services/intellectual-property-digital-laws'
  },
  {
    title: 'Specialized Advisory',
    description: 'Family business structuring, trusts advisory, cross-border transactions, startup support, and ESG legal advisory.',
    image: '/licence.png',
    href: '/services/specialized-advisory'
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar currentPage="/services" />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-amber-600 via-amber-500 to-yellow-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Services
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl mx-auto leading-relaxed"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Finleaf Top Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions tailored to meet your business needs with expertise and precision.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
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
                    <div className="p-4 sm:p-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={32}
                          height={32}
                          className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                        />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 group-hover:text-amber-600 transition-colors duration-300 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center text-amber-600 font-medium text-xs sm:text-sm group-hover:text-amber-700 transition-colors duration-300">
                        Learn More
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let our expert team help you navigate the complexities of business compliance and legal services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="bg-white text-amber-600 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base"
              >
                Contact Us
              </Link>
              <Link
                href="https://calendly.com/finleaf/30min"
                className="bg-transparent border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-amber-600 transition-colors duration-300 text-sm sm:text-base"
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
