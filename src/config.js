const profile = {
  fullName: 'Kyran Adams',
  description: 'Data Scientist, Machine Learning Researcher, and Backend Software Developer',
  // The basepath is the assets folder
  /// the file sould be imported in assets-import.js
  avatarPath: 'avatar.svg',
  about: {
    title: `Hey There! 
    I'm Kyran Adams.`,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
   
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis.`,
    findMeOn: [
      {
        iconName: 'location',
        text: 'Houston, TX; Seattle, WA',
        url: '',
        hoverColor: '#546e7a'
      },
      {
        iconName: 'twitter',
        text: '@Kyran_Adams',
        url: 'https://twitter.com/Kyran_Adams',
        hoverColor: '#1da1f2'
      },
      {
        iconName: 'email',
        text: 'kpa1@rice.edu',
        url: 'mailto://kpa1@rice.edu',
        hoverColor: '#546e7a'
      }
    ]
  },
  social: [
    {
      iconName: 'twitter',
      url: 'https://twitter.com/Kyran_Adams',
      text: "I'm on Twitter",
      hoverColor: '#1da1f2'
    },
    {
      iconName: 'github',
      url: 'https://github.com/kyranstar',
      text: "I'm on Github",
      hoverColor: '#000'
    },
    {
      iconName: 'email',
      url: 'mailto:kpa1@rice.edu',
      text: 'Send me an email',
      hoverColor: '#000'
    }
  ]
}

const projects = [
  {
    title: 'Project Title #1',
    img: '',
    description: 'Lorem ipsum dolor sit amet, in nulla hendrerit ius, sed et congue graeci, qui id propriae accusata.',
    categories: ['Sample', 'Open source', 'React'],
    siteUrl: 'amazing.project.com',
    sourceCodeUrl: 'github.com/user/project'
  },
  {
    title: 'Project Title #2',
    img: 'https://www.nethruster.com/assets/img/icons/apple-touch-icon.png',
    description: 'Lorem ipsum dolor sit amet, in nulla hendrerit ius, sed et congue graeci, qui id propriae accusata.',
    categories: ['Sample', 'Freeware', 'Go'],
    siteUrl: 'amazing.project.com'
  },
  {
    title: 'Project Title #3',
    img: 'https://www.nethruster.com/assets/img/wareader.svg',
    description: 'Lorem ipsum dolor sit amet, in nulla hendrerit ius, sed et congue graeci, qui id propriae accusata.',
    categories: ['Wat', 'Linux', 'LoL'],
    sourceCodeUrl: 'github.com/user/:O'
  }
]

const formUrl = 'http://localhost:4000'
const ReCAPTCHAKey = '6LcBOC8UAAAAAM9YRyBp1RR-1NnwvMU8UDsR63Vu'
const missingProjectIcon = './assets/no-work-icon.jpg'

export {
  profile,
  projects,
  formUrl,
  ReCAPTCHAKey,
  missingProjectIcon
}
