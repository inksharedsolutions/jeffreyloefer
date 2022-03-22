import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

import Seo from "../components/seo"
import Social from "../components/social-icons"
import Nav from '../components/navigation';
import Banner from '../components/non-front-banner';
import Footer from '../components/footer';

import Cover from '../images/crusader.jpg';

const Book = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'jeffrey-loefer',
        config: { identifier: 12, slug }
    }

    return(
        <>
            <Seo title="About the Book" />
            <Nav />
            <Social />
            <Banner title="ABOUT THE BOOK"/>
            <div className="book-section">
                <div className='container'>
                    <h1 className='featured'>Featured Book</h1>
                    <div className='flex'>
                        <div className='book-img'>
                            <img src={Cover} alt="The Last Crusader"/>
                        </div>
                        <div className='book-content'>
                            <h1>The Last Crusader</h1>
                            <span>By Jeffrey Loefer</span><br /><br />

                            <p>
                                A crusader named Brock has a dream of impending doom-of him, his comrades, and the town of Cornwallis-from goblins and trolls.
                                Was the dream just a dream? Or was it a vision of the future that he and his friends need to be ready for?
                            </p>

                            <p>
                                Ebook: 
                                <a href='https://www.amazon.com/Last-Crusader-Jeffrey-Loefer-ebook/dp/B07CJYBPHL/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1524452557&sr=1-2' className='book-links'>Amazon</a>
                                |
                                <a href='https://www.barnesandnoble.com/w/the-last-crusader-jeffrey-loefer/1128548947?ean=9781948654753' className='book-links'>Barnes & Nobles</a>
                            </p>

                            <p>
                                Paperback: 
                                <a href='https://www.amazon.com/Last-Crusader-Jeffrey-Loefer/dp/1947355244/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1524452557&sr=1-2' className='book-links'>Amazon</a>
                                |
                                <a href='https://www.barnesandnoble.com/w/the-last-crusader-jeffrey-loefer/1128548947?ean=9781947355248' className='book-links'>Barnes & Nobles</a>
                                |
                                <a href='https://www.booksamillion.com/p/Last-Crusader/Jeffrey-Loefer/9781947355248?id=8353755552402' className='book-links'>Books-A-Million</a>
                            </p>

                        </div>
                    </div><hr />
                    <div className="commentSection">
                        <div id="disqus_thread">
                            <DiscussionEmbed {...disqusConfig} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Book;