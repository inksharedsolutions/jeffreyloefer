import React from 'react';

const Banner = (props) => {
    return(
        <>
            <div className='non-front-banner'>
                <div className='container'>
                    <h2>{props.title}</h2>
                </div>
            </div>
        </>
    )
}

export default Banner;