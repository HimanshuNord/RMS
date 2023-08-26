import React from 'react'
import '../resources/Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footerwrap'>
        <div className='footerlinks'>
            <Link className='footerlink' to='/AccountSettigs'>AccountSettigs</Link>
            <Link className='footerlink' to='/'>Contact Us</Link>
            <Link className='footerlink' to='/Jobs'>Work for Us</Link>
            <Link className='footerlink' to='/AccountSettigs'>Subscribe</Link>
            <Link className='footerlink' to='/AccountSettigs'>Advertise</Link>
            <Link className='footerlink' to='/AccountSettigs'>Terms & Conditions</Link>
        </div>
        <div className='footerlogolinks'>
            <Link className='footerlogolink'><img height={'21.59px'} src={require("../resources/facebookpng.png")} alt='click'></img></Link>
            <Link className='footerlogolink'><img height={'21.59px'} src={require("../resources/instagrampng.png")} alt='click'></img></Link>
            <Link className='footerlogolink'><img height={'21.59px'} src={require("../resources/twitterpng.png")} alt='click'></img></Link>
        </div>
    </div>
  )
}

export default Footer