import React, { useState } from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

const Burger = () => {

  const [toggle, setToggle] = useState(false);

  return(
    <>
        <div className="burger-nav" >
          <div className="burger">
            <FontAwesomeIcon icon={toggle? faX: faBars} size="lg" onClick={() => {setToggle(!toggle)}}/>
          </div>
          {/* <div className="burger-nav-links"> */}
            <ul className="burger-nav-links" style={{display: toggle? "block": "none"}}>
              <li><Link to="/" >Home</Link></li>
              <li><Link to="/about-the-book" >About the Book</Link></li>
              <li><Link to="/about-the-author" >About the Author</Link></li>
              <li><Link to="/contact" >Contact</Link></li>
            </ul>
          {/* </div> */}
        </div>
    </>
  )
}

export default Burger
