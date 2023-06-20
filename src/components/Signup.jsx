import React, { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
const Signup = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate();

    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post('https://node-mongodb-api-7863.onrender.com/register', {name, email, password})
        .then(res =>{
            console.log(res);
            navigate('/')
        }).catch(err=>console.log(err));
    }
  return (
    <div>
        <h1>dang ky</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Name</label>
                    <input onChange={(e)=>setName(e.target.value)} type="text" name="" id="" placeholder='enter your name...' />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='emter your email...' />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='emter your password...' />
                </div>
                <button type="submit">DANG KY</button>
            </form>
            <Link to="/">DANG NHAP</Link>
    </div>
  )
}

export default Signup
