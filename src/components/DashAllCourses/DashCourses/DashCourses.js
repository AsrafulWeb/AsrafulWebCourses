import React from 'react';

const DashCourses = (props) => {
    const cr = props.cr;
    return (
        <div class="card DashCourses">
            <img src={cr.thum} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{cr.title}</h5>
                <a href={"./../courses/" + cr.url} className="btn btn-outline-danger btn-sm">Enrol Now</a>
            </div>
        </div>
    );
};

export default DashCourses;