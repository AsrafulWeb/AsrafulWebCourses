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

    const [coursesErr, setCoursesErr] = useState(false)

    const { curl } = useParams()


    useEffect(() => {
        fetch(`http://localhost:3000/coursesdata?url=${curl}`)
            .then(result => result.json())
            .then(data => {
                setCourseDt(data)
                if (coursesErr === '') {
                    setCoursesErr('true')
                }
                console.log(coursesErr)
                // console.log(coursesCss)
                // console.log(preloaderCss)
            })
            .catch(err => {
            })
    }, [])

    useEffect(() => {
        // if (coursesErr) {
        //     alert('You have a error.')
        // }
        // else {
        fetch(`http://localhost:3000/coursesv?course=${curl}`)
            .then(result => result.json())
            .then(data => {
                const sortedDt = data.sort((a, b) => {
                    return parseInt(a.nu) - parseInt(b.nu)
                })
                setVideoData(sortedDt)
                setVideoUrl(data[0].url)
                setVideoTitle(data[0].title)
                setCoursesCss('block')
                setPreloaderCss('none')
            })
            .catch(err => {
                console.log(courseDt)
                setCoursesErr('true')
                console.log(coursesErr)
            })
        // }
    }, [])

    return (
        <section className='html5Main coursesOutlineAndVideoPage'>
            <div className="container">
                <h2 style={{ padding: '10px 40px', marginBottom: '5px' }} className="text-light bg-danger">{courseDt.title}</h2>
                <div style={{ display: preloaderCss }} className='coursesLoader'>
                    <img className='coursesLoaderImg' src={loader} alt="" />
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
                <br />
            </div>
        </section>
    );
};

export default CourseContent;