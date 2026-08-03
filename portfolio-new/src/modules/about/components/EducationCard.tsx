'use client';

import { BsBuildings as CompanyIcon } from 'react-icons/bs';

import Card from '@/src/common/components/elements/Card';
import Image from '@/src/common/components/elements/Image';
import { EducationProps } from '@/src/common/types/education'; 
import { useState } from 'react';
import { HiChevronRight } from 'react-icons/hi';
import cn from '@/src/common/libs/cn';
import { AnimatePresence, motion } from 'framer-motion';

const EducationCard = ({
  school,
  major,
  logo,
  degree,
  start_year,
  end_year,
  location,
  link,
  responsibilities,
}: EducationProps) => {

  const [isShowResponsibility, setIsShowResponsibility] = useState<boolean>(false);

  return (
    <Card className='flex flex-col md:flex-row items-center md:items-start gap-5 border border-neutral-300 px-6 py-4 dark:border-neutral-900'>
      {logo ? (
        <Image
          src={logo}
          width={55}
          height={55}
          alt={school}
          className='mt-1.5'
        />
      ) : (
        <CompanyIcon size={50} />
      )}

      <div className='space-y-1 flex-1'>
        <a
          href={link || '#'}
          target='_blank'
          data-umami-event={`Click Education School: ${school}`}
        >
          <h6>{school}</h6>
        </a>
        <div className='space-y-2 text-sm text-neutral-600 dark:text-neutral-400'>
          <div className='flex flex-col gap-1 md:flex-row md:gap-2'>
            <span>{degree}</span>
            <span className='hidden text-neutral-300 dark:text-neutral-700 md:flex'>
              •
            </span>
            <span>{major}</span>
          </div>
          <div className='flex flex-col gap-3 md:flex-row md:text-[13px]'>
            <div className='flex gap-1 text-neutral-500'>
              <span>{start_year}</span> - <span>{end_year || 'Present'}</span>
            </div>
            <span className='hidden text-neutral-300 dark:text-neutral-700 lg:block'>
              •
            </span>
            <span>{location}</span>
          </div>
        </div>
        <button
          onClick={() => setIsShowResponsibility(!isShowResponsibility)}
          className='-ml-1 mt-5 flex items-center gap-1 text-sm text-neutral-500'
        >
          <HiChevronRight
            size={18}
            className={cn({
              'rotate-90 transition-all duration-300': isShowResponsibility,
            })}
          />
          {isShowResponsibility ? 'Hide' : 'Show'} Coursework and Activities Involved 
        </button>
        <AnimatePresence>
          {isShowResponsibility && responsibilities && (
            <motion.div
              className="pb-2"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {/* Coursework */}
              <div className="mt-3 space-y-3 pb-1">
                <h4 className="text-[13px] font-normal text-neutral-800 dark:text-neutral-200">
                  Coursework
                </h4>

                <ul className="ml-5 list-disc space-y-1 text-[13px] leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {responsibilities.coursework.map((item) => (
                    <motion.li key={item} layout>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div className='mt-2 space-y-3'>
                <h4 className="text-[13px] font-normal text-neutral-800 dark:text-neutral-200">
                  Achievements
                </h4>

                <ul className="ml-5 list-disc space-y-1 text-[13px] leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {responsibilities.achievements.map((item) => (
                    <motion.li key={item} layout>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Card>
  );
};

export default EducationCard;