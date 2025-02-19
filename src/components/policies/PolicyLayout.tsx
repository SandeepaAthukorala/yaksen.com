import React from 'react';
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{title}</h1>
          {lastUpdated && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
              Last updated: {lastUpdated}
            </p>
          )}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <div className="text-gray-800 dark:text-gray-200">
              {children}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
