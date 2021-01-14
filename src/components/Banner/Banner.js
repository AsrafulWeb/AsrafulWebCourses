import React from 'react';
import './Banner.css';
import bannerImg1 from './../../banner/cWebDevBanner1jpg.jpg';
import bannerImg2 from './../../banner/cWebDesBanner1jpg.jpg';
import bannerImg3 from './../../banner/cWpBanner2jpg.jpg';

const Banner = () => {
    return (
        <section className="bannerMain">
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={bannerImg1} class="d-block w-100" alt="..." />
                        <div class="carousel-caption text-left d-none d-md-block carouselSection">
                            <h1>Complete Web Development Courses</h1>
                            <h5 className="text-primary">Instructor: Freelancer Nasim</h5>
                            <br/><br/><br/>
                            <a href='/courses/webdevcourses' className='btn btn-outline-primary'>Enroll Now</a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={bannerImg2} class="d-block w-100" alt="..." />
                        <div style={{marginBottom: '65px' , width: '47%'}} class="carousel-caption text-left d-none d-md-block carouselSection">
                            <h2>Web Design & Wordpress Customization Courses</h2>
                            <h5 className="text-primary">Instructor: Freelancer Nasim</h5>
                            <br/><br/><br/>
                            <a href='/courses/webdevandwpcourses' className='btn btn-outline-primary'>Enroll Now</a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={bannerImg3} class="d-block w-100" alt="..." />
                        <div style={{marginBottom: '65px' , width: '47%'}} class="carousel-caption text-left d-none d-md-block carouselSection">
                            <h1>Full Wordpress Courses</h1>
                            <h5 className="text-primary">Instructor: Freelancer Nasim</h5>
                            <br/><br/><br/>
                            <a href='/courses/wpcourses' className='btn btn-outline-primary'>Enroll Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;