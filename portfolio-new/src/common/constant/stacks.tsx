import { FaJava } from 'react-icons/fa';
import { BsFillBootstrapFill } from 'react-icons/bs';
import {
  SiFirebase,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiHtml5,
  SiSpring,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiLinux,
  SiPython,
  SiKubernetes,
  SiOpenai,
  SiShadcnui,
  SiCplusplus,
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiNumpy,
} from 'react-icons/si';
import { TbBrandAuth0 } from 'react-icons/tb';

import {
  MdMemory,
  MdPsychology,
  MdSchema,
  MdFunctions,
} from 'react-icons/md';

import { TbMathFunction } from 'react-icons/tb';
import { BsDiagram3 } from 'react-icons/bs';


import type { JSX } from 'react';

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 24;

export const STACKS: stacksProps = {
  'C++': <SiCplusplus size={iconSize} className='text-blue-600' />,
  'Spring Boot': (
    <SiSpring size={iconSize} className='text-green-500' />
  ),

  TensorFlow: (
    <SiTensorflow size={iconSize} className='text-orange-500' />
  ),

  PyTorch: (
    <SiPytorch size={iconSize} className='text-red-500' />
  ),

  'Machine Learning': (
    <MdMemory size={iconSize} className='text-cyan-500' />
  ),

  'Deep Learning': (
    <MdPsychology size={iconSize} className='text-purple-500' />
  ),

  Algorithms: (
    <MdFunctions size={iconSize} className='text-emerald-500' />
  ),

  'System Design': (
    <MdSchema size={iconSize} className='text-indigo-500' />
  ),

  Math: (
    <TbMathFunction size={iconSize} className='text-pink-500' />
  ),

  Pandas: (
    <SiPandas size={iconSize} className='text-blue-400' />
  ),

  NumPy: (
    <SiNumpy size={iconSize} className='text-cyan-400' />
  ),

  'Data Structures': (
    <BsDiagram3 size={iconSize} className='text-orange-500' />
  ),


  ShadCN: <SiShadcnui size={iconSize} className='text-blue-500' />,
  AuthJS: <TbBrandAuth0 size={iconSize} className='text-purple-500' />,
  OpenAI: <SiOpenai size={iconSize} className='text-black-600' />,
  Spring: <SiSpring size={iconSize} className='text-green-600' />,

  Kubernetes: <SiKubernetes size={iconSize} className='text-blue-600' />,

  HTML5: <SiHtml5 size={iconSize} className='text-orange-500' />,
  Java: <FaJava size={iconSize} className='text-red-600' />,
  MySQL: <SiMysql size={iconSize} className='text-blue-500' />,
  MongoDB: <SiMongodb size={iconSize} className='text-green-500' />,
  Docker: <SiDocker size={iconSize} className='text-blue-400' />,
  Linux: <SiLinux size={iconSize} className='text-white-400' />,
  Python: <SiPython size={iconSize} className='text-yellow-400' />,

  JavaScript: <SiJavascript size={iconSize} className='text-yellow-300' />,
  TypeScript: <SiTypescript size={iconSize} className='text-blue-600' />,
  'Next.js': <SiNextdotjs size={iconSize} />,
  'React.js': <SiReact size={iconSize} className='text-sky-500' />,
  TailwindCSS: <SiTailwindcss size={iconSize} className='text-teal-500' />,
  Vite: <SiVite size={iconSize} className='text-purple-500' />,
  Firebase: <SiFirebase size={iconSize} className='text-yellow-400' />,
  'Node.js': <SiNodedotjs size={iconSize} className='text-green-400' />,
};


