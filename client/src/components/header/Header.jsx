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
        src='https://images.unsplash.com/photo-1611605645802-c21be743c321?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
        alt="headerIMG" />
    </div>
  )
}

export default Header