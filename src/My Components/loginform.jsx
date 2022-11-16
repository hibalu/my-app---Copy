import React, {useState} from 'react'
import './loginform.css'

const Loginform = () => {

    const [popupstyle, showPopup] = useState("hide")

    const popup = () =>{
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)

    }
  return (
    <div className='cover'>
        <h1>Log In </h1>
        <input type="text" placeholder='username'/>
        <input tyep="password" placeholder='password'/>

        <div className='login-btn' onClick={popup}>Login</div>

        <p className='text'>Or Login using</p>

        <div className='alt-login'>
            <div className='facebook'></div>
            <div className='google' img src='google.png'></div>
        </div>
        <div className={popupstyle}/>
        <h3>Login Failed</h3>
        <p>Username or Password incorrect</p>



    </div>
  )
}

export default Loginform