import React from 'react'
import { NavLink } from 'react-router-dom'
import SignInExtra from './SignInExtra'

const SignUp = () => {
  return (
    <>
        <div className="flex flex-col">
            <h1 className="login-heading font-bold text-4xl">Sign Up</h1>
            <p className="intro-para mt-[10px]">Welcome ! Please Enter your details</p>
            <form className='flex flex-col'>
              <input type="text" className="email-input border-b-[1px] border-solid border-black px-[15px] py-[10px] mt-[40px] outline-none" id='name' placeholder='Enter your Name'/>
              <input type="email" className="email-input border-b-[1px] border-solid border-black px-[15px] py-[10px] mt-[15px] outline-none" id="email" placeholder="Enter your Email"/>
              <input type="password" className="password-input border-b-[1px] border-solid border-black px-[15px] py-[10px] mt-[15px] outline-none" id="password" placeholder="Enter your Password"/>
              <input type='submit' value="Submit" className="Login-btn mt-[15px] bg-emerald-900 text-white py-[10px] cursor-pointer" id="login-btn"/>
            </form>
            
            <div className='mt-[20px]'>
                <span className="">Aready have an account ? </span>
                <span className="underline cursor-pointer"><NavLink to='/'>Login Here</NavLink></span>
            </div>
            <SignInExtra/>
        </div>
    </>
  )
}

export default SignUp