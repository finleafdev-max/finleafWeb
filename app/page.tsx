'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const stats = [
  { 
    value: '2500+', 
    label: 'Companies Registered',
    icon: '/copyright.png'
  },
  { 
    value: '1500+', 
    label: 'NCLT Cases Done',
    icon: '/case.png'
  },
  { 
    value: '550+', 
    label: 'FEMA-RBI COMPLIANCES',
    icon: '/bank.png'
  },
  { 
    value: '50+', 
    label: 'IRDAI Licenses',
    icon: '/licence.png'
  },
];

const services = [
  {
    title: 'E-Drafting & Vetting Service',
    description: 'Effective documentation is crucial for businesses and organizations to maintain efficient operations and compliance.',
    icon: '/clipboard.png',
    href: '/services/e-drafting-vetting-service'
  },
  {
    title: 'Corporate & Regulatory Services',
    description: 'Comprehensive corporate compliance and regulatory services to ensure your business operates within legal frameworks.',
    icon: '/case.png',
    href: '/services/corporate-regulatory-services'
  },
  {
    title: 'NBFC Incorporation & Compliances',
    description: 'Stay Ahead of Regulatory Changes with Proactive Compliance Management to Ensure Ongoing Legal Adherence.',
    icon: '/mobile-banking.png',
    href: '/services/nbfc-incorporation-compliances'
  },
  {
    title: 'IRDAI Incorporation & Compliances',
    description: 'Ensuring the trust, integrity, and resilience of India\'s insurance sector for secure and reliable services.',
    icon: '/save-money.png',
    href: '/services/irdai-incorporation-compliances'
  },
  {
    title: 'FEMA Compliances & Advisory Services',
    description: 'Effortless cross-border transactions with comprehensive FEMA compliance services for smooth and secure international dealings.',
    icon: '/financial-advisor-1.png',
    href: '/services/fema-compliances-advisory-services'
  },
  {
    title: 'Insolvency Resolution Services – NCLT',
    description: 'Restructuring pathways for a fresh start, enabling debt repayment, and restoring long-term financial stability effectively.',
    icon: '/insolvency.png',
    href: '/services/insolvency-resolution-services-nclt'
  },
  {
    title: 'Mergers & Amalgamation Services',
    description: 'Mergers and Acquisitions: Catalyzing Growth, Expanding Market Reach, and Shaping a New Era of Collaboration.',
    icon: '/handshake-3.png',
    href: '/services/mergers-and-amalgamation-services'
  },
  {
    title: 'Fintech Advisory Services',
    description: 'Fintech: Pioneering Financial Solutions For The Digital Age For Unlocking Financial Potential Through Cutting-edge Technology',
    icon: '/consultation.png',
    href: '/services/fintech-advisory-services'
  },
];

const whyChooseUs = [
  {
    title: 'Expert In Corporate Legal Service',
    description: 'Experienced In Providing Comprehensive Corporate Legal Services With Expertise In Various Aspects Of Business Law.',
    icon: '/leader.png'
  },
  {
    title: 'Client Focused Solutions',
    description: 'Dedicated To Providing Personalized And Tailored Solutions That Meet The Unique Needs And Goals Of Our Clients.',
    icon: '/public-relation.png'
  },
  {
    title: 'Analytical & Responsive Approach',
    description: 'Employing A Data-driven And Proactive Method To Swiftly Address Inquiries And Resolve Issues, Ensuring Efficient And Effective Delivery Of Solutions.',
    icon: '/presentation.png'
  },
  {
    title: 'Proven Track Record',
    description: 'Our success is reflected in the success of our clients. We have a proven track record of helping businesses across various industries navigate their financial, corporate, and legal challenges with ease.',
    icon: '/proven.png'
  },
];

