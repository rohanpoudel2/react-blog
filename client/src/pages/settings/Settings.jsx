import './settings.scss'
import SideBar from '../../components/sidebar/SideBar'
const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">
            Update Your Account
          </span>
          <span className="settingsDeleteTitle">
            Delete Account
          </span>
        </div>
        <form className='settingsForm'>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.unsplash.com/photo-1585422548899-86a408bf6242?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt="profilepic"
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon  fa-solid fa-circle-user"></i>
            </label>
            <input type="file" id='fileInput' style={{ display: 'none' }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder='Rohan' />
          <label>Email</label>
          <input type="mail" placeholder='rohan@test.com' />
          <label>Password</label>
          <input type="password" />
          <button className='settingsSubmit'>Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  )
}

export default Settings