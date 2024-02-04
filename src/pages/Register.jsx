import React, { useState ,useContext} from 'react'
import {Row, Col, Form, FormGroup, Button} from 'reactstrap'
import {Link,useNavigate} from 'react-router-dom';
import '../styles/login.css';

import registerImg  from '../assets/images/register.png';
import userIcon from '../assets/images/user.png';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';
import axios from 'axios'
import { message } from 'antd';

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const [image,setImage] = useState("");

  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleSubmit = async e =>{
    e.preventDefault();
    try {
      const registerData = {
        username :username,
        email:email,
        password:password,
        photo:photo
      }
  const {data} = await axios.post(`${BASE_URL}/auth/register`,registerData);
  if(data.success){
    message.success(data.message);
    navigate('/login')
    dispatch({type:'REGISTER_SUCCESS'})
  }else{
    message.error('something went wrong')
  }
    } catch (err) {
      message.error(err.message)
    }
  }


  const submitRegisterImage= () =>{
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


  return <section>
     <Row>
      <Col lg='8' className='m-auto'>
    <div className="login_container d-flex justify-content-between">
      <div className="login_img">
        <img src={registerImg} alt="" />
      </div>
      <div className="login_form">
        <div className="user">
          <img src={userIcon} alt="" />
        </div>
        <h2>Register</h2>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <input type="text" placeholder='Username' required id='username' onChange={(e)=>setUserName(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <input type="email" placeholder='Email' required id='email' onChange={(e)=>setEmail(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <input type="password" placeholder='Password' required id='password' onChange={(e)=>setPassword(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <input type="file" placeholder='Upload Photo' required id='photo' onChange={(e)=>setImage(e.target.files[0])} />
            <Button className='bg-dark' onClick={submitRegisterImage}>Upload Your Photo</Button>
          </FormGroup>
          <Button className='btn secondary_btn auth_btn' type='submit'>Create Account</Button>
        </Form>
        <p>Already have an account ? <Link to='/login'>Login</Link></p>
      </div>
    </div>
      </Col>
    </Row>
  </section>
}

export default Register;