const faqs = [
  {
    question: 'How can we schedule a meeting with you?',
    answer: 'You have two options to meet us:\n\nOption 1: Book Direct Meeting Via Calendly As per Your Schedule.\n\nOption 2: Call Us & Schedule Offline Meeting at our Office'
  },
  {
    question: 'What Are The Charges ?',
    answer: 'We have 3 different Models.\n\n1- Basic [Pocket Friendly For Small Scale Industries]\n\n2- Moderate[Customized Solution As and When Required]\n\n3- Advance [Specialized Solution As and When Required]'
  },
  {
    question: 'Do You Provide PAN India Services ?',
    answer: 'Yes, We Do Provide PAN India Services and Incase of Emergency we also provide On-site Services.'
  },
  {
    question: 'Who are we?',
    answer: 'FinLeaf is a trusted CA, CS, and legal consultancy firm specializing in comprehensive solutions for businesses and individuals. Our expertise spans tax services, legal consulting, and criminal dispute resolution. With a client-centric approach and a team of experienced professionals, we deliver tailored strategies to meet diverse legal and financial needs.'
  },
  {
    question: 'What services does FinLeaf provide in criminal dispute resolution?',
    answer: 'FinLeaf offers comprehensive legal support, including pre-trial consultations, courtroom representation, and post-trial appeals, tailored to protect your rights and achieve favorable outcomes.'
  },
];

