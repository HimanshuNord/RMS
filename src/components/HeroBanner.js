  import React from 'react'
  import "../resources/HeroBanner.css"


  const HeroBanner = ({ height, width, border, children }) => {
    return (
        <div style={{height:`${height}`,width:`${width}`,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:`${border}`}} className='hero'>
          <div className='eclipse1'></div>
          <div className='eclipse4'></div>
          <div className='eclipse5'></div>
          {children}
        </div>
    )
  }

  export default HeroBanner