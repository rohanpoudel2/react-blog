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
        <button className='loginButton'>Login</button>
      </form>
      <button className='loginRegisterButton'>Register</button>
    </div>
  )
}

export default Login