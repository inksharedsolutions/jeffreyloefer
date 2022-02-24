import React from 'react';
import '../assets/scss/newsletter.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCalendarDays } from '@fortawesome/free-solid-svg-icons';

import Stratton from '../images/stratton.png';
import Amazon from '../images/amazon.png';

const Newsletter = () => {

    return(
        <>
            <div className="newsletter">
                <div className='two-column-grid'>
                    <div className='events'>
                        <h2><FontAwesomeIcon icon={faCartShopping} /> Where To Buy</h2>
                        <div className='two-column-grid'>
                            <img src={Stratton} alt="Stratton Press" />
                            <img src={Amazon} alt="Amazon" />
                        </div>
                        <h2><FontAwesomeIcon icon={faCalendarDays} /> Events</h2>
                        <p><span>April 3, 2018</span> - <i>The Crusader</i> was published under Stratton Press</p>
                    </div>
                    <div className='form'>
                        <h2>Newsletter</h2>
                        <p><i>Stay up to date with the latest from me</i></p>
                        <div className='input'>
                            <input type="text" placeholder='Enter a Email'/>
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newsletter;