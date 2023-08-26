  import React from 'react'
  import "../resources/HeroBanner.css"


  const HeroBanner = () => {
    return (
      <>
        <div className='hero'>
          <p>Find thousands of Ratings <br/> from real Journalists</p>
          <div className='search'>
            <select className='stations'> 
              <option value="tvnews">TV News</option> 
              <option value="radio">Radio</option> 
              <option value="youtube">Youtube</option> 
              <option value="publications">Publications</option> 
              <option value="podcasts">Podcasts</option> 
            </select>
            <input className='searchbox' type='text' placeholder='Search Sections...'></input>
            <button className='searchbtn'>search</button>
          </div>
          <button>Find a News Directior By Name </button>
        </div>
      </>
    )
  }

  export default HeroBanner