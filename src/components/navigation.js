import { Link } from 'gatsby';
import React from 'react';

import Logo from '../images/main-logo.png';

import Burger from './burger-nav';

const Nav = () => {
    return(
        <>
            <div className='nav'>
                <div className='container'>
                    <div className='main-logo'>
                        <Link to="/"><img src={Logo} alt="Jeffrey Loefer"/></Link>
                    </div>
                    <div className='nav-links'>
                        <ul>
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/about-the-book">ABOUT THE BOOK</Link></li>
                            <li><Link to="/about-the-author">ABOUT THE AUTHOR</Link></li>
                            <li><Link to="/contact">CONTACT</Link></li>
                        </ul>
                    </div>
                </div>

                <Burger />
            </div>
        </>
    )
}

export default Nav;