import React from 'react';

const DashCheckout = () => {
    return (
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Confirm your order</h5>
                    </div>
                    <div class="modal-body">
                        <h6>Did you send your 200 Taka to our bKash or Rocket account?</h6>
                        <br />
                        <div class="form-group">
                            <label for="acNo">Your account number <span className="text-danger">*</span></label>
                            <input type="number" class="form-control" id="acNo" required />
                        </div>
                        <div class="form-group">
                            <label for="amount">Your Sended Amount <span className="text-danger">*</span></label>
                            <input type="number" class="form-control" id="amount" required />
                        </div>
                        <div class="form-group">
                            <label for="transId">Your Trans ID <span className="text-danger">*</span></label>
                            <input type="text" class="form-control" id="transId" required />
                        </div>
                        <div class="form-group">
                            <label for="msg">Message (optional)</label>
                            <textarea type="text" class="form-control" id="msg" ></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Confirm order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashCheckout;