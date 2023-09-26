import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const[name,setName]=useState();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState()
    const navigate = useNavigate()
    
    const handlesubmit=(e)=>{
      e.preventDefault()
      axios.post('http://localhost:3001/register',{name, email, password})
      .then(result=>{console.log(result)
        navigate('/login')
    })
      .catch(err=>console.log(err))
    }
    return (
        <div className='container my-5'>
            <h2>User Register</h2>
            <form>
                <div class="mb-3 col-auto"> 
                    <label class="form-label">Name</label>
                    <input type="text" class="form-control w-50" name='name' onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control w-50" name='email' onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control w-50" name='password' onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                
                <button  class="btn btn-primary" onClick={(e)=>handlesubmit(e)}>Register</button>
            </form>
        </div>
    )
}
export default SignUp;