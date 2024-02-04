import React from 'react'
import { BASE_URL } from '../../utils/config';
import useFetch from '../../hooks/useFetch';
import '../../styles/all-tours.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AllTours = () => {
const navigate = useNavigate()

  //delete a product
  const handleDelete = async (id) => {
    try {
      const confirmed = window.confirm('Are you sure want to delete this tour?');
      if(confirmed){
        const { data } = await axios.delete(
          `${BASE_URL}/tours/${id}`
        );
        if(data.success){
          alert(data.message)
        }
        navigate("/admin/tours");
      }
   
    } catch (error) {
      console.log(error);
    }
  };

  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/`);

  const handleBack = () =>{
    navigate(-1)
  }

  return (
    <>
      {loading && <h4 className="text-center pt-5">Loading....</h4>}
      {error && <h4 className="text-center pt-5">{error}</h4>}
    {!loading && !error &&(
      <div className='row'>
      <div className='col-md-12'>
        <h3 className='text-center'>All Tour List</h3>
        <button className='btn btn-dark mb-3 ms-2' onClick={handleBack}><i class="ri-arrow-left-fill"></i>GO BACK</button>
     <div>
     <table class="table table-hover table-responsive table-bordered">
  <thead className='table-dark'>
    <tr>
      <th scope="col">Number</th>
      <th scope="col">Title</th>
      <th scope="col">City</th>
      <th scope="col">Address</th>
      <th scope="col">Distance</th>
      <th scope="col">Photo</th>
      {/* <th scope="col">Description</th> */}
      <th scope="col">Price</th>
      <th scope="col">Max Group Size</th>
      <th scope="col">Hotel Name</th>
      <th scope="col">Hotel Address</th>
      <th scope="col">Hotel Room NO.</th>
      <th scope="col">Hotel Photo</th>
      <th scope="col">Discount</th>
      <th scope="col">Start Date</th>
      <th scope="col">End Date</th>
      <th scope='col'>Action</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>
{
  tour.map((t,i)=>(
    <tr key={t._id}>
    <th scope="row">{i+1}</th>
    <td>{t.title}</td>
    <td>{t.city}</td>
    <td>{t.address}</td>
    <td>{t.distance}</td>
    <td><img src={t.photo} height="100px" width="100px" alt=''/></td>
    {/* <td>{t.desc}</td> */}
    <td>{t.price}</td>
    <td>{t.maxGroupSize}</td>
    <td>{t.hotelName}</td>
    <td>{t.hotelAddress}</td>
    <td>{t.numberOfHotelRoom}</td>
    <td><img src={t.hotelPhoto} height="100px" width="100px" alt=''/></td>
    <td>{t.discount}</td>
    <td>{new Date(t.startDate).toLocaleDateString("en-US")}</td>
    <td>{new Date(t.endDate).toLocaleDateString("en-US")}</td>
    <td><button className='btn btn-success'><Link to={`update/${t._id}`}>Update</Link></button></td>
    <td><button className='btn btn-danger' onClick={()=> handleDelete(t._id)}>Delete</button></td>
  </tr>
  ))
}

  </tbody>
</table>
     </div>
      </div>
    </div>
    )}
    </>
  )
}

export default AllTours