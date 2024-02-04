import React, { useContext } from "react";
import AdminMenu from "../Layout/AdminMenu";
import { BASE_URL } from "../../utils/config";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Users = () => {
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)
  const {data:userInfo} = useFetch(`${BASE_URL}/users/${user?._id}`)

  if(userInfo?.role==='user'){
    navigate('/')
}else if(!userInfo){
    navigate('/')
}
  const { data: users, loading, error } = useFetch(`${BASE_URL}/users/`);
  
  return (
  <>
      {loading && <h4 className="text-center pt-5">Loading....</h4>}
      {error && <h4 className="text-center pt-5">{error}</h4>}
      { !loading && !error &&(
            <div className="container-fluid m-3 p-3">
            <div className="row">
              <div className="col-md-3">
                <AdminMenu />
              </div>
              <div className="col-md-9">
                <h3 className="text-center">All Users</h3>
      
                <div>
                  <table class="table table-hover">
                    <thead className="table-dark">
                      <tr>
                        <th scope="col">Number</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Photo</th>
                        <th scope="col">Role</th>
                        <th scope="col">Created Date</th>
                      </tr>
                    </thead>
                    <tbody>
                {
                  users.map((user,i)=>(
                    <tr key={user._id}>
                    <th scope="row">{i+1}</th>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td><img src={user.photo} width="50px" height="50px" alt=""/></td>
                    <td>{user.role}</td>
                    <td><span>{new Date(user.createdAt).toLocaleDateString("en-US")}</span></td>
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
  );
};

export default Users;
