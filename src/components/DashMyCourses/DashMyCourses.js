import React, { useEffect, useState } from 'react';
import { useAuth } from '../Login/useAuth';
import DashMyCourse from './DashMyCourse/DashMyCourse';

const DashMyCourses = () => {

    const [userCourses, setUserCourses] = useState([])
    const [coursesDt, setCoursesDt] = useState([])

    const { user } = useAuth()

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:3000/user_courses?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setUserCourses(data.course)
                    userCourses.map(dt => {
                        fetch(`http://localhost:3000/coursesdt`)
                            .then(res => res.json())
                            .then(data => {
                                const crDt = data.filter(dt => dt.url === userCourses[1])
                                setCoursesDt(crDt)
                            })
                        console.log(coursesDt)
                    })
                })
        } else { }
    })

    return (
        <div class="dashYourCourses container" id="dashYourCourses">
            <div className="row">
                {
                    coursesDt.map(cr =>
                        <DashMyCourse cr={cr} />
                    )
                }
            </div>
        </div>
    );
};

export default DashMyCourses;