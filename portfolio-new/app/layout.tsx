/*"use client";
import AOS from 'aos';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';


import 'aos/dist/aos.css';
import '../src/common/styles/global.css';

import Layout from '@/src/common/components/layout';
import { firaCode, jakartaSans, soraSans } from '../src/common/styles/fonts';

const ProgressBar = dynamic(
  () => import('../src/common/components/elements/ProgressBar'),
  { ssr: false },
);

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
    });
  }, []);

  return (
    <>
      <style jsx global>
        {`
          html {
            --jakartaSans-font: ${jakartaSans.style.fontFamily};
            --soraSans-font: ${soraSans.style.fontFamily};
            --firaCode-font: ${firaCode.style.fontFamily};
          }
        `}
      </style>
      <ThemeProvider attribute='class' defaultTheme='dark'>
        <Layout>
          <ProgressBar />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;*/

import type { Metadata } from "next";
import "aos/dist/aos.css"
import "../src/common/styles/global.css"

import Layout from "@/src/common/components/layout";
import ProgressBar from "@/src/common/components/elements/ProgressBar";
import { firaCode, jakartaSans, soraSans } from '../src/common/styles/fonts';
import Providers from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`
          ${jakartaSans.variable}
          ${soraSans.variable}
          ${firaCode.variable}
        `}
      >
        <Providers>
          <ProgressBar />
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}