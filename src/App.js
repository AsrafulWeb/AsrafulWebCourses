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
import CoursePage from './components/CoursePage/CoursePage';
import WebDes from './components/WebDes/WebDes';
import WebDev from './components/WebDev/WebDev';
import Dashboard from './components/Dashboard/Dashboard';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { AuthProvider, PrivateRoute } from './components/Login/useAuth';
import Login from './components/Login/Login';
import Error from './components/Error/Error';
import Test from './components/Test/Test';

function App() {

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
                <HomeCoursesOutline />
              </Route>
              <Route path="/course/:curl">
                <CoursePage />
              </Route>
              <PrivateRoute path="/dashboard">
                <Dashboard />
              </PrivateRoute>
              <Route path="/login">
                <Login />
              </Route>
              <Route exact path="/">
                <Banner />
                <HomeCoursesOutline />
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
