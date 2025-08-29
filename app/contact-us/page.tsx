'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const contactInfo = [
  {
    icon: '📞',
    title: 'Phone Numbers',
    details: [
      '+91 9599762894',
      '+91 93157 96686',
      '0120-4358357'
    ],
    links: [
      'tel:+919599762894',
      'tel:+919315796686',
      'tel:0120-4358357'
    ]
  },
  {
    icon: '✉️',
    title: 'Email Addresses',
    details: [
      'thefinleaf@gmail.com',
      'infofinleaflegal@gmail.com'
    ],
    links: [
      'mailto:thefinleaf@gmail.com',
      'mailto:infofinleaflegal@gmail.com'
    ]
  },
  {
    icon: '📍',
    title: 'Office Address',
    details: [
      'UG- 2B, SG ALPHA TOWER, 2, SECTOR 9, VASUNDHARA, GHAZIABAD, UTTAR PRADESH 201012'
    ],
    links: []
  }
];

const socialLinks = [
  {
    name: 'Facebook',
    icon: '📘',
    url: '#'
  },
  {
    name: 'Instagram',
    icon: '📷',
    url: 'https://www.instagram.com/finleaf_the_consultants?igsh=dmxlNmhkNHAwYXF0'
  },
  {
    name: 'YouTube',
    icon: '📺',
    url: '#'
  }
];

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar currentPage="/contact-us" />
      
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
              Contact Us
            </motion.h1>
            <motion.p 
              className="text-xl mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Get in touch with our expert team for all your finance, legal, and business consulting needs
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

      {/* Contact Information */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help you navigate the complexities of finance and legal matters. 
              Reach out to us for expert guidance and support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <div key={detailIndex}>
                      {info.links[detailIndex] ? (
                        <a
                          href={info.links[detailIndex]}
                          className="text-gray-600 hover:text-amber-600 transition-colors duration-300 block"
                        >
                          {detail}
                        </a>
                      ) : (
                        <p className="text-gray-600">{detail}</p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Required
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="tax-services">Tax Services</option>
                    <option value="consulting-services">Consulting Services</option>
                    <option value="audit-assurance">Audit & Assurance</option>
                    <option value="direct-services">Direct Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
                                                           {/* Google Reviews Widget - Exact HTML Implementation */}
                 <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                   {/* Google Reviews Widget Header */}
                   <div className="p-4 border-b bg-gray-50">
                     <div className="flex items-center space-x-3">
                       <div className="w-12 h-12 rounded-lg overflow-hidden">
                         <img 
                           src="https://lh3.googleusercontent.com/places/ANXAkqGkQDsTgHCZ5DYv4ySk5NwTV3gocdMuxl0IL7O1crbEm_qkg-sK4g3Z95mycftR-sbJHINrQ2ruwcf0Tz2_qyUnTSGHzkFBdAg=s1600-w300-h300" 
                           alt="FinLeaf The Consultants" 
                           className="w-full h-full object-cover"
                         />
                       </div>
                       <div className="flex-1">
                         <div className="flex items-center justify-between">
                           <div>
                             <h3 className="text-sm font-bold text-gray-900">
                               <a 
                                 href="https://maps.google.com/?cid=7333952536566340033" 
                                 target="_blank" 
                                 rel="nofollow noopener" 
                                 className="hover:text-blue-600 transition-colors"
                               >
                                 FinLeaf The Consultants ( BEST CA, CS, Legal FIRM IN NOIDA, GHAZIABAD)
                               </a>
                             </h3>
                             <div className="flex items-center space-x-2 mt-1">
                               <span className="text-sm font-bold text-gray-900">4.9</span>
                               <div className="flex">
                                 {[...Array(5)].map((_, i) => (
                                   <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 1792 1792">
                                     <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" />
                                   </svg>
                                 ))}
                               </div>
                               <span className="text-xs text-gray-600">Based on 176 reviews</span>
                             </div>
                             <div className="flex items-center space-x-1 mt-1">
                               <span className="text-xs text-gray-500">powered by</span>
                               <div className="flex items-center space-x-0.5">
                                 <span className="text-xs font-bold" style={{color: '#6186ec'}}>G</span>
                                 <span className="text-xs font-bold" style={{color: '#cd523f'}}>o</span>
                                 <span className="text-xs font-bold" style={{color: '#eabe43'}}>o</span>
                                 <span className="text-xs font-bold" style={{color: '#6186ec'}}>g</span>
                                 <span className="text-xs font-bold" style={{color: '#63a45d'}}>l</span>
                                 <span className="text-xs font-bold" style={{color: '#cd523f'}}>e</span>
                               </div>
                             </div>
                           </div>
                           <div className="text-right">
                             <a 
                               href="https://search.google.com/local/writereview?placeid=ChIJr9PyLyT7DDkRwZmcnflux2U" 
                               target="_blank" 
                               rel="nofollow noopener"
                               className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors text-xs"
                             >
                               <span>review us on</span>
                               <svg viewBox="0 0 512 512" height="18" width="18" className="inline">
                                 <g fill="none" fillRule="evenodd">
                                   <path d="M482.56 261.36c0-16.73-1.5-32.83-4.29-48.27H256v91.29h127.01c-5.47 29.5-22.1 54.49-47.09 71.23v59.21h76.27c44.63-41.09 70.37-101.59 70.37-173.46z" fill="#4285f4"/>
                                   <path d="M256 492c63.72 0 117.14-21.13 156.19-57.18l-76.27-59.21c-21.13 14.16-48.17 22.53-79.92 22.53-61.47 0-113.49-41.51-132.05-97.3H45.1v61.15c38.83 77.13 118.64 130.01 210.9 130.01z" fill="#34a853"/>
                                   <path d="M123.95 300.84c-4.72-14.16-7.4-29.29-7.4-44.84s2.68-30.68 7.4-44.84V150.01H45.1C29.12 181.87 20 217.92 20 256c0 38.08 9.12 74.13 25.1 105.99l78.85-61.15z" fill="#fbbc05"/>
                                   <path d="M256 113.86c34.65 0 65.76 11.91 90.22 35.29l67.69-67.69C373.03 43.39 319.61 20 256 20c-92.25 0-172.07 52.89-210.9 130.01l78.85 61.15c18.56-55.78 70.59-97.3 132.05-97.3z" fill="#ea4335"/>
                                   <path d="M20 20h472v472H20V20z"/>
                                 </g>
                               </svg>
                             </a>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>

                   {/* Map Section */}
                   <div className="h-64 bg-gray-100 relative">
                                           <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5421896847245!2d77.368449!3d28.659564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb242ff2d3af%3A0x65c76ef99d9c99c1!2sFinLeaf%20The%20Consultants%20(Corporate%20Legal%20Firm)!5e0!3m2!1sen!2sin!4v1734445123456&hl=en-US&entry=ttu"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Finleaf Office Location"
                      ></iframe>
                   </div>

                   {/* Footer with location info */}
                   <div className="p-4 border-t bg-gray-50">
                     <div className="flex items-center space-x-2">
                       <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 384 512">
                         <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
                       </svg>
                       <span className="text-sm text-gray-600">UG- 2B, SG ALPHA TOWER, 2, SECTOR 9, VASUNDHARA, GHAZIABAD, UTTAR PRADESH 201012</span>
                     </div>
                   </div>
                 </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white hover:bg-amber-700 transition-colors duration-300"
                    >
                      <span className="text-xl">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-amber-600 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule a consultation with our expert team and take the first step towards achieving your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://calendly.com/finleaf/30min"
                target="_blank"
                className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/services"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-amber-600 transition-colors duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
