export const homeObjOne = {
  id: 'responsive',
  visibleButton: false,
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Section 1',
  headline: 'Fully Responsive',
  description: 'I built this website in React using styled components and smooth scroll.',
  buttonLabel: 'Get started',
  imgStart: false,
  img: require('../../images/svg-8.svg').default,
  alt: 'Connected',
  dark: false,
  primary: false,
  visible: false,
  darkText: true,
  className: 'button-one',
  handleClick: (e) => {
    window.open('https://g-digit.com/', '_blank');
  }
};



export const homeObjTwo = {
  id: 'objects',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Section 2',
  headline: 'Reusable Objects',
  description: 'Each of these sections contain reusable components where you can switch out the positioning of the image and text.',
  buttonLabel: 'Get started',
  imgStart: true,
  img: require('../../images/svg-15.svg').default,
  alt: 'Connected',
  dark: true,
  primary: true,
  visible: false,
  darkText: false,
  className: 'button-two',
  handleClick: (e) => {
    window.open('https://google.com/', '_blank');
  },
};

export const homeObjThree = {
  id: 'concepts',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Section 3',
  headline: 'React Concepts',
  description: 'This project is using React Hooks and React Router.',
  buttonLabel: 'Learn more',
  imgStart: false,
  img: require('../../images/svg-1.svg').default,
  alt: 'Code',
  dark: false,
  primary: false,
  visible: false,
  darkText: true,
  className: 'button-three',
  handleClick: (e) => {
    window.open('https://g-digit.com/', '_blank');
  }
};

export const homeObjFour = {
  id: 'contact',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Greetings',
  headline: 'My name is Adrian',
  description: 'Press the button below if you want to get to know me a bit more!',
  buttonLabel: 'Get in touch',
  imgStart: false,
  img: require('../../images/svg-5.svg').default,
  alt: 'Contact',
  dark: false,
  primary: false,
  visible: true,
  darkText: true,
  className: 'button-four',
  handleClick: (e) => {
    window.open('https://portfolio-aliadrian.vercel.app/', '_blank');
  }
};

