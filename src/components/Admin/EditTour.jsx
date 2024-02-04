import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../utils/config";
import axios from 'axios'
import { message } from "antd";

const EditTour = () => {
    const {id} = useParams()
    const navigate = useNavigate()
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
    const [hotelPhoto, setHotelPhoto] = useState("");
    const [hotelImg, setHotelImg] = useState("");
    const [discount, setDiscount] = useState("");
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
            discount:discount,
            startDate:startDate,
            endDate:endDate
          }
          const res = await fetch(`${BASE_URL}/tours/${id}`, {
            method:'put',
            headers:{
              'content-type':'application/json'
            },
            credentials: 'include',
            body:JSON.stringify(tourData)
          })
          const result = await res.json()
          if(res.ok) {
            navigate('/admin/tours')
            return message.success(result.message)
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
  
  

  //previous tour data
  const getPreviousTourData = async () =>{
    try {
        const {data} = await axios.get(`${BASE_URL}/tours/${id}`);
       setTitle(data.data.title)
       setCity(data.data.city)
       setAddress(data.data.address)
       setDistance(data.data.distance)
       setPhoto(data.data.photo)
       setDesc(data.data.desc)
       setPrice(data.data.price)
       setMaxGroupSize(data.data.maxGroupSize)
       setHotelName(data.data.hotelName)
       setHotelAddress(data.data.hotelAddress)
       setNumberOfHotelRoom(data.data.numberOfHotelRoom)
       setHotelPhoto(data.data.hotelPhoto)
       setStartDate(data.data.startDate)
       setEndDate(data.data.endDate)
    } catch (error) {
        
    }
  }

  useEffect(()=>{
getPreviousTourData();
  },[])



  return (
    <div className="container-fluid m-3 p-3">
         <h2 className="text-center">Edit Tour</h2>
      <div className="row d-flex align-content-center justify-content-center">
        <div className="col-md-9">
          <div className="mb-3">
            <input
              type="text"
              value={title}
              placeholder="Write a Title"
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={city}
              placeholder="Write City Name"
              className="form-control"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              placeholder="Write Address"
              className="form-control"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              value={distance}
              placeholder="Write Distance"
              className="form-control"
              onChange={(e) => setDistance(e.target.value)}
            />
          </div>
          <div>
                <div>
                  <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
                  <button className="btn btn-outline-primary" onClick={submitImage}>Tour Photo Upload</button>
                </div>
              </div> 
          <div className="mb-3">
            <input
              type="text"
              value={desc}
              placeholder="Write Description"
              className="form-control"
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              value={price}
              placeholder="Write Price"
              className="form-control"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              value={maxGroupSize}
              placeholder="Write Max People"
              className="form-control"
              onChange={(e) => setMaxGroupSize(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={hotelName}
              placeholder="Write Hotel Name"
              className="form-control"
              onChange={(e)=> setHotelName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={hotelAddress}
              placeholder="Write Hotel Address"
              className="form-control"
              onChange={(e)=> setHotelAddress(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              value={numberOfHotelRoom}
              placeholder="Write Number of Hotel Room"
              className="form-control"
              onChange={(e)=> setNumberOfHotelRoom(e.target.value)}
            />
          </div>
          <div>
                <div>
                  <input type="file" onChange={(e)=>setHotelImg(e.target.files[0])}/>
                  <button className="btn btn-outline-primary" onClick={submitHotelImage}>Hotel Photo Upload</button>
                </div>
              </div> 
              <div className="mb-3">
            <input
              type="number"
              value={discount}
              placeholder="Write Discount"
              className="form-control"
              onChange={(e)=> setDiscount(e.target.value)}
            />
          </div>
              <div className="mb-3">
            <input
              type="Date"
              value={startDate}
              placeholder="Write Start Date"
              className="form-control"
              onChange={(e)=> setStartDate(e.target.value)}
            />
          </div>
              <div className="mb-3">
            <input
              type="Date"
              value={endDate}
              placeholder="Write End Date"
              className="form-control"
              onChange={(e)=> setEndDate(e.target.value)}
            />
          </div>
          <div>
          <button onClick={handleClick} className="btn btn-primary">Submit</button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default EditTour;
