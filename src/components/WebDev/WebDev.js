import React, { useState } from 'react';
import HtmlM from './../../HtmlCourses/index';
import WpM from './../../wpCourses/index';
import phc from './../../PhcCourses/index'
import Button from '@material-ui/core/Button';
import WebDevCoursesC from './WebDevCoursesC';
import { useAuth } from '../Login/useAuth';

const WebDev = () => {
    const [videoUrl, setVideoUrl] = useState('https://www.youtube-nocookie.com/embed/HdpXgfGVu_E?start=201')
    const [videoTitle, setVideoTitle] = useState('01. Introduction of HTML & Computer etc.')

    const auth = useAuth()

    return (
        <section className='html5Main coursesOutlineAndVideoPage'>
            <div className="container">
                {
                    auth.user ?
                        <>
                            <h2 style={{ padding: '10px 40px', marginBottom: '5px' }} className="text-light bg-danger">Complete Web Development Courses</h2>
                            <div class="row coursesOverviewPage">
                                <div class="col-3" id='accordionExampleFor'>
                                    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <div class="accordion" id="accordionExample">
                                            <div style={{ width: '100%' }} class="" id="headingHtml">
                                                <button style={{ width: '100%', boxShadow: 'none', marginBottom: '5px' }} class="btn btn-secondary text-left text-light moduleBtn" type="button" data-toggle="collapse" data-target="#collapseHtml" aria-expanded="false" aria-controls="collapseHtml">
                                                    <span>01. Html - 5 </span>
                                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                                                    </svg>
                                                </button>
                                            </div>

                                            <div id="collapseHtml" class="collapse" aria-labelledby="headingHtml" data-parent="#accordionExample">
                                                {
                                                    HtmlM.map(vd =>
                                                        <Button className="secondary text-left" onClick={() => {
                                                            setVideoUrl(vd.url)
                                                            setVideoTitle(vd.title)
                                                        }} data-toggle="pill" >{vd.title}</Button>
                                                    )
                                                }
                                            </div>
                                            <div class="" id="headingCss">
                                                <button style={{ width: '100%', boxShadow: 'none', marginBottom: '5px' }} class="btn btn-secondary text-left text-light moduleBtn" type="button" data-toggle="collapse" data-target="#collapseCss" aria-expanded="false" aria-controls="collapseCss">
                                                    <span>02. Css - 3 </span>
                                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div id="collapseCss" class="collapse" aria-labelledby="headingCss" data-parent="#accordionExample">
                                                Css
                                </div>
                                            <div class="" id="headingPhc">
                                                <button style={{ width: '100%', boxShadow: 'none', marginBottom: '5px' }} class="btn btn-secondary text-left text-light moduleBtn" type="button" data-toggle="collapse" data-target="#collapsePhc" aria-expanded="false" aria-controls="collapsePhc">
                                                    <span>03. practical website design Html and Css </span>
                                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div id="collapsePhc" class="collapse" aria-labelledby="headingPhc" data-parent="#accordionExample">
                                                {
                                                    phc.map(vd =>
                                                        <Button className="secondary text-left" onClick={() => {
                                                            setVideoUrl(vd.url)
                                                            setVideoTitle(vd.title)
                                                        }} data-toggle="pill" >{vd.title}</Button>
                                                    )
                                                }
                                            </div>
                                            <div class="" id="headingJs">
                                                <button style={{ width: '100%', boxShadow: 'none', marginBottom: '5px' }} class="btn btn-secondary text-left text-light moduleBtn" type="button" data-toggle="collapse" data-target="#collapseJs" aria-expanded="false" aria-controls="collapseJs">
                                                    <span>04. Javascript </span>
                                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div id="collapseJs" class="collapse" aria-labelledby="headingJs" data-parent="#accordionExample">Javascript</div>
                                            <div class="" id="headingTb">
                                                <button style={{ width: '100%', boxShadow: 'none', marginBottom: '5px' }} class="btn btn-secondary text-left text-light moduleBtn" type="button" data-toggle="collapse" data-target="#collapseTb" aria-expanded="false" aria-controls="collapseTb">
                                                    <span>05. Bootstrap </span>
                                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div id="collapseTb" class="collapse" aria-labelledby="headingTb" data-parent="#accordionExample">Twitter Bootstrap</div>
                                            <div class="" id="headingJq">
                                                <button style={{ width: '100%', boxShadow: 'none', marginBottom: '5px' }} class="btn btn-secondary text-left text-light moduleBtn" type="button" data-toggle="collapse" data-target="#collapseJq" aria-expanded="false" aria-controls="collapseJq">
                                                    <span>06. jQuery </span>
                                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div id="collapseJq" class="collapse" aria-labelledby="headingJq" data-parent="#accordionExample">jquery</div>
                                            <div class="" id="headingWp">
                                                <button style={{ width: '100%', boxShadow: 'none', marginBottom: '5px' }} class="btn btn-secondary text-left text-light moduleBtn" type="button" data-toggle="collapse" data-target="#collapseWp" aria-expanded="false" aria-controls="collapseWp">
                                                    <span>07. Wordpress </span>
                                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div id="collapseWp" class="collapse" aria-labelledby="headingWp" data-parent="#accordionExample">
                                                {
                                                    WpM.map(vd =>
                                                        <Button className="secondary text-left" onClick={() => {
                                                            setVideoUrl(vd.url)
                                                            setVideoTitle(vd.title)
                                                        }} data-toggle="pill" >{vd.title}</Button>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-9">
                                    {/* <div className="">
                                        <button style={{ marginRight: '628px' }} className="btn btn-info">
                                            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-arrow-left-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z" />
                                            </svg>
                                            <span> Prevues</span> 
                                            </button>
                                        <button className="btn btn-info">
                                            <span>Next </span> 
                                            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z" />
                                            </svg>
                                        </button>
                                    </div> */}
                                    <div class="tab-content coursesVideoMain" id="v-pills-tabContent">
                                        <h4 className="videoTitleMain">{videoTitle}</h4>
                                        <iframe width="100%" height="464" src={videoUrl} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                                    </div>
                                </div>
                            </div>
                            <WebDevCoursesC />
                            <br />
                        </> :
                        <WebDevCoursesC />
                }
            </div>
        </section>
    );
};

export default WebDev;