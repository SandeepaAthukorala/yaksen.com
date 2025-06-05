import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar';
import Footer from '../footer/Footer';
import { useScrollToTop } from '../../hooks/useScrollToTop';

interface PolicyLayoutProps {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export default function PolicyLayout({ title, lastUpdated, children }: PolicyLayoutProps) {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-30 dark:opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] [background-size:20px_20px]" />
      </div>
      
      <div className="relative">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-neutral-200/50 dark:border-neutral-700/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white mb-4 bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 text-transparent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {title}
            </motion.h1>
            {lastUpdated && (
              <motion.p 
                className="text-sm text-neutral-500 dark:text-neutral-400 mb-8 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Last updated: {lastUpdated}
              </motion.p>
            )}
            <motion.div 
              className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-display prose-headings:text-neutral-800 dark:prose-headings:text-neutral-200 prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-strong:text-neutral-800 dark:prose-strong:text-neutral-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-neutral-800 dark:text-neutral-200">
                {children}
              </div>
            </motion.div>
          </motion.div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
