import React, { useContext, useState } from 'react'
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import './../styles/blogs.css'

const Blog = () => {
  const navigate = useNavigate();
  const [blog,setBlog] = useState('')
  const { user } = useContext(AuthContext); 
  const { data: userInfo } = useFetch(`${BASE_URL}/users/${user?._id}`);
  const { data: blogs,loading,error } = useFetch(`${BASE_URL}/blogs`);

  const handleClick = async(e) =>{
    e.preventDefault();
   try {
    if(!user ||  user===undefined || user===null) {
      return message.warning('Please sign in')
    }
    const blogsData = {
        blog:blog,
        username:userInfo.username,
        photo:userInfo.photo
      }
      const res = await fetch(`${BASE_URL}api/v1/blogs`, {
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        credentials: 'include',
        body:JSON.stringify(blogsData)
      })
      const result = await res.json()
      if(res.ok) {
        message.success(result.message)
        navigate('/blogs')
      }
   } catch (error) {
    console.log(error)
   }
      
}


  return (
    <>
    {loading && <h4 className="text-center pt-5">Loading....</h4>}
    {error && <h4 className="text-center pt-5">{error}</h4>}
   {!loading && !error &&(
    <div className='container-fluid m-3 p-3'>
    <div className="blogs_container">
   {
    blogs.map((blog)=>(
     <div key={blog._id} className='border border-1 p-5 bg-black text-white'>
      <p>{blog.blog}</p>
      <div className='d-flex mt-3'>
      <div>
          <img width="60px" height="60px" style={{borderRadius:'50%'}} src={blog.photo} alt="" />
        </div>
        <div className='ms-5'>
        <h6>{blog.username}</h6>
        <p>Customer</p>
        </div>
      </div>
     </div>
    ))
   }
    </div>
     <div className='row d-flex align-items-center justify-content-center'>
      <div className='col-md-6'>
      <h3 className='text-center mt-5'>Blogs</h3>
      <div className="mb-3">
            <textarea
              type="text"
              value={blog}
              placeholder="Write your blogs about our services"
              className="form-control"
              onChange={(e) => setBlog(e.target.value)}
            />
            <button className='btn btn-primary mt-3' onClick={handleClick}>Add</button>
          </div>
      </div>
    </div>
   </div>
   )}
   </>
  )
}

export default Blog