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
import Dashboard from './components/Dashboard/Dashboard';
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
          <Header />
          <div className="content">
            <Switch>
              <Route path="/test">
                <Test />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route exact path="/courses">
                {
                  coursesPgOk ?
                    ""
                    :
                    <HomeLoader />
                }
                <Courses ok={coursesPageOk} />
              </Route>
              <Route path="/course/:curl">
                <CoursePage />
              </Route>
              <PrivateRoute path="/enroll/:eurl">
                <EnrollPage />
              </PrivateRoute>
              <PrivateRoute path="/dashboard">
                <Dashboard />
              </PrivateRoute>
              <Route path="/login">
                <Login />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="*">
                <Error />
              </Route>
            </Switch>
          </div>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
