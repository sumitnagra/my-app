import React, { useState, useContext } from "react";
import  Notecontext  from './Notecontext.js'
import { useNavigate } from 'react-router-dom'

const SignUP = (props) => {
  const [user, setUser] = useState({ name: "", email: "", password: "" })
  const navigate = useNavigate()
  const a = useContext(Notecontext);
  const host="http://localhost:8080"
  const signup = async (user) => {
    const responce = await fetch(`${host}/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: user.name, email: user.email, password: user.password })
    })

    const json = await responce.json();
    
    if(json){
      localStorage.setItem('auth-token', json.jwtData)
      navigate("/login")
      props.showAlert('Account created successfully','success')
    }
  }

  const handlesubmit = (e) => {
    e.preventDefault()
    signup(user)
  }
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  return (<>
    <form className='container' style={{ marginTop: "55px" }} onSubmit={handlesubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
        <input type="text" name='name' className="form-control" onChange={onChange} id="exampleInputPassword2" required minLength={3}/>
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={onChange} required/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" name='password' className="form-control" onChange={onChange} id="exampleInputPassword1" required minLength={5}/>
      </div>
      <button type="submit" className="btn btn-success">Submit</button>
    </form>

  </>)
}

export default SignUP;