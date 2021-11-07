import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Courses.css';

const Courses = ({ ok, home }) => {

    const [coursesDt, setCoursesDt] = useState([])

    useEffect(() => {
        axios("/coursesdt")
            .then(data => {
                if (home) {
                    setCoursesDt(data.data.slice(0, 6))
                } else {
                    setCoursesDt(data.data)
                }
                ok(true)
            })
    })

    return (
        <section className='CoursesMain pt-5'>
            <div className="container mt-5">
                <h1 className="text-center mb-5 mt-4">Our Courses</h1>
                <div className="card-deck">
                    <div class="row">
                        {
                            coursesDt.map(dt =>
                                <div class="col-sm-4">
                                    <div class="card">
                                        <img src={dt.thum} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{dt.title}</h5>
                                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                            <p class="card-text"><small class="text-muted">Instructor: {dt.instructor}</small></p>
                                            <a href={"/course/" + dt.url} className="btn btn-info btn-sm px-4">Enroll</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                {
                    home &&
                    <div className="d-flex justify-content-center mt-4 mb-5">
                        <a href="/courses">
                            <button className="btn btn-primary px-5">See More</button>
                        </a>
                    </div>
                }
            </div>
        </section>
    );
};

export default Courses;