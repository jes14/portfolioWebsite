import React from 'react'
import styled, { css } from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import siteConfig from '../../data/siteConfig'
import { withPrefix } from "gatsby"
import loadable from '@loadable/component'
import Hero from '../components/hero'
import SEO from '../components/SEO'
import Wrapper from '../components/wrapper'

const Layout = loadable(() => import('../components/layout'))

const Image = styled.img`
  max-height: 220px;
  max-width: 220px;
  object-fit: cover;
  object-position: center center;
  border-radius: 5px;
`

const Button = styled.button`
  color: ${props => props.theme.fg};
  border: 0px solid ${props => props.theme.fg};
  background: ${props => props.theme.bg};
  font-size: 1em;
  margin-left: 3px;
  border-radius: 3px;
`;

const theme = {
  fg: "grey",
  bg: "papayawhip"
};

const JobCard = styled.a`
  text-decoration: none;
  color: inherit;

  ${({ href }) => href && css`
    &:hover ${Image}{
      transition: transform .5s;
      transform: translateY(-5px);
    }
  `}
`

const Portfolio = ({ className, location }) => {
  const title = "Side projects"
  const { keywords, portfolio } = siteConfig
  return (
    <Layout location={location}>
      <SEO
        title={title}
        keywords={keywords}
      />

      <Hero
        heroImg={withPrefix('/images/cover2.jpeg')}
        title={title}
      />

      <Wrapper className={className}>
        <h5 align="center">Click for the github link</h5>
        <Container className="page-content" fluid>
          <Row>
            {portfolio.map(job => (
              <Col
                key={job.description}
                align="center"
              >
                <JobCard
                  as={job.url ? "a" : "div"}
                  href={job.url}
                  target="_blank"
                >
                  <Image src={withPrefix(job.image)} />
                  <p align="center">{job.description}
                  
                    <Button theme={theme}>{job.skill}</Button>
                      {/* </ThemeProvider> */}
                    
                  </p>
                </JobCard>
              </Col>
            ))}
          </Row>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default styled(Portfolio)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

`
