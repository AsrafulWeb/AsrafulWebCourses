import React, { useEffect, useState } from 'react';
import Courses from '../Courses/Courses';
import HomeLoader from '../Reusable/HomeLoader/HomeLoader';
import Banner from './Banner/Banner';
import HomeFeaturedItem from './HomeFeaturedItem/HomeFeaturedItem';
import fi1img from './../../CoursesFeturedImg/fetured-course-img-1.png'
import HomeFeaturedCategory from './HomeFeaturedCategory/HomeFeaturedCategory';

const Home = () => {
    const [bannerOk, setBannerOk] = useState(false)
    const [coursesOk, setCoursesOk] = useState(false)
    const [pageOk, setPageOk] = useState(false)

    // Featured Items Data
    const featuredItem1Data = {
        titleImg: fi1img,
        title: "Build Responsive Websites with HTML",
        subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, pariatur corrupti vel laboriosam esse in! Dolore possimus esse placeat, mollitia eligendi ipsa, voluptates autem unde sapiente non, ab facere dolor.",
        link: "/course/html5course"
    }

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
            <HomeFeaturedItem item={1} bg="#FFFFFF" data={featuredItem1Data} />
            <HomeFeaturedCategory />
        </div>
    );
};

export default Home;