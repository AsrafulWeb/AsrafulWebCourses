import React from 'react';

const HomeFeaturedItem = ({ item, bg, data }) => {
    return (
        <div className={"homeFeaturedItem homeFeaturedItem py-5" + item} style={{ background: bg }}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-5">
                        <img src={data.titleImg} alt="" className="img-fluid" />
                    </div>
                    <div className="col-sm-7 py-5 px-5 text-center">
                        <h2 className='mb-3'>{data.title}</h2>
                        <br />
                        <span style={{color: "#5e5e5e"}}>{data.subTitle}</span>
                        <br />
                        <br />
                        <br />
                        <a href={data.link} className="button button-red">Enroll Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeFeaturedItem;