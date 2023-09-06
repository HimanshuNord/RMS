import React, { useState } from 'react'
import '../resources/LatestRatingHome.css'
import 'remixicon/fonts/remixicon.css'

const LatestRatingHome = () => {
    const [verified , setVerified] = useState(false)
  return (
    <div className='LatestRating-Card'>
        <div className='Card-Top' style={{background:'transparent'}}>
            <span style={{background:'transparent', display:'flex'}} className='Pfp-Name'>
                <img height={'52px'} width={'52px'} src={require('../resources/profpng.png')} ></img>
                <span style={{background:'transparent'}}>
                    <h1 style={{background:'transparent',margin:'2px 0 0 16px'}}>Rpeorter | MMJ (OMB)</h1>
                    <p style={{background:'transparent',margin:'2px 0 0 16px'}}>Job details</p>
                </span>
            </span>
            <span>
                <span style={{display:'flex',background:'white'}}>
                    {verified?<p style={{color:'#89C400',background:'white'}}><i class="ri-verified-badge-fill"></i> Verified Rating&nbsp;</p>:<p style={{color:'#828282',background:'white'}}>Rating&nbsp;</p>}
                    <p style={{color:'#828282',background:'white'}}>of&nbsp;</p>
                    <img style={{background:'white',height:'47.53px',width:'57.53px'}} src={require('../resources/abcnewslogo.png')}></img>
                    <h1 style={{fontSize:'18px',fontWeight:'bold',background:'white'}}>&nbsp;KABC</h1>
                </span>
            </span>
        </div>
        <div className='DirectorFeedback'>
            <div className='directorpfp'>
                <img height={'51.99px'} width={'51.99px'} src={require('../resources/brooklinpfp.png')}></img>
                <h1 style={{color:"#828282",fontSize:'14px',fontWeight:'semiBold',top:'27px',left:'89.22px',position:'absolute',margin:'0'}}>News Director</h1>
                <div style={{height:'18px',width:'57px',borderRadius:'6px',color:'white',backgroundColor:'#89c400',fontWeight:'semiBold',fontSize:'10px',display:'flex',alignItems:'center',justifyContent:'center',position:'absolute',top:'27px',left:'191.91px'}}>Current</div>
                <h1 style={{fontWeight:'semiBold',fontSize:'18px',lineHeight:'26px',position:'absolute',top:'47px',left:'89.22px',margin:'0'}}>Brooklyn Simmons</h1>
            </div>
            <div className='directorReview'>
                <h3 style={{color:'#828282',fontSize:'14px',fontWeight:'normal',margin:'0',marginBottom:'4.76px '}}>Review of News Director</h3>
                <p style={{fontWeight:'bold'}}>Nice guy, but lacks decisiveness, leadership, and aggressiveness.</p>
                <p>Eu elementum pellentesque nibh molestie. Tempor purus sed pellentesque integer non. Nec sed tortor nec quis tempor diam non turpis. Sed venenatis at montes, leo tellus egestas. Nulla pharetra.</p>
            </div>
        </div>
        <div className='workhere'>
            <p style={{fontSize:'14px',color:'#828282',fontWeight:'light',background:'transparent',margin:'0'}}>While working here, this person experienced</p>
            <h1 style={{fontWeight:'semiBold',fontSize:'16px',lineHeight:'26px',margin:'0',marginTop:'5px',background:'transparent'}}>Sexual discrimination, Racial discrimination, Sexual harassment, An overall work environment</h1>
        </div>
        <div className='workhere'>
            <p style={{fontSize:'14px',color:'#828282',fontWeight:'light',background:'transparent',margin:'0'}}>Additional comments</p>
            <h1 style={{fontWeight:'semiBold',fontSize:'16px',lineHeight:'26px',margin:'0',marginTop:'5px',background:'transparent'}}>One of the best places you could ever work. Very relaxed environment. </h1>
            <p style={{margin:'0',fontSize:'16px',fontWeight:'mixed',background:'transparent'}}>Everyone is the best at what they do. Management is great. No complaints. Eu pellentesque nibh... <span style={{color:'#194D79',background:'transparent'}}>see more</span></p>
        </div>
        <div className='ratingwrap'>
            <div>
                <p style={{fontSize:'14px',color:'#828282',fontWeight:'light',background:'transparent',margin:'0'}}>Newsroom rating</p>
            </div>
        </div>
    </div>
  )
}

export default LatestRatingHome