import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';
import CourseContent from './CourseContent/CourseContent';
import CourseOverview from './CourseOverview/CourseOverview';

const CoursePage = () => {

    const [userCourses, setUserCourses] = useState([])
    const [courseAccess, setCourseAccess] = useState(false)


    const { curl } = useParams()

    const { user } = useAuth()

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:3000/user_courses?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setUserCourses(data.course)
                    userCourses.map(dt => {
                        if (dt === curl) {
                            setCourseAccess(true)
                        }
                    })
                })
        } else { }
    })

    return (
        <div>
            {
                user ?
                    <>
                        {
                            courseAccess ?
                                <>
                                    <CourseContent />
                                </>
                                :
                                <>
                                    <CourseOverview />
                                    <br />
                                </>
                        }
                    </>
                    :
                    <>
                        <CourseOverview />
                        <br />
                    </>
            }
        </div>
    );
};

export default CoursePage;