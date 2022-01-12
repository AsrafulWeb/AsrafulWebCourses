import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminCoursesItemView = ({ item }) => {
    
    const [editMode, setEditMode] = useState(false)

    return (
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Course Item Data View And Edit</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setEditMode(false)}></button>
            </div>
            <div class="modal-body">
                <div>
                    {
                        editMode ?
                            <div className="admin-course-item-quick-edit">
                                <div className="row">
                                    <div className="col-4">
                                        <img src={item?.thum} alt="" className="img-fluid rounded" />
                                    </div>
                                    <div className="col-5">
                                        <div class="mb-3">
                                            <label for="adminQuickEditTitleInput" class="form-label">Title</label>
                                            <input type="text" class="form-control" id="adminQuickEditTitleInput" placeholder={item?.title} />
                                        </div>
                                        <div class="mb-3 d-flex">
                                            <div className="col-4">
                                                <label for="adminQuickEditPriceInput" class="form-label">Price</label>
                                                <input type="number" class="form-control" id="adminQuickEditPriceInput" placeholder={item?.price} />
                                            </div>
                                            <div className="col-8 ps-3">
                                                {
                                                    item?.offerPrice?.length ?
                                                        <>
                                                            <label for="adminQuickEditPriceInput" class="form-label">Offer Price</label>
                                                            <input type="number" class="form-control" id="adminQuickEditPriceInput" placeholder={item?.offerPrice.length} />
                                                        </>
                                                        :
                                                        <div className='d-flex mt-4'>
                                                            <div className="col-6 mt-2">
                                                                <h6>Don't have offer.</h6>
                                                            </div>
                                                            <div className="col-6">
                                                                <button className="btn btn-sm btn-warning w-100">Add a Offer</button>
                                                            </div>
                                                        </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="mb-2">
                                            <label for="adminQuickEditSubTitleInput" class="form-label">Sub Title</label>
                                            <textarea class="form-control" id="adminQuickEditSubTitleInput" rows="5"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-1 text-right">
                                        <button className="btn btn-sm btn-primary px-4 mb-4">Save</button>
                                        <button className="btn btn-sm btn-danger px-3" onClick={() => setEditMode(false)}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="row">
                                <div className="col-4">
                                    <img src={item?.thum} alt="" className="img-fluid rounded" />
                                </div>
                                <div className="col-7">
                                    <h4 className='mb-2'>{item?.title}</h4>
                                    <span className=''>{item?.smallDes}...</span>
                                    <br /><br />
                                    <h5>Instractor: {item?.instructor}</h5>
                                    {
                                        item?.price.length > 1 ?
                                            <>
                                                <h6 className="text-danger">Price: <span className="text-decoration-line-through"> {item?.price.length > 1 ? item?.price : "Free"} ৳</span></h6>
                                                <h6 className="text-danger">Offer Price: {item?.price.length > 1 ? item?.price : "Free"} ৳</h6>
                                            </>
                                            :
                                            <h6 className="text-danger">Price: {item?.price.length > 1 ? item?.price : "Free"} ৳</h6>
                                    }
                                </div>
                                <div className="col-1 text-right">
                                    <button class="btn btn-outline-light text-dark" title='Quik Edit' onClick={() => setEditMode(true)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil mb-1" viewBox="0 0 16 16">
                                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                        </svg>
                                    </button>
                                    <br /><br />
                                    <Link data-bs-dismiss="modal" to={`/admin/course-item/${item?.url}/content`}>
                                        <button className="btn btn-outline-light text-dark" title='Go to course content'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-play mb-1" viewBox="0 0 16 16">
                                                <path d="M6 10.117V5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43z" />
                                                <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                                            </svg>
                                        </button>
                                    </Link>
                                    <br /><br />
                                    <Link to={`/admin/course-item/${item?.url}`} data-bs-dismiss="modal">
                                        <button className="btn btn-sm btn-primary px-3">Edit</button>
                                    </Link>
                                </div>
                            </div>
                    }
                </div>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary btn-sm px-4" data-bs-dismiss="modal" onClick={() => setEditMode(false)}>Close</button>
            </div>
        </div>
    );
};

export default AdminCoursesItemView;