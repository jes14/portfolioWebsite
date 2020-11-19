module.exports = {
  siteTitle: 'Hello, I\'m Yujin',
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Yujin',
  twitterUsername: 'J001072',
  githubUsername: 'jes14',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `
👋 I'm Yujin, a Software Engineer based in Germany. <br /> <br />
✨ Currently I am responsible for developing multiple client-side web applications. <br/> <br />
✨ I want to leverage my diverse research background in Human-Computer Interaction to build cutting-edge software. <br/> <br />
✨ I have passionate about <strong>blockchain</strong> technologies. Besides my work, I develop Ethereum smart-contracts and full-stack decentralized applications.
`,
  portfolio: [
    // {
    //   image: "/images/cover2.jpeg",
    //   description: "photo Dapp",
    //   skill: "JavaScript",
    //   url: "https://github.com/jes14/photo_dapp_"
    // },
    // {
    //   image: "/images/cover2.jpeg",
    //   description: "election Dapp",
    //   skill: "JavaScript",
    //   url: "https://github.com/jes14/election_dapp_"
    //     },
    // {
    //   image: "/images/main.png",
    //   description: "My portfolio",
    //   skill: "JavaScript",
    //   url: "https://github.com/jes14/portfolio_"
    // },
    {
      image: "/images/vrcat_1.png",
      description: "VR cat",
      skill: "Unity3D",
      url: "https://github.com/jes14/vrcat_"    
    },
    {
      image: "/images/vrmoral_1.png",
      description: "VR moral",
      skill: "Unity3D",
      url: "https://github.com/jes14/vrmoral_"    
    },
    {
      image: "/images/flutter.png",
      description: "Dart score app",
      skill: "Flutter",
      url: "https://github.com/jes14/mobile_bluetooth_"    
    },
    {
      image: "/images/movieinfo_pic.png",
      description: "Movie app",
      skill: "Kotlin",
      url: "https://github.com/jes14/mobile_movie"
    },
    {
      image: "/images/quiz_pic.png",
      description: "Quiz app",
      skill: "Kotlin",
      url: "https://github.com/jes14/mobile_quiz_"
    },
    /* more portfolio items here */
  ],
  social: {
    twitter: "https://twitter.com/J001072",
    linkedin: "https://www.linkedin.com/in/yjink",
    github: "https://github.com/jes14",
  },
  siteUrl: '',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  // siteCover: '/images/cover2.jpeg',
  // googleAnalyticsId: '',
  background_color: '#ffffff',
  theme_color: '#14274e',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Projects',
      url: '/portfolio',
    }
  ]
}