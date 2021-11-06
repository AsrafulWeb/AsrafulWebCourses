import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import loader from './../../../logo/Spinner.gif'
import { useParams } from 'react-router-dom';

const CourseContent = () => {

    const [courseDt, setCourseDt] = useState({})

    const [videoData, setVideoData] = useState([])

    const [videoUrl, setVideoUrl] = useState('')
    const [videoTitle, setVideoTitle] = useState('')

    const [coursesCss, setCoursesCss] = useState('none')
    const [preloaderCss, setPreloaderCss] = useState('block')

    const [courseErr, setCourseErr] = useState(false)

    const { curl } = useParams()

    const userToken = sessionStorage.getItem("token")

    useEffect(() => {
        fetch(`https://boiling-caverns-66680.herokuapp.com/coursesdata?url=${curl}`)
            .then(result => result.json())
            .then(data => {
                setCourseDt(data)
                setCourseErr(false)
                fetch(`http://boiling-caverns-66680.herokuapp.com/coursesv?course=${curl}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${userToken}`
                    }
                })
                    .then(result => result.json())
                    .then(dt => {
                        console.log(dt)
                        const sortedDt = dt.sort((a, b) => {
                            return parseInt(a.nu) - parseInt(b.nu)
                        })
                        setVideoData(sortedDt)
                        setVideoUrl(dt[0].url)
                        setVideoTitle(dt[0].title)
                        setCoursesCss('block')
                        setPreloaderCss('none')
                    })
                    .catch(err => {
                        setPreloaderCss('none')
                        setCourseErr(true)
                    })
            })
            .catch(err => {
                setCourseErr(true)
            })
    }, [curl])

    return (
        <section className='html5Main coursesOutlineAndVideoPage'>
            <div className="container">
                <h2 style={{ padding: '10px 40px', marginBottom: '5px' }} className="text-light bg-danger">{courseDt.title}</h2>
                <div style={{ display: preloaderCss }} className='coursesLoader'>
                    <img className='coursesLoaderImg' src={loader} alt="" />
                    <br /><br /><br/><br/><br/><br/><br/>
                </div>
                <div style={{ display: coursesCss }} >
                    <div class="row">
                        <div class="col-3 videoTFR" id='accordionExample'>
                            <div class="nav flex-column nav-pills htmlCoursesMenu" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                {
                                    videoData.map(vd =>
                                        <Button style={{ textAlign: "left !important" }} className="secondary text-left courseVideoBtn" onClick={() => {
                                            setVideoUrl(vd.url)
                                            setVideoTitle(vd.title)
                                        }} data-toggle="pill" >{vd.title}</Button>
                                    )
                                }
                            </div>
                        </div>
                        <div class="col-9 videoCFR">
                            <div class="tab-content coursesVideoMain" id="v-pills-tabContent">
                                <h4 className="videoTitleMain">{videoTitle}</h4>
                                <iframe width="100%" height="464" src={videoUrl} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    courseErr ?
                        <div className='row'>
                            <div className="col-3"></div>
                            <div className="col-6 text-center courseContentError">
                                <br /><br /><br />
                                <h5 className='text-success'>Sorry this course content not uploaded in our server.</h5>
                                <br />
                                <a href='./../../contact' className="btn btn-info text-light">Contact We</a>
                            </div>
                            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                            <div className="col-3"></div>
                        </div> : ''
                }
                <br />
            </div>
        </section>
    );
};

export default CourseContent;