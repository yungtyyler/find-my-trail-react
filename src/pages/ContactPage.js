import ContactForm from '../components/ContactForm';
import { Container, Row, Col } from 'reactstrap';

const ContactPage = () => {
  return (
      <Container className='ml-auto'>
        <h1 className='fw-bold'>Contact Us</h1>
        <p className='lead fst-italic'>Fill out the form below and we will be in touch with you soon!</p>
        <Row>
          <Col lg='6'>
            <h3 className='my-2'>Contact Form:</h3> 
            <ContactForm />
          </Col>
          <Col lg='6'>
            <h3 className='my-2'>Come Visit Us</h3>
            <div className="ratio ratio-4x3">
              <iframe
                title='GoogleMap'
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5565.563206684309!2d-117.94749171819291!3d33.959033215501734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1684521129490!5m2!1sen!2sus"
                style={{ border: '1px', borderStyle: 'solid', borderColor: '#ccc', borderRadius: '5px' }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
  )
}

export default ContactPage