import React, { useEffect, useState } from 'react';
import './Banner.css';

const Banner = (props) => {

    const [banner, setBanner] = useState([])

    useEffect(() => {
        fetch('https://boiling-caverns-66680.herokuapp.com/banners')
            .then(response => response.json())
            .then(data => {
                setBanner(data)
                props.ok()
            })
    }, [])


    return (
        <section className="bannerMain">
            <div id="carouselExampleCaptions" class="carousel slide carousel1" data-ride="carousel">
                <ol class="carousel-indicators">
                </ol>
                <div class="carousel-inner">
                    {
                        banner.map(bn =>
                            <div class={bn.class1}>
                                <img src={bn.bg1} class="d-block w-100" alt="..." />
                                <div class="carousel-caption text-left d-md-block carouselSection">
                                    <h1>{bn.title}</h1>
                                    <h5 className="text-primary">Instructor: {bn.instructor}</h5>
                                    <br /><br /><br />
                                    <a href={bn.link} className='btn btn-outline-primary'>Enroll Now</a>
                                </div>
                            </div>
                        )}
                </div>
            </div>
            <div id="carouselExampleCaptions" class="carousel slide carouselForMobile" data-ride="carousel">
                <ol class="carousel-indicators">
                </ol>
                <div class="carousel-inner">
                    {
                        banner.map(bn =>
                            <div class={bn.class1}>
                                <img src={bn.bg2} class="d-block w-100" alt="..." />
                                <div style={{textAlign: 'left'}} class="carousel-caption text-left d-md-block carouselSection">
                                    <h1>{bn.title}</h1>
                                    <h5 className="text-primary">Instructor: {bn.instructor}</h5>
                                    <br /><br /><br />
                                    <a href={bn.link} className='btn btn-outline-primary'>Enroll Now</a>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </section>
    );
};

export default Banner;