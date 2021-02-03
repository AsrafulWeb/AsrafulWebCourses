import React, { useEffect, useState } from 'react';
import DashCourses from './DashCourses/DashCourses';

const DashAllCourses = () => {

    const [coursesData, setCoursesData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/coursesdt`)
            .then(result => result.json())
            .then(data => {
                setCoursesData(data)
            })
    }, [])

    return (
        <div class="dashAllCourses container" id="allCourses" role="tabpanel" aria-labelledby="allCourses-tab">
            <div className="row">
                {
                    coursesData.map(cr =>
                        <DashCourses cr={cr} />
                    )
                }
            </div>
            <br />
        </div>
    );
};

export default DashAllCourses;