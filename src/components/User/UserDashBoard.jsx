import React, { useContext } from 'react'
import UserMenu from '../Layout/UserMenu'
import {AuthContext} from '../../context/AuthContext';

const UserDashBoard = () => {
    const {user} = useContext(AuthContext)
  return (
    <div className='container-fluid m-3 p-3'>
    <div className='row'>
        <div className='col-md-3'>
            <UserMenu/>
        </div>
        {/* <div className='col-md-9'>
            <div className="card w-75 p-3">
                <h3>Admin Name:{user?.username}</h3>
                <h3>Admin Name:{user?.email}</h3>
            </div>
        </div> */}
    </div>
</div>
  )
}

export default UserDashBoard