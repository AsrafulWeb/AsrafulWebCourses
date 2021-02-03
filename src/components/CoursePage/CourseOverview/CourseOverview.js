import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../Login/useAuth';

const CourseOverview = () => {

    const auth = useAuth()

    const { curl } = useParams()

    const [coursesDt, setCoursesDt] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/coursesData?url=${curl}`)
            .then(res => res.json())
            .then(data => setCoursesDt(data))
    })

    const addToCart = () => {
        if(auth.user){
            alert("Course added in cart.")
        }
        else{
            window.location.pathname = './login'
        }
    }

    return (
        <section className='coursesOverview'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9">
                        <br />
                        <h2>{coursesDt.title}</h2>
                        <br />
                        <br />
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                    </div>
                    <div className="col-sm-3">
                        <br />
                        <div class="card">
                            <img src={coursesDt.thum} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{coursesDt.title}</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <h3 className='text-danger'>Price: {coursesDt.price}<strong></strong></h3>
                                <button onClick={addToCart} className="btn btn-danger">Add To cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseOverview;