import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import Post from './Post.js'


let Blogs = (props) => {



  // let handleClick = (evt) => {
  //   evt.preventDefault()
  //   console.log("click", evt.slug)
  // }

  const [blogs, setBlogs] = useState([]);

  console.log(props)

 let handleClick = (evt) => {
   evt.preventDefault();

   console.log(evt.target)
  
 }

  let blogList = props.data.blogs.map(blog => {
    return <div key={blog.id} className="blogCard" onClick={handleClick}  >
          <h3>{blog.title}</h3>
          <h3>{blog.postedOn}</h3>
          {console.log(blog)}
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
