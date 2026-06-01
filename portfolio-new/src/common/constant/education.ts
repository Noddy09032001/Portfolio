import { EducationProps } from "../types/education";

export const EDUCATION: EducationProps[] = [
  {
    school: 'Eindhoven University of Technology',
    major: 'Computer Science and Engineering',
    logo: '/images/education/TUe.PNG',
    location: 'Eindhoven, Netherlands 🇺🇸',
    degree: 'Master of Science',
    start_year: 2026,
    end_year: 2028,
    link: 'https://www.tue.nl/en/',
    responsibilities: {
      coursework: [
        'Advanced Algorithms',
        'Engineering Data-Intensive Systems',
        'Machine Learning',
        'Distributed Systems'
      ],
      achievements: [
        'Research in AI systems',
        'Collaborated on software engineering projects'
      ]
    }
  },
  {
    school: 'Vishwakarma Institute of Technology',
    major: 'Mechanical Engineering',
    logo: '/images/education/VIT.PNG',
    location: 'Pune, India 🇮🇳',
    degree: "Bachelor's of Technology",
    start_year: 2019,
    end_year: 2023,
    link: 'https://www.vit.edu/',
    responsibilities: {
      coursework: [
        'CS1003 - Computer Programming',
        'ES1001 - Calculus',
        'CS1004 - Advanced Computer Programming',
        'CS1005 - Software Development Project',
        'ES1004 - Linear Algebra',
        'MD2201 - Data Science',
        'CS2218 - Object Oriented Programming',
        'MD2222 - Software Design'
      ],
      achievements: []
    }
  },
];