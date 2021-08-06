import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';
import CourseContent from './CourseContent/CourseContent';
import CourseOverview from './CourseOverview/CourseOverview';
import './CoursesPage.css'

const CoursePage = () => {

    const [courseAccess, setCourseAccess] = useState(false)


    const { curl } = useParams()

    const { user, token } = useAuth()

    useEffect(() => {
        if (user) {
            fetch(`https://boiling-caverns-66680.herokuapp.com/user_courses?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    data.course.map(dt => {
                        if (dt === curl) {
                            setCourseAccess(true)
                        }
                    })
                })
        } else { }
    })

    return (
        <div className="coursesPageMain">
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