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
      <br/>
      <br/>
      Our Vision
      <br/>
      A just and equitable society in which all communities thrive.
      <br/>
      <br/>
      Our Mission
      <br/>
      To identify and collectively solve issues adversely affecting low-wealth communities throughout Miami-Dade County.
      <br/>
      <br/>
      Focus on three community building strategies:
      <br/>
      <br/>
      1. PROSPER: Community residents must be healthy and financially secure.
      <br/>
      2. LEAD: Residents of our community must recognize their leadership potential.
      <br/>
      3. CATALYZE: Organizations and networks promoting community well-being must build power and impact. We must work together, across sectors, to create change that improves the quality of life for residents.
      <br/>
      <br/>
      Our programs and initiatives endeavor to further our community building strategies, while strengthening partnerships and promoting collaboration across Miami-Dade County. We weave our organization’s core values throughout our work.
      <br/>
      <br/>
      Please visit our website for more information about career planning, health, and other necessities: 
      https://catalystmiami.org/
      </p>
    </Container>
  </Layout>
);

export default About;
