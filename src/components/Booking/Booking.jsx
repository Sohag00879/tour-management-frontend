import React,{useState,useContext} from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";
import {message} from 'antd'

const Booking = ({ tour, avgRating, availableSeat }) => {
  const { price, reviews,title,_id,discount } = tour;
  const navigate  = useNavigate();
  const {user} = useContext(AuthContext);

  const [fullName,setFullName] = useState('');
  const [phone,setPhone] = useState('');
  const [guestSize,setGuestSize] = useState('');
  const [bookAt,setBookAt] = useState('');

  
let finalPrice;

if(discount){
  const lessPrice = (discount/100)* price;
  finalPrice = price - lessPrice;
}else{
  finalPrice = price;
}


const serviceFee = 10
const totalAmount = Number(finalPrice) * Number(guestSize) + Number(serviceFee);

const bookingData = {
  tourId:_id,
  userId: user && user._id,
  userEmail: user && user.email,
  tourName:title,
  fullName : fullName,
  phone: phone,
  amount:totalAmount,
  guestSize:guestSize,
  bookAt:bookAt
}



  // send data to the server
  const handleClick = async e => {
    e.preventDefault()
    try {
      if(!user ||  user===undefined || user===null) {
        return message.warning('Please sign in')
      }
      if(fullName || phone || guestSize ===''){
        message.warning("Please fill up all the fields!")
      }
      if(guestSize > availableSeat){
        return message.error('No Seat Available , Please try another service')
      }
      const res = await fetch(`${BASE_URL}/booking`, {
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        credentials: 'include',
        body:JSON.stringify(bookingData)
      })
      const result = await res.json()
     if(result.success){
      message.success(result.message)
      navigate('/thank-you');
     }
    } catch (err) {
      message.error(err)
    }
  }

  return (
    <div className="booking">
      <div className="booking_top d-flex align-items-center justify-content-between">
        <h4>
          ${price} <span>/per person(Regular)</span> <br/>
          {discount && <>${finalPrice} <span>/per person(${discount}% discount)</span></>}
        </h4>
        <span className="tour_rating d-flex align-items-center">
          <i class="ri-star-s-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>
      {/* booking form */}
      <div className="booking_form">
        <h5>Information</h5>
        <Form className="booking_info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={(e)=>setFullName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={(e)=>setPhone(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={(e)=>setBookAt(e.target.value)}
            />
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              required
              onChange={(e)=>setGuestSize(e.target.value)}
            />
          </FormGroup>
        </Form>
      </div>
      {/* booking form end */}

      {/* booking bottom */}
      <div className="booking_bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
          <h5 className="d-flex align-items-center gap-1">${finalPrice} <i class="ri-close-line"></i> 1 person</h5>
          <span>$ {finalPrice}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
          <h5>Service charge</h5>
          <span>${serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
          <h5>Total</h5>
          <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>
        <Button className="btn primary_btn w-100  mt-4" onClick={handleClick}>Book Now</Button>
      </div>
    </div>
  );
};

export default Booking;
