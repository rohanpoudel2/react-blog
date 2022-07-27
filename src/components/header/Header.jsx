import './header.scss'

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img
        className='headerImg'
        src="https://images.unsplash.com/photo-1463559830741-e117d53be7c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
        alt="headerIMG" />
    </div>
  )
}

export default Header