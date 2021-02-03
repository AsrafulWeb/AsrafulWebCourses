import React from 'react';
import img from './../../../banner/cWebDes.jpg'

const DashCartPd = () => {
    return (
        <div class="card col-sm-12 cartItem">
            <div class="card-body cartPdBody">
                <input class="form-check-input cartItemCheck" type="checkbox" value="" id="flexCheckChecked" />
                <div className="carPdImg">
                    <img src="https://asrafulwebcoursesimg.netlify.app/courses_web_des.jpg" alt="" />
                </div>
                <div className="cartPdText">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <div className="cartItemAddRemove">
                        <button href="#" class="btn btn-outline-danger btn-sm cartCancelBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashCartPd;