import React, { useState } from 'react';
import videoData from './../../wpCourses/index';
import Button from '@material-ui/core/Button';

const Wp = () => {
    const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/embed/AbWLcQZzaTk')
    const [videoTitle, setVideoTitle] = useState('01. Introduction of Wordpress & Full Courses')


    return (
        <section className='html5Main coursesOutlineAndVideoPage'>
            <div className="container">
                <h2 style={{ padding: '10px 40px', marginBottom: '5px' }} className="text-light bg-danger">A-Z Wordpress Courses</h2>
                <div class="row">
                    <div class="col-3" id='accordionExample'>
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            {
                                videoData.map(vd =>
                                    <Button className="secondary text-left" onClick={() => {
                                        setVideoUrl(vd.url)
                                        setVideoTitle(vd.title)
                                    }} data-toggle="pill" >{vd.title}</Button>
                                )
                            }
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
                <br />
            </div>
        </section>
    );
};

export default Wp;