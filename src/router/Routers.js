import React from "react";
import Home from "../pages/Home";
import Tours from "../pages/Tours";
import TourDetails from "../pages/TourDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchResultList from "../pages/SearchResultList";

import { Routes, Route } from "react-router-dom";
import ThankYou from "../pages/ThankYou";
import AdminDashBoard from "../components/Admin/AdminDashBoard";
import Users from "../components/Admin/Users";
import UserDashBoard from "../components/User/UserDashBoard";
import UserProfile from "../components/User/UserProfile";
import UserBookings from "../components/User/UserBookings";
import AllTours from "../components/Admin/AllTours";
import TourCreate from "../components/Admin/TourCreate";
import HotelDetails from "../pages/HotelDetails";
import EditTour from "../components/Admin/EditTour";
import AllBooks from "../components/Admin/AllBooks";
import Blog from "../pages/Blog";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/tours/:id/hotel" element={<HotelDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/tours/search" element={<SearchResultList />} />
      <Route path="/admin" element={<AdminDashBoard />} />
      <Route path="/admin/create-tour" element={<TourCreate />} />
      <Route path="/admin/users" element={<Users />} />
      <Route path="/admin/books" element={<AllBooks />} />
      <Route path="/admin/tours" element={<AllTours />} />
      <Route path="/admin/tours/update/:id" element={<EditTour />} />
      <Route path="/user" element={<UserDashBoard />} />
      <Route path="/user/profile" element={<UserProfile />} />
      <Route path="/user/books" element={<UserBookings />} />
      <Route path="/blogs" element={<Blog />} />
    </Routes>
  );
};

export default Routers;
