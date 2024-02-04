import React from "react";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group dashboard-menu">
          <h4>Admin Panel</h4>

          <NavLink
            to="/admin/create-tour"
            className="list-group-item list-group-item-action"
          >
            Create Tour
          </NavLink>
          <NavLink
            to="/admin/tours"
            className="list-group-item list-group-item-action"
          >
            Tours
          </NavLink>
          <NavLink
            to="/admin/books"
            className="list-group-item list-group-item-action"
          >
            Books
          </NavLink>
          <NavLink
            to="/admin/users"
            className="list-group-item list-group-item-action"
          >
            Users
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
