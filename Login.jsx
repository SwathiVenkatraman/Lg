import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {

  function handle(e){
    e.preventDefault()
      var an1=document.getElementById("email").value;
      var an2=document.getElementById("password").value;


      if(an1==="" || an2===""){
          alert("Enter the fields")
      }
  }

  return (
    <div><div className="main-container">
    <div id="log-in" className="left-container log-in">
      <h1>So let's log in</h1>
      <div >
        <form action="index.html" className="signup-form">
          <input type="email" id="email" required placeholder="E-mail"/>
          <input type="password" id="password" required placeholder="Password"/>
          <button  onClick={handle} type="submit" id="submit" className="button log-in-btn">Login</button>
        </form>
      </div>
      <div className="login-link-container">
       <Link to='/sn'> <p  className="login-link">Don't have an account? Click here!</p></Link>
      </div>
    </div>

    <div className="right-container"></div>
  </div></div>
  )
}

export default Login
