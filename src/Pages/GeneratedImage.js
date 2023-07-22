import React, { Component } from 'react'
import PropTypes from 'prop-types'
import pic from '../images/sunset1.png'
import sunset2 from '../images/sunset2.png'
import sunset3 from '../images/sunset3.png' 
//import pic from '../images/sunset2.png'
//import pic from '../images/sunset3.png'
import Header from '../MyComponents/Header'
//import Footer from '../MyComponents/Footer'


export class GeneratedImage extends Component {
  static propTypes = {
    
  }
    

  render() {
    
    return (
        
      <div>
        <Header/>
        {/* <Footer/> */}
        <figure>
            <br/>
            <br/>
            <br/>
            <p className="text-center" font="allura">
                <h1 style={{ fontFamily: "'Allura', cursive", fontSize: '55px' }}>Photo Get</h1>
            </p>
            <br/>
            <br/>
            
            <span> &nbsp; </span>
            <span> &nbsp; </span>
            <span> &nbsp; </span>
            <span> &nbsp; </span>
            <span> &nbsp; </span>
            <span> &nbsp; </span>
            <span> &nbsp; </span>
            <span> &nbsp; </span>
            <span> &nbsp; </span>
            <span> &nbsp; </span>
            <span> &nbsp; </span>
            <span> &nbsp; </span>
            <span> &nbsp; </span>
            
            
            <img src={pic} alt="Generated Pic"/>
            <span> &nbsp; </span>
            <img src={sunset2}/>
            <span> &nbsp; </span>
            <img src={sunset3}/>

        </figure>
      </div>
    )
  }
}

export default GeneratedImage
