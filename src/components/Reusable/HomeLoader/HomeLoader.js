import React from 'react';

const HomeLoader = () => {
    return (
        <section className='homePageLoader'>
            <div className="homeLoader d-flex justify-content-center align-items-center">
                <div class="spinner-border text-secondary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </section>
    );
};

export default HomeLoader;