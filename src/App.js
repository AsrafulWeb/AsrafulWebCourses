import React, { useState } from 'react';
import './App.css';
import './Responsive.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Reusable/Header/Header';
import CoursePage from './components/CoursePage/CoursePage';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Footer from './components/Reusable/Footer/Footer';
import { AuthProvider, PrivateRoute } from './components/Login/useAuth';
import Login from './components/Login/Login';
import Error from './components/Error/Error';
import Test from './components/Test/Test';
import EnrollPage from './components/EnrollPage/EnrollPage';
import HomeLoader from './components/Reusable/HomeLoader/HomeLoader';
import Courses from './components/Courses/Courses';
import Home from './components/Home/Home';
import DashMyProfile from './components/Dashboard/DashMyProfile/DashMyProfile';
import DashMyCourses from './components/Dashboard/DashMyCourses/DashMyCourses';
import Admin from './components/Admin/Admin';
import AdminHeader from './components/Admin/AdminHeader/AdminHeader';
import AdminHome from './components/Admin/AdminHome/AdminHome/AdminHome';

function App() {

  const [coursesPgOk, setCoursesPgOk] = useState(false)

  // Function for courses page loader management
  const coursesPageOk = () => {
    setCoursesPgOk(true)
  }

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/test">
              <Test />
            </Route>
            <Route path="/about">
              <Header />
              <div className="content">
                <About />
              </div>
              <Footer />
            </Route>
            <Route path="/contact">
              <Header />
              <div className="content">
                <Contact />
              </div>
              <Footer />
            </Route>
            <Route exact path="/courses">
              <Header />
              <div className="content">
                {
                  coursesPgOk ?
                    ""
                    :
                    <HomeLoader />
                }
                <Courses ok={coursesPageOk} />
              </div>
              <Footer />
            </Route>
            <Route path="/course/:curl">
              <Header />
              <div className="content">
                <CoursePage />
              </div>
              <Footer />
            </Route>
            <PrivateRoute path="/enroll/:eurl">
              <Header />
              <div className="content">
                <EnrollPage />
              </div>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/account">
              <Header />
              <div className="content">
                <DashMyProfile />
              </div>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/courses">
              <Header />
              <div className="content">
                <DashMyCourses />
              </div>
              <Footer />
            </PrivateRoute>
            <Router path="/admin">
              <Admin />
            </Router>
            <Route path="/login">
              <Header />
              <div className="content">
                <Login />
              </div>
              <Footer />
            </Route>
            <Route exact path="/">
              <Header />
              <div className="content">
                <Home />
              </div>
              <Footer />
            </Route>
            <Route exact path="*">
              <Header />
              <div className="content">
                <Error />
              </div>
              <Footer />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
