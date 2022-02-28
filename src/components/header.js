import React from "react"
import { Link } from "gatsby"

import Burger from './burger-nav';

const Header = () => {

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

        <Burger />
      </header>
    </>
  )
}

export default Header
