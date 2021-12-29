import React from 'react';

const HomeFeaturedItem = ({item, bg, data}) => {
    return (
        <div className={"homeFeaturedItem homeFeaturedItem"+item} style={{background: bg}}>
            <div className="container py-5">

            </div>
        </div>
    );
};

export default HomeFeaturedItem;