'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { supabase, Blog } from '@/lib/supabase';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { TrashIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function BlogEditPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editData, setEditData] = useState<Partial<Blog>>({});
  const [imagePreview, setImagePreview] = useState<string>('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [saving, setSaving] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [newBlog, setNewBlog] = useState<Partial<Blog>>({
    title: '',
    excerpt: '',
    category: '',
    date: '',
    read_time: '',
    image: '',
    author: '',
  });
  const [newImagePreview, setNewImagePreview] = useState<string>('');
  const [creating, setCreating] = useState(false);

  // Fetch all blogs on mount
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBlogs(data || []);
      showMessage('success', 'Blogs loaded successfully');
    } catch (error) {
      console.error('Error fetching blogs:', error);
      showMessage('error', 'Failed to load blogs');
    } finally {
      setLoading(false);
    }
  };

  const showMessage = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 3000);
  };

  const startEdit = (blog: Blog) => {
    setEditingId(blog.id);
    setEditData(blog);
    setImagePreview(blog.image || '');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditData({});
    setImagePreview('');
  };

  const updateBlog = async (id: string) => {
    try {
      setSaving(id);
      const updatePayload = {
        title: editData.title || '',
        excerpt: editData.excerpt || null,
        category: editData.category || null,
        date: editData.date || null,
        read_time: editData.read_time || null,
        image: editData.image || imagePreview || null,
        author: editData.author || null,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase
        .from('blogs')
        .update(updatePayload)
        .eq('id', id);

      if (error) throw error;

      // Update local state
      const updatedBlog = blogs.find(b => b.id === id);
      if (updatedBlog) {
        setBlogs(blogs.map(blog => 
          blog.id === id 
            ? { ...blog, ...updatePayload } as Blog
            : blog
        ));
      }
      setEditingId(null);
      setEditData({});
      setImagePreview('');
      showMessage('success', 'Blog updated successfully');
    } catch (error) {
      console.error('Error updating blog:', error);
      showMessage('error', 'Failed to update blog');
    } finally {
      setSaving(null);
    }
  };

  const deleteBlog = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog? This action cannot be undone.')) {
      return;
    }

    try {
      setDeleting(id);
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setBlogs(blogs.filter(blog => blog.id !== id));
      showMessage('success', 'Blog deleted successfully');
    } catch (error) {
      console.error('Error deleting blog:', error);
      showMessage('error', 'Failed to delete blog');
    } finally {
      setDeleting(null);
    }
  };

  const createBlog = async () => {
    if (!newBlog.title || !newBlog.excerpt) {
      showMessage('error', 'Title and description are required');
      return;
    }

    try {
      setCreating(true);
      const createPayload = {
        title: newBlog.title,
        excerpt: newBlog.excerpt,
        category: newBlog.category || null,
        date: newBlog.date || null,
        read_time: newBlog.read_time || null,
        image: newBlog.image || newImagePreview || null,
        author: newBlog.author || null,
      };

      const { data, error } = await supabase
        .from('blogs')
        .insert([createPayload])
        .select();

      if (error) throw error;

      if (data && data.length > 0) {
        setBlogs([data[0] as Blog, ...blogs]);
        setNewBlog({
          title: '',
          excerpt: '',
          category: '',
          date: '',
          read_time: '',
          image: '',
          author: '',
        });
        setNewImagePreview('');
        setIsCreating(false);
        showMessage('success', 'Blog created successfully');
      }
    } catch (error) {
      console.error('Error creating blog:', error);
      showMessage('error', 'Failed to create blog');
    } finally {
      setCreating(false);
    }
  };

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
              Blog Management
            </motion.h1>
            <motion.p
              className="text-xl mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Create, edit, update, or delete blog posts directly
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

      {/* Messages */}
      {message && (
        <motion.div
          className={`fixed top-4 right-4 px-6 py-3 rounded-lg text-white font-semibold z-50 ${
            message.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          }`}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
        >
          {message.text}
        </motion.div>
      )}

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Create New Blog Section */}
          <motion.div
            className="mb-12 p-8 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl border-2 border-amber-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {!isCreating ? (
              <button
                onClick={() => setIsCreating(true)}
                className="w-full px-8 py-4 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-300 text-lg"
              >
                + Create New Blog
              </button>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Create New Blog Post</h3>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column - Image */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Thumbnail Image
                    </label>
                    <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden mb-4">
                      {newImagePreview && (
                        <Image
                          src={newImagePreview}
                          alt="Preview"
                          fill
                          className="object-cover"
                        />
                      )}
                      {!newImagePreview && (
                        <div className="flex items-center justify-center h-full text-gray-400">
                          <span>No image</span>
                        </div>
                      )}
                    </div>
                    <input
                      type="text"
                      placeholder="Image URL"
                      value={newBlog.image || ''}
                      onChange={(e) => {
                        setNewBlog({ ...newBlog, image: e.target.value });
                        setNewImagePreview(e.target.value);
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  {/* Right Column - Details */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Title/Topic *
                      </label>
                      <input
                        type="text"
                        placeholder="Enter blog title"
                        value={newBlog.title || ''}
                        onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Category
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Tax Services"
                        value={newBlog.category || ''}
                        onChange={(e) => setNewBlog({ ...newBlog, category: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Date
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., August 15, 2024"
                          value={newBlog.date || ''}
                          onChange={(e) => setNewBlog({ ...newBlog, date: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Read Time
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., 5 min read"
                          value={newBlog.read_time || ''}
                          onChange={(e) => setNewBlog({ ...newBlog, read_time: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Author
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Finleaf Team"
                        value={newBlog.author || ''}
                        onChange={(e) => setNewBlog({ ...newBlog, author: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Description/Excerpt *
                  </label>
                  <textarea
                    placeholder="Enter blog description"
                    value={newBlog.excerpt || ''}
                    onChange={(e) => setNewBlog({ ...newBlog, excerpt: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                  />
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex gap-4 justify-end">
                  <button
                    onClick={() => {
                      setIsCreating(false);
                      setNewBlog({
                        title: '',
                        excerpt: '',
                        category: '',
                        date: '',
                        read_time: '',
                        image: '',
                        author: '',
                      });
                      setNewImagePreview('');
                    }}
                    className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-300"
                  >
                    <XMarkIcon className="w-5 h-5" />
                    Cancel
                  </button>
                  <button
                    onClick={createBlog}
                    disabled={creating}
                    className="flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <CheckIcon className="w-5 h-5" />
                    {creating ? 'Creating...' : 'Create Blog'}
                  </button>
                </div>
              </div>
            )}
          </motion.div>
          {loading ? (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
              </div>
              <p className="text-gray-600 mt-4 text-lg">Loading blogs...</p>
            </motion.div>
          ) : blogs.length === 0 ? (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No blogs found</h3>
              <p className="text-gray-600">Create your first blog post to get started.</p>
            </motion.div>
          ) : (
            <div className="space-y-6">
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-gray-600 text-lg">
                  Total blogs: <span className="font-bold text-amber-600">{blogs.length}</span>
                </p>
              </motion.div>

              {blogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-amber-300 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {editingId === blog.id ? (
                    // Edit Mode
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Edit Blog</h3>

                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Left Column - Image */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Thumbnail Image
                          </label>
                          <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden mb-4">
                            {imagePreview && (
                              <Image
                                src={imagePreview}
                                alt="Preview"
                                fill
                                className="object-cover"
                              />
                            )}
                            {!imagePreview && (
                              <div className="flex items-center justify-center h-full text-gray-400">
                                <span>No image</span>
                              </div>
                            )}
                          </div>
                          <input
                            type="text"
                            placeholder="Image URL"
                            value={editData.image || ''}
                            onChange={(e) => {
                              setEditData({ ...editData, image: e.target.value });
                              setImagePreview(e.target.value);
                            }}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                          />
                        </div>

                        {/* Right Column - Details */}
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Title/Topic
                            </label>
                            <input
                              type="text"
                              value={editData.title || ''}
                              onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Category
                            </label>
                            <input
                              type="text"
                              value={editData.category || ''}
                              onChange={(e) => setEditData({ ...editData, category: e.target.value })}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Date
                              </label>
                              <input
                                type="text"
                                value={editData.date || ''}
                                onChange={(e) => setEditData({ ...editData, date: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Read Time
                              </label>
                              <input
                                type="text"
                                value={editData.read_time || ''}
                                onChange={(e) => setEditData({ ...editData, read_time: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Author
                            </label>
                            <input
                              type="text"
                              value={editData.author || ''}
                              onChange={(e) => setEditData({ ...editData, author: e.target.value })}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mt-6">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Description/Excerpt
                        </label>
                        <textarea
                          value={editData.excerpt || ''}
                          onChange={(e) => setEditData({ ...editData, excerpt: e.target.value })}
                          rows={5}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                        />
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-8 flex gap-4 justify-end">
                        <button
                          onClick={cancelEdit}
                          className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-300"
                        >
                          <XMarkIcon className="w-5 h-5" />
                          Cancel
                        </button>
                        <button
                          onClick={() => updateBlog(blog.id)}
                          disabled={saving === blog.id}
                          className="flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <CheckIcon className="w-5 h-5" />
                          {saving === blog.id ? 'Saving...' : 'Save Changes'}
                        </button>
                      </div>
                    </div>
                  ) : (
                    // View Mode
                    <div className="flex flex-col md:flex-row">
                      {/* Image */}
                      <div className="relative h-48 md:h-auto md:w-64 md:min-h-80 bg-gray-100 flex-shrink-0">
                        {blog.image && (
                          <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            className="object-cover"
                          />
                        )}
                        {!blog.image && (
                          <div className="flex items-center justify-center h-full text-gray-400">
                            <span>No image</span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              {blog.category || 'Uncategorized'}
                            </span>
                            {blog.read_time && (
                              <span className="text-sm text-gray-600">{blog.read_time}</span>
                            )}
                          </div>

                          <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2">
                            {blog.title}
                          </h3>

                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {blog.excerpt || 'No description provided'}
                          </p>

                          <div className="text-sm text-gray-500 space-y-1">
                            <p>
                              <span className="font-semibold">Date:</span> {blog.date || 'N/A'}
                            </p>
                            <p>
                              <span className="font-semibold">Author:</span> {blog.author || 'N/A'}
                            </p>
                            <p>
                              <span className="font-semibold">Created:</span>{' '}
                              {new Date(blog.created_at).toLocaleDateString()}
                            </p>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 mt-6">
                          <button
                            onClick={() => startEdit(blog)}
                            className="flex-1 px-4 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-300"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteBlog(blog.id)}
                            disabled={deleting === blog.id}
                            className="px-4 py-3 bg-red-100 text-red-600 rounded-lg font-semibold hover:bg-red-200 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                          >
                            <TrashIcon className="w-5 h-5" />
                            {deleting === blog.id ? 'Deleting...' : 'Delete'}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
