module.exports = {
  siteTitle: 'Hi! I\'m Jes!',
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Jes',
  twitterUsername: 'J001072',
  githubUsername: 'jes14',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `I'm Jes, a Software Engineer based in Germany. <br /> <br />
The technologies I work with are JavaScript with a focus on the frameworks React.js. <br/>
I want to leverage my diverse research background in Human-Computer Interaction to build cutting-edge software. <br/>
I have passionate about <strong>blockchain technologies</strong>. <br /> <br />`,
  portifolio: [
    {
      image: "/images/gatsby-starter-cv.png",
      description: "photodapp",
      url: "https://www.gatsbyjs.org/starters/santosfrancisco/gatsby-starter-cv/"
    },
    {
      image: "/images/awesome-grid.png",
      description: "election dapp",
      url: "https://github.com/santosfrancisco/react-awesome-styled-grid"
    },
    /* more portifolio items here */
  ],
  social: {
    twitter: "https://twitter.com/J001072",
    linkedin: "https://www.linkedin.com/in/yjink",
    github: "https://github.com/jes14",
  },
  siteUrl: 'https://santosfrancisco.github.io/gatsbystarter-cv',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
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
      url: '/portifolio',
    }
  ]
}