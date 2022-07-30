import './settings.scss'
import SideBar from '../../components/sidebar/SideBar'
import { useContext } from 'react'
import { Context } from '../../context/Context'
import { useState } from 'react'
import axios from 'axios'


const Settings = () => {

  const [file, setFile] = useState(null)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [success, setSuccess] = useState(false)

  const { user, dispatch } = useContext(Context)
  const PF = 'http://localhost:3001/images/'

  const handleSubmit = async (e) => {

    e.preventDefault();
    dispatch({ type: 'Update_Start' })
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password
    }

    if (file) {
      const data = new FormData()
      const filename = Date.now() + file.name
      data.append("name", filename)
      data.append("file", file)
      updatedUser.profilePic = filename
      try {
        await axios.post('/upload', data)
        setSuccess(true)
      } catch (error) {
        console.log(error)
        setSuccess(false)
        dispatch({ type: 'Update_Failure' })
      }
    }
    try {
      const res = await axios.patch('/users/' + user._id, updatedUser)
      setSuccess(true)
      dispatch({ type: 'Update_Success', payload: res.data.msg })
    } catch (error) {
      console.log(error)
      setSuccess(false)
      dispatch({ type: 'Update_Failure' })
    }

  }

  const handleDelete = async () => {
    try {
      await axios.delete('/users/' + user._id, { data: { userId: user._id, username: user.username } })
      dispatch({ type: 'Delete_User' })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">
            Update Your Account
          </span>
          <span className="settingsDeleteTitle" onClick={handleDelete}>
            Delete Account
          </span>
        </div>
        <form className='settingsForm' onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt="profilepic"
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon  fa-solid fa-circle-user"></i>
            </label>
            <input type="file" id='fileInput' style={{ display: 'none' }} onChange={(e) => setFile(e.target.files[0])} />
          </div>
          <label>Username</label>
          <input type="text" placeholder={user.username} onChange={(e) => setUsername(e.target.value)} value={username} />
          <label>Email</label>
          <input type="mail" placeholder={user.email} onChange={(e) => setEmail(e.target.value)} value={email} />
          <label>Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
          <button className='settingsSubmit' type='submit'>Update</button>
          {success && <span style={{ color: 'green', textAlign: 'center', marginTop: '10px' }}>Profile has been updated...</span>}
        </form>
      </div>
      <SideBar />
    </div>
  )
}

export default Settings