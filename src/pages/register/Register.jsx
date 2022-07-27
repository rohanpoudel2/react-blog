import './register.scss'

const Register = () => {
  return (
    <div className="register">
      <form className="registerForm">
        <span className="registerTitle">Register</span>
        <label>Username</label>
        <input className='registerInput' type="mail" placeholder='Enter Your Username ...' />
        <label>Email</label>
        <input className='registerInput' type="mail" placeholder='Enter Your Email ...' />
        <label>Password</label>
        <input className='registerInput' type="password" placeholder='Enter Your Password ...' />
        <button className='registerButton'>Register</button>
      </form>
      <button className='registerLoginButton'>Login</button>
    </div>
  )
}

export default Register