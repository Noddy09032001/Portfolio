'use client';

import { useMemo, useState } from 'react';
import { TESTIMONIALS } from '@/src/common/constant/testimonials'; 
import TestimonialsCard from './TestimonialsCard';

const ITEMS_PER_PAGE = 3;

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(TESTIMONIALS.length / ITEMS_PER_PAGE);

  const currentTestimonials = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;

    return TESTIMONIALS.slice(
      start,
      start + ITEMS_PER_PAGE
    );
  }, [currentPage]);

  return (
    <section className="mx-auto max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-semibold">
          Testimonials
        </h1>

        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Feedback and recommendations from peers, mentors, and industry professionals.
        </p>
      </div>

      <div className="space-y-6">
        {currentTestimonials.map((testimonial) => (
          <TestimonialsCard
            key={testimonial.id}
            testimonial={testimonial}
          />
        ))}
      </div>

      <div className="flex justify-center gap-2">
        {Array.from(
          { length: totalPages },
          (_, index) => (
            <button
              key={index}
              onClick={() =>
                setCurrentPage(index + 1)
              }
              className={`
                h-10 w-10 rounded-lg border text-sm
                ${
                  currentPage === index + 1
                    ? 'border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-black'
                    : 'border-neutral-300 dark:border-neutral-700'
                }
              `}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </section>
  );
};

export default Testimonials;