'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { supabase, Blog } from '@/lib/supabase';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    if (id) {
      fetchBlog();
    }
  }, [id]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      
      // Fetch the specific blog
      const { data: blogData, error: blogError } = await supabase
        .from('blogs')
        .select('*')
        .eq('id', id)
        .single();

      if (blogError) throw blogError;

      setBlog(blogData as Blog);

      // Fetch related blogs (same category, exclude current)
      if (blogData?.category) {
        const { data: relatedData, error: relatedError } = await supabase
          .from('blogs')
          .select('*')
          .eq('category', blogData.category)
          .neq('id', id)
          .limit(3);

        if (!relatedError && relatedData) {
          setRelatedBlogs(relatedData as Blog[]);
        }
      }
    } catch (error) {
      console.error('Error fetching blog:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar currentPage="/blogs" />
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-block">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
            </div>
            <p className="text-gray-600 mt-4 text-lg">Loading blog...</p>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  if (!blog) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar currentPage="/blogs" />
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="text-6xl mb-4">404</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
            <p className="text-gray-600 mb-8">The blog you're looking for doesn't exist or has been deleted.</p>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-300"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              Back to Blogs
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar currentPage="/blogs" />

      {/* Hero Section with Image */}
      <section className="relative h-96 md:h-[500px] bg-gray-100">
        {blog.image && (
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Back Button */}
        <motion.div
          className="absolute top-6 left-6 z-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Back
          </button>
        </motion.div>

        {/* Title Overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full p-8 md:p-12 bg-gradient-to-t from-black/80 to-transparent">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {blog.category || 'Uncategorized'}
                </span>
                {blog.read_time && (
                  <span className="text-white text-sm">{blog.read_time}</span>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {blog.title}
              </h1>
              <div className="flex items-center gap-4 text-white/80">
                <span>{blog.date || 'Date not specified'}</span>
                <span>•</span>
                <span>By {blog.author || 'Unknown'}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-gray-700 leading-relaxed text-lg">
              {blog.excerpt && (
                <div className="mb-8 p-6 bg-amber-50 border-l-4 border-amber-600 italic">
                  {blog.excerpt}
                </div>
              )}
              
              <div className="mt-8 text-gray-600">
                <p>
                  This blog post was created on {new Date(blog.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Blog Meta Information */}
          <motion.div
            className="mt-12 pt-8 border-t border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-2">Category</p>
                <p className="text-xl font-semibold text-gray-900">{blog.category || 'Uncategorized'}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-2">Reading Time</p>
                <p className="text-xl font-semibold text-gray-900">{blog.read_time || 'N/A'}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-2">Author</p>
                <p className="text-xl font-semibold text-gray-900">{blog.author || 'Unknown'}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Blogs Section */}
      {relatedBlogs.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Related Articles
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog, index) => (
                <motion.article
                  key={relatedBlog.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => router.push(`/blogs/${relatedBlog.id}`)}
                >
                  <div className="relative h-48 overflow-hidden">
                    {relatedBlog.image ? (
                      <Image
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-amber-100 to-yellow-100 flex items-center justify-center text-gray-400">
                        No Image
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {relatedBlog.category || 'Uncategorized'}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{relatedBlog.date || 'Date not specified'}</span>
                      <span className="mx-2">•</span>
                      <span>{relatedBlog.read_time || 'N/A'}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {relatedBlog.title}
                    </h3>

                    <p className="text-gray-600 line-clamp-2">
                      {relatedBlog.excerpt || 'No description provided'}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-amber-600 via-amber-500 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with Our Insights
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates on finance, legal, and business matters.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border border-white/30 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <button className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            href="/blogs"
            className="flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors duration-300"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Back to All Blogs
          </Link>
          <div className="text-gray-600 text-sm">
            Blog ID: {blog.id}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
