import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { AuthProvider, useAuth } from '../Login/useAuth';
import AdminHeader from './AdminHeader/AdminHeader';
import AdminHome from './AdminHome/AdminHome/AdminHome';
import AdminNav from './AdminNav/AdminNav';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from 'react';
import './Admin.css';
import { useState } from 'react';
import axios from 'axios';

const Admin = () => {

    const [adminItems, setAdminItems] = useState(null)

    const path = useLocation().pathname
    const { user } = useAuth()

    useEffect(() => {
        if (path === "/admin" && "admin" && "admin/" && "/admin/") {
            window.location.replace('/admin/dashboard')
        }
    }, [path])

    useEffect(() => {
        axios.get('/admins')
            .then(res => {
                setAdminItems(res.data)
                console.log(res)
            })
            .catch(err => {
                setAdminItems(null)
            })
    }, [path])

    return (
        <div>
            {
                user ?
                    <>
                        {
                            adminItems ?
                                <>
                                    {
                                        adminItems.map(item => item.email === user.email ?
                                            <>
                                                <AuthProvider>
                                                    <Router>
                                                        <div className="container-fluid">
                                                            <div className="row">
                                                                <div className="col-sm-2 adminNavs" style={{ paddingLeft: "0px" }}>
                                                                    <AdminNav />
                                                                </div>
                                                                <div className="adminOptions col-sm-10">
                                                                    <AdminHeader />
                                                                    <Switch>
                                                                        <Route path="/admin/dashboard">
                                                                            <AdminHome />
                                                                        </Route>
                                                                    </Switch>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Router>
                                                </AuthProvider>
                                            </>
                                            :
                                            <div className="adminAccessDenayMsg text-center text-secondary" style={{ paddingTop: "45vh" }}>
                                                <h5>You don't have admin access.</h5>
                                            </div>
                                        )
                                    }
                                </>
                                :
                                <div className="adminAccessChackInfo text-center text-secondary" style={{ paddingTop: "45vh" }}>
                                    <div class="spinner-border text-secondary mb-3" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                    <h5>Cheacking your admin access.</h5>
                                </div>
                        }
                    </>
                    :
                    <>
                    </>
            }
        </div>
    );
};

export default Admin;