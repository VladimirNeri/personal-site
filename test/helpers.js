const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Vladimir Neri',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Vladimir Neri',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Vladimir Neri',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Vladimir Neri',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Vladimir Neri',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
