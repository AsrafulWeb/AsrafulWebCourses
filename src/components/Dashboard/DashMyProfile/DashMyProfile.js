import React from 'react';
import { useAuth } from '../../Login/useAuth';

const DashMyProfile = () => {

    const auth = useAuth()

    return (
        <div class="DashMyProfile mt-5" id="profile" >
            {
                auth.user && <div style={{ width: '400px' }} className="card text-center">
                    <div className="card-body">
                        {
                            auth.user && <img style={{ borderRadius: '50%' }} src={auth.user.photo} alt="" />
                        }
                        {
                            auth.user && <h2>{auth.user.name}</h2>
                        }
                        <br />
                        {
                            auth.user && <h6>{auth.user.email}</h6>
                        }
                        <br />
                        {
                            auth.user ? <button onClick={auth.signOut} className="btn btn-danger">Log Out</button> : ''
                        }
                    </div>
                    <br /><br/><br/><br/>
                </div>
            }
        </div>
    );
};

export default DashMyProfile;