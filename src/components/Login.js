import React from 'react'
import { NavLink } from 'react-router-dom'
import SignInExtra from './SignInExtra'

const Login = () => {
  return (
    <>
        <div className="flex flex-col">
            <h1 className="font-bold text-4xl">Login</h1>
            <p className="mt-[10px]">Welcome Back ! Please Enter your details</p>
            <form className='flex flex-col'>
              <input type="email" className="email-input border-b-[1px] border-solid border-black px-[15px] py-[10px] mt-[40px] outline-none" id="email" placeholder="Enter your Email"/>
              <input type="password" className="password-input border-b-[1px] border-solid border-black px-[15px] py-[10px] mt-[15px] outline-none" id="password" placeholder="Enter your Password"/>
              <input type='submit' value="Submit" className="Login-btn mt-[15px] bg-[#000000] text-white py-[10px] cursor-pointer" id="login-btn"/>
            </form>
            <div className='mt-[20px]'>
                <span className="">Didn't have an account ? </span>
                <span className="underline cursor-pointer"><NavLink to='/signup'>Sign up for Free</NavLink></span>
            </div>
            <SignInExtra/>
        </div>
    </>
  )
}

export default Login