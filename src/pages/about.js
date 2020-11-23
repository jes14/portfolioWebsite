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

const About = ({ location }) => (
    <Layout location={location} noCover={true}>
        <SEO title="About" />
        <Hero
            heroImg={withPrefix('/images/404.jpeg')}
            title='About'
        />
        <Wrapper>
            {/* <MainTitle>404 Page Not Found</MainTitle> */}
            {/* <Icon>
                <img src={withPrefix('/images/ufo-and-cow.svg')} alt='ufo and cow' />
            </Icon> */}
            <h1>Background</h1>
            <p>
                My education and related experience have given me a strong background in the field of web development, user experience, gamification, and artificial intelligence.  <br /> <br />Earlier, I was developing various mixed reality games at a gaming company in Switzerland. I was participating in the development of mixed reality games such as a location-based predatory game and a golf game which users could play in the real world with their mobile phone. 
                Also, I’ve had participated in a project regarding mobile-based field trips for world heritage sites in collaboration with a department of education. <br /> <br />
                Since 2019, I came to Germany and doing my career as a software engineer. I am always eager to learn new technologies and recently I deeply interested in financial technology.
             </p>
            <br /> <br />
            {/* <h1>Tech stacks</h1> */}
            <p></p>
        </Wrapper>
    </Layout>
)

export default About
