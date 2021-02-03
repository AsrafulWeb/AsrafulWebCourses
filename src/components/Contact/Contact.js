import React from 'react';

const Contact = () => {
    return (
        <section className='contactMain'>
            <div className="container">
                <br />
                <h2 className="contactUsTitle">Contact With AsrafulWeb Team</h2>
                <br />
                <div className="contactUsOptions card card-dark">
                    <div className="card-body">
                        <a href="https://www.facebook.com/AsrafulWebOfficial/" target="blank" className="btn btn-danger">Facebook</a>
                        <a href="./" target="blank" className="btn btn-danger">Instagram</a>
                        <a href="https://www.linkedin.com/company/AsrafulWeb/" target="blank" className="btn btn-danger">LinkedIn</a>
                        <a href="https://asrafulweb.com" target="blank" className="btn btn-danger">Website</a>
                        <br /><br />
                        <div className="card">
                            <div className="card-body">
                                <h4 className="text-dark">Email: asrafulweb@outlook.com</h4>
                            </div>
                        </div>
                        <a className='btn btn-outline-info' href="https://github.com/asrafulweb" target="blank" >Follow on Github</a>
                    </div>
                </div>
                <br /><br /><br /><br /><br /><br /><br />
            </div>
        </section>
    );
};

export default Contact;