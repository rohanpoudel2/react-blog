import './post.scss'

const post = () => {
  return (
    <div className="post">
      <img
        className='postImg'
        src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
        alt="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit</span>
        <hr />
        <span className='postDate'>1 hour ago</span>
        <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio dolorem veniam
          nostrum similique ipsum minima corrupti enim suscipit voluptates labore fuga.
          Asperiores, quam accusantium atque ratione quia id. Modi.
        </p>
      </div>
    </div>
  )
}

export default post