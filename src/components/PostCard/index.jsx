export const PostCart = ({ title, cover, body }) => {
  return (
    <>
      <div className="post">
        <img src={cover} alt={title} />
        <div className='post-content'>
          <h1>{title}</h1>
          <p> {body}</p>
        </div>
      </div>
    </>
  )
}