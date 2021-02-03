import React from 'react';
import DashCheckout from '../DashCheckout/DashCheckout';
import DashCartPd from './DashCartPd/DashCartPd';

const DashMyCart = () => {
    return (
        <div class="dashCart" id="dashCart">
            <div style={{ display: 'inline-block' }} className="col-7 cartProduct">
                <div className="cartItems">
                    <div className='container'>
                        <h3>This is your cart.</h3>
                        <br />
                        <div className="row cartProducts">
                            {/* <DashCartPd /> */}
                        </div>
                    </div>
                    <br />
                </div>
            </div>
            <div className="col-1"></div>
            <div style={{ display: 'inline-block' }} className="card col-4 cartPaymentInfo">
                <div className="card-body">
                    <div className="cartCheckoutBtnAndEtc">
                        <h5>Your order amount: <strong className="text-danger"> 200 ৳</strong></h5>
                        <br />
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Checkout</button>
                    </div>
                    {/* <div className="alert alert-dark">নিচের কোনো নাম্বারে আপনার <b>200</b> টাকা Send Money করে পাঠিয়ে Checkout করুন।</div>
                                    <h5 className=""><strong>bKash: </strong>01631820368</h5>
                                    <h5 className=""><strong>Roket: </strong>016318203680</h5> */}
                    <br />
                    <div className="alert alert-secondary">বর্তমানে আমাদের সকল কোর্স ফ্রী তাই নিচের ইনফর্মেশন অনুযায়ী Checkout ফর্মটি পুরন করে Confirm করুন।</div>
                    <div className="alert alert-dark">
                        <span className=""><b>Account number:</b> 01234729568</span><br />
                        <span className=""><b>Trans ID:</b> 1293938ABCD12</span><br />
                        <span className=""><b>Amount:</b> 200</span><br />
                    </div>
                </div>
            </div>
            <DashCheckout />
        </div>
    );
};

export default DashMyCart;