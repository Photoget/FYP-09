import React from 'react'
import PropTypes from 'prop-types'
import Header from '../MyComponents/Header'
//import Footer from '../MyComponents/Footer'
import { Navigate, useNavigate } from 'react-router-dom'

function Pricing(props) {

    let Navigate = useNavigate();

    const RouteChange4 = () => {
        let path = "/signup";
        Navigate(path)
    } 

  return (
    <div>
        <Header/>
        {/* <Footer/> */}
        <br/>
        <br/>
        <br/>
        <p className="text-center">
            <h1 style={{ fontFamily: "'Allura', cursive", fontSize: '55px' }}>Pricing Table</h1>
        </p>

        <br></br>

        <main>

            <div className='row row-cols-1 row-cols-md-3 w-100'>

                <div className='col'>
                    <div className='card text-center'>
                        <div className='card-header'>
                            <h4 className='fw-normal'>Basic</h4>

                        </div>
                        <div className='card-body'>
                            <h1 className='card-title'>
                                $0 <small className='text-muted fw-light'>/mo</small>

                            </h1>
                            <ul className='list-unstyled py-3'>
                                <li>Generate Upto 100 Photos</li>
                                <li>Customize the Way You Want</li>
                                <li>Download in Medium Quality</li>
                                <li>Social Media Sharing</li>

                            </ul>

                            <br></br>
                            
                            <button className='btn btn-lg w-100 btn-outline-success' onClick={RouteChange4}>
                                Free Sign Up
                            </button>
                        

                        </div>

                    </div>

                </div>


                <div className='col'>
                    <div className='card text-center'>
                        <div className='card-header'>
                            <h4 className='fw-normal'>Premium</h4>

                        </div>
                        <div className='card-body'>
                            <h1 className='card-title'>
                                $2 <small className='text-muted fw-light'>/mo</small>

                            </h1>
                            <ul className='list-unstyled py-3'>
                                <li>Generate Upto 500 Photos</li>
                                <li>Customize the Way You Want</li>
                                <li>Download in High Quality</li>
                                <li>Priority Email Support</li>
                                <li>Social Media Sharing</li>

                            </ul>
                        
                            <button className='btn btn-lg w-100 btn-outline-success'>
                                Buy Now for $2
                            </button>

                        </div>

                    </div>

                </div>


                <div className='col'>
                    <div className='card text-center'>
                        <div className='card-header'>
                            <h4 className='fw-normal'>Business</h4>

                        </div>
                        <div className='card-body'>
                            <h1 className='card-title'>
                                $5 <small className='text-muted fw-light'>/mo</small>

                            </h1>
                            <ul className='list-unstyled py-3'>
                                <li>Generate Unlimited Photos</li>
                                <li>Customize the Way You Want</li>
                                <li>Download in Premium Quality</li>
                                <li>Priority Email Support</li>
                                <li>Social Media Sharing</li>

                            </ul>
                        
                            <button className='btn btn-lg w-100 btn-outline-success'>
                                Buy Now for $5
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </main>

    </div>
        

    
  )
}

Pricing.propTypes = {

}

export default Pricing


{/* <div className='flex flex-col items-center bg-black p-4'>
            <div className='mb-2 mt-12 text-center'>
                <h1 className='mb-4 text-7xl font-black text-white '>
                    Pricing
                </h1>
                <p> Choose the right pricing and get started</p>
            </div> */}
            {/* <div className='flex flex-col gap-8 p-10 xl:flex-row'>
                <Plancard 
                color= "#78E3FC"
                name='Basic'
                description="Get started with the basic plan"
                features={["1 User", "2 Projects", "5 GB Storage"]}
                btnText="Start Free Plan"
                />

                <Plancard 
                color= "#78E3FC"
                name='Basic'
                description="Get started with the basic plan"
                features={["1 User", "2 Projects", "5 GB Storage"]}
                btnText="Start Free Plan"
                />

                <Plancard 
                color= "#78E3FC"
                name='Basic'
                description="Get started with the basic plan"
                features={["1 User", "2 Projects", "5 GB Storage"]}
                btnText="Start Free Plan"
                />
                
            </div> */}

        //</div>
    //</div>