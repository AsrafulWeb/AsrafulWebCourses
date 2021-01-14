import React from 'react';
import './HomeCoursesOutline.css';
import courseImgHtml from './../../banner/html_5_courses.jpg';
import courseImgCss from './../../banner/css_3_courses.jpg';
import courseImgJs from './../../banner/js_courses.jpg';
import courseImgWebDes from './../../banner/cWebDes.jpg';
import courseImgWp from './../../banner/cWp.jpg';
import courseImgWebDev from './../../banner/cWebDev.jpg';

const HomeCoursesOutline = () => {
    return (
        <section className='HomeCoursesOutlineMain'>
            <div className="container">
                <br />
                <br />
                <br />
                <h1 className="text-center">Our Courses</h1>
                <br /><br />
                <div class="card-deck">
                    <div class="card">
                        <img src={courseImgWebDes} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Web Design & Wordpress Customization Courses</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <a href="/courses/webdevandwpcourses" className="btn btn-danger">Larne More</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src={courseImgWp} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Full Wordpress Courses</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <a href="/courses/wpcourses" className="btn btn-danger">Larne More</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src={courseImgWebDev} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Complete Web Development Courses</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <a href="/courses/webdevcourses" className="btn btn-danger">Larne More</a>
                        </div>
                    </div>
                </div>
                <div class="card-deck">
                    <div class="card">
                        <img src={courseImgHtml} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Full HTML 5 Courses</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <a href="/courses/webdevandwpcourses" className="btn btn-danger">Larne More</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src={courseImgCss} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Full CSS 3 Courses</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <a href="/courses/webdevandwpcourses" className="btn btn-danger">Larne More</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src={courseImgJs} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Full Javascript Courses</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <a href="/courses/webdevandwpcourses" className="btn btn-danger">Larne More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeCoursesOutline;