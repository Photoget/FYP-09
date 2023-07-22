import React from 'react'
import Header from '../MyComponents/Header'
import pic from "../images/PhotoGetmain.png"
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { redirect } from 'react-router-dom';


function Home() {

    let navigate = useNavigate(); 
    const routeChange3 = () =>{ 
        let path = '/GenerateImage'; 
        navigate(path);

    const headingh1 = {
        fontFamily: "Allura, cursive",
        //fontWeight: 'bold',
        fontSize: '55px'
    
    }

}
  return (
    <div>
      <Header />
      

      <p className="text-center" font="allura">
        <h1 style={{ fontFamily: "'Allura', cursive", fontSize: '55px' }}>Photo Get</h1>
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }} >
        <form className="d-flex" role="search">
          <div>
            <input className="form-control me-3" type="search" placeholder="Type what's on your mind" align="center" aria-label="Search" style={{
              width:'560px' 
            }} />
            <div className='d-flex justify-content-center'>

              <button className="btn btn-outline-success mt-2" type="button" onClick={routeChange3}>
                Generate</button>
            </div>
 
          </div>
          {/* <div className=''> */}

          {/* </div> */}

        </form>
      </div>


      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
          
        }} >
        <span>
          <p className="image-center">
            <br></br>
            <img src={pic} align="center" />
          </p>
        </span>
      </div>
    </div>
  )
}

export default Home
