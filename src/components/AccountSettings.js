import React from 'react'

import '../resources/AccountSettings.css'
import {Accsetbtn, Swapform} from '../util/function'
import { hover } from '@testing-library/user-event/dist/hover';




const AccountSettings = () => {
  const handleProfileClick = () => {
    Accsetbtn("btn-menu", "prof");
    Swapform("forms", "profform");
  };

  const handleContactClick = () => {
    Accsetbtn("btn-menu", "cont");
    Swapform("forms", "contform");
  };

  const handleSubscriptionClick = () => {
    Accsetbtn("btn-menu", "sub");
    Swapform("forms", "subform");
  };

  const handleChangePasswordClick = () => {
    Accsetbtn("btn-menu", "chpass");
    Swapform("forms", "chpassform");
  };
  const handleVerificatonClick = () => {
    Accsetbtn("btn-menu" , 'veri');
    Swapform("forms","veriform");
  }

  return (
    <>

        <div className='settings-wrap'>

            <div className='btn-menu'>
            <h1>Account Settings</h1>
                <button id='prof focus' onClick={handleProfileClick}><img src='https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png' height='27.09px' width='27.09px' alt='pfp'></img> Profile</button>
                <button id='cont' onClick={handleContactClick}><img src='https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png' height='27.09px' width='27.09px' alt='pfp'></img> Contact Info</button>
                <button id='sub' onClick={handleSubscriptionClick}><img src='https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png' height='27.09px' width='27.09px' alt='pfp'></img> Subscription</button>
                <button id='veri' onClick={handleVerificatonClick}><img src='https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png' height='27.09px' width='27.09px' alt='pfp'></img> Verification</button>
                <button id='chpass' onClick={handleChangePasswordClick}><img src='https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png' height='27.09px' width='27.09px' alt='pfp'></img> Change Password</button>
            </div>
            <div className='forms'>
                
                  <form className='profform hide'>
                    <h1>Profile</h1>
                    <div className='profpic'>
                      <img height={'124px'} src={require('../resources/profpng.png')} alt='profpic'></img>
                      <label>
                        <p>Upload Image in <b>jpg or png format</b></p>
                        <input type='file' style={{display: 'none'}} accept='.jpg , .png'></input>
                      </label>
                    </div>
                    <div className='allInputs'>
                      <p>First Name</p><input type='text' placeholder='Type here...'></input>
                      <p>Last Name</p><input type='text' placeholder='Type here...'></input>
                      <p>Workplace</p><select><option>Choose Station</option><option>option</option><option>option</option><option>option</option></select>
                      <p>Job title</p><input type='text' placeholder='Type here...'></input>
                      <p>Your address</p><input type='text' placeholder='Type here...'></input>
                    </div>
                    <div className='profbtn'>
                      <button className='save'>Save</button>
                      <button>Cancel</button>
                    </div>
                  </form>
                
                <form className='contform hide'>
                <h1>Contatc info</h1>
                  <div className='allInputs'>
                    <p>Email</p>
                    <input type='text'></input>
                    <p>Phone</p>
                    <input type='text'></input>
                    <p>Website</p>
                    <input type='text'></input>
                    <p>Linkedin</p>
                    <input type='text'></input>
                    <p>Twitter</p>
                    <input type='text'></input>
                    <p>Facebook</p>
                    <input type='text'></input>
                  </div>
                  <div className='profbtn'>
                      <button className='save'>Save</button>
                      <button>Cancel</button>
                    </div>
                </form>
                <div className='subform hide'>
                  <h1>Your account subscription</h1>
                  <div className='subwrap'>
                    <div className='div1'></div>
                    <div className='div2'><p className='p1'>1 Month</p><p className='p2'>subscription</p></div>
                    <div className='div3'><p className='p3'>$34.95/m</p><p className='p4'>Active until Dec 21, 2022</p></div>
                  </div>
                  <a href='#'>Change Plan or  Cancel Subscription</a>
                </div>
                <div className='veriform hide'>
                  <h1 >Request to verify account</h1>
                  <p style={{backgroundColor: 'white'}}>Please upload your paperwork so we can review your request.</p>
                  <div className='variwrap'>
                    <div className='box'>+</div>
                    <div className='box'>+</div>
                    <div className='box'>+</div>
                    <label style={{backgroundColor: 'white'}}>
                        <p style={{backgroundColor: 'white'}}>Upload Image in <b style={{backgroundColor: 'white'}}>jpg or png format</b></p>
                        <input type='file' style={{display: 'none'}} accept='.jpg , .png'></input>
                    </label>
                  </div>
                  <button className='veribtn'>Send Reqest</button>
                </div>
                <div className='chpassform hide'>
                  <h1>Security</h1>
                  <p style={{backgroundColor: "#fff"}}>Recovery email</p>  
                  <input type='text' placeholder='recovery@mail.com'></input>
                  <h1>Change Password</h1>
                  <form className='chpassinp'>
                    <p style={{backgroundColor: "#fff"}}>Current password</p>
                    <input type='password' placeholder='Type here...'></input>
                    <p style={{backgroundColor: "#fff"}}>New Password</p>
                    <input type='password' placeholder='Type here...'></input>
                    <p style={{backgroundColor: "#fff"}}>Confirm new password</p>
                    <input type='password' placeholder='Type here...'></input>
                    <div className='profbtn'>
                      <button className='save'>Save</button>
                      <button>Cancel</button>
                    </div>
                  </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default AccountSettings