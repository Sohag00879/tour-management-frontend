import React from 'react'
import { NavLink } from 'react-router-dom'

const UserMenu = () => {
  return (
   <>
     <div className="text-center">
        <div className="list-group dashboard-menu">
          <h4>User Dashboard</h4>
          <NavLink
            to="/user/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          <NavLink
            to="/user/books"
            className="list-group-item list-group-item-action"
          >
            Tours
          </NavLink>
        </div>
      </div>
   </>
  )
}

export default UserMenu