import React from 'react';

import Book from '../images/crusader.jpg';
import Decor from '../images/stylizer_nfront.png';

const FeaturedBook = () => {
    return(
        <>
            <div className="section-title">
                <h2 className="title">Featured Book</h2>
                <div className="hr"></div>
            </div>
            <div className="featured-book">
                <div className="container">
                    <img src={Book} alt="the-last-crusader" id="book-cover"/>
                    <div className="book-content">
                        <h2>From Author Jeffrey Loefer</h2>
                        <h1>Be prepared for anything because we don't know when they might strike.</h1>
                        <img src={Decor} alt="decor" id="decor"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedBook;