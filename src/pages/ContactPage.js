import ContactForm from '../components/ContactForm';
import GoogleMapContact from '../components/GoogleMapContact';
import { Container, Row, Col } from 'reactstrap';

const ContactPage = () => {
  return (
      <Container className='ml-auto my-5'>
        <Row className='mb-5 py-3'>
          <h1 className='fw-bold'>Contact Us</h1>
          <p className='lead fst-italic'>Fill out the form below and we will be in touch with you soon!</p>
          <hr />
        </Row>
          <Row>
            <Col lg='6'>
              <h3 className='my-2'>Contact Form:</h3> 
              <ContactForm />
            </Col>
            <Col lg='6'>
              <h3 className='my-2'>Come Visit Us</h3>
              <GoogleMapContact />
            </Col>
          </Row>
      </Container>
  );
};

export default ContactPage;