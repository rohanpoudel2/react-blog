import './topbar.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../context/Context'

const TopBar = () => {

  const { user, dispatch } = useContext(Context)

  const handleLogout = () => {
    dispatch({ type: "Logout" })
  }

  const PF = 'http://localhost:3001/images/'

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className='topList'>
          <li className='topListItem'><Link className='link' to='/'>Home</Link></li>
          <li className='topListItem'><Link className='link' to='/about'>About</Link></li>
          <li className='topListItem'><Link className='link' to='/contact'>Contact</Link></li>
          <li className='topListItem'><Link className='link' to='/write'>Write</Link></li>
          <li className='topListItem' onClick={handleLogout}>
            {
              user && 'LogOut'
            }
          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <Link to='/settings'>
              <img
                className='topImg'
                src={PF + user.profilePic}
                alt="usericon"
              />
            </Link>) : (
            <>
              <Link className='link' to='/login'>Login</Link>
            </>
          )
        }

        <i className="topIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default TopBar