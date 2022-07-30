import './post.scss';
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'

const post = ({ post }) => {
  const PF = 'http://localhost:3001/images/'
  return (
    <div className="post">
      {
        post.photo && (
          <img
            className='postImg'
            src={PF + post.photo}
            alt="postImg"
          />
        )
      }
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <div key={nanoid()}>
              <span className="postCat">{c.name}</span>
            </div>
          ))}
        </div>
        <Link className='link' to={`/post/${post._id}`}>
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className='postDate'>{new Date(post.createdAt).toDateString()}</span>
        <p className="postDesc">
          {post.desc}
        </p>
      </div >
    </div >
  )
}

export default post