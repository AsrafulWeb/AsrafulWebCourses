import React, { useEffect, useState } from 'react';
import './header.css';
import logo from './../../../logo/AsrafulsCourseLogo.png';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Login/useAuth';
import axios from 'axios';

const Header = () => {

    const [coursesDt, setCoursesDt] = useState([])

    const { user } = useAuth()

    const path = window.location.pathname;

    // Get all courses data from DB
    useEffect(() => {
        axios("/coursesdt")
            .then(data => {
                setCoursesDt(data.data)
            })
    })

    // Menage Active menu item
    useEffect(() => {
        if (user) {
            if (path === '/dashboard') {

            }
        }
        if (path === '/') {
            document.querySelector("#navHome").classList.add("active");
        }
        if (path === '/about') {
            document.querySelector("#navAbout").classList.add("active");
        }
        if (path === '/courses') {
            document.querySelector("#navCourses").classList.add("active");
        }
        if (path.startsWith('/course')) {
            document.querySelector("#navCourses").classList.add("active");
        }
        if (path === '/contact') {
            document.querySelector("#navContact").classList.add("active");
        }
    }, [path, user])

    return (
        <header id="headerMainId" className='headerMain'>
            <div className="container">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/"><img style={{ width: '40px' }} src={logo} alt="AsrafulWeb Courses" /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
                                <li class="nav-item" id='navHome'>
                                    <a class="nav-link px-3" href="/">Home</a>
                                </li>
                                <li class="nav-item" id='navAbout'>
                                    <a class="nav-link px-3" href="/about">About</a>
                                </li>
                                <li class="nav-item dropdown" id='navCourses'>
                                    <div class="dropdown">
                                        <a class="nav-link px-3 dropdown-toggle" id="headerCoursesDropdown" href="/courses">Courses</a>
                                        {
                                            path === '/courses' ?
                                                <></>
                                                :
                                                <ul class="dropdown-menu header-dropdown-menu" aria-labelledby="headerCoursesDropdown">
                                                    {
                                                        coursesDt?.map(dt =>
                                                            <li><a class="dropdown-item" href={"/course/" + dt.url}>{dt.title}</a></li>
                                                        )
                                                    }
                                                </ul>
                                        }
                                    </div>

                                </li>
                                <li class="nav-item" id='navContact'>
                                    <a class="nav-link px-3" href="/contact">Contact</a>
                                </li>
                            </ul>
                            <form class="d-flex navRight">
                                <div className="d-flex">
                                    <input id='headerSearchInput' class="form-control mr-sm-2" type="Search" placeholder="Search our courses" aria-label="Search" />
                                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </div>
                                <div className="nav_dash_login_btn">
                                    {
                                        user ?
                                            <Link id='navDashboard' style={{ marginLeft: '30px' }} to="/dashboard" className="btn btn-info text-light btn-sm">Dashboard</Link> :
                                            <a href="/login" style={{ marginLeft: '30px' }} type="button" class="btn btn-danger btn-sm">Login & Sign Up</a>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;