import React from 'react';
import DashCheckout from '../DashCheckout/DashCheckout';

const DashMyCart = () => {
    return (
        <div class="tab-pane fade" id="Cart" role="tabpanel" aria-labelledby="Cart-tab">
            <div style={{ display: 'inline-block' }} className="col-8 cartProduct">
                This is your Cart
                                <br />
                <h5>Your order amount: <strong className="text-danger"> 200 ৳</strong></h5>
                <br />
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">Checkout</button>
            </div>
            <div style={{ display: 'inline-block' }} className="card col-4 cartPaymentInfo">
                <div className="card-body">
                    {/* <div className="alert alert-dark">নিচের কোনো নাম্বারে আপনার <b>200</b> টাকা Send Money করে পাঠিয়ে Checkout করুন।</div>
                                    <h5 className=""><strong>bKash: </strong>01631820368</h5>
                                    <h5 className=""><strong>Roket: </strong>016318203680</h5> */}
                    <div className="alert alert-secondary">বর্তমানে আমাদের সকল কোর্স ফ্রী তাই নিচের ইনফর্মেশন অনুযায়ী Checkout ফর্মটি পুরন করে Confirm করুন।</div>
                    <div className="alert alert-dark">
                        <span className=""><b>Account number:</b> 01234729568</span><br />
                        <span className=""><b>Amount:</b> 200</span><br />
                    </div>
                </div>
            </div>
            <DashCheckout/>
        </div>
    );
};

export default DashMyCart;