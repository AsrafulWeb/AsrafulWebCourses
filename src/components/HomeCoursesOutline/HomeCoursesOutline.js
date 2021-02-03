import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeCoursesOutline.css';

const HomeCoursesOutline = () => {

    const [coursesDt, setCoursesDt] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/coursesdt')
            .then(res => res.json())
            .then(data => setCoursesDt(data))
    })

    return (
        <section className='HomeCoursesOutlineMain'>
            <div className="container">
                <br />
                <br />
                <br />
                <h1 className="text-center">Our Courses</h1>
                <br /><br />
                <div class="card-deck">
                    <div class="row">
                        {
                            coursesDt.map(dt =>
                                <div class="col-sm-4">
                                    <div class="card">
                                        <img src={dt.thum} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{dt.title}</h5>
                                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                            <p class="card-text"><small class="text-muted">Last updated 1 day ago</small></p>
                                            <Link to={"/course/" + dt.url} className="btn btn-danger">Larne More</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeCoursesOutline;