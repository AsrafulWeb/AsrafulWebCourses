import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from './../../../logo/AsrafulsCourseLogo.png'

const AdminNav = () => {

    const path = useLocation().pathname
    const pathname = path.split('/admin/')[1]

    console.log(pathname)


    return (
        <div className='adminNav px-3 pt-5' style={{ background: "#F8F6F2", minHeight: '100vh' }}>
            <Link to="/admin/dashboard" className=''>
                <img src={logo} alt="" style={{ width: "50px", height: "50px" }} />
            </Link>
            <nav class="nav nav-pills flex-column mt-4 admin-navs">
                <Link to="/admin/dashboard" class={pathname === 'dashboard' ? "mb-2 nav-link text-light active" : "mb-2 nav-link text-dark"}>
                    <h6 className='mt-1'>Dashboard</h6>
                </Link>
                <Link to="/admin/courses" class={pathname === 'courses' ? "mb-2 nav-link text-light active" : "mb-2 nav-link text-dark"}>
                    <h6 className='mt-1'>Courses</h6>
                </Link>
                <Link to="/admin/banners" class={pathname === 'banners' ? "mb-2 nav-link text-light active" : "mb-2 nav-link text-dark"}>
                    <h6 className='mt-1'>Banners & Carosels</h6>
                </Link>
                <Link to="/admin/featured-items" class={pathname === 'featured-items' ? "mb-2 nav-link text-light active" : "mb-2 nav-link text-dark"}>
                    <h6 className='mt-1'>Featured Items</h6>
                </Link>
                <Link to="/admin/pages" class={pathname === 'pages' ? "mb-2 nav-link text-light active" : "mb-2 nav-link text-dark"}>
                    <h6 className='mt-1'>Pages</h6>
                </Link>
            </nav>
        </div>
    );
};

export default AdminNav;