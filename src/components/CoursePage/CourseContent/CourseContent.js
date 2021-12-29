import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CourseContent = () => {

    const [courseDt, setCourseDt] = useState(null)
    const [preloader, setPreloader] = useState(true)
    const [courseErr, setCourseErr] = useState(false)

    const [videoData, setVideoData] = useState([])

    const [activeItem, setActiveItem] = useState(null)

    const { curl } = useParams()

    const userToken = sessionStorage.getItem("token")

    // Get course data from db
    useEffect(() => {
        axios(`/coursesdata?url=${curl}`)
            .then(data => {
                console.log(data.data)
                setCourseDt(data.data)
                setCourseErr(false)
                axios(`/coursesv?course=${curl}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${userToken}`
                    }
                })
                    .then(dt => {
                        console.log(dt.data)
                        const contentDt = dt.data
                        const sortedDt = contentDt.sort((a, b) => {
                            return a.nu - b.nu
                        })
                        setVideoData(sortedDt)
                        setActiveItem(contentDt[0])
                        setPreloader(false)
                    })
                    .catch(err => {
                        setPreloader(false)
                        setCourseErr(true)
                    })
            })
            .catch(err => {
                setPreloader(false)
                setCourseErr(true)
                console.log(err)
            })
    }, [curl, userToken])

    // Set selcted item data in satae
    const changeContent = (id) => {
        const changedData = videoData.find(dt => id === dt.id)
        setActiveItem(changedData)
    }

    // Handle previous item show
    const goPrevious = () => {
        setActiveItem(videoData[parseInt(activeItem.nu) - 2])
    }

    // Handle next item show
    const goNext = () => {
        setActiveItem(videoData[parseInt(activeItem.nu)])
    }

    useEffect(() => {
        if (!preloader) {
            if (parseInt(activeItem?.nu) === 1) {
                document.querySelector(".previous-btn").disabled = true;
            } else {
                document.querySelector(".previous-btn").disabled = false;
            } if (videoData.length === parseInt(activeItem?.nu)) {
                document.querySelector(".next-btn").disabled = true;
            } else {
                document.querySelector(".next-btn").disabled = false;
            }
        }
    }, [preloader, videoData, activeItem])


    console.log(activeItem)
    console.log(videoData)


    return (
        <section className='html5Main coursesOutlineAndVideoPage'>
            <div className="container">
                <h2 style={{ padding: '10px 40px', marginBottom: '5px' }} className="text-light bg-danger">{courseDt?.title}</h2>
                {
                    preloader ?
                        <div className='coursesLoader'>

                        </div>
                        :
                        <div>
                            <div class="row">
                                <div class="col-9 videoCFR">
                                    <div class="tab-content coursesVideoMain" id="v-pills-tabContent">
                                        <h4 className="videoTitleMain">{activeItem?.title}</h4>
                                        <iframe title={activeItem?.title} width="100%" height="464" src={activeItem?.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                                        <div class="d-flex justify-content-between bd-highlight content-change-btn mb-3">
                                            <div class="p-2 bd-highlight">
                                                <button className="btn btn-warning px-4 previous-btn" onClick={goPrevious}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="me-3 bi bi-arrow-left" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                                    </svg>
                                                    <span>Previous</span>
                                                </button>
                                            </div>
                                            <div class="p-2 bd-highlight">
                                                <button className="btn btn-primary px-4 me-auto"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle me-2" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                                </svg>
                                                    <span>Mark As Complete</span>
                                                </button>
                                            </div>
                                            <div class="p-2 bd-highlight">
                                                <button className="btn btn-warning px-4 me-auto next-btn" onClick={goNext} >
                                                    <span>Next</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ms-3 bi bi-arrow-right" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-3 videoTFR" id='accordionExample'>
                                    <div class="nav flex-column nav-pills htmlCoursesMenu" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        {
                                            videoData.map(vd =>
                                                <Button style={{ textAlign: "left !important" }} className={vd?.id === activeItem?.id ? "activeCourseContent secondary text-left courseVideoBtn" : "secondary text-left courseVideoBtn"} onClick={() => {
                                                    changeContent(vd?.id)
                                                }} data-toggle="pill" >{vd?.title}</Button>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                }
                {
                    courseErr ?
                        <div className='row'>
                            <div className="col-3"></div>
                            <div className="col-6 text-center courseContentError">
                                <br /><br /><br />
                                <h5 className='text-success'>Sorry this course content not uploaded in our server.</h5>
                                <br />
                                <a href='/contact' className="btn btn-info text-light">Contact We</a>
                            </div>
                            <div className="col-3"></div>
                        </div> : ''
                }
                <br />
            </div>
        </section>
    );
};

export default CourseContent;