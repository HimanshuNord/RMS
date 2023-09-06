import React from 'react'
import HeroBanner from './HeroBanner'

const LookForWork = () => {
  return (
    <>
        <HeroBanner height={'348.61px'} width={'90%'} border={'10px'} >
            <h1 style={{fontSize:'36px',fontWeight:'bold',color:'white',background:'transparent'}}>Looking for Work?</h1>
            <p style={{fontSize:'20px',fontWeight:'400',color:'white',background:"transparent",width:'592.87px'}}>Subscribe to our Job Center for instant access to thousands of job opportunities in media.</p>
            <button className='lookforworkbtn'>Subscribe</button>
        </HeroBanner>
    </>
  )
}

export default LookForWork