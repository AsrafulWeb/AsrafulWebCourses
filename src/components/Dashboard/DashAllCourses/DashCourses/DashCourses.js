import React from 'react';
import { Link } from 'react-router-dom';

const DashCourses = (props) => {
    const cr = props.cr;
    return (
        <div className="col-sm-3">
            <div class="card DashCourses">
                <img src={cr.thum} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{cr.title}</h5>
                    <Link to={"./../course/" + cr.url} className="btn btn-outline-danger btn-sm">Enrol Now</Link>
                </div>
            </div>
        </div>
    );
};

export default DashCourses;