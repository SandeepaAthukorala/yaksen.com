import { Star } from 'lucide-react';
import type { Testimonial } from '../../types/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="min-w-[350px] flex-shrink-0 snap-center transform transition-all duration-300 hover:scale-[1.02]">
      <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-600">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/20"
            />
            <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white text-xs">★</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {testimonial.role} at {testimonial.company}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <StarRating rating={testimonial.rating} />
        </div>
        <blockquote className="mt-4">
          <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.content}"</p>
        </blockquote>
      </div>
    </div>
  );
}
