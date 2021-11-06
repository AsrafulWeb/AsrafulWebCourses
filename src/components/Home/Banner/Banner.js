import React from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import "./Banner.css"
import { useState } from 'react';
import { useEffect } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import axios from 'axios';

const Banner = ({ ok }) => {
    const [bannerDt, setBannerDt] = useState(null)
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay({ delay: 3000 })])

    useEffect(() => {
        axios.get("/banners")
            .then(data => {
                setBannerDt(data.data)
                ok(true)
            })
    }, [])


    return (
        <div className="container mt-3">
            {
                bannerDt &&
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container">
                        {
                            bannerDt?.map((dt) =>
                                <div className="embla__slide bannerItem">
                                    <div className="contenText text-light">
                                        <h2>{dt.title}</h2>
                                        <br />
                                        <div>Instructor: {dt.instructor}</div>
                                        <br />
                                        <a href={dt.link}>
                                            <button className="btn btn-sm btn-primary px-4">View Details</button>
                                        </a>
                                    </div>
                                    <img className='img-fluid bannerItemImg' src={dt.bg1} alt="" />
                                </div>
                            )
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Banner;