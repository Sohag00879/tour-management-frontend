import React, { useContext, useState } from "react";
import AdminMenu from "../Layout/AdminMenu";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";
import { message } from "antd";

const TourCreate = () => {
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)
  const {data:userInfo} = useFetch(`${BASE_URL}/users/${user?._id}`)

  if(userInfo?.role==='user'){
    navigate('/')
}else if(!userInfo){
    navigate('/')
}
    const [title, setTitle] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [distance, setDistance] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const [maxGroupSize, setMaxGroupSize] = useState("");
    const [image, setImage] = useState("");
    const [photo, setPhoto] = useState("");
    const [hotelName, setHotelName] = useState("");
    const [hotelAddress, setHotelAddress] = useState("");
    const [numberOfHotelRoom, setNumberOfHotelRoom] = useState("");
    const [hotelDesc, setHotelDesc] = useState("");
    const [hotelPhoto, setHotelPhoto] = useState("");
    const [hotelImg, setHotelImg] = useState("");
    const [discount, setDiscount] = useState("");
    const [discountLastDate, setDiscountLastDate] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");


    const handleClick = async(e) =>{
        e.preventDefault();
       try {
        const tourData = {
            title: title,
            city:city,
            address:address,
            distance:distance,
            photo:photo,
            desc:desc,
            price:price,
            maxGroupSize:maxGroupSize,
            hotelName:hotelName,
            hotelAddress:hotelAddress,
            numberOfHotelRoom:numberOfHotelRoom,
            hotelPhoto:hotelPhoto,
            hotelDesc:hotelDesc,
            discount:discount,
            discountLastDate:discountLastDate,
            startDate:startDate,
            endDate:endDate
          }
          const res = await fetch(`${BASE_URL}/v1/tours`, {
            method:'post',
            headers:{
              'content-type':'application/json'
            },
            credentials: 'include',
            body:JSON.stringify(tourData)
          })
          const result = await res.json()
          if(res.ok) {
            message.success(result.message)
            navigate('/admin/tours')
          }
       } catch (error) {
        console.log(error)
       }
          
    }


      const submitImage = () =>{
    const data  = new FormData()
    data.append('file',image)
    data.append("upload_preset","ml_default")
    data.append("cloud_name","dlwbhnwsm")
    fetch("https://api.cloudinary.com/v1_1/dlwbhnwsm/image/upload", {
      method:'post',
      body:data
    })
    .then((res)=> res.json())
    .then((data)=>setPhoto(data.url))
    .catch((error)=>{
      console.log(error)
    })
  }
      const submitHotelImage = () =>{
    const data  = new FormData()
    data.append('file',hotelImg)
    data.append("upload_preset","ml_default")
    data.append("cloud_name","dlwbhnwsm")
    fetch("https://api.cloudinary.com/v1_1/dlwbhnwsm/image/upload", {
      method:'post',
      body:data
    })
    .then((res)=> res.json())
    .then((data)=>setHotelPhoto(data.url))
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div className="container-fluid m-3 p-3">
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-6 ">
          <h3 className="text-center">Create Your Tour</h3>
          <div className="mb-3">
            <input
              type="text"
              value={title}
              placeholder="Tour Title"
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={city}
              placeholder="City Name"
              className="form-control"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              placeholder="Address"
              className="form-control"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              value={distance}
              placeholder="Distance"
              className="form-control"
              onChange={(e) => setDistance(e.target.value)}
            />
          </div>
          <div className="mb-3">
            {image && (
              <div className="text-center">
                <img
                  src={URL.createObjectURL(image)}
                  alt="tour_photo"
                  height={"200px"}
                  className="img img-responsive"
                />
              </div>
            )}
          </div>
                <div className="mb-2">
                  {/* <input type="file" onChange={(e)=>setImage(e.target.files[0])}/> */}
                  <label className="btn btn-outline-secondary col-md-12">
                  {image ? image.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    hidden
                  />
                </label>
                  <button className="btn btn-primary mt-2" onClick={submitImage}>Tour Photo Upload</button>
                </div>
          <div className="mb-3">
            <textarea
              type="text"
              value={desc}
              placeholder="Tour Description"
              className="form-control"
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              value={price}
              placeholder="Price"
              className="form-control"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              value={maxGroupSize}
              placeholder="Max People"
              className="form-control"
              onChange={(e) => setMaxGroupSize(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={hotelName}
              placeholder="Hotel Name"
              className="form-control"
              onChange={(e)=> setHotelName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={hotelAddress}
              placeholder="Hotel Address"
              className="form-control"
              onChange={(e)=> setHotelAddress(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              value={numberOfHotelRoom}
              placeholder="Number of Hotel Room"
              className="form-control"
              onChange={(e)=> setNumberOfHotelRoom(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <textarea
              type="text"
              value={hotelDesc}
              placeholder="Hotel Description"
              className="form-control"
              onChange={(e)=> setHotelDesc(e.target.value)}
            />
          </div>

              <div className="mb-3">
            {hotelImg && (
              <div className="text-center">
                <img
                  src={URL.createObjectURL(hotelImg)}
                  alt="tour_photo"
                  height={"200px"}
                  className="img img-responsive"
                />
              </div>
            )}
          </div>
                <div className="mb-2">
                  <label className="btn btn-outline-secondary col-md-12">
                  {hotelImg ? hotelImg.name : "Upload Photo"}
                  <input
                    type="file"
                    name="hotelPhoto"
                    accept="image/*"
                    onChange={(e) => setHotelImg(e.target.files[0])}
                    hidden
                  />
                </label>
                  <button className="btn btn-primary mt-2" onClick={submitHotelImage}>Hotel Photo Upload</button>
                </div>
              <div className="mb-3">
            <input
              type="number"
              value={discount}
              placeholder="Discount"
              className="form-control"
              onChange={(e)=> setDiscount(e.target.value)}
            />
          </div>
              <div className="mb-3">
                <label>Discount Last Date</label>
            <input
              type="Date"
              value={discountLastDate}
              placeholder="Discount Last Date"
              className="form-control"
              onChange={(e)=> setDiscountLastDate(e.target.value)}
            />
          </div>
              <div className="mb-3">
                <label>Booking Start Date</label>
            <input
              type="Date"
              value={startDate}
              placeholder="Start Date"
              className="form-control"
              onChange={(e)=> setStartDate(e.target.value)}
            />
          </div>
              <div className="mb-3">
                <label>Booking End Date</label>
            <input
              type="Date"
              value={endDate}
              placeholder="End Date"
              className="form-control"
              onChange={(e)=> setEndDate(e.target.value)}
            />
          </div>
          <div>
          <button onClick={handleClick} className="btn btn-primary">CREATE TOUR</button>
          </div>
          </div> 
        </div>
        
      </div>
  );
};

export default TourCreate;
