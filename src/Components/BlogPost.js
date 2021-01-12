import React from 'react';
import blogdata from '../blog.json';

const BlogPost = (props) => {

    console.log("we made it")

  return(
    <div className="blogPostContainer">
        {/* <div className="blogHeader">
            <span className="blogCategory">{props.blog.category}</span>
                <h1 className="postTitle">{props.blog.title}</h1>
            <span className="postedBy">posted on {props.blog.postedOn} by {props.blog.author}</span>
        </div>
        <div className="postContent">
            <h3>{props.blog.title}</h3>
            <p>{props.blog.text}</p>
        </div> */}
    </div>
   )

 }

export default BlogPost