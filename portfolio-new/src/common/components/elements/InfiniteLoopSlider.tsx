'use client'

import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface InfiniteLoopSliderProps {
  children: ReactNode;
  isReverse?: boolean;
}

const InfiniteLoopSlider = ({
  children,
  isReverse = false,
}: InfiniteLoopSliderProps) => {
  return (
    <StyledSlider
      //className='flex w-max animate-looping-tag'
      isReverse={isReverse}
    >
      {children}
    </StyledSlider>
  );
};

export default InfiniteLoopSlider;

/*const StyledSlider = styled.div<{ isReverse: boolean }>`
  animation-direction: ${({ isReverse }) => (isReverse ? 'reverse' : 'normal')};
`;*/

const StyledSlider = styled.div<{ isReverse: boolean }>`
  display: flex;
  width: fit-content;

  animation: loop 100s linear infinite;
  animation-direction: ${({ isReverse }) =>
    isReverse ? 'reverse' : 'normal'};

  @keyframes loop {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-50%);
    }
  }
`;