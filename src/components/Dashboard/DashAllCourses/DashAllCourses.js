import React, { useEffect, useState } from 'react';
import DashCourses from './DashCourses/DashCourses';
import axios from 'axios';

const DashAllCourses = () => {

    const [coursesData, setCoursesData] = useState([])
    const [coursesLoader, setCoursesLoader] = useState(true)
    const [dataErr, setDataErr] = useState(false)

    useEffect(() => {
        axios('/coursesdt')
            .then(data => {
                setCoursesData(data.data)
                setCoursesLoader(false)
            })
            .catch(err => {
                setDataErr(true)
            })
    }, [])

    return (
        <div class="dashAllCourses container" id="allCourses" role="tabpanel" aria-labelledby="allCourses-tab">
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
                                    {
                                        dataErr ?
                                            <div className="dashCoursesErr">
                                                <br /><br />
                                                <p>We get a error.</p>
                                                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                                            </div> :
                                            coursesData?.map(cr =>
                                                <DashCourses cr={cr} />
                                            )
                                    }
                                </>
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default DashAllCourses;