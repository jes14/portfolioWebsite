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

const Icon = styled.div`
  width: 150px;
  margin: 0 auto;
`

const Text = styled.p`
  text-align: center;
`

const Vrcat = ({ location }) => (
    <Layout location={location} noCover={true}>
        <SEO title="vrcat" />
        <Hero
            heroImg={withPrefix('/images/404.jpeg')}
            title='Game development'
        />
        <Wrapper>
      <MainTitle>VR cat game</MainTitle>

      <p>I created an exploration VR game called ’A Cat in a Room’ and successfully exhibited in Swiss indie game festival</p>
      
      <br />
      <h3>Project duration</h3>
      <p>09.2016 -11.2016</p>
      <br /><br />

      <h3>Built with:</h3>
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
        width="640"
        height="300"
        frameborder="0"
        allow="autoplay; 
         fullscreen"
        allowfullscreen
        muted 
        ></iframe>
        </Wrapper>
    </Layout>
)

export default Vrcat
