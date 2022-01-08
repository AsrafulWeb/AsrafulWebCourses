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
                                coursesDt ?
                                    <>
                                        <div className="row mb-3">
                                            <div className="col-sm-8">
                                                <br />
                                                <h2>{coursesDt.title}</h2>
                                                <br />
                                                <h5>Instructor: {coursesDt.instructor}</h5>
                                                <br />
                                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                                            </div>
                                            <div className="col-sm-4">
                                                <br />
                                                <div class="card">
                                                    <div class="card-body">
                                                        <img src={coursesDt.thum} class="card-img-top mb-4 rounded" alt="..." />
                                                        <div className="card border" style={{ background: "#fff" }}>
                                                            <div className="card-body d-flex">
                                                                {
                                                                    coursesDt.premium ?
                                                                        <h4 className='text-danger ff-roboto col-7' style={{ marginBottom: "0" }}>{coursesDt.price}<strong >৳</strong></h4>
                                                                        :
                                                                        <h4 className='text-success col-7' style={{ marginBottom: "0" }}>Free<strong></strong></h4>
                                                                }
                                                                <Link to={'/enroll/' + coursesDt.url} className="btn btn-danger btn-sm col-5 px-4">Enroll Now</Link>
                                                            </div>
                                                        </div>
                                                        <div className="course-item-some-highlited-info d-flex pb-5">
                                                            <div className="col-4 text-center">
                                                                <h5>Duration</h5>
                                                                <h6>2 Hours</h6>
                                                            </div>
                                                            <div className="col-4 text-center">
                                                                <h5>Reting</h5>
                                                                <h6>4.1</h6>
                                                            </div>
                                                            <div className="col-4 text-center">
                                                                <h5>Enrolled</h5>
                                                                <h6>225 Students</h6>
                                                            </div>
                                                        </div>
                                                        <div className="course-item-hightlited-infos card" style={{ background: "#fff" }}>
                                                            <div className="card-body">
                                                                <div class="d-flex mb-2">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle mt-1 me-3 text-success" viewBox="0 0 16 16">
                                                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                                                    </svg>
                                                                    <span>Certificate After Completion</span>
                                                                </div>
                                                                <div class="d-flex mb-2">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle mt-1 me-3 text-success" viewBox="0 0 16 16">
                                                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                                                    </svg>
                                                                    <span>Lifetime Access</span>
                                                                </div>
                                                                <div class="d-flex mb-2">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle mt-1 me-3 text-success" viewBox="0 0 16 16">
                                                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                                                    </svg>
                                                                    <span>100 of video</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                        {
                                            courseErr ?
                                                <div className='courseOvErr text-center' style={{ paddingTop: "32vh" }} >
                                                    <br /><br />
                                                    <h4>Sorry we don't have any course in this url.</h4>
                                                    <br />
                                                    <a href='/courses' className="btn btn-sm btn-outline-success">Buy Course</a>
                                                </div>
                                                :
                                                <div className='courseOvErr text-center' style={{ paddingTop: "32vh" }}>
                                                    <br /><br />
                                                    <h4>Sorry we don't have any course in this url.</h4>
                                                    <br />
                                                    <a href='/courses' className="btn btn-sm btn-outline-success">Buy Course</a>
                                                </div>
                                        }
                                    </>
                            }
                        </>
                }
            </div>
        </section >
    );
};

export default CourseOverview;