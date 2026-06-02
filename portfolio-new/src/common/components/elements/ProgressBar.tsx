/*import Router from 'next/router';
import NProgress from 'nprogress';
import { FC } from 'react';

import 'nprogress/nprogress.css';

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 500,
  showSpinner: false,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const ProgressBar: FC = () => {
  return null;
};

export default ProgressBar;*/

"use client";

import NextTopLoader from "nextjs-toploader";

const ProgressBar = () => {
  return (
    <NextTopLoader
      color="#ffffff"
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={false}
      easing="ease"
      speed={500}
      shadow="0 0 10px #fff,0 0 5px #fff"
    />
  );
};

export default ProgressBar;