'use client'
import Link from 'next/link';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FaQuoteLeft } from 'react-icons/fa';
import { TestimonialsProps } from '@/src/common/types/testimonials';

interface TestimonialsCardProps {
  testimonial: TestimonialsProps
}

const TestimonialsCard = ({testimonial,}: TestimonialsCardProps) => {
  return (
    <div
      className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700">
      <FaQuoteLeft className="mb-5 text-2xl text-neutral-400" />
      <p className="leading-8 text-neutral-700 dark:text-neutral-300">
        {testimonial.content}
      </p>

      <div className="my-6 h-px bg-neutral-200 dark:bg-neutral-800" />
      <div className="space-y-1">
        <h3 className="font-semibold">{testimonial.name}</h3>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {testimonial.role}, {testimonial.organization}
        </p>

        <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-500">
          <span>LinkedIn Recommendation • {testimonial.date}</span>
          {testimonial.link && (
            <Link
                href={testimonial.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:underline"
            >View Profile
                <HiOutlineExternalLink />
            </Link>
            )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;