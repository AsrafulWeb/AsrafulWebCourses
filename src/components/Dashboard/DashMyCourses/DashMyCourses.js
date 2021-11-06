import React, { useEffect, useState } from 'react';
import { useAuth } from './../../Login/useAuth';
import DashMyCourse from './DashMyCourse/DashMyCourse';
import axios from 'axios';

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
                        })
                        .catch(err => {
                            setPurchasedCourses(false)
                        })
                }
            })
            .catch(err => {
                setDataErr(true)
            })
    }, [])

    return (
        <div class="dashYourCourses container" id="dashYourCourses">
            {
                purchasedCourses ?
                    <>
                        {
                            coursesLoader ?
                                <div className="dashLoader d-flex justify-content-center mt-5">
                                    <div class="spinner-border" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                                :
                                <div>
                                    <div className="row">
                                        {
                                            <>
                                                {dataErr ?
                                                    <div className="dashCoursesErr">
                                                        <br /><br />
                                                        <p>We get a error.</p>
                                                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                                                    </div> :
                                                    coursesDt.map(cr =>
                                                        <DashMyCourse cr={cr} />
                                                    )
                                                }
                                            </>
                                        }
                                    </div>
                                </div>
                        }
                    </>
                    :
                    <div className='dontHaveCourse'>
                        <br /><br />
                        <p>You Don't Have Any Course.</p>
                        <br />
                        <a href="./../../../courses" className="btn btn-success">Buy Now</a>
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    </div>
            }
        </div>
    );
};

export default DashMyCourses;