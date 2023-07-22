//import React from 'react'
import Header from "../MyComponents/Header";
import Footer from "../MyComponents/Footer";
import "./signup.css";
import pic from "../images/signup.jpg"
import { NavLink } from 'react-router-dom';
import React, {useEffect, useState} from "react";

function Signup() {
    
    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    const onSuccess = e => {
        alert("User signed in")
        console.log(e)
    }

    const onFailure = e => {
        alert("User sign in Failed")
        console.log(e)
    }
  return (
    <div>
        <Header/>
        <br/>
        <Footer/>
        <p className="text-center" font="allura">
            <h1 style={{ fontFamily: "'Allura', cursive", fontSize: '55px' }}>Photo Get</h1>
        </p>

        <section className='signup'>
            <div className='container mt-5'>
                <div className='signup-content'>
                    <div className='signup-image'>
                            <figure>
                                <img src={pic} alt="registration pic"/>
                            </figure>

                            <NavLink to="/login" className="signup-image-link">Already Registered? Sign in</NavLink>


                    </div>
                    <div className='signup-form'>

                        <h2 className='form-title'>Sign Up</h2>
                        
                            <div className='form-group'>
                                <label htmlFor='name'>
                                    <i className="zmdi zmdi-account "></i>
                                </label>
                                <input type="text" name="name" id="name" autoComplete="off" placeholder='Your Name'/>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='email'>
                                    <i className="zmdi zmdi-email material-icons-name"></i>
                                </label>
                                <input type="email" name="email" id="email" autoComplete="off" placeholder='Your Email'/>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='phone'>
                                    <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                </label>
                                <input type="number" name="phone" id="phone" autoComplete="off" placeholder='Your Phone Number'/>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='password'>
                                    <i className="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                                <input type="password" name="password" id="password" autoComplete="off" placeholder='Set Your Password'/>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='cpassword'>
                                    <i className="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                                <input type="password" name="cpassword" id="cpassword" autoComplete="off" placeholder='Confirm Your Password'/>
                            </div>
                            <br/>

                            <div className='form-button' onClick={popup}>
                                <input type="submit" name="signup" id="signup" className='form-button' value="Register"/>    
                            </div>
                            <br/>
                            
                            <div className={popupStyle}>
                                <h3>Signup Failed</h3>
                                <p>Please Enter Correct Information</p>
                            </div>

                        
                        
                    </div>

                   
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default Signup
