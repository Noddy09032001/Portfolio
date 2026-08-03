'use client'
import Link from 'next/link';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FaQuoteLeft } from 'react-icons/fa';
import { TestimonialsProps } from '@/src/common/types/testimonials';

interface TestimonialsCardProps {
  testimonial: TestimonialsProps
}

const badgeStyles: Record<string, string> = {
  "Professional Recommendation":
    "border-emerald-200 bg-emerald-100 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",

  "LinkedIn Recommendation":
    "border-amber-200 bg-amber-100 text-amber-700 dark:border-amber-800 dark:bg-amber-900/30 dark:text-amber-400",

  "MS Recommendation":
    "border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
};


const TestimonialsCard = ({testimonial,}: TestimonialsCardProps) => {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700">
      <div className="flex justify-between items-centre">
        <FaQuoteLeft className="mb-5 text-2xl text-neutral-400" />
        {testimonial.recommendationType && (
          <div
            className={`mb-5 inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
              badgeStyles[testimonial.recommendationType] ??
              "border-neutral-200 bg-neutral-100 text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
            }`}
          >
            {testimonial.recommendationType}
          </div>
        )}
      </div>
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
          <span>
            {testimonial.recommendationType} • {testimonial.date}
          </span>
          {testimonial.link && (
            <Link
              href={testimonial.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:underline"
            >
              View Profile
              <HiOutlineExternalLink />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;