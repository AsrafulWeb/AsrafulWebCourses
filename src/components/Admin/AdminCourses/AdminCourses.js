import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminCourses.css'
import AdminCoursesItemView from './AdminCoursesItemView/AdminCoursesItemView';

const AdminCourses = () => {

    const [coursesItemsData, setCoursesItemsData] = useState(null)
    const [loading, setLoading] = useState(true)

    const userToken = sessionStorage.getItem("token")

    useEffect(() => {
        setLoading(true)
        axios.get('/coursesdt')
            .then(res => {
                setCoursesItemsData(res.data)
                axios(`/coursesv?course=${res.data.url}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${userToken}`
                    }
                })
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)

            })
    }, [])

    return (
        <div className='adminCourses'>
            <div className="d-flex">
                <h3 className='mb-3'>Courses</h3>
                <div className='ms-auto'>
                    <Link className="btn btn-sm btn-success px-4 me-5" to="/admin/courses/add-item">Add A Course</Link>
                </div>
            </div>
            {
                loading ?
                    <div className="text-center" >
                        <div class="spinner-grow text-secondary" role="status" style={{ margin: "35vh 0" }}>
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    <div className="row adminCoursesItems">
                        {
                            coursesItemsData?.map(item =>
                                <div className="col-sm-3 admin-courses-item">
                                    <div className="card admin-courses-item-card" data-bs-toggle="modal" data-bs-target={"#adminCoursesItem" + item?.url}>
                                        <div className="card-body">
                                            <img src={item?.thum} alt="" className="img-fluid mb-3 rounded" />
                                            <h3>{item?.title}</h3>
                                            <p><strong>URL: </strong> {item?.url}</p>
                                        </div>
                                    </div>
                                    <div class="modal fade" id={"adminCoursesItem" + item?.url} tabindex="-1" data-bs-backdrop="static" aria-labelledby="adminCoursesItem" aria-hidden="true">
                                        <div class="modal-dialog modal-xl modal-dialog-centered">
                                            <AdminCoursesItemView item={item} />
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <Link to="/admin/courses/add-item" className="col-sm-3 admin-courses-item my-5">
                            <div className="card admin-courses-item-card admin-course-item-add-btn">
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus-circle text-dark" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </div>
            }
        </div>
    );
};

export default AdminCourses;