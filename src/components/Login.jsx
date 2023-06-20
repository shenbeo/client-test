import React, { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate();

    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post('https://node-mongodb-api-7863.onrender.com/login', { email, password})
        .then(res =>{
            console.log(res);
              if(res.data === "Success"){
                navigate('/home')
              }
        }).catch(err=>console.log(err));
    }
  return (
    <div>
        <h1>dang nhap</h1>
            <form onSubmit={handleSubmit}>
             
                <div>
                    <label htmlFor="">Email</label>
                    <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='emter your email...' />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='emter your password...' />
                </div>
                <button type="submit">DANG NHAP</button>
            </form>
            <Link to="/signup">DANG KY</Link>
    </div>
  )
}

export default Login
