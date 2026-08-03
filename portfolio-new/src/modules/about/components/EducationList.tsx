import { EDUCATION } from '@/src/common/constant/education'; 

import EducationCard from './EducationCard';

const EducationList = () => {
  return (
    <section className='space-y-6'>
      <div className='grid md:grid-cols-1 gap-4'>
        {EDUCATION?.map((item, index) => (
          <EducationCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default EducationList;