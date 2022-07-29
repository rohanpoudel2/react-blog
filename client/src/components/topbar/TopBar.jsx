import './topbar.scss'
import { Link } from 'react-router-dom'

const TopBar = () => {
  const user = false;
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
          <li className='topListItem'><Link className='link' to='/logout'>
            {
              user && 'LogOut'
            }
          </Link></li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (<img
            className='topImg'
            src="https://images.unsplash.com/photo-1585422548899-86a408bf6242?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            alt="usericon"
          />) : (
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