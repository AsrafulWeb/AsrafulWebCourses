import React, { useEffect, useState } from 'react';
import './header.css';
import logo from './../../../logo/AsrafulsCourseLogo.png';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Login/useAuth';
import axios from 'axios';
import maleAvatar from './../../../logo/male_avater.png'

const Header = () => {

    const [coursesDt, setCoursesDt] = useState([])

    const { user, signOut } = useAuth()

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
                            <div class="d-flex navRight">
                                <form className="d-flex nav-right-search-form input-group">
                                    <input type="text" class="form-control ps-4" placeholder="Search Course" aria-label="Search" aria-describedby="button-addon2" />
                                    <button class="btn btn-outline-secondary" type="button" id="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-search mb-1" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                    </button>
                                </form>
                                <ul className="navbar-nav nav_dash_login_btn nvabar-nav" style={{ marginLeft: '30px' }}>
                                    <li className="nav-item">
                                        {
                                            user ?
                                                <div class="dropdown">
                                                    <Link class="" role="button" id="headerAccountSection" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <img className='' src={user?.photo?.length > 2 ? user.photo : maleAvatar} alt="User Profile" style={{width: "33px", height: "33px"}} />
                                                    </Link>
                                                    <ul class="dropdown-menu" aria-labelledby="headerAccountSection">
                                                        <li><Link class="dropdown-item" to="/admin">Admin</Link></li>
                                                        <li><Link class="dropdown-item" to="/dashboard/account">My Account</Link></li>
                                                        <li><Link class="dropdown-item" to="/dashboard/courses">My Courses</Link></li>
                                                        <li><Link class="dropdown-item" onClick={signOut}>Log Out</Link></li>
                                                    </ul>
                                                </div>
                                                :
                                                <a href="/login" type="button" class="btn btn-danger btn-sm" style={{width: "150px"}}>Login & Sign Up</a>
                                        }
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;