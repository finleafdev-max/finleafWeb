'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding GST Compliance for Small Businesses',
    excerpt: 'A comprehensive guide to GST compliance requirements and best practices for small and medium enterprises.',
    category: 'Tax Services',
    date: 'August 15, 2024',
    readTime: '5 min read',
    image: '/presentation.png',
    author: 'Finleaf Team'
  },
  {
    id: 2,
    title: 'Corporate Governance: Best Practices for 2024',
    excerpt: 'Essential corporate governance practices that every business should implement for sustainable growth.',
    category: 'Corporate Services',
    date: 'August 12, 2024',
    readTime: '7 min read',
    image: '/handshake-3.png',
    author: 'Finleaf Team'
  },
  {
    id: 3,
    title: 'Digital Transformation in Financial Services',
    excerpt: 'How fintech solutions are revolutionizing the financial services industry and what businesses need to know.',
    category: 'Fintech Advisory',
    date: 'August 10, 2024',
    readTime: '6 min read',
    image: '/clipboard.png',
    author: 'Finleaf Team'
  },
  {
    id: 4,
    title: 'Insolvency Resolution: A Complete Guide',
    excerpt: 'Understanding the insolvency resolution process and how it can help distressed businesses recover.',
    category: 'Legal Services',
    date: 'August 8, 2024',
    readTime: '8 min read',
    image: '/presentation.png',
    author: 'Finleaf Team'
  },
  {
    id: 5,
    title: 'Mergers & Acquisitions: Strategic Considerations',
    excerpt: 'Key strategic considerations for successful mergers and acquisitions in today\'s business environment.',
    category: 'M&A Services',
    date: 'August 5, 2024',
    readTime: '9 min read',
    image: '/handshake-3.png',
    author: 'Finleaf Team'
  },
  {
    id: 6,
    title: 'Regulatory Compliance in the Digital Age',
    excerpt: 'Navigating regulatory compliance challenges in an increasingly digital business landscape.',
    category: 'Compliance',
    date: 'August 3, 2024',
    readTime: '6 min read',
    image: '/clipboard.png',
    author: 'Finleaf Team'
  }
];

const categories = [
  'All',
  'Tax Services',
  'Corporate Services',
  'Fintech Advisory',
  'Legal Services',
  'M&A Services',
  'Compliance'
];

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar currentPage="/blogs" />
      
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
              Our Blog
            </motion.h1>
            <motion.p 
              className="text-xl mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Insights, Updates, and Expert Perspectives on Finance, Legal, and Business Matters
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

      {/* Blog Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Categories Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  category === 'All' 
                    ? 'bg-amber-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-700'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <Link
                      href={`/blogs/${post.id}`}
                      className="text-amber-600 font-semibold hover:text-amber-700 transition-colors duration-300"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="bg-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-700 transition-colors duration-300">
              Load More Articles
            </button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Stay Updated with Our Insights
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter for the latest updates on finance, legal, and business matters.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button className="bg-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-700 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
