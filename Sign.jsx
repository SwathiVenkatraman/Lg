import React,{useEffect} from 'react'
import './Login'
import { Link,useNavigate } from 'react-router-dom'

const Sign = () => {

  const navigate=useNavigate();
 
    function handle(e){
      e.preventDefault()
        var fn1=document.getElementById("first-name").value;
        var fn2=document.getElementById("last-name").value;
        var fn3=document.getElementById("email").value;
        var fn4=document.getElementById("password").value;
        var fn5=document.getElementById("agree-terms").checked;



        if(fn1==="" || fn2===""||fn3===""||fn4===""||fn5===false){
            alert("Enter the fields")
        }
        else{
          navigate("/")

        }
    }
    
  return (
    <div>
    <div className="main-container">
    <div id="sign-up" className="left-container sign-up">
      <h1>So let's sign up</h1>
      <div>
        <form action="index.html" className="signup-form">
          <input type="text" id="first-name"  placeholder="First Name"/>
          <input type="text" id="last-name"  placeholder="Last Name"/>
          <input type="email" id="email"  placeholder="E-mail"/>
          <input type="password" id="password" placeholder="Password"/>
          <div className="check">
            <input type="checkbox"  id="agree-terms"/>
            <label htmlFor="agree-terms">Agree to <a href="#">Terms & Conditions</a>
            </label>
          </div>
          <button onClick={handle} id="signup_submit" className="button sign-up-btn">Sign Up</button>
        </form>
      </div>
      <div className="signin-link-container">
        <Link to='/'><p  className="signin-link">ALready have an account? Click here!</p></Link>
      </div>

      
    </div>
    <div className="right-container"></div>
  </div>
    </div>
  )
}

export default Sign
