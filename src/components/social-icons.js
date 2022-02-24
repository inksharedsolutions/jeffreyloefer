import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance, faFacebookF, faGoodreadsG, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Social = () =>{
    return(
        <>
            <div className="social-icons">
                <a href="https://www.facebook.com/jeff.loefer" className="icons facebook" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookF}/>
                </a>
                <a href="https://twitter.com/Chewbacca397?lang=en" className="icons twitter" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://www.instagram.com/chewbacca397/" className="icons instagram" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.instagram.com/chewbacca397/" className="icons linkedIn" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="https://www.instagram.com/chewbacca397/" className="icons behance" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faBehance} />
                </a>
                <a href="https://www.instagram.com/chewbacca397/" className="icons goodreads" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGoodreadsG} />
                </a>
            </div>
        </>
    )
}

export default Social;