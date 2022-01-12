import React from 'react';

const AdminCourseAdd = () => {
    return (
        <div className='adminCoursesAddItem'>
            <div className="d-flex mb-3">
                <h3>Add a course</h3>
                <div className="ms-auto">
                    <button className="btn btn-sm btn-success px-5 me-5" disabled='true' >Publish</button>
                </div>
            </div>
            <div className="admin-course-add-item">
                <div className="row">
                    <div className="col-6">
                        <div className="mb-3">
                            <label for="adminCourseAddItemTitle" class="form-label">Title <span className="text-danger"> *</span></label>
                            <input type="text" class="form-control" id="adminCourseAddItemTitle" placeholder="The course name" />
                        </div>
                        <div className="row mb-3">
                            <div className='col-6'>
                                <label for="adminCourseAddItemThumbnailPhoto" class="form-label">Thumbnail Photo <span className="text-danger"> *</span></label>
                                <input type="file" class="form-control" id="adminCourseAddItemThumbnailPhoto" aria-label="Upload" />
                            </div>
                            <div className='col-6'>
                                <label for="adminCourseAddItemThumbnailVideo" class="form-label">Thumbnail Video</label>
                                <input type="file" class="form-control" id="adminCourseAddItemThumbnailVideo" aria-label="Upload" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6 pe-5">
                        <div className="mb-3">
                            <label for="adminCourseAddItemDescription" class="form-label">Description <span className="text-danger"> *</span></label>
                            <br />
                            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                <button type="button" class="btn btn-danger">Left</button>
                                <button type="button" class="btn btn-warning">Middle</button>
                                <button type="button" class="btn btn-success">Right</button>
                            </div>
                            <textarea type="text" class="form-control" rows="30" id="adminCourseAddItemDescription" placeholder="The course Description" ></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminCourseAdd;