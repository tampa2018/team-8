import React from 'react';
import Helmet from 'react-helmet';
import { Header, Container, Layout } from 'components';
import config from '../../config/website';

const About = () => (
  <Layout>
    <Helmet title={`About | ${config.siteTitle}`} />
    <Header>About</Header>
    <Container type="text">
      <h1 style={{textAlign: 'center'}}>Two decades ago, Catalyst Miami emerged as a critical node in the local 
      network of nonprofit organizations.</h1>
      <p>
      <br/>
      Founded by Daniella Levine Cava as the Human Services Coalition, our defining role is to identify and launch innovative community building strategies.

      Our Vision

      A just and equitable society in which all communities thrive.

      Our Mission

      To identify and collectively solve issues adversely affecting low-wealth communities throughout Miami-Dade County.
      </p>
    </Container>
  </Layout>
);

export default About;
