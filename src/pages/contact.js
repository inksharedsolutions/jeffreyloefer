import React from 'react';

import Seo from "../components/seo"
import Social from "../components/social-icons"
import Nav from '../components/navigation';
import Banner from '../components/non-front-banner';
import Footer from '../components/footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faCompass, faMobileScreenButton, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../assets/scss/contact.scss';

const Contact = () => {
    return(
        <>
            <Seo title="Contact" />
            <Social />
            <Nav />
            <Banner title="CONTACT"/>
            <div className="contact-section">
                <div className='container'>
                    <h1>Contact Me</h1>
                    <p>
                        Hello! Are you having a good day? Anyway, if you have any concerns or you just want
                        to share something, please feel free to drop me a line. I would love to hear anything
                        from you.
                    </p>
                    <div className='form-contact two-column-grid'>
                        <div className='form'>
                            <div className='two-column-grid'>
                                <input type="text" name="firstname" placeholder='First Name' />
                                <input type="text" name="lastname" placeholder='Last Name' />
                                <input type="email" name="email" placeholder='Email Address' />
                                <input type="phone" name="phone" placeholder='Phone' />
                            </div>
                            <textarea rows="10" placeholder="Message" />
                            <button>Send&nbsp;<FontAwesomeIcon icon={faPaperPlane} /></button>
                        </div>
                        <div className='map'>
                            <p>
                                <FontAwesomeIcon icon={faCompass} size="lg"/>&nbsp;
                                831 N. Tatnall Street, Suite M #188 Wilmington, DE 19801
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faMobileScreenButton} size="lg"/>
                                <a href='tel:8883237009'>888-323-7009</a>
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faEnvelope} size="lg"/>
                                <a href='mailto:publish@stratton-press.com'>publish@stratton-press.com</a>
                            </p>
                            <hr />
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191.7333332599495!2d-75.55098391898225!3d39.74564059501127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fd6a9dfc32a9%3A0x31464449b235257b!2s831%20N%20Tatnall%20St%20m%20188%2C%20Wilmington%2C%20DE%2019801%2C%20USA!5e0!3m2!1sen!2sph!4v1645633153646!5m2!1sen!2sph" 
                                width="100%" 
                                height="300" 
                                style={{border: 0}} 
                                allowfullscreen="" 
                                loading="lazy" 
                                title="Map" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact;