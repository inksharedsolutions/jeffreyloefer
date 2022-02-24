import { Link } from 'gatsby';
import React from 'react';

import Arrow from '../images/arrow_down.png';
import AuthorImg from '../images/jeffreyloefer.jpg';


const Author = () => {
    return(
        <div className="author-section">
            <div className="container">
                <img 
                    src={Arrow} 
                    alt="arrow-down" 
                    className="arrow-down" />
                    
                <h2>The Author</h2>
                <div className="author-content">
                    <div className="bio">
                        <span>April 3 / Author</span>
                        
                        <h3>Jeffrey Loefer</h3>
                        <p>
                            Jeff L. Loefer was born in Georgia, in 1996 his dad was in the Air Force so he moved a lot. Jeff was always a nice guy, making a lot of friends, doing well in school etc.
                        </p>
                        <Link to="/">Read Full Bio</Link>
                    </div>
                    
                    <div className="author-img">
                        <img src={AuthorImg} alt="Jeffrey Loefer"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Author;