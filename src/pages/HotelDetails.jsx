import React, { useEffect, useRef, useState, useContext } from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup,} from "reactstrap";
import { Link, useParams } from "react-router-dom";
import calculateAvgRating from "./../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import Newsletter from "../shared/Newsletter";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import { AuthContext } from "./../context/AuthContext";
import {message} from 'antd'


const HotelDetails= () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);
  const { user } = useContext(AuthContext); //ata dilei user peye jabo

  //fetch data form database
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);
  const { data: tourBooking } = useFetch(
    `${BASE_URL}/booking/tourBooking/${id}`
  );

  let totalSeatBooked = 0;
  for (let i = 0; i < tourBooking.length; i++) {
    totalSeatBooked = totalSeatBooked + tourBooking[i].guestSize;
  }

  //destructure properties from tour object
  const {
    hotelAddress,
    hotelDesc,
    price,
    numberOfHotelRoom,
    hotelName,
    hotelPhoto,
    reviews,
  } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);



  return (
    <>
      <section className="tourDetails">
        <>
          {loading && <h4 className="text-center pt-5">Loading....</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col lg="8">
                <div className="tour_content">
                  <img src={hotelPhoto} alt="" />
                  <div className="tour_info">
                    <h2>{hotelName}</h2>
                    <div className="d-flex align-items-center gap-5">

                    </div>
                    <div className="tour_extra-details">
                      <span>
                        <i class="ri-map-pin-2-line"></i>
                        {hotelAddress}
                      </span>
                      <span>
                      <i class="ri-home-4-line"></i>
                        {numberOfHotelRoom} Room
                      </span>
                    </div>
                    <h5>Description</h5>
                    <p>{hotelDesc}</p>
                  </div>
                </div>
              </Col>
              <Col lg="4">
                <Booking
                  tour={tour}
                  availableSeat={tour.maxGroupSize - totalSeatBooked}
                />
              </Col>
            </Row>
          )}
        </>
      </section>
      <Newsletter />
    </>
  );
};

export default HotelDetails;
