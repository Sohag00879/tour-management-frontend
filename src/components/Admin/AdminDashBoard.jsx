import React, { useContext} from 'react'
import AdminMenu from '../Layout/AdminMenu'
import {AuthContext} from '../../context/AuthContext';
import { BASE_URL } from '../../utils/config';
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

const AdminDashBoard = () => {
    const {user} = useContext(AuthContext)
    const {data:userInfo} = useFetch(`${BASE_URL}/users/${user?._id}`)
    const navigate = useNavigate();

    if(userInfo?.role==='user'){
        navigate('/')
    }else if(!userInfo){
        navigate('/')
    }

  return (
    <div className='container-fluid m-3 p-3'>
        <div className='row'>
            <div className='col-md-3'>
                <AdminMenu/>
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

export default AdminDashBoard