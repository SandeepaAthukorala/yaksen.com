import Navbar from '../../components/Navbar';
import BlogGrid from '../../components/blog/BlogGrid';
import BlogSidebar from '../../components/blog/BlogSidebar';
import Footer from '../../components/footer/Footer';
import { useScrollToTop } from '../../hooks/useScrollToTop';

export default function BlogPage() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              Latest Blog Posts
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Insights and updates from the world of AI and technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <BlogGrid />
            </div>
            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
