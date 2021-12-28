import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HomeLoader from '../../Reusable/HomeLoader/HomeLoader';

const CourseOverview = () => {

    const [coursesDt, setCoursesDt] = useState(null)
    const [loader, setLoader] = useState(true)
    const [courseErr, setCourseErr] = useState(false)

    const { curl } = useParams()

    useEffect(() => {
        axios(`/coursesData?url=${curl}`)
            .then(data => {
                setCoursesDt(data.data)
                setCourseErr(false)
                setLoader(false)
            })
            .catch(err => {
                setCoursesDt(null)
                setCourseErr(true)
                setLoader(false)
            })
    }, [curl])

    return (
        <section className='coursesOverview'>
            <div className="container">
                {
                    loader ?
                        <HomeLoader />
                        :
                        <>
                            {
                                courseErr ?
                                    <div className='courseOvErr'>
                                        <br /><br />
                                        <h3>Sorry we don't have any course in this url.</h3>
                                        <br />
                                        <a href='/courses' className="btn btn-outline-success">Buy Course</a>
                                    </div>
                                    :
                                    <div className="row mb-3">
                                        <div className="col-sm-9">
                                            <br />
                                            <h2>{coursesDt.title}</h2>
                                            <br />
                                            <h5>Instructor: {coursesDt.instructor}</h5>
                                            <br />
                                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                                        </div>
                                        <div className="col-sm-3">
                                            <br />
                                            <div class="card">
                                                <img src={coursesDt.thum} class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h6 class="card-title">{coursesDt.title}</h6>
                                                    <p class="card-text">By: {coursesDt.instructor}</p>
                                                    {
                                                        coursesDt.premium ?
                                                            <h3 className='text-danger ff-roboto'>Price: {coursesDt.price}<strong >৳</strong></h3>
                                                            :
                                                            <h3 className='text-success'>Free<strong></strong></h3>
                                                    }
                                                    <Link to={'/enroll/' + coursesDt.url} className="btn btn-danger">Enroll Now</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            }
                        </>
                }
            </div>
        </section>
    );
};

export default CourseOverview;