import { useState, useEffect } from 'react';
import type { BlogPost } from '../types/blog';

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error] = useState<Error | null>(null);

  useEffect(() => {
    // Simulated API call
    setTimeout(() => {
      setPosts([
        {
          id: 'ai-revolution-2024',
          title: 'The AI Revolution: What to Expect in 2024',
          excerpt: 'Explore the upcoming trends and innovations in artificial intelligence that will shape the business landscape.',
          content: 'Full blog content here...',
          image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000&h=1000',
          category: 'AI Trends',
          author: {
            name: 'Sandeepa Dilshan',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150'
          },
          date: 'March 15, 2024',
          readTime: '5 min read',
          tags: ['AI', 'Technology', 'Future']
        },
        // Add more posts here
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  return { posts, isLoading, error };
}
