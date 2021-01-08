import React from 'react'


let Blogs = (props) => {

  console.log(props.data.blogs)

  let handleClick = (evt) => {
    evt.preventDefault()
    console.log("click", evt.target)
  }

  let blogList = props.data.blogs.map(blog => {
    return <div key ={blog.id} className="blogCard" onClick={handleClick}>
      <p>Title: {blog.title}</p>
      <p>Author: {blog.author}</p>
    </div>
  })

  return (
    <div className="blogMain">
      <div className="blogContainer">
        {blogList}
      </div>
    </div>
  );
}

export default Blogs;
