import React, { useState } from 'react';
import './Dashboard.css';
import DashMyCourses from '../DashMyCourses/DashMyCourses';
import DashMyProfile from '../DashMyProfile/DashMyProfile';
import DashMyCart from '../DashMyCart/DashMyCart';
import DashAllCourses from '../DashAllCourses/DashAllCourses';

const Dashboard = () => {

    return (
        <section className='dashboardMain'>
            <div className="container">
                <div className="dashboardHeader">
                    <br /><br />
                    <nav className="dashTabs">
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <a class="nav-link active" id="nav-my-courses-tab" data-bs-toggle="tab" href="#nav-my-courses" role="tab" aria-controls="nav-my-courses" aria-selected="true">My Courses</a>
                            <a class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">My Account</a>
                            <a class="nav-link" id="nav-cart-tab" data-bs-toggle="tab" href="#nav-cart" role="tab" aria-controls="nav-cart" aria-selected="false">My Cart</a>
                            <a class="nav-link" id="nav-all-courses-tab" data-bs-toggle="tab" href="#nav-all-courses" role="tab" aria-controls="nav-all-courses" aria-selected="false">All Courses</a>
                        </div>
                    </nav>
                    <br />
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-my-courses" role="tabpanel" aria-labelledby="nav-my-courses-tab">
                            <DashMyCourses />
                        </div>
                        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <DashMyProfile />
                        </div>
                        <div class="tab-pane fade" id="nav-cart" role="tabpanel" aria-labelledby="nav-cart-tab">
                            <DashMyCart />
                        </div>
                        <div class="tab-pane fade" id="nav-all-courses" role="tabpanel" aria-labelledby="nav-all-courses-tab">
                            <DashAllCourses />
                        </div>
                    </div>
                    <br /><br />

                    <div className="dashboardContent">

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;