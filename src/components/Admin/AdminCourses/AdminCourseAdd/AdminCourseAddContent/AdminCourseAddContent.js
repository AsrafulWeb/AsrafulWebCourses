import React from 'react';

const AdminCourseAddContent = () => {
    return (
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Add a content for <span className='text-success'>Html 5 Course</span></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="">
                        <div class="mb-4 col-2">
                            <label for="adminContentAddType" class="form-label">Content Type <span className="text-danger"> *</span></label>
                            <select class="form-select" aria-label="" id='adminContentAddType'>
                                <option value="video">Video</option>
                                <option value="text">Text</option>
                                <option value="image">Image</option>
                            </select>
                        </div>
                        <div className="adminContentAddVideoSection">
                            <div className="text-center mb-4">
                                <h5>Create Your Video Content</h5>
                            </div>
                            <div className="row">
                                <div class="col-5">
                                    <div className="mb-3">
                                        <label for="adminContentAddTitle" class="form-label">Content Title <span className="text-danger"> *</span></label>
                                        <input value="ak" type="text" class="form-control" id="adminContentAddTitle" placeholder="Title" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="adminContentAddUploadVideo" class="form-label">Content Video <span className="text-danger"> *</span></label>
                                        <input type="file" class="form-control" id="adminContentAddUploadVideo" placeholder="Upload Video" />
                                    </div>
                                </div>
                                <div className="col-7">
                                    <label for="adminContentAddDescription" class="form-label">Content Description </label>
                                    <textarea type="text" rows="15" class="form-control" id="adminContentAddDescription" placeholder="Description"></textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary px-4" data-bs-dismiss="modal" disabled="true">Add Content</button>
                </div>
            </div>
        </div>
    );
};

export default AdminCourseAddContent;