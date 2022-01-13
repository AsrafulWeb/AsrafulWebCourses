import React from 'react';
import AdminCourseAddContent from './AdminCourseAddContent/AdminCourseAddContent';

const AdminCourseAdd = () => {
    return (
        <div className='adminCoursesAddItem'>
            <div className="d-flex mb-3">
                <h3>Add a course</h3>
                <div className="ms-auto">
                    <button className="btn btn-sm btn-success px-5 me-5" disabled='true' >Publish</button>
                </div>
            </div>
            <div class="modal fade contentAddItemModal" id="contentAddItemModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <AdminCourseAddContent />
            </div>
            <div className="admin-course-add-item">
                <div className="row">
                    <div className="col-5">
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
                        <div className="mb-3">
                            <label for="adminCourseAddItemDescription" class="form-label">Description <span className="text-danger"> *</span></label>
                            <br />
                            <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                                <input type="checkbox" class="btn-check" id="adminDescriptionEditBtnBold" autocomplete="off" />
                                <label class="btn btn-outline-primary px-3" for="adminDescriptionEditBtnBold">Bold</label>
                                <input type="checkbox" class="btn-check" id="adminDescriptionEditBtnItalic" autocomplete="off" />
                                <label class="btn btn-outline-primary px-3" for="adminDescriptionEditBtnItalic">Italic</label>
                                <input type="checkbox" class="btn-check" id="adminDescriptionEditBtnUnderline" autocomplete="off" />
                                <label class="btn btn-outline-primary px-2" for="adminDescriptionEditBtnUnderline">Underline</label>
                                <input type="checkbox" class="btn-check" id="adminDescriptionEditBtnH1" autocomplete="off" />
                                <label class="btn btn-outline-primary px-4" for="adminDescriptionEditBtnH1">H1</label>
                                <input type="checkbox" class="btn-check" id="adminDescriptionEditBtnH2" autocomplete="off" />
                                <label class="btn btn-outline-primary px-4" for="adminDescriptionEditBtnH2">H2</label>
                                <input type="checkbox" class="btn-check" id="adminDescriptionEditBtnH3" autocomplete="off" />
                                <label class="btn btn-outline-primary px-4" for="adminDescriptionEditBtnH3">H3</label>
                                <input type="checkbox" class="btn-check" id="adminDescriptionEditBtnH4" autocomplete="off" />
                                <label class="btn btn-outline-primary px-4" for="adminDescriptionEditBtnH4">H4</label>
                                <input type="checkbox" class="btn-check" id="adminDescriptionEditBtnH5" autocomplete="off" />
                                <label class="btn btn-outline-primary px-4" for="adminDescriptionEditBtnH5">H5</label>
                                <input type="checkbox" class="btn-check" id="adminDescriptionEditBtnh6" autocomplete="off" />
                                <label class="btn btn-outline-primary px-4" for="adminDescriptionEditBtnh6">H6</label>
                            </div>
                            <textarea type="text" class="form-control" rows="22" id="adminCourseAddItemDescription" placeholder="The course Description" ></textarea>
                        </div>
                    </div>
                    <div className="col-7 pe-5">
                        <div className="mb-3">
                            <h4 className='mb-5'>Contents</h4>
                            <button className="btn-success btn w-100" data-bs-toggle="modal" data-bs-target="#contentAddItemModal">Create Your Content.</button>
                            <div className="mt-4" style={{ margin: "0" }}>
                                <div className="text-center mb-3">
                                    <h6>Courses Content Preview</h6>
                                </div>
                                <div className="adminAddCourseContentPreviewItem">
                                    <div className="card" style={{ cursor: "pointer" }}>
                                        <div className="card-body row">
                                            <div className="col-1">
                                                01.
                                            </div>
                                            <div className="col-11">
                                                <h6>All About</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminCourseAdd;