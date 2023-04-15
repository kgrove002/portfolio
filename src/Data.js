import { FaStar } from 'react-icons/fa';
import pdf from './images/Certificate.pdf';

const data = [
  {
    language: 'HTML5/CSS',
    rating: 5,
    stars: (
      <>
        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
      </>
    ),
    link: 'https://github.com/kgrove002/Example-Of-HTML-CSS',
  },
  {
    language: 'JavaScript',
    rating: 4,
    stars: (
      <>
        <FaStar /> <FaStar /> <FaStar /> <FaStar />
      </>
    ),
    link: 'https://github.com/kgrove002/Boiler-App',
  },
  {
    language: 'React.js',
    rating: 3,
    stars: (
      <>
        <FaStar /> <FaStar /> <FaStar />
      </>
    ),
    link: 'https://github.com/kgrove002/portfolio',
  },
  {
    language: 'PHP/SQL',
    rating: 4,
    stars: (
      <>
        <FaStar /> <FaStar /> <FaStar /> <FaStar />
      </>
    ),
    link: 'https://github.com/kgrove002/Example-of-PHP-Ability',
  },
  {
    language: 'Java',
    rating: 1,
    stars: (
      <>
        <FaStar />
      </>
    ),
    link: null,
  },
  {
    language: 'C++',
    rating: 1,
    stars: (
      <>
        <FaStar />
      </>
    ),
    link: null,
  },
  {
    language: 'Python',
    rating: 3,
    stars: (
      <>
        <FaStar /> <FaStar /> <FaStar />
      </>
    ),
    link: 'https://github.com/kgrove002/Example-of-Python',
  },
  {
    language: 'R',
    rating: 2,
    stars: (
      <>
        <FaStar /> <FaStar />
      </>
    ),
    link: null,
  },
  {
    language: 'A++',
    rating: 4,
    stars: (
      <>
        <FaStar /> <FaStar /> <FaStar /> <FaStar />
      </>
    ),
    link: pdf,
  },
];

export default data;
