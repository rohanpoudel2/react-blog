import { Link } from 'react-router-dom'
import './login.scss'

const Login = () => {
  return (
    <div className="login">
      <form className="loginForm">
        <span className="loginTitle">Login</span>
        <label>Email</label>
        <input className='loginInput' type="mail" placeholder='Enter Your Email ...' />
        <label>Password</label>
        <input className='loginInput' type="password" placeholder='Enter Your Password ...' />
        <Link className='link' to='/login'>
          <button className='loginButton'>Login</button>
        </Link>
      </form>
      <Link className='link' to='/register'>
        <button className='loginRegisterButton'>Register</button>
      </Link>
    </div>
  )
}

export default Login