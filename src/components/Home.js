import React, { useState } from 'react'
import HeroBanner from './HeroBanner'
import { Link } from 'react-router-dom'
import NewsLetterSide from './NewsLetterSide'
import { newsltrside, rmsshop } from '../util/AllContexts'
import '../resources/Home.css'
import { directorSwich } from '../util/function'
import RMSShopCard from './RMSShopCard'
import LookForWork from './LookForWork'
import LatestRatingHome from './LatestRatingHome'
import 'remixicon/fonts/remixicon.css'


const Home = () => {
  const handleDirectorSwitch = () => {
    if(isDirector) setIsDirector(false); else setIsDirector(true);
    directorSwich(isDirector)
  }
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const [isDirector , setIsDirector] = useState(false)
  return (
    <div>
        <HeroBanner height={'528.04px'} width={'100%'}>
          {/* <div className='eclipse5'></div>
          <div className='eclipse1'></div>
          <div className='eclipse4'></div> */}
        <p className='herop' style={{marginBottom:"0"}}>Find thousands of Ratings <br/> from real Journalists</p>
          <div className='search'>
            <select className='stations'> 
              <option style={{height:'43px'}} value="tvnews">TV News</option> 
              <option style={{height:'43px'}} value="radio">Radio</option> 
              <option style={{height:'43px'}} value="youtube">Youtube</option> 
              <option style={{height:'43px'}} value="publications">Publications</option> 
              <option style={{height:'43px'}} value="podcasts">Podcasts</option> 
            </select>
            <input className='searchbox' type='text' placeholder='Search Sections...'></input>
            <button style={{height:'76px'}} className='searchbtn'><img style={{height:'30px',borderRadius:'50%',width:'30px'}} src={require('../resources/search.png')} alt='Search'/></button>
          </div>
          <div className='search-director hides'>
            <input className='searchbox-director' type='text' placeholder='Search News Director...'></input>
            <button style={{height:'76px'}} className='searchbtn'><img style={{height:'30px',borderRadius:'50%',width:'30px'}} src={require('../resources/search.png')} alt='Search'/></button>
          </div>
          <button style={
            {backgroundColor:"transparent",
              color:"white",
              textDecoration: "underline",
               marginTop:'1rem',
              fontWeight:'700',
              fontSize:'24px',
              border:'none'
              }}
              onClick={handleDirectorSwitch}>
                {isDirector?<>Find a Station by name</>:<>Find a News Directior by name</>}
            </button> 
        </HeroBanner>
        <div className='parent'>
          <div className='rating'>
            <h1 style={{fontSize:'36px', fontWeight:'bold'}}>Latest Rating</h1>
            <LatestRatingHome />
            
          </div>
          <div className='newsletter'>
            {/* <input type='text' placeholder='Search articles or writer'></input> */}
            <div style={{display:'flex', justifyContent:'space-between', margin:'10px 0 10px 0'}}>
              <h1 style={{fontSize:'36px', fontWeight:'bold'}}>Newsletter</h1>
              <Link style={{display:'flex',alignItems:'center'}} to='/Newsletter' >See all</Link>
            </div>
            {
              Object.values(newsltrside).map( ( obj , index ) => (
                <NewsLetterSide key={index} newsltrside={obj} />
              ))
            }
            <div className='newssub'>
              <h2>Subscribe to our Newsletter, so you'll never miss one</h2>
              <input style={{height:'58.65px', width:'311.74px',margin: '2% 0 2% 0',borderRadius:'15px',border:'hidden',paddingLeft:'20px',fontSize:'18px',fontWeight:'bold'}} type='text' placeholder='Your email'></input>
              <button style={{height:'58.65px', width:'331.74px',margin: '2% 0 2% 0',borderRadius:'15px',border:'hidden',background: isHovering ?'#023663':'#194D79',color:'#ffffff',fontSize:'18px',fontWeight:'bold'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >Subscribe</button>
            </div>
            <h1 style={{fontSize:'28px'}}>Follow RMS</h1>
            <div className='follink'>
              <span style={{display:'flex'}}><img height={'21.59px'} src={require("../resources/facebookpng.png")} alt=''></img> <p style={{margin:'0 0 0 20px',background:'transparent',fontSize:'18px',fontWeight:'bold'}}>@RateMyStation</p> </span>
              <span style={{display:'flex'}}><img height={'21.59px'} src={require("../resources/instagrampng.png")} alt=''></img> <p style={{margin:'0 0 0 20px',background:'transparent',fontSize:'18px',fontWeight:'bold'}}>@RateMyStation</p> </span>
              <span style={{display:'flex'}}><img height={'21.59px'} src={require("../resources/twitterpng.png")} alt=''></img> <p style={{margin:'0 0 0 20px',background:'transparent',fontSize:'18px',fontWeight:'bold'}}>@RateMyStation</p> </span>
            </div>
          </div>
        </div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <h1 style={{fontSize:'36px', fontWeight:'bold',marginTop:'2rem',marginBottom:'4rem'}}>RateMyStation's Shop</h1>
          <div className='RMS-Shop-Home'>
            {
              Object.values(rmsshop).map( ( obj , index ) => (
                <RMSShopCard key={index} rmsshop={obj} />
              ))
            }
          </div>
          <button className='Rms-Shop-btn'>See All Product</button>
        </div>
        <div style={{width:'100%', display:'flex',justifyContent:'center',marginTop:'2rem'}}>
            <LookForWork/>
        </div>
    </div>
  )
}

export default Home