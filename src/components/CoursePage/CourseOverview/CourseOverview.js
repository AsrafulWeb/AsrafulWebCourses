import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import spinner from './../../../logo/Spinner2.gif'

const CourseOverview = () => {

    const [coursesDt, setCoursesDt] = useState({})
    const [loader, setLoader] = useState(true)
    const [courseErr, setCourseErr] = useState(false)

    const { curl } = useParams()

    useEffect(() => {
        fetch(`https://boiling-caverns-66680.herokuapp.com/coursesData?url=${curl}`)
            .then(res => res.json())
            .then(data => {
                setCoursesDt(data)
                setCourseErr(false)
                setLoader(false)
            })
            .catch(err => {
                setCoursesDt({})
                setCourseErr(true)
                setLoader(false)
            })
    }, [coursesDt])

    return (
        <section className='coursesOverview'>
            <div className="container">
                {
                    loader ?
                        <div className="courseLoader">
                            <div className="text-center">
                                <img src={spinner} alt="" className=""/>
                                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            </div>
                        </div>
                        :
                        <>
                            {
                                courseErr ?
                                    <div className='courseOvErr'>
                                        <br /><br />
                                        <h3>Sorry we don't have any course in this url.</h3>
                                        <br />
                                        <a href='./../../../courses' className="btn btn-outline-success">Buy Course</a>
                                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                                    </div>
                                    :
                                    <div className="row mb-3">
                                        <div className="col-sm-9">
                                            <br />
                                            <h2>{coursesDt.title}</h2>
                                            <br />
                                            <br />
                                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                                        </div>
                                        <div className="col-sm-3">
                                            <br />
                                            <div class="card">
                                                <img src={coursesDt.thum} class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h5 class="card-title">{coursesDt.title}</h5>
                                                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                                    {
                                                        coursesDt.premium ?
                                                            <h3 className='text-danger'>Price: {coursesDt.price}<strong></strong></h3>
                                                            :
                                                            <h3 className='text-success'>Free<strong></strong></h3>
                                                    }
                                                    <Link to={'./../../enroll/' + coursesDt.url} className="btn btn-danger">Enroll Now</Link>
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