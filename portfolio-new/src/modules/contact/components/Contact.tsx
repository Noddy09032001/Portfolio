'use client'
import Breakline from '@/src/common/components/elements/Breakline';

import BookACall from './BookCall';
import SocialMediaList from './SocialMediaList';

const Contact = () => {
  return (
    <section className='space-y-6'>
      <SocialMediaList />
      <Breakline />
      <BookACall />
    </section>
  );
};

export default Contact;