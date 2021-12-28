import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';
import loader from './../../logo/Spinner.gif'
import './EnrollPage.css'

const EnrollPage = () => {

    const { user, token } = useAuth()

    const { eurl } = useParams()

    const [coursesDt, setCoursesDt] = useState({})

    const [courseErr, setCourseErr] = useState(false)

    const [useUrl, setUseUrl] = useState(false)

    const [coursesCss, setCoursesCss] = useState('none')
    const [preloaderCss, setPreloaderCss] = useState('block')

    const [inputAc, setInputAc] = useState('')
    const [inputId, setInputId] = useState('')
    const [inputAm, setInputAm] = useState(null)


    const [enrolInfoErr, setEnrollInfoErr] = useState(false)

    const [usersCourses, setUsersCourses] = useState([])

    useEffect(() => {
        if (user) {
            setUseUrl(false)
            courseAccessCheck()
            enrollDataFetch()
        } else {
            setUseUrl(true)
        }
    }, [])

    const courseAccessCheck = () => {

    }

    const enrollDataFetch = () => {
        fetch(`https://boiling-caverns-66680.herokuapp.com/coursesData?url=${eurl}`)
            .then(res => res.json())
            .then(data => {
                setCoursesDt(data)
                setCoursesCss('block')
                setPreloaderCss('none')
            })
            .catch(err => {
                setCourseErr(true)
                setCoursesCss('none')
                setPreloaderCss('none')
            })
    }

    const enrollSubmit = () => {
        if (inputAc === '01234729568' && inputId === '1293938ABCD12' && inputAm === coursesDt.price || coursesDt.premium === false) {
            console.log("Ok")
            fetch(`https://boiling-caverns-66680.herokuapp.com/user_courses?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    data.course.push(eurl)
                    fetch(`https://boiling-caverns-66680.herokuapp.com/user_courses_update?id=${data._id}`, {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            courses: data.course
                        })
                    })
                        .then(res => {
                            window.history.back()
                        })
                })
                .catch(err => {
                    fetch('https://boiling-caverns-66680.herokuapp.com/usersCourseAdd', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            name: user.name,
                            email: user.email,
                            courses: [
                                eurl
                            ]
                        })
                    })
                        .then(res => {
                            window.history.back()
                        })
                })
        } else {
            setEnrollInfoErr(true)
        }
    }

    const enrollSubmitForFree = () => {
        enrollSubmit()
    }

    const enrollSubmitForPremium = (e) => {
        enrollSubmit()
        e.preventDefault()
        e.target.reset()
    }

    return (
        <div className="enrollMain">
            {
                useUrl ?
                    <div className='container'>
                        <div className="text-center">
                            <br /><br /><br />
                            <h3 className="text-danger">Please don't use url for enroll courses</h3>
                            <br />
                            <a href="/courses" className="btn btn-outline-dark">Buy Course</a>
                        </div>
                    </div>
                    :
                    <div className="container">
                        <strong><h2 className='text-light bg-info' style={{ padding: '10px 40px', marginBottom: '5px' }}>Enroll {coursesDt.title}</h2></strong>
                        <div style={{ display: preloaderCss }} className='coursesLoader'>
                            <img className='coursesLoaderImg' src={loader} alt="" />
                            <br /><br />
                        </div>
                        <br />
                        {
                            enrolInfoErr ?
                                <div className="alert alert-danger">
                                    <span>You Are Submitted Bad Info</span>
                                </div>
                                :
                                ""
                        }
                        <br />
                        <div style={{ display: coursesCss }}>
                            <div class="dashCart" id="dashCart">
                                <div style={{ display: 'inline-block' }} className="col-3 enrollCourseDetails">
                                    <div class="card">
                                        <img src={coursesDt.thum} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h4 class="card-title">{coursesDt.title}</h4>
                                            <h6 class="card-text">{coursesDt.smallDes}</h6>
                                            {
                                                coursesDt.premium ?
                                                    <h3 className='text-danger ff-roboto'>Price: {coursesDt.price} ৳</h3>
                                                    :
                                                    <h3 className='text-success'>Free<strong></strong></h3>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1"></div>
                                {
                                    coursesDt.premium ?
                                        <form onSubmit={enrollSubmitForPremium} style={{ display: 'inline-block' }} className="col-4 enrollCourseDetails">
                                            <h4>Give Your Payment Info.</h4>
                                            <div class="mb-3">
                                                <label for="payAc" class="form-label">Account Number <span className="text-danger">*</span></label>
                                                <input onChange={(e) => setInputAc(e.target.value)} type="number" class="form-control" id="payAc" placeholder="" required />
                                            </div>
                                            <div class="mb-3">
                                                <label for="payId" class="form-label">Trans ID <span className="text-danger">*</span></label>
                                                <input onChange={(e) => setInputId(e.target.value)} type="text" class="form-control" id="payId" placeholder="" required />
                                            </div>
                                            <div class="mb-3">
                                                <label for="payAm" class="form-label">Payment Amount <span className="text-danger">*</span></label>
                                                <input onChange={(e) => setInputAm(e.target.value)} type="number" class="form-control" id="payAm" placeholder="" required />
                                            </div>
                                            <input value='Confirm' type='submit' className="btn btn-outline-danger" />
                                        </form>
                                        :
                                        <div className="col-7 enrollCourseDetails text-center">
                                            <br /><br /><br />
                                            <button onClick={enrollSubmitForFree} className="btn btn-outline-success btn-lg">Enroll The Course</button>
                                            <br /><br /><br />
                                        </div>
                                }
                                <div className="col-1"></div>
                                {
                                    coursesDt.premium ?
                                        <div className="col-3">
                                            <div style={{ display: 'inline-block' }} className="card cartPaymentInfo">
                                                <div className="card-body">
                                                    <div className="cartCheckoutBtnAndEtc">
                                                        <h6>Your payment amount: <strong className="text-danger ff-roboto"> {coursesDt.price} ৳</strong></h6>
                                                        <h5><span>Payment option:</span>
                                                            <select className='btn btn-info btn-sm' name="choose" id="paymentOptionList">
                                                                <option value="">Choose</option>
                                                                <option value="">bKash</option>
                                                                <option value="">Nagad</option>
                                                                <option value="">Roket</option>
                                                            </select>
                                                        </h5>
                                                    </div>
                                                    {/* <div className="alert alert-dark">নিচের কোনো নাম্বারে আপনার <b>200</b> টাকা Send Money করে পাঠিয়ে Checkout করুন।</div>
                                    <h5 className=""><strong>bKash: </strong>01631820368</h5>
                                    <h5 className=""><strong>Roket: </strong>016318203680</h5> */}
                                                    <br />
                                                    <div className="alert alert-secondary">বর্তমানে আমাদের সকল কোর্স ফ্রী তাই নিচের ইনফর্মেশন অনুযায়ী Checkout ফর্মটি পুরন করে Confirm করুন।</div>
                                                    <div style={{ paddingLeft: '8px', paddingRight: '0' }} className="alert alert-dark">
                                                        <span className=""><b>Account number:</b> 01234729568</span><br />
                                                        <span className=""><b>Trans ID:</b> 1293938ABCD12</span><br />
                                                        <span className=""><b>Amount:</b> {coursesDt.price}</span><br />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        ""
                                }
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default EnrollPage;