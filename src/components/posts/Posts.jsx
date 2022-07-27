import './posts.scss'
import Post from '../post/Post'
import { Link } from 'react-router-dom'

const Posts = () => {
  return (
    <div className="posts">
      <Link className='link' to='/post/123' >
        <Post />
      </Link>
      <Link className='link' to='/post/123' >
        <Post />
      </Link>
      <Link className='link' to='/post/123' >
        <Post />
      </Link>
      <Link className='link' to='/post/123' >
        <Post />
      </Link>
    </div>
  )
}

export default Posts