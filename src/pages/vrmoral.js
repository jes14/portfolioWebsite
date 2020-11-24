import React from 'react'
import styled from 'styled-components'
import { withPrefix } from "gatsby"
import loadable from '@loadable/component'
import Hero from '../components/hero'
import Wrapper from '../components/wrapper'
import SEO from '../components/SEO'

const Layout = loadable(() => import('../components/layout'))

const MainTitle = styled.h1`
  line-height: 1.5;
  text-align: center;
  font-size: 3rem;
`

const Vrmoral = ({ location }) => (
  <Layout location={location} noCover={true}>
    <SEO title="" />
    <Hero
      heroImg={withPrefix('/images/404.jpeg')}
      title='Game dev'
    />
    <Wrapper>
      <MainTitle>VR moral game</MainTitle>

      <p>I developed a VR moral decision game included psychological factors and I conducted an experiment with 22 participants when I was working at Gbanga. I presented a poster called "Empathy in VR of the trolley problem compared to paper-based evaluations" at International Conference of Women Scientists and Engineers conference on BT, IT, ET and NT. I got an outstanding poster award.</p>

      <br />
      <h3>Project duration</h3>
      <p>11.2016 - 01.2017</p>
      <br /><br />

      <h3>Built with</h3>
      <li>Unity3D</li>
      <li>C#</li>
      <li>HTC Vive</li>
      <br /><br />
      <h3>What I did</h3>
      <li>Game development</li>
      <li>Game design</li>
      <li>Research and development</li>
      <li>Conduct an experiment</li>
      <br /><br />

      <h3>Video</h3>
      <iframe src="https://player.vimeo.com/video/234782289"
        width="100%"
        height="300"
        frameBorder="0"
        allow="autoplay; 
         fullscreen"
        allowFullScreen
        muted
        title="vrmoral"
      ></iframe>


    </Wrapper>
  </Layout>
)

export default Vrmoral
