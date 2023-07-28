import React, {useState} from 'react'
import Header from '../MyComponents/Header'
import pic from "../images/PhotoGetmain.png"
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { redirect } from 'react-router-dom';


function Home() {
 const [inputtext, setinputtext] = useState("");
 const [imageurl, setimageurl] = useState("");
 const [loader, setloader] = useState(false);
    let navigate = useNavigate(); 
    async function routeChange3(){ 
      console.log(inputtext)
      setloader(true)
        const result = await fetch(`https://3201-34-91-27-104.ngrok.io/StableDiffusion/${inputtext}`, {
        method: 'GET',
        headers: {
          "ngrok-skip-browser-warning": "69420"
        },
      });

      const json = await result.json();
      console.log(json)
      setloader(false)
      setimageurl(json)
    //     let path = '/GenerateImage'; 
    //     navigate(path);

    // const headingh1 = {
    //     fontFamily: "Allura, cursive",
    //     //fontWeight: 'bold',
    //     fontSize: '55px'
    
    // }

}

async function routeChange4(){ 
  setimageurl("")
  setinputtext("")
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
            <input className="form-control me-3" 
            value={inputtext}
									onChange={(e) => setinputtext(e.target.value)}
            type="search" placeholder="Type what's on your mind" align="center" aria-label="Search" style={{
              width:'560px' 
            }} />
            <div className='d-flex justify-content-center'>

              <button className="btn btn-outline-success mt-2" type="button" onClick={routeChange3}>
                Generate</button>
                <button className="btn btn-outline-success mt-2" type="button" onClick={routeChange4}>
                Reload</button>
            </div>
            <p className="text-center" font="allura">
        <h1 style={{ fontFamily: "'Allura', cursive", fontSize: '55px' }}>{loader ? "Loading..." : null}</h1>
      </p>
           
            <div className='w-[30%]'>
                <img className="h-[70px]  w-[70px] object-contain" src={"data:image/png;base64, " + imageurl} />
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
