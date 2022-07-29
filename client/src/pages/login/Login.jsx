import axios from 'axios'
import { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import './login.scss'

const Login = () => {

  const userRef = useRef()
  const passwordRef = useRef()

  const { user, dispatch, isFetching } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'Login_Start' })
    try {
      const res = await axios.post('/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value
      })
      dispatch({ type: 'Login_Success', payload: res.data.msg })
    } catch (error) {
      dispatch({ type: 'Login_Failure' })
    }
  };

  console.log(user)

  return (
    <div className="login">
      <form className="loginForm" onSubmit={handleSubmit}>
        <span className="loginTitle">Login</span>
        <label>Username</label>
        <input className='loginInput' type="text" placeholder='Enter Your Username ...' ref={userRef} />
        <label>Password</label>
        <input className='loginInput' type="password" placeholder='Enter Your Password ...' ref={passwordRef} />
        <button type='submit' className='loginButton' disabled={isFetching}>Login</button>
      </form>
      <Link className='link' to='/register'>
        <button className='loginRegisterButton'>Register</button>
      </Link>
    </div>
  )
}

export default Login