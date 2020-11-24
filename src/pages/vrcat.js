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

const Button = styled.button`
  color: #14274e;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #14274e;
  border-radius: 3px;
`;

const Vrcat = ({ location }) => (
  <Layout location={location} noCover={true}>
    <SEO title="vrcat" />
    <Hero
      heroImg={withPrefix('/images/404.jpeg')}
      title='Game dev'
    />
    <Wrapper>
      <MainTitle>VR cat game</MainTitle>

      <p>I created an exploration VR game called ’A Cat in a Room’ and successfully exhibited in Swiss indie game festival.
        <Button as="a" href="http://www.gamezfestival.ch/2016/">Go to link</Button>
      </p>

      <br />
      <h3>Project duration</h3>
      <p>09.2016 - 11.2016</p>
      <br /><br />

      <h3>Built with</h3>
      <li>Unity3D</li>
      <li>C#</li>
      <li>HTC Vive</li>
      <br /><br />
      <h3>What I did</h3>
      <li>Game development</li>
      <li>Game design</li>
      <li>Testing</li>
      <li>Exhibition</li>
      <br /><br />

      <h3>Video</h3>
      <iframe src="https://player.vimeo.com/video/234780830"
        width="100%"
        height="300"
        frameBorder="0"
        allow="autoplay; 
         fullscreen"
        allowFullScreen
        muted
        title="vrcat"
      ></iframe>
    </Wrapper>
  </Layout>
)

export default Vrcat
