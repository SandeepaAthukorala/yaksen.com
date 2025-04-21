import { Link } from 'react-router-dom';
import { Clock} from 'lucide-react';
import type { BlogPost } from '../../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link to={`/blog/${post.id}`} className="group block">
      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-sm font-medium bg-primary/90 text-white rounded-full">
              {post.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {post.author.name}
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary">
            {post.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
