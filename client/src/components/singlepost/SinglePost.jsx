import axios from 'axios';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './singlepost.scss'

const SinglePost = () => {

  const [post, setPost] = useState([]);

  const location = useLocation()

  const path = (location.pathname.split('/')[2]);

  const getPost = async () => {
    const res = await axios.get('/posts/' + path)
    setPost(res.data.msg)
  }


  const PF = 'http://localhost:3001/images/'
  const { user } = useContext(Context)

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [updateMode, setupdateMode] = useState(false)

  const handleDelete = async () => {
    try {
      await axios.delete('/posts/' + path, { data: { username: user.username } })
      window.location.replace('/')
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdate = async () => {
    try {
      await axios.patch('/posts/' + path, { username: user.username, title, desc })
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getPost()
    setTitle(post.title)
    setDesc(post.desc)
  }, [path, updateMode]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (<img
          className='singlePostImg'
          src={PF + post.photo}
          alt="singelPostImg"
        />)}
        {
          updateMode ? <input type="text" value={title} className="singlePostTitleInput" onChange={(e) => setTitle(e.target.value)} autoFocus /> : (
            <h1 className="singlePostTitle">
              {post.title}
              {post.username === user?.username && (
                <div className="singlePostEdit">
                  <i className="singlePostIcon fa-solid fa-pen-to-square" onClick={() => setupdateMode(true)}></i>
                  <i className="singlePostIcon fa-solid fa-trash-can" onClick={handleDelete}></i>
                </div>
              )}
            </h1>
          )
        }

        <div className="singlePostInfo">
          <span className='singlePostAuthor'>Author:
            <Link className='link' to={`/?user=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </span>
          <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode ? (<textarea className='singlePostDescInput' value={desc} onChange={(e) => setDesc(e.target.value)} />) : (
          <p className='singlePostDesc'>
            {post.desc}
          </p>
        )}
        {updateMode && (
          <button className='singlePostButton' onClick={handleUpdate} >Update</button>
        )}
      </div>
    </div>
  )
}

export default SinglePost