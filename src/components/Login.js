import React from 'react'
import '../resources/Login.css'
import { swapbtn } from '../util/function';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/Register")
  }
  const handleEmployeeClick = () => {
    swapbtn("swapbtn", "employee");
  };
  const handleNewsroomClick = () => {
      swapbtn("swapbtn", "newsroom")
  }
  return (
    <>
    <div className='logincard'>
      <div className='banner'>
        <div className='logos'>
        <svg width="179" height="47" viewBox="0 0 179 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M16.2698 17.0744L21.9004 23.3059H19.7416L14.1778 17.0744H11.5072V23.3059H9.79354V8.75095H16.5369C17.2268 8.75095 17.8722 8.83997 18.4508 9.04026C19.0295 9.24056 19.5413 9.50762 19.9642 9.88596C20.387 10.2643 20.7209 10.6872 20.9434 11.2213C21.166 11.7331 21.2772 12.2895 21.2772 12.9127C21.2772 13.3578 21.2105 13.8251 21.0547 14.3148C20.8989 14.8044 20.6318 15.2495 20.2535 15.6501C19.8752 16.0729 19.3855 16.4067 18.7624 16.6738C18.1393 16.9409 17.3826 17.0967 16.5146 17.0967H16.2698V17.0744ZM33.2283 16.3622V23.3281H31.6259V21.7035C31.1808 22.2821 30.6244 22.7495 29.9345 23.1056C29.2446 23.4617 28.4657 23.6174 27.5977 23.6174C26.4405 23.6174 25.5057 23.3059 24.7713 22.705C24.0591 22.1041 23.7031 21.3029 23.7031 20.3459C23.7031 19.3444 24.0814 18.5432 24.8381 17.9201C25.5948 17.297 26.6408 16.9854 28.0206 16.9854H31.6259V16.4735C31.6259 16.0507 31.5369 15.6278 31.3589 15.2272C31.1808 14.8044 30.8692 14.4705 30.4464 14.2035C30.0013 13.9364 29.4894 13.8029 28.8885 13.8029C28.0873 13.8029 27.3974 14.0032 26.8633 14.3815C26.3292 14.7599 25.9954 15.294 25.8841 15.9616L24.304 15.6056C24.482 14.6263 24.9716 13.8474 25.8173 13.2465C26.6408 12.6456 27.6422 12.334 28.7995 12.334C30.1571 12.334 31.2253 12.6901 32.0265 13.38C32.8277 14.0922 33.2283 15.0937 33.2283 16.3622ZM39.2372 13.9809V19.8563C39.2372 20.5462 39.4153 21.0803 39.7713 21.4587C40.1274 21.837 40.617 22.0373 41.1957 22.0373C41.4627 22.0373 41.7743 21.9706 42.1304 21.8593C42.4642 21.7257 42.7758 21.57 43.0429 21.3919L43.577 22.7717C42.7758 23.3281 41.9301 23.6174 41.1067 23.6174C40.0161 23.6174 39.1482 23.3059 38.525 22.6605C37.8796 22.0373 37.5681 21.1249 37.5681 19.9676V13.9809H35.2313V12.6011H37.5681V9.19605H39.2372V12.6011H43.0651V13.9809H39.2372ZM52.5904 12.7124C53.2135 12.9572 53.7699 13.3355 54.2595 13.8029C54.7491 14.2702 55.1052 14.8489 55.3945 15.5165C55.6616 16.1842 55.8174 16.8964 55.8619 17.6753V18.2762H46.6705C46.6927 18.7213 46.804 19.1441 46.9598 19.6115C47.1156 20.0566 47.3604 20.4795 47.6942 20.8355C48.028 21.2139 48.4286 21.5032 48.9182 21.7703C49.4079 22.0151 49.942 22.1486 50.5206 22.1486C51.3218 22.1486 52.0562 21.9706 52.6794 21.5922C53.3025 21.2139 53.8144 20.6352 54.1705 19.8341L55.6393 20.1901C55.2165 21.2806 54.5711 22.1263 53.6809 22.7272C52.7907 23.3059 51.7447 23.6174 50.5206 23.6174C49.8307 23.6174 49.1408 23.4839 48.4954 23.2168C47.8277 22.9498 47.2491 22.5714 46.7372 22.0818C46.2254 21.5922 45.8248 20.9913 45.5354 20.2792C45.2461 19.567 45.0903 18.8103 45.0903 18.0091C45.0903 17.4082 45.1794 16.7628 45.3797 16.1174C45.58 15.472 45.936 14.8266 46.4702 14.2035C47.0043 13.5803 47.6497 13.113 48.4064 12.8014C49.163 12.4898 49.9197 12.334 50.6319 12.334C51.2773 12.334 51.945 12.4676 52.5904 12.7124ZM62.1601 8.75095L67.0563 17.9869L71.9524 8.75095H75.4465V23.3281H71.9747V15.561L67.8797 23.3281H66.2328L62.1156 15.5165V23.3281H58.6438V8.75095H62.1601ZM54.1705 17.0521C54.0815 16.4067 53.8589 15.8281 53.5251 15.3162C53.1912 14.8044 52.7461 14.4038 52.212 14.159C51.6779 13.9142 51.1215 13.7806 50.5874 13.7806C50.1868 13.7806 49.6972 13.8696 49.1408 14.0699C48.5844 14.248 48.0503 14.6041 47.6052 15.1382C47.1378 15.6501 46.8485 16.2955 46.7372 17.0521H54.1705ZM18.7401 14.8044C19.2965 14.3148 19.5858 13.6916 19.5858 12.9127C19.5858 12.1337 19.2965 11.4883 18.7401 11.021C18.1838 10.5314 17.4493 10.3088 16.5369 10.3088H11.5072V15.5165H16.5369C17.4493 15.5165 18.1838 15.2717 18.7401 14.8044ZM27.9983 18.2762C27.1526 18.2762 26.5072 18.4542 26.0176 18.8326C25.528 19.2109 25.3054 19.7005 25.3054 20.2792C25.3054 20.5462 25.3722 20.8133 25.528 21.1249C25.6838 21.4364 25.9731 21.6812 26.3959 21.9038C26.8188 22.1041 27.3084 22.2154 27.8425 22.2154C28.3544 22.2154 28.8885 22.1041 29.4672 21.8815C30.0458 21.659 30.5577 21.2806 30.9805 20.7243C31.4034 20.1679 31.6259 19.5225 31.6259 18.8326V18.2762H27.9983ZM90.9139 12.3785L96.2329 0.00463867H6.76683C3.58433 0.00463867 0.980469 2.6085 0.980469 5.791V28.4246C0.980469 31.6071 3.58433 34.2109 6.76683 34.2109H77.0711L80.1868 27.0002L81.945 22.9275L77.4272 12.3563H81.1661L83.7477 18.7213L86.5073 12.3563H90.9139V12.3785Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M164.467 12.4453C165.046 12.2005 165.669 12.0892 166.337 12.0892C166.96 12.0892 167.539 12.2005 168.05 12.4231C168.562 12.6456 169.03 12.9572 169.408 13.3578C169.786 13.7584 170.076 14.248 170.276 14.8044C170.476 15.3607 170.588 15.9839 170.588 16.6516V23.3504H167.138V17.3637C167.138 17.0521 167.071 16.7406 166.96 16.4067C166.849 16.0729 166.626 15.7836 166.337 15.561C166.025 15.3385 165.669 15.205 165.269 15.205C164.556 15.205 164 15.4498 163.599 15.9616C163.199 16.4735 162.998 17.2302 162.998 18.2539V23.3281H159.527V12.4231H162.998V13.4691C163.399 13.0017 163.889 12.6679 164.467 12.4453ZM148.844 12.5343C149.579 12.2673 150.358 12.1115 151.181 12.1115C151.76 12.1115 152.383 12.2005 153.05 12.3785C153.718 12.5566 154.386 12.9127 155.076 13.4245C155.766 13.9364 156.277 14.6041 156.633 15.4053C156.99 16.2064 157.168 17.0076 157.168 17.8311C157.168 18.6545 157.012 19.4335 156.7 20.1456C156.389 20.8578 155.944 21.4809 155.387 21.9928C154.831 22.5047 154.185 22.9053 153.473 23.1723C152.739 23.4394 151.982 23.5952 151.181 23.5952C150.58 23.5952 149.957 23.5062 149.289 23.3281C148.622 23.1501 147.932 22.794 147.242 22.2821C146.552 21.7703 146.04 21.1026 145.684 20.3014C145.328 19.5002 145.15 18.6768 145.15 17.8533C145.15 17.0299 145.306 16.251 145.617 15.5388C145.929 14.8266 146.374 14.2257 146.93 13.6916C147.442 13.202 148.087 12.8014 148.844 12.5343ZM139.096 23.3281V12.4231H142.568V23.3281H139.096ZM127.724 15.1605V12.4008H129.705V9.19605H133.176V12.4231H136.403V15.1827H133.176V18.9661C133.176 20.0343 133.666 20.5462 134.623 20.5462C134.846 20.5462 135.113 20.5017 135.424 20.4127C135.736 20.3237 135.981 20.2346 136.203 20.1011L137.004 22.8385C136.003 23.3726 135.001 23.6397 134.022 23.6397C132.642 23.6397 131.574 23.2614 130.817 22.5269C130.061 21.7703 129.682 20.702 129.682 19.2999V15.1605H127.724ZM118.688 12.5566C119.378 12.2228 120.224 12.067 121.181 12.067C121.938 12.067 122.627 12.156 123.251 12.3563C123.874 12.5343 124.408 12.8237 124.831 13.202C125.276 13.5803 125.61 14.0254 125.832 14.5818C126.055 15.1159 126.188 15.7391 126.188 16.429V23.3504H122.85V22.5492C121.96 23.3059 120.869 23.6842 119.579 23.6842C118.354 23.6842 117.375 23.3504 116.641 22.705C115.906 22.0596 115.528 21.1916 115.528 20.1234C115.528 19.0551 115.929 18.1872 116.73 17.564C117.531 16.9186 118.644 16.607 120.068 16.607H122.85V16.3845C122.85 15.9394 122.694 15.561 122.405 15.294C122.116 15.0047 121.737 14.8711 121.292 14.8711C120.224 14.8711 119.623 15.3385 119.467 16.251L116.173 15.5833C116.329 14.9379 116.596 14.3593 117.019 13.8696C117.442 13.3133 117.998 12.8904 118.688 12.5566ZM101.952 9.55213C103.021 10.3088 103.688 11.3326 103.978 12.6456L100.461 13.3578C100.328 12.7124 100.016 12.2005 99.5488 11.8444C99.0592 11.4883 98.5251 11.3103 97.9242 11.3103C97.3455 11.3103 96.8782 11.4438 96.4998 11.7331C96.1438 12.0225 95.9657 12.3563 95.9657 12.7791C95.9657 13.0907 96.0547 13.3355 96.2328 13.5581C96.4108 13.7584 96.7224 13.9142 97.1452 14.0032L100.172 14.6708C101.463 14.9602 102.442 15.4498 103.132 16.1619C103.822 16.8741 104.156 17.7866 104.156 18.9216C104.156 19.656 104 20.3237 103.688 20.9246C103.377 21.5254 102.932 22.0151 102.375 22.4157C101.819 22.8163 101.173 23.1056 100.461 23.3281C99.7269 23.5284 98.9702 23.6397 98.1467 23.6397C97.3455 23.6397 96.5666 23.5507 95.8322 23.3504C95.0978 23.1501 94.4524 22.8608 93.8737 22.4824C93.2951 22.1041 92.8277 21.6367 92.4716 21.0803C92.1156 20.524 91.8708 19.9008 91.7817 19.2109L95.4761 18.4987C95.6096 19.0329 95.8322 19.478 96.1438 19.8118C96.4553 20.1456 96.8114 20.3682 97.212 20.4795C97.6126 20.5907 97.9909 20.6352 98.3248 20.6352C98.9702 20.6352 99.5043 20.5017 99.8826 20.2124C100.283 19.9453 100.461 19.567 100.461 19.1219C100.461 18.7881 100.35 18.521 100.15 18.2984C99.9494 18.0981 99.5933 17.9424 99.1037 17.8311L96.0547 17.1857C93.4509 16.5848 92.1378 15.1827 92.1378 12.9572C92.1378 11.5551 92.6719 10.4423 93.7402 9.6189C94.8084 8.79546 96.1883 8.37261 97.9019 8.37261C99.5488 8.41712 100.884 8.79546 101.952 9.55213ZM107.383 9.19605H110.854V12.4231H114.081V15.1827H110.854V18.9661C110.854 20.0343 111.344 20.5462 112.301 20.5462C112.524 20.5462 112.791 20.5017 113.102 20.4127C113.414 20.3237 113.659 20.2346 113.881 20.1011L114.682 22.8385C113.681 23.3726 112.679 23.6397 111.7 23.6397C110.32 23.6397 109.252 23.2614 108.495 22.5269C107.739 21.7703 107.36 20.702 107.36 19.2999V15.1605H105.38V12.4008H107.36V9.19605H107.383ZM122.494 20.1234C122.739 19.8118 122.85 19.4557 122.85 19.0106V18.7658H120.446C120.024 18.7658 119.69 18.8771 119.423 19.0774C119.156 19.2777 119.022 19.567 119.022 19.9008C119.022 20.2346 119.156 20.5017 119.445 20.7243C119.734 20.9246 120.09 21.0358 120.535 21.0358C120.914 21.0358 121.27 20.9691 121.604 20.8133C121.96 20.6575 122.249 20.4349 122.494 20.1234ZM148.466 17.8533C148.466 18.4542 148.622 18.9884 148.933 19.4557C149.245 19.9231 149.601 20.2346 150.024 20.4127C150.447 20.5907 150.825 20.6798 151.159 20.6798C151.47 20.6798 151.849 20.5907 152.249 20.4127C152.65 20.2346 153.006 19.9231 153.317 19.4557C153.629 18.9884 153.785 18.4542 153.785 17.8533C153.785 17.0521 153.518 16.3622 152.984 15.8281C152.45 15.294 151.849 15.0269 151.136 15.0269C150.691 15.0269 150.268 15.1382 149.823 15.383C149.378 15.6056 149.044 15.9616 148.8 16.4067C148.599 16.8741 148.466 17.3637 148.466 17.8533ZM80.8544 34.2109L75.6689 46.2288L90.0236 34.2109H172.991C176.174 34.2109 178.777 31.6071 178.777 28.4246V5.791C178.777 2.6085 176.174 0.00463867 172.991 0.00463867H95.5874L90.2461 12.3785L83.9479 27.0225L80.8544 34.2109Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M140.854 5.43481L140.164 7.52681H137.983L139.742 8.81761L139.074 10.9096L140.854 9.59654L142.613 10.9096L141.945 8.81761L143.725 7.52681H141.522L140.854 5.43481Z" fill="#194D79"/>
</svg>

        </div>
        <h1>Find thousands of<br/>Ratings from real<br/>Journalists</h1>
      </div>
      <div className='details'>
        <div className='swapbtn'> 
          <button className='employee active focus' onClick={handleEmployeeClick}>Employee</button>
          <button className='newsroom' onClick={handleNewsroomClick}>Newsroom</button>
          </div>
          <form className='emplpyeelog show'>
            <p style={{fontSize:'16px',fontWeight:'400'}}>Username</p>
            <input style={{paddingLeft:'20px'}} type='text' placeholder='Type your username here...'></input>
            <p style={{fontSize:'16px',fontWeight:'400'}}>Password</p>
            <input style={{paddingLeft:'20px'}} type='password' placeholder='Type your password here...'></input>
            <div className='btn'><input className='logbtn' type='submit' value='Login'/> <a className='loglink' href='/'>Forgot password?</a></div>
            <p>Don't have any account?<button onClick={handleRedirect} style={{border:"none",color:"#89C400",background:'white',textDecoration:'underline'}}>Register here</button></p>          </form>
          <form className='newsroomlog hide'>
            <p>Station's name</p>
            <input style={{paddingLeft:'20px'}} type='text' placeholder='Type your username here...'></input>
            <p>Password</p>
            <input style={{paddingLeft:'20px'}} type='password' placeholder='Type your password here...'></input>
            <div className='btn'><input className='logbtn' type='submit' value='Login'/> <a className='loglink' href='/'>Forgot password?</a></div>
            <p>Don't have any account?<button onClick={handleRedirect} style={{border:"none",color:"#89C400",background:'white',textDecoration:'underline'}}>Register here</button></p>
          </form>
        
      </div>
    </div>
    </>
  )
}

export default Login