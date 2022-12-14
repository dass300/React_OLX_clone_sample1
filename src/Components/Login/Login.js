import React,{useState,useContext} from 'react';
import {FirebaseContext} from  '../../store/Context'
import Logo from '../../olx-logo.png';
import './Login.css';
import {useHistory} from 'react-router-dom'
function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()

  const handleLogin = (event)=>{
    event.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push('/')
    }).catch((error)=>{
    })


  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" alt="logo" src={Logo}></img>
        <form onSubmit = {handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />

          <input
            className="input"
            value={email}
            id="email"
            onChange={(event)=> setEmail(event.target.value)}
            name="email"
            defaultValue="email"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            id="password"
            onChange={(event)=> setPassword(event.target.value)}
            name="password"
            defaultValue="password"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
