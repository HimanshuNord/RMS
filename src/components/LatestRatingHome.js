import React, { useState } from 'react'
import '../resources/LatestRatingHome.css'
import 'remixicon/fonts/remixicon.css'
import { ratingNews, ratingRecomend, ratingWorker } from '../util/function'


const LatestRatingHome = () => {
    const handleNewsBox1 = () => {
        ratingNews(1)
    }
    const handleNewsBox2 = () => {
        ratingNews(2)
    }
    const handleNewsBox3 = () => {
        ratingNews(3)
    }
    const handleNewsBox4 = () => {
        ratingNews(4)
    }
    const handleNewsBox5 = () => {
        ratingNews(5)
    }   
    const handleWorkerBox1 = () => {
        ratingWorker(1)
    }
    const handleWorkerBox2 = () => {
        ratingWorker(2)
    }
    const handleWorkerBox3 = () => {
        ratingWorker(3)
    }
    const handleWorkerBox4 = () => {
        ratingWorker(4)
    }
    const handleWorkerBox5 = () => {
        ratingWorker(5)
    }
    const handleRatingBox1 = () => {
        ratingRecomend(1)
    }
    const handleRatingBox2 = () => {
        ratingRecomend(2)
    }
    const handleRatingBox3 = () => {
        ratingRecomend(3)
    }
    const handleRatingBox4 = () => {
        ratingRecomend(4)
    }
    const handleRatingBox5 = () => {
        ratingRecomend(5)
    }
    const [verified , setVerified] = useState(false)
  return (
    <div>
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
            <div className='rating-parent-main' style={{background:"transparent"}}>
                <p style={{fontSize:'14px',color:'#828282',fontWeight:'light',background:'transparent',margin:'0'}}>Newsroom rating</p>
                <div className='rating-boxparent newsroomrating'>
                    <button onClick={handleNewsBox1} className='rating-box box-1 addRating'></button>
                    <button onClick={handleNewsBox2} className='rating-box box-2 addRating'></button>
                    <button onClick={handleNewsBox3} className='rating-box box-3 addRating'></button>
                    <button onClick={handleNewsBox4} className='rating-box box-4 addRating'></button>
                    <button onClick={handleNewsBox5} className='rating-box box-5 removeRating'></button>
                </div>
                <h1 style={{fontWeight:'bold',fontSize:'16px',background:'transparent',margin:'0'}}>This newsroom is friendly</h1>
            </div>
            <div className='rating-parent-main' style={{background:"transparent"}}>
                <p style={{fontSize:'14px',color:'#828282',fontWeight:'light',background:'transparent',margin:'0'}}>Coworkers rating</p>
                <div className='rating-boxparent coworkersrating'>
                    <button onClick={handleWorkerBox1} className='rating-box box-1 addRating'></button>
                    <button onClick={handleWorkerBox2} className='rating-box box-2 addRating'></button>
                    <button onClick={handleWorkerBox3} className='rating-box box-3 addRating'></button>
                    <button onClick={handleWorkerBox4} className='rating-box box-4 addRating'></button>
                    <button onClick={handleWorkerBox5} className='rating-box box-5 addRating'></button>    
                </div>
                <h1 style={{fontWeight:'bold',fontSize:'16px',background:'transparent',margin:'0'}}>Super friendly</h1>
            </div>
            <div className='rating-parent-main' style={{background:"transparent"}}>
                <p style={{fontSize:'14px',color:'#828282',fontWeight:'light',background:'transparent',margin:'0'}}>Would recommend working here?</p>
                <div className='rating-boxparent recomendrating'>
                    <button onClick={handleRatingBox1} className='rating-box box-1 addRating'></button>
                    <button onClick={handleRatingBox2} className='rating-box box-2 addRating'></button>
                    <button onClick={handleRatingBox3} className='rating-box box-3 addRating'></button>
                    <button onClick={handleRatingBox4} className='rating-box box-4 removeRating'></button>
                    <button onClick={handleRatingBox5} className='rating-box box-5 removeRating'></button>
                </div>
                <h1 style={{fontWeight:'bold',fontSize:'16px',background:'transparent',margin:'0'}}>I'm not sure</h1>
            </div>
        </div>
        <div className='tags'>
            <p style={{fontSize:'14px',color:'#828282',fontWeight:'light',background:'transparent'}}>Tags: </p>
            <div className='actual-tags'>
                <span className='the-tag'>Organized</span>
                <span className='the-tag'>Positive</span>
                <span className='the-tag'>Fun</span>
            </div>
        </div>
        <span className='rect'></span>
        <div className='ratingbtm'>
            <div style={{background:'transparent'}}>
                <button style={{color:'#89C400'}} className='Likerep'>
                    <i class="ri-thumb-up-fill"></i>
                    &nbsp;
                    Liked
                </button>
                <button style={{color:'#828282'}} className='Likerep'>
                    <i class="ri-flag-fill"></i>
                    &nbsp;
                    Report
                </button>
            </div>
            <span style={{display:'flex',alignItems:'center',textAlign:'center',background:'transparent',justifyContent:'space-between'}}><p style={{margin:'0',background:'transparent',fontSize:'14px',color:'#828282'}}>submitted: 03-24-21</p></span>
        </div>
        <div className='coment'>
            <img style={{background:'white',height:'47.53px',width:'57.53px'}} src={require('../resources/abcnewslogo.png')}></img>
            <div className='coment-value'>
                <p style={{fontSize:'16px',margin:'15.2px 28.94px 7px 21px'}}>Thank you for the review, we really appreciate it and we will try to be even better. Thank you!</p>
                <p style={{fontSize:'14px',color:'#828282',margin:'0 0 0 21px'}}>2 weeks ago</p>
            </div>
        </div>
    </div>
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
            <div className='rating-parent-main' style={{background:"transparent"}}>
                <p style={{fontSize:'14px',color:'#828282',fontWeight:'light',background:'transparent',margin:'0'}}>Newsroom rating</p>
                <div className='rating-boxparent newsroomrating'>
                    <button onClick={handleNewsBox1} className='rating-box box-1 addRating'></button>
                    <button onClick={handleNewsBox2} className='rating-box box-2 addRating'></button>
                    <button onClick={handleNewsBox3} className='rating-box box-3 addRating'></button>
                    <button onClick={handleNewsBox4} className='rating-box box-4 addRating'></button>
                    <button onClick={handleNewsBox5} className='rating-box box-5 removeRating'></button>
                </div>
                <h1 style={{fontWeight:'bold',fontSize:'16px',background:'transparent',margin:'0'}}>This newsroom is friendly</h1>
            </div>
            <div className='rating-parent-main' style={{background:"transparent"}}>
                <p style={{fontSize:'14px',color:'#828282',fontWeight:'light',background:'transparent',margin:'0'}}>Coworkers rating</p>
                <div className='rating-boxparent coworkersrating'>
                    <button onClick={handleWorkerBox1} className='rating-box box-1 addRating'></button>
                    <button onClick={handleWorkerBox2} className='rating-box box-2 addRating'></button>
                    <button onClick={handleWorkerBox3} className='rating-box box-3 addRating'></button>
                    <button onClick={handleWorkerBox4} className='rating-box box-4 addRating'></button>
                    <button onClick={handleWorkerBox5} className='rating-box box-5 addRating'></button>    
                </div>
                <h1 style={{fontWeight:'bold',fontSize:'16px',background:'transparent',margin:'0'}}>Super friendly</h1>
            </div>
            <div className='rating-parent-main' style={{background:"transparent"}}>
                <p style={{fontSize:'14px',color:'#828282',fontWeight:'light',background:'transparent',margin:'0'}}>Would recommend working here?</p>
                <div className='rating-boxparent recomendrating'>
                    <button onClick={handleRatingBox1} className='rating-box box-1 addRating'></button>
                    <button onClick={handleRatingBox2} className='rating-box box-2 addRating'></button>
                    <button onClick={handleRatingBox3} className='rating-box box-3 addRating'></button>
                    <button onClick={handleRatingBox4} className='rating-box box-4 removeRating'></button>
                    <button onClick={handleRatingBox5} className='rating-box box-5 removeRating'></button>
                </div>
                <h1 style={{fontWeight:'bold',fontSize:'16px',background:'transparent',margin:'0'}}>I'm not sure</h1>
            </div>
        </div>
        <div className='tags'>
            <p style={{fontSize:'14px',color:'#828282',fontWeight:'light',background:'transparent'}}>Tags: </p>
            <div className='actual-tags'>
                <span className='the-tag'>Organized</span>
                <span className='the-tag'>Positive</span>
                <span className='the-tag'>Fun</span>
            </div>
        </div>
        <span className='rect'></span>
        <div className='ratingbtm'>
            <div style={{background:'transparent'}}>
                <button style={{color:'#89C400'}} className='Likerep'>
                    <i class="ri-thumb-up-fill"></i>
                    &nbsp;
                    Liked
                </button>
                <button style={{color:'#828282'}} className='Likerep'>
                    <i class="ri-flag-fill"></i>
                    &nbsp;
                    Report
                </button>
            </div>
            <span style={{display:'flex',alignItems:'center',textAlign:'center',background:'transparent',justifyContent:'space-between'}}><p style={{margin:'0',background:'transparent',fontSize:'14px',color:'#828282'}}>submitted: 03-24-21</p></span>
        </div>
        <div className='coment'>
            <img style={{background:'white',height:'47.53px',width:'57.53px'}} src={require('../resources/abcnewslogo.png')}></img>
            <div className='coment-value'>
                <p style={{fontSize:'16px',margin:'15.2px 28.94px 7px 21px'}}>Thank you for the review, we really appreciate it and we will try to be even better. Thank you!</p>
                <p style={{fontSize:'14px',color:'#828282',margin:'0 0 0 21px'}}>2 weeks ago</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default LatestRatingHome