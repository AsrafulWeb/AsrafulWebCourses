import React, { useState } from 'react';
import './Dashboard.css';
import DashMyCourses from '../DashMyCourses/DashMyCourses';
import DashMyProfile from '../DashMyProfile/DashMyProfile';
import DashMyCart from '../DashMyCart/DashMyCart';
import DashAllCourses from '../DashAllCourses/DashAllCourses';

const Dashboard = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        photo: ''
    })

    return (
        <section className='dashboardMain'>
            <div className="container">
                <div className="dashboardHeader">
                    <br /><br />
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="courses-tab" data-toggle="tab" href="#courses" role="tab" aria-controls="courses" aria-selected="true">My Courses</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">My Account</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="Cart-tab" data-toggle="tab" href="#Cart" role="tab" aria-controls="Cart" aria-selected="false">My Cart</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="allCourses-tab" data-toggle="tab" href="#allCourses" role="tab" aria-controls="allCourses" aria-selected="false">All Courses</a>
                        </li>
                    </ul>
                    <br />
                    <div class="tab-content" id="myTabContent">
                        <DashMyCourses/>
                        <DashMyProfile/>
                        <DashMyCart/>
                        <DashAllCourses/>
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