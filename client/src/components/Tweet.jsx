const Tweet = ({ blog }) => {
  return (
    <div>
      {blog.map((blog) => (
        <div key={blog.id} className="blog_text">
          <span>
            <Link className="user_acc_link" to="/other">
              <strong>Márk552</strong>
            </Link>
            <div className="follow_button_group">
              <button className="follow_button">
                <FontAwesomeIcon icon={faUserPlus} />
              </button>
              <button className="follow_button_text">Follow</button>
            </div>
            <p className="timestamp">
              <span>2024.01.26 16:28</span>
            </p>
          </span>
          <hr />
          <p>
            <h5>{blog.text}</h5>
          </p>
          <hr />
          <button className="like_button">
            <span>98</span> <FontAwesomeIcon icon={faHeart} />
          </button>
          <button className="dislike_button">
            <span>5</span> <FontAwesomeIcon icon={faHeartCrack} />
          </button>
          <button className="comment_button">
            <span>23</span> <FontAwesomeIcon icon={faComment} />
          </button>
        </div>
      ))}
    </div>
  )
}

export default Tweet
