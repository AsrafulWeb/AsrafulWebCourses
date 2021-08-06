import React, { useState } from 'react';
import HomeLoader from '../Reusable/HomeLoader/HomeLoader';
import Banner from './Banner/Banner';
import HomeCoursesOutline from './HomeCoursesOutline/HomeCoursesOutline';

const Home = () => {
    const [bannerOk, setBannerOk] = useState(false)
    const [coursesOk, setCoursesOk] = useState(false)
    const [pageOk, setPageOk] = useState(false)

    const path = window.location.pathname

    const AllOk = () => {
        if (bannerOk && coursesOk) {
            setPageOk(true)
        }
        else {
            setPageOk(false)
        }
    }

    // Function for home page loader management
    const bannerTrue = () => {
        setBannerOk(true)
        AllOk()
    }
    const coursesTrue = () => {
        setCoursesOk(true)
        AllOk()
    }

    return (
        <div className="homeMain">
            {
                pageOk ?
                    ""
                    :
                    <HomeLoader />
            }
            <Banner ok={bannerTrue} />
            <HomeCoursesOutline ok={coursesTrue} />
        </div>
    );
};

export default Home;