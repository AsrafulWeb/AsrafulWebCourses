import React, { useEffect, useState } from 'react';
import { useAuth } from './../../Login/useAuth';
import DashMyCourse from './DashMyCourse/DashMyCourse';
import spinner from './../../../logo/Spinner.gif'

const DashMyCourses = () => {

    const [coursesDt, setCoursesDt] = useState([])
    const [coursesLoader, setCoursesLoader] = useState('block')
    const [userCoursesCss, setUserCoursesCss] = useState('none')
    const [dataErr, setDataErr] = useState(false)
    const [purchasedCourses, setPurchasedCourses] = useState(true)

    const { user, token } = useAuth()

    useEffect(() => {
        fetch(`https://boiling-caverns-66680.herokuapp.com/coursesdt`)
            .then(res => res.json())
            .then(result => {
                if (purchasedCourses) {
                    fetch(`https://boiling-caverns-66680.herokuapp.com/user_courses?email=${user.email}`)
                        .then(res => res.json())
                        .then(data => {
                            const dta = data.course
                            const dataMain = dta.map(dt => {
                                const cr = result.find(crDt => crDt.url === dt)
                                return (cr)
                            })
                            setCoursesDt(dataMain)
                            setUserCoursesCss('inline-block')
                            setCoursesLoader('none')
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
            {purchasedCourses ?
                <>
                    <div style={{ display: coursesLoader }} className="dashLoader">
                        <img src={spinner} alt="" />
                        <br /><br /><br /><br /><br /><br /><br/><br/>
                    </div>
                    <div style={{ display: userCoursesCss }}>
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
                </> :
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