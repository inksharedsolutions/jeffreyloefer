import React, { useState } from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

  const [toggle, setToggle] = useState(false);

  return(
    <>
      <header className="navigation">
        {/* <div className="container"> */}
          <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/about-the-book" >About the Book</Link></li>
            <li><Link to="/about-the-author" >About the Author</Link></li>
            <li><Link to="/contact" >Contact</Link></li>
          </ul>
        {/* </div> */}

        <div className="burger-nav" >
          <div className="burger">
            <FontAwesomeIcon icon={toggle? faX: faBars} size="lg" onClick={() => {setToggle(!toggle)}}/>
          </div>
          <div className="burger-nav-links">
            <ul>
              <li><Link to="/" >Home</Link></li>
              <li><Link to="/about-the-book" >About the Book</Link></li>
              <li><Link to="/about-the-author" >About the Author</Link></li>
              <li><Link to="/contact" >Contact</Link></li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
