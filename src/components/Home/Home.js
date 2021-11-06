import React, { useEffect, useState } from 'react';
import Courses from '../Courses/Courses';
import HomeLoader from '../Reusable/HomeLoader/HomeLoader';
import Banner from './Banner/Banner';

const Home = () => {
    const [bannerOk, setBannerOk] = useState(false)
    const [coursesOk, setCoursesOk] = useState(false)
    const [pageOk, setPageOk] = useState(false)

    useEffect(() => {
        if (bannerOk && coursesOk) {
            setPageOk(true)
        }
        else {
            setPageOk(false)
        }
    }, [bannerOk, coursesOk])


    return (
        <div className="homeMain">
            {
                pageOk ?
                    ""
                    :
                    <HomeLoader />
            }
            <Banner ok={setBannerOk} />
            <Courses ok={setCoursesOk} home={true} />
        </div>
    );
};

export default Home;