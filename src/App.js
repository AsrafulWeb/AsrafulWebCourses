import React from 'react';
import './App.css';
import './Responsive.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import HomeCoursesOutline from './components/HomeCoursesOutline/HomeCoursesOutline';
import Html5 from './components/Html5/Html5';
import Css3 from './components/Css3/Css3';
import Js from './components/Js/Js';
import WebDes from './components/WebDes/WebDes';
import WebDev from './components/WebDev/WebDev';
import Wp from './components/Wp/Wp';
import Dashboard from './components/Dashboard/Dashboard';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { AuthProvider, PrivateRoute, PrivateRouteForLogin } from './components/Login/useAuth';
import Login from './components/Login/Login';

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/courses/htmlcourses">
              <Html5 />
            </Route>
            <Route path="/courses/csscourses">
              <Css3 />
            </Route>
            <Route path="/courses/jscourses">
              <Js />
            </Route>
            <Route path="/courses/webdevandwpcourses">
              <WebDes />
            </Route>
            <Route path="/courses/wpcourses">
              <Wp />
            </Route>
            <Route path="/courses/webdevcourses">
              <WebDev />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/">
              <Banner />
              <HomeCoursesOutline />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
