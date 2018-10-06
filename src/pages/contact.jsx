import React from 'react';
import Helmet from 'react-helmet';
import { Header, Container, Layout } from 'components';
import config from '../../config/website';

const Contact = () => (
  <Layout>
    <Helmet title={`Contact | ${config.siteTitle}`} />
    <Header>Contact</Header>
    <Container type="text">
      <h1>Contact us!</h1>
      <br/>

      <h1>
      MIAMI OFFICE
      </h1>
      <p>
      3000 Biscayne Blvd., Suite 210<br/>
      Miami, FL 33137<br/>
      <br/>
      Phone: 305.576.5001<br/>
      Fax: 305.576.1718<br/>
      Email: info@catalystmiami.org<br/>
      <br/>
      Hours: 9:00 am – 5:00 pm<br/>
      </p>
      <br/>

      <h1>
      HOMESTEAD OFFICES
      </h1>
      <p>
      Tower Professional building<br/>
      <br/>
      151 NW 11 St., Suite 400<br/>
      Homestead, FL, 33030<br/>
      786.414.1309<br/>
      <br/>
      Hours: 9:00 am – 5:00 pm<br/>
      <br/>
      </p>
    </Container>
  </Layout>
);

export default Contact;
