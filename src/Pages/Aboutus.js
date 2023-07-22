//import React from 'react'
import React,{Fragment,useState} from 'react'
import PropTypes from 'prop-types'
import Header from '../MyComponents/Header'
//import Footer from '../MyComponents/Footer'
import "./aboutus.css"

import pic from "../images/aboutus2.jpg"



function Aboutus(props) {
    const [ toggleTab, setToggleTab] = useState(1)
    const toggleState = (index) =>{
      setToggleTab(index)
    }
  return (
    <div>
      <Header/>
      {/* <Footer/> */}
      {/* <br></br>
      <br></br> */}

      {/* <span> &nbsp; </span>
      <span> &nbsp; </span>
      <span> &nbsp; </span> */}

      <Fragment>

    <section className="about">

    <div className="row">

    <div className="column">
      <div className="about-img"> 
        <figure>
            <img src={pic} alt="aboutus2"/>
        </figure>
        <br></br>
        {/* <h3>This is Where PhotGet Comes Into the Picture!</h3>
       <p>To solve the above-mentioned problem and fill the market gap, we have made this AI-based software that can generate images from a user-provided text description.

The user can also provide a text description for further enhancements and improvements on that image. 
</p> */}
      <br></br>
      </div>
    </div>

    <div className="column">

    <div className="tabs">

    <div className={toggleTab === 1 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(1)}
    >
      <h2>About</h2>
    </div>

    <div className={toggleTab === 2 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(2)}
    >
      <h2>Tools</h2>
    </div>

    <div className={toggleTab === 3 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(3)}
    >
      <h2>Team</h2>
    </div>
      
    </div>

    <div className="tab-content">

    {/* About Content */}

    <div className={toggleTab === 1 ?"content active-content":"content"}>
      <h3>Why We Have Made PhotoGet?</h3>
      <p>Since the advent of the Internet, the world has become a global village. As more and more people are connecting over the Internet, the need for conveying ideas is growing. 
                Text is a medium that is used the most all over the globe to communicate and convey ideas, messages, and information.
            Nonetheless, a much more efficient way to convey ideas, in terms of time and effort, is sometimes images and pictures that can speak a thousand words, especially considering netizens' significantly decreased attention span over the last half a decade.
            However, not every picture is available on the Internet. 
            There are certain scenarios that are hard to find and even harder to design.  
            A lot of content creators and design agencies oftentimes need pictures or designs that are unprecedented to convey their ideas to their audience in a much more efficient manner.</p>
       <h3>This is Where PhotGet Comes Into the Picture</h3>
       <p>To solve the above-mentioned problem and fill the market gap, we have made this AI-based software that can generate images from a user-provided text description.

The user can also provide a text description for further enhancements and improvements on that image. 
</p>
    </div>

    {/* Skills Content */}

    <div className={toggleTab === 2 ?"content active-content":"content"}>
      <h2>Tools & Tech</h2>
      <p>The following are the tools and technologies we have used in developing PhotoGet:</p>

       <div className="skills-row">

       <div className="skills-column">
        <div className="progress-wrap">
          <h3>Machine Learning</h3>
          <div className="progress">
            <div className="progress-bar">
              <span>90%</span>
            </div>
          </div>
        </div>
       </div>

       <div className="skills-column">
        <div className="progress-wrap">
          <h3>Python</h3>
          <div className="progress">
            <div className="progress-bar Designer">
              <span>90%</span>
            </div>
          </div>
        </div>
       </div>

       <div className="skills-column">
        <div className="progress-wrap">
          <h3>Javascript</h3>
          <div className="progress">
            <div className="progress-bar Javascript">
              <span>75%</span>
            </div>
          </div>
        </div>
       </div>

       <div className="skills-column">
        <div className="progress-wrap">
          <h3>React JS</h3>
          <div className="progress">
            <div className="progress-bar PhotoShop">
              <span>70%</span>
            </div>
          </div>
        </div>
       </div>

       </div>

    </div>

       {/* Team Members */}

    <div className={toggleTab === 3 ?"content active-content":"content"}>

    <div className="exp-column">
      <h3>Mehal Rashid</h3>
      <span>18B-063-CS</span>
      {/* <p> I am handling the front end</p> */}
    </div>

    <div className="exp-column">
      <h3>Rameen Irfan</h3>
      <span>19B-012-CS</span>
      {/* <p>I am responsible for documentation</p> */}
    </div>

    <div className="exp-column">
      <h3>Saad Mirza</h3>
      <span>19B-043-CS</span>
      {/* <p>I am responsible for the backend of this project</p> */}
    </div>

    <div className="exp-column">
      <h3>Misha Shahab</h3>
      <span>19B-004-CS</span>
      {/* <p>I am responsible for handling UMLs</p> */}
    </div>

    <div className="exp-column">
      <h3>Usman Fareed</h3>
      <span>18B-046-CS</span>
      {/* <p>I am responsible for handling UMLs</p> */}
    </div>
    
    </div>
        
    </div>

    </div>

    </div>

    </section>
    
    </Fragment>

      {/* <section>

        <div className='about-us-card' align="center">

            <p className="text-center" font="allura">
        <h1 style={{ fontFamily: "'Allura', cursive", fontSize: '55px' }}>A Little About Us</h1>
      </p>

      <br></br>
            <div className='text-alignment'>
                <p style={{ fontFamily: "Lora, serif", fontSize: '18px' }}> Since the advent of the Internet, the world has become a global village.  As more and more people are connecting over the Internet, the need for conveying ideas is growing. 
                Text is a medium that is used the most all over the globe to communicate and convey ideas, messages, and information. <br></br>

            Nonetheless, a much more efficient way to convey ideas, in terms of time and effort, is sometimes images and pictures that can speak a thousand words, especially considering netizens' significantly decreased attention span over the last half a decade. 
            <br></br>

            However, not every picture is available on the Internet. 
            There are certain scenarios that are hard to find and even harder to design.  
            A lot of content creators and design agencies oftentimes need pictures or designs that are unprecedented to convey their ideas to their audience in a much more efficient manner.  

                </p>

    </div>

        </div>
      </section> */}

      
    </div>
  )
}

Aboutus.propTypes = {

}

export default Aboutus

