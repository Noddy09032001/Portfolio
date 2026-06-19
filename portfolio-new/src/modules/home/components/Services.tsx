"use client";

import { useRouter } from "next/navigation";
import { BiRocket as RocketIcon } from 'react-icons/bi';

import Button from '@/src/common/components/elements/Button';
import Card from '@/src/common/components/elements/Card';
import SectionHeading from '@/src/common/components/elements/SectionHeading';

const Services = () => {

  const router = useRouter();

  return (
    <section className='space-y-6'>
      <div className='space-y-4'>
        <SectionHeading title='What I Believe' />
        <p className='leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300'>
          Success is not winning the game everyone else is playing—it’s choosing a different game entirely.
          <br />
          <br />
          I don’t believe success is about following the safest path or winning the game everyone else is playing. 
        It’s about choosing a different game entirely—one driven by curiosity, courage, and the willingness to build something that didn’t exist before. 
        I believe in action over hesitation, in creating over consuming, and in embracing uncertainty as the cost of growth. 
        
        As the Bhagavad Gita reminds us, “You have a right to perform your duty, but not to the fruits of your actions.” 
        That idea grounds me—focus on the work, detach from the outcome, and let consistency compound into something meaningful. 
        In the end, I’d rather take bold swings and build a life full of intent than settle for comfort that was never truly mine.
          <br />
          <br />I choose to build. To take risks. To spend my best years
          creating meaningful things instead of optimizing for safety.
        </p>
      </div>

      <Card className='p-8 bg-neutral-100 border dark:border-none rounded-xl space-y-5'>
        <div className='flex gap-2 items-center'>
          <RocketIcon size={24} />
          <h3 className='text-xl font-medium'>Building Bold Things</h3>
        </div>

        <p className='leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300 pl-2'>
          If you&apos;re working on something ambitious, unconventional, or
          technically deep - I&apos;d love to connect.
        </p>

        <Button
          data-umami-event='Click Contact Button'
          onClick={() => router.push('/contact')}
        >
          Start a Conversation
        </Button>
      </Card>
    </section>
  );
};

export default Services;