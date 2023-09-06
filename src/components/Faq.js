import React from 'react'
import { useNavigate } from 'react-router-dom'

const Faq = ({setSearch , search}) => {
    const navigate = useNavigate()
    const handleFaqSearch = () => { 
        navigate('/FaqSearch')
  } 
  return (
    <div>
        <div className='Faqhero'>
            <h1>How can we help?</h1>
            <span>
            <input type='text' onChange={(e) =>{
                setSearch(e.target.value.toLowerCase())
            }}
            placeholder='Search question or topic'
            value={search}
            />
            <button onClick={handleFaqSearch}>Search</button>
            </span>
        </div>
    </div>
  )
}

export default Faq