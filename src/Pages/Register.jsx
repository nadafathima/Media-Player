import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { checkEmailApi } from '../Services/allAPIs'
import { registerApi } from '../Services/allAPIs'


function Register() {

    const [user,setUser]=useState({
        username:"",email:"",password:""
    })

    const nav=useNavigate()

    const handleRegister=async()=>{
        console.log(user)
        const {username,email,password}=user
        if (!username || !email || !password) {
          toast.warning("Enter valid inputs")  
        }
        else{
            const emailCheckResult = await checkEmailApi(email);
            if (emailCheckResult.data.length > 0) {
              toast.warning('Email ID already used!!');
            } else {
              const registerResult = await registerApi(user);
              if (registerResult.status === 201) {
                toast.success('Success');
                setUser({ username: '', email: '', password: '' });
                nav('/log');                }
                else{
                    toast.error("Registration Failed!!")
                    console.log(result)
                }
            }
        }
    }

  return (
    <>
        <div className='d-flex justify-content-center align-items-center' style={{height:"80vh"}}>
        <div className="w-75 border shadow bg-light p-5">
            <h1>Register</h1>
            <input type="email" onChange={(e)=>{setUser({...user,email:e.target.value})}} className="form-control mb-3" placeholder='Enter Email id' />
            <input type="text" onChange={(e)=>{setUser({...user,username:e.target.value})}} className="form-control mb-3" placeholder='Enter Username' />
            <input type="password" onChange={(e)=>{setUser({...user,password:e.target.value})}} className="form-control mb-3" placeholder='Enter Password'/>
            <div className='d-flex justify-content-between'>
                <button className='btn btn-success' onClick={handleRegister}>Register</button>
                <Link to={"/log"}>Already Registered?</Link>
            </div>
        </div>
    </div> 

    </>
  )
}

export default Register
