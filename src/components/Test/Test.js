import React, { useState } from 'react';

const Test = () => {

    // const array = [
    //     'nu1',
    //     'nu2',
    //     'nu3'
    // ]

    const [coursesErr, setCoursesErr] = useState(false)

    const errFu = () => {
        // if (coursesErr === false) {
            setCoursesErr(true)
            console.log(coursesErr)
        // } 
    }


    return (
        <div>
            <div className="container">
                <br />
                <h2>Test</h2>
                <br />
                <div className="test">
                    <button onClick={errFu} className="btn btn-info btn-sm">Work</button>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>
    );
};

export default Test;