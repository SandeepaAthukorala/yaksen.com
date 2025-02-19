import { useState } from 'react';
import type { BlogCategory } from '../types/blog';

export function useBlogCategories() {
  const [categories] = useState<BlogCategory[]>([
    { name: 'AI Trends', count: 12, slug: 'ai-trends' },
    { name: 'Machine Learning', count: 8, slug: 'machine-learning' },
    { name: 'Automation', count: 6, slug: 'automation' },
    { name: 'Cybersecurity', count: 5, slug: 'cybersecurity' },
    { name: 'Cloud Computing', count: 4, slug: 'cloud-computing' },
    { name: 'Data Analytics', count: 7, slug: 'data-analytics' }
  ]);

  return { categories };
}
