import React, { useEffect, useState } from 'react';
import './header.css';
import logo from './../../logo/AsrafulsCourseLogo.png';
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';

const Header = () => {
    const auth = useAuth()
    console.log(auth.user)

    const { user } = auth

    useEffect(() => {
        const path = window.location.pathname;
        if (user) {
            if (path === '/dashboard') {
                document.querySelector("#inputRight").style.display = 'none'
            }
        }
        if (path === '/') {
            document.querySelector("#navHome").classList.add("active");
        }
        if (path === '/about') {
            document.querySelector("#navAbout").classList.add("active");
        }
        if (path === '/Courses') {
            document.querySelector("#navCourses").classList.add("active");
        }
        if (path === '/contact') {
            document.querySelector("#navContact").classList.add("active");
        }
    })
    return (
        <header className='headerMain'>
            <div className="container">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a title='AsrafulWeb Courses' class="navbar-brand" href="./../../../../"><img style={{ width: '40px' }} src={logo} alt="AsrafulWeb Courses" /></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto" id='headerMenu'>
                            <li class="nav-item" id='navHome'>
                                <a class="nav-link" href="./../../../../">Home<span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item" id='navAbout'>
                                <a class="nav-link" href="/about">About</a>
                            </li>
                            <li class="nav-item dropdown" id='navCourses'>
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Course</a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="/courses/htmlcourses">Full HTML-5 Courses</a>
                                    <a class="dropdown-item" href="/courses/csscourses">Full CSS-3 Courses</a>
                                    <a class="dropdown-item" href="/courses/jscourses">Full Javascript Courses</a>
                                    <a class="dropdown-item" href="/courses/webdevandwpcourses">Web Design & Wordpress Customization Courses</a>
                                    <a class="dropdown-item" href="/courses/webdevcourses">Complete Web Development Courses</a>
                                    <a class="dropdown-item" href="/courses/wpcourses">Full Wordpress Courses</a>
                                </div>
                            </li>
                            <li class="nav-item" id='navContact'>
                                <a class="nav-link" href="/contact">Contact</a>
                            </li>
                        </ul>
                        <form id="inputRight" class="form-inline my-2 my-lg-0">
                            <input id='headerSearchInput' class="form-control mr-sm-2" type="Search" placeholder="Search our courses" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            {
                                user ?
                                    <Link id='navDashboard' style={{ marginLeft: '30px' }} to="/dashboard" className="btn btn-info btn-sm">Dashboard</Link> :
                                    <a href="./../login" style={{ marginLeft: '30px' }} type="button" class="btn btn-danger btn-sm">Login & Sign Up</a>
                            }
                        </form>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;