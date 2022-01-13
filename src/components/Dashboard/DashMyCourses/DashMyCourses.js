import React, { useEffect, useState } from 'react';
import { useAuth } from './../../Login/useAuth';
import axios from 'axios';
import './DashMyCourses.css'

const DashMyCourses = () => {

    const [coursesDt, setCoursesDt] = useState([])
    const [coursesLoader, setCoursesLoader] = useState(true)
    const [dataErr, setDataErr] = useState(false)
    const [purchasedCourses, setPurchasedCourses] = useState(true)

    const { user } = useAuth()

    useEffect(() => {
        axios('/coursesdt')
            .then(result => {
                if (purchasedCourses) {
                    axios(`/user_courses?email=${user.email}`)
                        .then(data => {
                            const dta = data.data.course
                            const dataMain = dta.map(dt => {
                                const cr = result.data.find(crDt => crDt.url === dt)
                                return (cr)
                            })
                            setCoursesDt(dataMain)
                            setCoursesLoader(false)
                            setDataErr(false)
                        })
                        .catch(err => {
                            setCoursesLoader(false)
                            setPurchasedCourses(false)
                            setDataErr(false)
                        })
                }
            })
            .catch(err => {
                setCoursesLoader(false)
                setDataErr(true)
            })
    }, [purchasedCourses, user])

    console.log(coursesDt)
    console.log(dataErr)
    console.log(purchasedCourses)

    return (
        <div class="dashYourCourses" id="dashYourCourses">
            <div className="container">
                {
                    purchasedCourses ?
                        <>
                            {
                                coursesLoader ?
                                    <div className="dashLoader d-flex justify-content-center" style={{ paddingTop: "45vh" }}>
                                        <div class="spinner-border" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <div className="text-center my-5">
                                            <h2>Courses dashboard</h2>
                                        </div>
                                        <div className="container pt-5">
                                            {
                                                <>
                                                    <div className="yourCoursesItemsHeader mb-5 d-flex">
                                                        <h4 className='me-auto'>Your Courses</h4>
                                                        <form class="row g-2">
                                                            <div class="col-auto">
                                                                <input type="text" class="form-control rounded-pill" id="coursesSearchInput" placeholder="Course Name" />
                                                            </div>
                                                            <div class="col-auto">
                                                                <button type="submit" class="btn btn-primary rounded-pill">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search mb-1" viewBox="0 0 16 16">
                                                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    {
                                                        dataErr ?
                                                            <div className="dashCoursesErr text-center" style={{ paddingTop: "30vh" }}>
                                                                <p>We get a error.</p>
                                                            </div>
                                                            :
                                                            coursesDt.map(cr =>
                                                                <div class="card dashCourseItem">
                                                                    <div class="card-body d-flex">
                                                                        <div className='dashCourseItemDetails col-sm-2'>
                                                                            <img src={cr?.thum} class="card-img-top" alt="..." />
                                                                        </div>
                                                                        <div className="dashCourseItembProgress col-sm-10 ps-3">
                                                                            <div className="p-2 border rounded h-100">
                                                                                <h5 class="card-title pb-1 pt-2">{cr?.title}</h5>
                                                                                <div class="progress mb-3">
                                                                                    <div class="progress-bar" role="progressbar" style={{ width: "22%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">22% COMPLETE</div>
                                                                                </div>
                                                                                <a href={"/course/" + cr?.url} className="btn btn-outline-primary px-3 btn-sm">
                                                                                    <span>Continue course</span>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short ms-2" viewBox="0 0 16 16">
                                                                                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                                                                    </svg>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                    }
                                                </>
                                            }
                                        </div>
                                    </div>
                            }
                        </>
                        :
                        <div className='dontHaveCourse text-center mt-5'>
                            <p>You Don't Have Any Course.</p>
                            <br />
                            <a href="/courses" className="btn btn-success">Buy Now</a>
                        </div>
                }
            </div>
        </div>
    );
};

export default DashMyCourses;