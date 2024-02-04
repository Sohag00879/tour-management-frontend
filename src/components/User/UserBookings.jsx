import React, { useContext } from 'react'
import UserMenu from '../Layout/UserMenu'
import useFetch from '../../hooks/useFetch'
import { BASE_URL } from '../../utils/config'
import { AuthContext } from '../../context/AuthContext'

const UserBookings = () => {
  const {user} = useContext(AuthContext)
  const {data:userBooks, loading, error} = useFetch(`${BASE_URL}/booking/${user._id}`)

  return (
  
    <>
    {loading && <h4 className="text-center pt-5">Loading....</h4>}
      {error && <h4 className="text-center pt-5">{error}</h4>}
      { !loading && !error &&(
            <div className="container-fluid m-3 p-3">
            <div className="row">
              <div className="col-md-3">
                <UserMenu />
              </div>
              <div className="col-md-9">
                <h3 className="text-center">All Tours , You Have Already Booked.</h3>
      
                <div>
                  <table class="table table-hover table-bordered">
                    <thead className="table-dark">
                      <tr>
                        <th scope="col">Number</th>
                        <th scope="col">Tour Name</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Guest Number</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Booking Date</th>
                        <th scope="col">Booked Date</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                {
                  userBooks.map((book,i)=>(
                    <tr key={book._id}>
                    <th scope="row">{i+1}</th>
                    <td>{book.tourName}</td>
                    <td>{book.fullName}</td>
                    <td>{book.userEmail}</td>
                    <td>{book.phone}</td>
                    <td>{book.guestSize}</td>
                    <td>{book.amount}</td>
                    <td>{new Date(book.createdAt).toLocaleDateString("en-US")}</td>
                    <td>{new Date(book.bookAt).toLocaleDateString("en-US")}</td>
                    <td><button className='btn btn-danger'>Cancel</button></td>
                  </tr>
                  ))
                }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
      )}
    </>
  
  )
}

export default UserBookings