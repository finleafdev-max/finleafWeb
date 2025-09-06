'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const stats = [
  { label: 'Success Rate', percentage: 97, value: '97%' },
  { label: 'On Time Project Deliverables', percentage: 95, value: '95%' },
  { label: 'Customized Solutions', percentage: 98, value: '98%' },
];

const steps = [
  {
    number: '01',
    title: 'Application',
    description: 'Tell Us The Query You Want To Be Resolved'
  },
  {
    number: '02',
    title: 'Meeting',
    description: 'Book an Online or offline Meeting'
  },
  {
    number: '03',
    title: 'Payment',
    description: '50% Advance Is Required To be Borne Before Starting any Assignment'
  },
  {
    number: '04',
    title: 'Planning',
    description: 'Customized Planning And Targets Are Set According To Clients Requirement\'s.'
  },
  {
    number: '05',
    title: 'Final Deliverable\'s',
    description: 'Rest 50% Pending Payment Shall be Paid Before Final Deliverables.'
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar currentPage="/about-us" />
      
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
              About Us
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-white mx-auto"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Section - India's Top Corporate Legal Consultants */}
      <section className="py-24 bg-white relative overflow-hidden">
                 {/* Background Pattern */}
         <div className="absolute inset-0 opacity-5">
           <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500 rounded-full translate-x-1/2 translate-y-1/2"></div>
         </div>
         
         <div className="max-w-7xl mx-auto px-4 relative z-10">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
             {/* Left Column - Text and Statistics */}
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
             >
               <div className="inline-block bg-amber-100 text-amber-700 font-semibold px-4 py-2 rounded-full text-sm mb-6">
                 1575 + Success full Cases
               </div>
               <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                 India's Top Corporate Legal Consultants
               </h2>
               <p className="text-gray-600 mb-12 text-lg leading-relaxed">
                 Finleaf has team of expert Professionals Who Possess extensive knowledge and rich experience in fields related to including corporate law, taxation, intellectual property rights, and other related and allied services.
               </p>
              
                             {/* Statistics */}
               <div className="space-y-8">
                 {stats.map((stat, index) => (
                   <motion.div
                     key={index}
                     initial={{ opacity: 0, x: -30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.6, delay: index * 0.1 }}
                     viewport={{ once: true }}
                     className="space-y-3"
                   >
                     <div className="flex justify-between items-center">
                       <span className="font-medium text-gray-700 text-lg">{stat.label}</span>
                       <span className="font-bold text-amber-600 text-xl">{stat.value}</span>
                     </div>
                     <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                       <motion.div 
                         className="bg-gradient-to-r from-amber-500 to-yellow-500 h-3 rounded-full"
                         initial={{ width: 0 }}
                         whileInView={{ width: `${stat.percentage}%` }}
                         transition={{ duration: 1.5, delay: index * 0.2 }}
                         viewport={{ once: true }}
                       ></motion.div>
                     </div>
                   </motion.div>
                 ))}
               </div>
            </motion.div>

                         {/* Right Column - Professional Icons */}
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               viewport={{ once: true }}
               className="relative"
             >
               <div className="grid grid-cols-2 gap-6">
                 <div className="space-y-6">
                   {/* Handshake Icon */}
                   <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200 hover:bg-amber-100 transition-all duration-300 group shadow-lg">
                     <div className="flex items-center justify-center h-32">
                       <img 
                         src="/handshake-3.png" 
                         alt="Professional Partnership"
                         className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                       />
                     </div>
                     <p className="text-center text-gray-700 text-sm mt-4 font-medium">
                       Professional Partnership
                     </p>
                   </div>
                   
                   {/* Presentation Icon */}
                   <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200 hover:bg-amber-100 transition-all duration-300 group shadow-lg">
                     <div className="flex items-center justify-center h-32">
                       <img 
                         src="/presentation.png" 
                         alt="Strategic Planning"
                         className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                       />
                     </div>
                     <p className="text-center text-gray-700 text-sm mt-4 font-medium">
                       Strategic Planning
                     </p>
                   </div>
                 </div>
                 
                 {/* Team Leadership Icon */}
                 <div className="pt-12">
                   <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200 hover:bg-amber-100 transition-all duration-300 group h-full shadow-lg">
                     <div className="flex items-center justify-center h-48">
                       <img 
                         src="/leader.png" 
                         alt="Team Leadership"
                         className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-300"
                       />
                     </div>
                     <p className="text-center text-gray-700 text-sm mt-4 font-medium">
                       Team Leadership
                     </p>
                   </div>
                 </div>
               </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Our Steps Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-yellow-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500 rounded-full -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Description */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-amber-100 text-amber-700 font-semibold px-4 py-2 rounded-full text-sm mb-6">
                Our Steps
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                5 Simple Steps to Completions
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Completing your financial and legal processes with Finleaf is a streamlined and efficient experience. The journey begins with an in-depth consultation to understand your specific needs. Once the requirements are clear, Finleaf's team of experts handles all the necessary paperwork, ensuring compliance with the latest regulations. Regular updates keep you informed at every stage, giving you peace of mind. Final reviews are conducted to ensure accuracy, followed by the completion and delivery of all documents. Finleaf makes navigating the complexities of CA, CS, and legal services simple and hassle-free, allowing you to focus on your business.
              </p>
            </motion.div>

            {/* Right Column - Numbered Steps */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-6 group"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-gray-900 font-semibold text-xl mb-3 group-hover:text-amber-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />

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
    </main>
  );
}
