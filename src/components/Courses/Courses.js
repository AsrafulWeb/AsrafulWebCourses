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
                                    <a href={"/course/" + dt.url} class="card text-dark" style={{ width: "85%", cursor: "pointer" }}>
                                        <div class="card-body">
                                            <div className="courses-item-img-and-title mb-3">
                                                <img src={dt.thum} class="card-img-top mb-3" alt="..." />
                                                <h5 class="card-title ms-3 me-3">{dt.title}</h5>
                                            </div>
                                            <h6 className="text-danger ff-roboto"> <strong> ৳</strong> {dt.price}.00</h6>
                                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                            <p class="card-text"><small class="text-muted">Instructor: {dt.instructor}</small></p>
                                            <a href={"/course/" + dt.url} className="btn button-sm button-green-outline">
                                                <span>Enroll Now</span>
                                            </a>
                                        </div>
                                    </a>
                                </div>
                            )
                        }
                    </div>
                </div>
                {
                    home &&
                    <div className="d-flex justify-content-center mt-4 mb-5">
                        <a href="/courses">
                            <button className="button button-blue px-5">
                                <span>See More </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-short mb-1" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                            </button>
                        </a>
                    </div>
                }
            </div>
        </section>
    );
};

export default Courses;