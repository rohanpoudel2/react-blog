import './topbar.scss'

const TopBar = () => {
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
          <li className='topListItem'>Home</li>
          <li className='topListItem'>About</li>
          <li className='topListItem'>Contact</li>
          <li className='topListItem'>Write</li>
          <li className='topListItem'>LogOut</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className='topImg'
          src="https://images.unsplash.com/photo-1585422548899-86a408bf6242?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          alt="usericon"
        />
        <i className="topIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default TopBar