import React from 'react'
import {Link} from 'react-router-dom'
import '../resources/RMSShopCard.css'
const RMSShopCard = ({ rmsshop }) => {
  return (
    <Link className='rmsshop-card' to={`/Shop/Product/${rmsshop.id}`}>
        <div className='rmsshophome'>
            <img src={rmsshop.img} alt="img"  />
            <div style={{background:'transparent',width:'100%',display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h3 style={{width:'267.87px'}}>{rmsshop.content}</h3>
            <p style={{width:'267.87px' , color:'#89C400',fontSize:'16px',fontWeight:'400'}}>{rmsshop.price}</p>
            </div>
            <div style={{width:'100%',display:'flex', justifyContent:'space-evenly', background:'transparent'}}>
              <button className='Shopcardbtn'>View Details</button>
              <button className='Shopcardbtn save'>Add to Cart</button>
            </div>
        </div>
    </Link>
  )
}

export default RMSShopCard