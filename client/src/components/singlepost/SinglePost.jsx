import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './singlepost.scss'

const SinglePost = () => {

  const [post, setPost] = useState([]);

  const location = useLocation()

  const path = (location.pathname.split('/')[2]);

  const getPost = async () => {
    const res = await axios.get('/posts/' + path)
    setPost(res.data.msg)
  }

  useEffect(() => {
    getPost()
  }, [path]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (<img
          className='singlePostImg'
          src={post.photo}
          alt="singelPostImg"
        />)}

        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className='singlePostAuthor'>Author:
            <Link className='link' to={`/?user=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </span>
          <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className='singlePostDesc'>
          {post.desc}
        </p>
      </div>
    </div>
  )
}

export default SinglePost