import React, { useEffect, useState } from 'react';
import DashCourses from './DashCourses/DashCourses';
import spinner from './../../../logo/Spinner.gif'

const DashAllCourses = () => {

    const [coursesData, setCoursesData] = useState([])
    const [coursesLoader, setCoursesLoader] = useState('block')
    const [userCoursesCss, setUserCoursesCss] = useState('none')
    const [dataErr, setDataErr] = useState(false)

    useEffect(() => {
        fetch(`https://boiling-caverns-66680.herokuapp.com/coursesdt`)
            .then(result => result.json())
            .then(data => {
                setCoursesData(data)
                setCoursesLoader('none')
                setUserCoursesCss('block')
            })
            .catch(err => setDataErr(true))
    }, [])

    return (
        <div class="dashAllCourses container" id="allCourses" role="tabpanel" aria-labelledby="allCourses-tab">
            <div style={{ display: coursesLoader }} className="dashLoader mb-5">
                <img src={spinner} alt="" />
                <br/><br/><br/>
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
                                coursesData.map(cr =>
                                    <DashCourses cr={cr} />
                                )
                            }
                        </>
                    }
                </div>
            </div>
            <br />
        </div>
    );
};

export default DashAllCourses;