//import React from 'react'
import Header from '../MyComponents/Header'
import Footer from "../MyComponents/Footer"
import "./login.css";
import React, {useEffect, useState} from "react";
//import GoogleLogin from "react-google-login";
//import { gapi } from "gapi-script";

function Login() {
    const heading2 = {
        fontFamily: "Allura, cursive",
        //fontWeight: 'bold',
        fontSize: '55px'
      };

    const heading3 = {
        fontFamily: "Inria Serif, serif",
        fontSize: "45px"
    };

    

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
        <br/>
        <Footer/>
        
        <p className="text-center" font="allura">
            <h1 style={{ fontFamily: "'Allura', cursive", fontSize: '55px' }}>Photo Get</h1>
        </p>

        
        <br/>
        <br/>

        <div className='d-flex justify-content-center'>

            <div className="cover">
                <h2>Login</h2>
                <br/>
                <input type="text" placeholder="Enter Your Username" />
                <br/>
                <input type="password" placeholder="Enter Your Password" />
                <br/>

                <div className="login-btn" onClick={popup}>Login</div>
                <br/>


                <p className="text">Or Login using</p>

                

                <div className="alt-login">
                    <div className="facebook"></div>
                    <div className="google">
                        
                    </div>
                </div>

                <div className={popupStyle}>
                    <h3>Login Failed</h3>
                    <p>Username or password incorrect</p>
                </div>
                <br/>
            </div>
        </div>
      
    </div>
  )
}

export default Login
