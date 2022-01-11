export const projects = [
  {
    id: 1,
    title: 'Social Media Api',
    image: `${process.env.PUBLIC_URL}cooksysImage.jpg`,
    webp: `${process.env.PUBLIC_URL}cooksysImage.webp`,
    description:
      'A group project RESTful Web service with various endpoints for creating, modifying and transferring users, tweets, and hash tags to and from the server via basic CRUD operations and other HTTP requests.',
    tools: [
      'Java',
      'Spring',
      'Lombok',
      'Mapstruct',
      'JPA',
      'PostgreSQL',
      'PGAdmin',
      'Maven',
      'Postman',
    ],
    github: 'https://github.com/gogpaulie/TwitterApi',
  },
  {
    id: 2,
    title: 'eCommerce Website',
    image: `${process.env.PUBLIC_URL}ecom.jpg`,
    webp: `${process.env.PUBLIC_URL}ecom.webp`,
    description:
      'Full featured ecommerce store built with MERN stack and Paypal payments API. Admin page to manage customers, products & orders.',
    tools: ['React', 'Redux', 'MongoDB', 'JWT', 'Express'],
    github: 'https://github.com/gogpaulie/Shopnest',
    link: 'https://shopnestapp.herokuapp.com/',
  },
  {
    id: 3,
    title: 'Poke98',
    image: `${process.env.PUBLIC_URL}poke98.jpg`,
    webp: `${process.env.PUBLIC_URL}poke98.webp`,
    description:
      'A recreation of the Windows 98 UI with a built-in pokedex app.',
    tools: ['React', 'API', 'SASS'],
    github: 'https://github.com/gogpaulie/poke98',
    link: 'https://wonderful-lichterman-842105.netlify.app/',
  },
  {
    id: 4,
    title: 'Contact Keeper',
    image: `${process.env.PUBLIC_URL}contacts.jpg`,
    webp: `${process.env.PUBLIC_URL}contacts.webp`,
    description:
      'A MERN stack application that utilizes CRUD functionality to keep track of personal and professional contacts.',
    tools: ['React', 'Context API', 'Express', 'MongoDB', 'Auth', 'Dark Mode'],
    github: 'https://github.com/gogpaulie/contact-keeper',
    link: 'https://obscure-chamber-96639.herokuapp.com/',
  },
  {
    id: 5,
    title: 'Music App',
    image: `${process.env.PUBLIC_URL}musicapp.jpg`,
    webp: `${process.env.PUBLIC_URL}musicapp.webp`,
    description:
      'A music player built with vanilla javascript. Features custom font-awesome buttons and a audio responsive visualizer.',
    tools: ['JavaScript'],
    github: 'https://github.com/gogpaulie/music-player',
    link: 'https://gogpaulie.github.io/music-player/',
  },
];

export const freelance = [
  {
    id: 1,
    title: 'Charity Ecommerce Redesign',
    image: `${process.env.PUBLIC_URL}dtl.jpg`,
    webp: `${process.env.PUBLIC_URL}dtl.webp`,
    description: `A redesign of The Denver Tool library. Complete with ecommerce features and custom cart.`,
    tools: ['Webflow'],
    github: 'https://github.com/gogpaulie/Denver-tool-library',
    link: 'https://denver-tool-library.webflow.io/',
  },
  {
    id: 2,
    title: 'Graphic Design Portfolio',
    image: `${process.env.PUBLIC_URL}nessa.jpg`,
    webp: `${process.env.PUBLIC_URL}nessa.webp`,
    description: 'A website build for a freelance client showcasing her art.',
    tools: ['React', 'SASS', 'Material UI'],
    github: 'https://github.com/gogpaulie/Vanessa-Brasfield-react',
    link: 'https://msvanessab.com/',
  },
  {
    id: 3,
    title: 'Video Editing Website',
    image: `${process.env.PUBLIC_URL}noob.jpg`,
    webp: `${process.env.PUBLIC_URL}noob.webp`,
    description:
      'A website for a video editor client showing off his video editing and voice acting skills.',
    tools: ['Vue', 'SASS'],
    github: 'https://github.com/gogpaulie/noob-site-vue',
    link: 'https://perpetualnoob.net/',
  },
];
