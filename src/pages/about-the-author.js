import React from 'react';

import Seo from "../components/seo"
import Social from "../components/social-icons"
import Nav from '../components/navigation';
import Banner from '../components/non-front-banner';
import Footer from '../components/footer';

import Decor from '../images/stylizer_nfront.png';
import Img from '../images/jeffreyloefer.jpg';

const Author = () => {
    return(
        <>
            <Seo title="About the Author" />
            <Nav />
            <Social />
            <Banner title="ABOUT THE AUTHOR"/>
            <div className="author-page">
                <div className='container'>
                    <img src={Decor} alt="decor" />
                    <blockquote>
                        "A story is a letter that the author writes to himself, to tell himself things that he
                        would be unable to discover otherwise."
                    </blockquote>
                    <hr />
                    <div className='two-column-grid'>
                        <div className='author-img'>
                            <img src={Img} alt="Jeffrey Loefer"/>
                        </div>
                        <div className='author-content'>
                            <p>
                                Jeff L. Loefer was born in Georgia, in 1996 his dad was in the Air Force
                                so he moved a lot. Jeff was always a nice guy, making a lot of friends,
                                doing well in school etc. But never stayed in one place in his childhood,
                                and having to say goodbye to all of his friends. Then one day when he got
                                to Roy Utah, his father decided to retire from Air Force and stay in Utah,
                                and that is where Jeff stayed at the rest of his childhood, and started his
                                life there.
                            </p>
                            <hr />
                            <h1>Jeffrey Loefer</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Author;