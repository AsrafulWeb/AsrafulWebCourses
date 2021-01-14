import React from 'react';
import coursesData from '../../coursesData';
import DashCourses from './DashCourses/DashCourses';

const DashAllCourses = () => {
    return (
        <div class="tab-pane fade" id="allCourses" role="tabpanel" aria-labelledby="allCourses-tab">
            <div className="card-deck">
                {
                    coursesData.map(cr =>
                        <DashCourses cr={cr}/>
                    )
                }
            </div>
        </div>
    );
};

export default DashAllCourses;