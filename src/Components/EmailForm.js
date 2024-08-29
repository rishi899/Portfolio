import React from 'react'
import emailjs from '@emailjs/browser'
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';

export const EmailForm = () => {

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [message, setMessage] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

       const serviceId = 'service_c8bsslk'
       const templateId = 'template_27bwter'
        const publicKey = 'Wm5lYWEirSWYfOLY9'

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'test',
            message: message,
            reply_to: email
        }

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent!', response);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.log('Error sending email:', error);
            });
    }

    return (
        
        <div id='emailcontact' className="contact" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ flex: 1 }}>
                <section className="contact" id="connect">
                <Container>
        <Row className="align-items-center">
          <Col size={15} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
            </div>
            <form onSubmit={handleSubmit} className='emailForm' style={{ flex: 1, marginLeft: '20px' }}>
                <input 
                    type="text" 
                    placeholder='Your name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                <input 
                    type="email" 
                    placeholder='Your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                <textarea 
                    cols='30'
                    rows='10'
                    placeholder='Your message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                <button type='submit' className='button' style={{ display: 'block', width: '100%', padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
                    Send Email
                </button>
            </form>
        </div>
    )
}
