import React from 'react';
import { Link } from 'react-router-dom';

const DashMyCourse = (props) => {
    const cr = props.cr;
    return (
        <div className="col-sm-3">
            <div class="card DashCourses">
                <img src={cr.thum} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{cr.title}</h5>
                    <a href={"./../course/" + cr.url} className="btn btn-outline-danger btn-sm">Continue course</a>
                </div>
            </div>
        </div>
    );
};

export default DashMyCourse;