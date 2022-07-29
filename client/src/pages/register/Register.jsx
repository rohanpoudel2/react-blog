import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './register.scss'

const Register = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false)
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password
      });
      res.data && window.location.replace('/login')
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }

  return (
    <div className="register">
      <form className="registerForm" onSubmit={handleSubmit}>
        <span className="registerTitle">Register</span>
        <label>Username</label>
        <input className='registerInput' type="text" placeholder='Enter Your Username ...' onChange={(e) => setUsername(e.target.value)} value={username} required />
        <label>Email</label>
        <input className='registerInput' type="mail" placeholder='Enter Your Email ...' onChange={(e) => setEmail(e.target.value)} value={email} required />
        <label>Password</label>
        <input className='registerInput' type="password" placeholder='Enter Your Password ...' onChange={(e) => setPassword(e.target.value)} value={password} required />
        <button type='Submit' className='registerButton'>Register</button>
        {error && <span style={{ color: 'red', marginTop: '10px' }}>Hmm... Something is wrong</span>}
      </form>
      <Link className='link' to='/login'>
        <button className='registerLoginButton'>Login</button>
      </Link>
    </div>
  )
}

export default Register