const clientLogos = [
  '/wef.png',
  '/aall-black-300x90-1.png',
  '/WhatsApp-Image-2023-06-16-at-17.39.03-300x297-1.jpg',
  '/WhatsApp-Image-2023-06-16-at-17.38.08-300x167-1.jpg',
  '/WhatsApp-Image-2023-06-16-at-17.26.18324-300x90-1.jpg',
  '/WhatsApp-Image-2023-06-16-at-17.26.185-300x90-1.jpg',
  '/logo-3-300x57-1.png',
  '/WhatsApp-Image-2023-06-16-at-17.26.181-300x138-1.jpg',
  '/WhatsApp-Image-2023-06-16-at-17.26.18-300x196-1.jpg',
  '/WhatsApp-Image-2023-06-16-at-17.26.17768-300x216-1.jpg',
  '/WhatsApp-Image-2024-08-30-at-4.32.26-PM.jpeg',
  '/WhatsApp-Image-2024-08-30-at-4.31.32-PM.jpeg',
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar currentPage="/" />

      {/* Hero Slider Section */}
      <section className="relative h-screen">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="h-full"
        >
          <SwiperSlide>
            <div 
              className="relative h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url(/home-1.jpg)' }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.h3 
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    FinLeaf : Where Expertise<br className="hidden sm:block" />
                    <span className="sm:hidden"> </span>Meets Excellence in CA, CS,<br className="hidden sm:block" />
                    <span className="sm:hidden"> </span>& Legal Consultancy
                  </motion.h3>
                  <motion.p 
                    className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    FinLeaf provides top-tier CA, CS, and legal services, combining deep<br className="hidden sm:block" />
                    <span className="sm:hidden"> </span>expertise with a commitment to excellence for all your needs.
                  </motion.p>
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <a 
                      href="/finleaf-legal" 
                      className="bg-primary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                      FinLeaf Legal
                    </a>
                    <a 
                      href="/contact-us" 
                      className="bg-white text-gray-900 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Contact Us
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div 
              className="relative h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url(/home-2.jpg)' }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.h1 
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    FinLeaf: Simplifying Complexities in Finance and Legal Matters
                  </motion.h1>
                  <motion.p 
                    className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    FinLeaf provides seamless CA, CS, and legal services, expertly<br className="hidden sm:block" />
                    <span className="sm:hidden"> </span>navigating financial complexities to ensure your business thrives.
                  </motion.p>
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <a 
                      href="/finleaf-legal" 
                      className="bg-primary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Finleaf Legal
                    </a>
                    <a 
                      href="/contact-us" 
                      className="bg-white text-gray-900 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Contact Us
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* About Finleaf Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              About Finleaf
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Finleaf Where Expertise Meets Ambition & Henceforth Remarkable Achievements Becomes Achievable & Possible.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="/img6.jpg" 
                alt="About Finleaf" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                Your Trusted Partner For Compliance Since Decades
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Over The Years, We Have Expanded Our Services To Offer Even More Affordable Options While Maintaining Our Commitment To Customer Satisfaction.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                By Offering Online Business Registration, We Save Our Clients Time And Effort. Our Success Has Positioned Us As A Leading Provider Of Corporate Legal Services Pan India.
              </p>
              
              <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white rounded-lg shadow-md">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Contact Us</h4>
                  <p className="text-primary font-semibold text-sm sm:text-base">+91 9599762894</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <img 
                    src={stat.icon} 
                    alt={stat.label}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                  />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium text-xs sm:text-sm md:text-base leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Finleaf Top Services
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Finleaf Where Expertise Meets Ambition & Henceforth Remarkable Achievements Becomes Achievable & Possible.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-4 sm:p-6">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <img 
                      src={service.icon} 
                      alt={service.title}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 text-center leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm text-center mb-3 sm:mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-center">
                    <a 
                      href={service.href}
                      className="inline-block bg-primary text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      Know More
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Why Choose Us?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We Are The Only Consultants In India With 100% Women Work Force.
            </motion.p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* Left Side - Feature Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-auto">
              {whyChooseUs.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 max-w-sm"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-4">
                    <img 
                      src={feature.icon} 
                      alt={feature.title}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-center text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm text-center leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Center - Business Woman Image */}
            <motion.div 
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="/vecteezy_business-woman-isolated-illustration_24558279-1.png" 
                alt="Professional Business Woman"
                className="w-96 h-96 object-contain"
              />
            </motion.div>
          </div>
        </div>

        {/* Floating Action Buttons */}
        <div className="fixed bottom-6 left-6 z-50">
          <a 
            href="tel:+919599762894"
            className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
          </a>
        </div>

        <div className="fixed bottom-6 right-6 z-50">
          <a 
            href="https://wa.me/919599762894"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Client's Genuine Reviews
            </motion.h2>
          </div>

          <motion.div 
            className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-3xl shadow-2xl p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full -ml-12 -mb-12"></div>
            </div>

            {/* Navigation Arrows */}
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-amber-600 hover:bg-white transition-all duration-300 hover:scale-110">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-amber-600 hover:bg-white transition-all duration-300 hover:scale-110">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="flex flex-col lg:flex-row gap-8 relative z-10">
              {/* Left Card - Company Overview */}
              <div className="lg:w-1/3">
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm text-white p-8 rounded-2xl border border-white/20 shadow-xl"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {/* Google Place Icon */}
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4 shadow-lg">
                      <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">FinLeaf The Consultants</h3>
                      <p className="text-sm text-white/80">BEST CA, CS, Legal FIRM IN NOIDA, GHAZIABAD</p>
                    </div>
                  </div>
                  
                  {/* Rating Display */}
                  <div className="flex items-center mb-4">
                    <span className="text-4xl font-bold mr-3">4.9</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-7 h-7 text-yellow-300 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  
                  {/* Review Count */}
                  <p className="text-sm text-white/80 mb-6">Based on 176 reviews</p>
                  
                  {/* Google Attribution */}
                  <div className="flex items-center mb-6">
                    <span className="text-xs text-white/60 mr-2">powered by</span>
                    <div className="flex items-center bg-white rounded-full px-2 py-1">
                      <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center mr-1">
                        <span className="text-white font-bold text-xs">G</span>
                      </div>
                      <span className="text-gray-700 font-bold text-xs">oogle</span>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center group">
                    <span className="mr-2">Review us on</span>
                    <div className="flex items-center bg-white rounded-full px-2 py-1">
                      <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center mr-1">
                        <span className="text-white font-bold text-xs">G</span>
                      </div>
                      <span className="text-gray-700 font-bold text-xs">oogle</span>
                    </div>
                  </button>
                </motion.div>
              </div>

              {/* Right Cards - Individual Reviews */}
              <div className="lg:w-2/3">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={24}
                  slidesPerView={1}
                  navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next'
                  }}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  loop={true}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                  }}
                  className="reviews-swiper"
                >
                  {[
                    {
                      name: 'Mukesh Kalra',
                      date: '11:14 03 Aug 24',
                      text: 'Excellent service and professional team. They handled my business registration smoothly and provided great guidance throughout the process.',
                      avatar: null,
                      rating: 5
                    },
                    {
                      name: 'Gurleen Kaur',
                      date: '11:13 03 Aug 24',
                      text: 'Very helpful and knowledgeable consultants. The team at Finleaf made the entire process of NBFC registration so much easier than I expected.',
                      avatar: null,
                      rating: 5
                    },
                    {
                      name: 'Aryan Sharma',
                      date: '10:57 01 Aug 24',
                      text: 'I had pleasure of interning at FINLEAF THE CONSULTANTS and it was a truly enriching experience. The team was incredibly welcoming and supporting. Great experience...!',
                      avatar: null,
                      rating: 5
                    },
                    {
                      name: 'Pooja Verma',
                      date: '09:45 31 Jul 24',
                      text: 'This is the best consultantancy firm in corporate law field. Extremely happy with finleaf working and staff cordinations 😘🙏😊',
                      avatar: null,
                      rating: 5
                    },
                    {
                      name: 'Harinder Singh',
                      date: '14:22 30 Jul 24',
                      text: 'Professional and reliable service. They helped us with FEMA compliance and the process was transparent and efficient.',
                      avatar: null,
                      rating: 5
                    },
                    {
                      name: 'Namratha Raj',
                      date: '16:08 29 Jul 24',
                      text: 'Choosing Finleaf - The Consultants for our incorporation needs was one of the finest decisions we\'ve made. From the initial consultation to the finalization of our company\'s registration, their team exhibited unparalleled professionalism and proficiency.',
                      avatar: null,
                      rating: 5
                    }
                  ].map((review, index) => (
                    <SwiperSlide key={index}>
                      <motion.div 
                        className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {/* Header with Profile and Google Logo */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4 shadow-md">
                              <span className="text-white font-semibold text-lg">
                                {review.name.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 text-base">{review.name}</h4>
                              <p className="text-xs text-gray-500">{review.date}</p>
                            </div>
                          </div>
                          {/* Google Logo */}
                          <div className="flex items-center">
                            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 shadow-sm">
                              <span className="text-blue-600 font-bold text-xs">G</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Rating Stars */}
                        <div className="flex items-center mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        
                        {/* Review Text */}
                        <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                          {review.text}
                        </p>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Frequently Asked Questions (FAQ)
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="/image-16.jpg" 
                alt="FAQ" 
                className="w-full max-w-md h-auto rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {faqs.map((faq, index) => (
                <details 
                  key={index}
                  className="group bg-gray-50 rounded-lg overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-100 transition-colors">
                    <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4">
                    <p className="text-gray-600 whitespace-pre-line">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Our Clients
            </motion.h2>
          </div>

          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000 }}
            loop={true}
            slidesPerView={2}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
              1280: { slidesPerView: 7 },
            }}
            className="client-logos-swiper"
          >
            {clientLogos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center h-20 bg-white rounded-lg shadow-sm p-4">
                  <img 
                    src={logo} 
                    alt={`Client ${index + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            The Best You Can Trust
          </motion.h2>
          <motion.h3 
            className="text-3xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's Connect
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a 
              href="https://calendly.com/finleaf/30min" 
          target="_blank"
          rel="noopener noreferrer"
              className="inline-block bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Make an Appointment
            </a>
          </motion.div>
    </div>
      </section>

      <Footer />
    </main>
  );
}