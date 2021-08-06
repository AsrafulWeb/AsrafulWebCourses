import React from 'react';
import loader from './../../../logo/Spinner2.gif'

const HomeLoader = () => {
    return (
        <section className='homePageLoader'>
            <div className="homeLoader">
                <img src={loader} alt="" className="homeLoaderImg" />
            </div>
        </section>
    );
};

export default HomeLoader;