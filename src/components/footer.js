import { Link } from "gatsby";
import React from "react";
import "../assets/scss/footer.scss"
const Footer = () => {
    return(
        <div className="footer">
            <div className="container">
                <div className="four-column-grid">
                    <div id="msg">
                        <h3>Send Us A Message</h3>
                        <p>
                            Jeffrey Loefer, loves to hear from readers. You can reach him via email.
                            Feel free to send questions about writing, his works, interviews and 
                            other publicity matters.
                        </p>
                        <button>
                            SEND NOW
                        </button>
                    </div>

                    <div id="footer-nav">
                        <h3>Navigations</h3>  
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about-the-book">About the Book</Link></li>
                            <li><Link to="/about-the-author">About the Author</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div id="footer-res">
                        <h3>Resources</h3>
                        <ul>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/terms">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    <div id="footer-contact">
                        <h3>Jeffrey Loefer</h3>
                        <p>831 N. Tatnall Street, Suite M #188 Wilmington, DE 19801</p>
                        <p><a href="tel:8883237009">888-323-7009</a></p>
                        <p><a href="mailto:publish@stratton-press.com">publish@stratton-press.com</a></p>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container flex" >
                    <p>Copyright © 2022 All Rights Reserved</p>
                    <p>Developed By: Stratton Press</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;