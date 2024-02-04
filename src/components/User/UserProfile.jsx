import React, { useContext } from 'react'
import UserMenu from '../Layout/UserMenu'
import useFetch from '../../hooks/useFetch'
import { BASE_URL } from '../../utils/config'
import { AuthContext } from '../../context/AuthContext'
import '../../styles/profile.css'

const UserProfile = () => {
    const {user} = useContext(AuthContext)
    const {data:userInfo} = useFetch(`${BASE_URL}/users/${user._id}`)
  return (
    <div className='container-fluid m-3 p-3'>
    <div className='row'>
  <div className='col-md-3'>
  <UserMenu/>
  </div>
  <div className='col-md-9 profile-main'>
  <div className='profile-info bg-dark text-white'>
  <div>
    <img width='100px' height='100px'  src={userInfo.photo} alt="" />
   </div>
   <div className='mt-3'>
    <h5>User Name:{userInfo.username}</h5>
   </div>
   <div>
    <h5>Email: {userInfo.email}</h5>
   </div>
  </div>
  </div>
</div>
</div>
  )
}

export default UserProfile