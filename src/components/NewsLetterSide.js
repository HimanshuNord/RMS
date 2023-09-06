import React from 'react'
import { Link } from 'react-router-dom'
import '../resources/NewsLetterSide.css'

const NewsLetterSide = ({ newsltrside }) => {
  return (
    <Link className='newsletter-card' to={`/News/${newsltrside.id}`}>
        <div className='newsLetterSide'>
            <img src={newsltrside.img} alt="img"  />
            <h3>{newsltrside.content}</h3>
        </div>
    </Link>
    
  )
}

export default NewsLetterSide